// Variant renderer — produces the 6 angle-themed websites.
//
// Each variant has 3 page types: home, about, service (one per cluster).
// All variants share the same chrome (header / footer / sticky CTA / Tidio per
// brief 4). Service pages render the matched LP via the renderLP() machinery
// from lp-template.js, with a small variant-context banner above.

(function () {
  const CLUSTER_SLUG = {
    harassment: 'harassment',
    lawsuit: 'lawsuit',
    creditCard: 'credit-card',
    paydayLoan: 'payday-loan',
    medicalDebt: 'medical-debt',
    garnishment: 'garnishment',
  };

  function getVariant(slug) {
    return window.VARIANTS && window.VARIANTS[slug];
  }

  function clusterLabel(k) {
    return (window.CredoNav && window.CredoNav.CLUSTERS[k] && window.CredoNav.CLUSTERS[k].label) || k;
  }

  // ---------- Shared chrome (header / footer / mobile overlay) ----------

  // Logo image as on the landing pages (2 Oct 2026). data-asset-base on <html> points to the site root.
  function logoImg() {
    const root = document.documentElement.getAttribute('data-asset-base') || '';
    return `<img src="${root}assets/skin/credo-logo.png" alt="Credo Legal">`;
  }

  function renderHeader(variant, base, currentCluster) {
    const CO = window.CredoNav.CLUSTER_ORDER;
    return `
      <header class="site-header">
        <a href="${base}index.html" class="logo">${logoImg()}</a>
        <nav class="desktop-nav">
          <a href="${base}index.html">Home</a>
          <div class="dropdown">
            <a class="dropdown-trigger" tabindex="0">Services ▾</a>
            <div class="dropdown-menu">
              ${CO.map(k => `<a href="${base}services/${CLUSTER_SLUG[k]}.html"${k===currentCluster?' class="active"':''}>${clusterLabel(k)}</a>`).join('')}
            </div>
          </div>
          <a href="${base}about.html">About</a>
        </nav>
        <div class="header-actions">
          <a href="#form-top" class="book-btn">Free Case Review</a>
          <button id="menu-btn" class="menu-btn" aria-label="Open menu">☰</button>
        </div>
      </header>
    `;
  }

  function renderMobileOverlay(base) {
    const CO = window.CredoNav.CLUSTER_ORDER;
    return `
      <div id="nav-overlay" class="nav-overlay">
        <div class="nav-overlay-header">
          <div></div>
          <div class="nav-overlay-title">Menu</div>
          <button class="close" aria-label="Close">×</button>
        </div>
        <ul class="nav-list">
          <li><a class="row" href="${base}index.html"><span class="label">Home</span><span class="chev">›</span></a></li>
          <li class="row overview-header">Services</li>
          ${CO.map(k => `<li><a class="row sub-item" href="${base}services/${CLUSTER_SLUG[k]}.html"><span class="label">${clusterLabel(k)}</span><span class="chev">›</span></a></li>`).join('')}
          <li><a class="row" href="${base}about.html"><span class="label">About</span><span class="chev">›</span></a></li>
        </ul>
      </div>
    `;
  }

  function renderFooter(base) {
    return `
      <footer class="site-footer">
        <div class="footer-cols">
          <div>
            <div class="footer-brand">${logoImg()}</div>
            <div class="footer-small">Consumer-debt defense law firm. Attorneys licensed in your state.</div>
          </div>
          <div>
            <div class="footer-title">Contact</div>
            <div class="footer-small">Existing clients (212) 461-4026<br>support@credolegal.com</div>
          </div>
          <div>
            <div class="footer-title">Support</div>
            <div class="footer-small"><a href="${base}about.html">About</a><br><a href="#">Contact</a><br><a href="${base}terms-of-use.html">Terms of Use</a><br><a href="${base}privacy-policy.html">Privacy Policy</a><br><a href="${base}cookie-policy.html">Cookie Policy</a></div>
          </div>
        </div>
        <div class="footer-disclaimer">Attorney Advertising. Prior results do not guarantee a similar outcome.</div>
      </footer>
    `;
  }

  function wireMobileOverlay() {
    const menuBtn = document.querySelector('#menu-btn');
    const overlay = document.querySelector('#nav-overlay');
    if (menuBtn && overlay) {
      menuBtn.addEventListener('click', () => overlay.classList.add('open'));
      overlay.querySelector('.close').addEventListener('click', () => overlay.classList.remove('open'));
    }
  }

  // ---------- Trust band (re-used from LP template) ----------

  // Defer to the LP template's trustBand helper (shared widget rendering).
  function trustBand(opts) {
    if (window.__renderTrustBand) return window.__renderTrustBand(opts);
    return '<div class="lp-trust-band"><div class="trust-row"></div></div>';
  }

  // ---------- Homepage (per variant) ----------

  function renderHome(variant, base) {
    const CO = window.CredoNav.CLUSTER_ORDER;

    const tiles = CO.map(k => {
      const slot = variant.services[k];
      const lp = slot && window.LP_CONTENT[slot.lp];
      const fit = slot ? slot.fit : 'unknown';
      const fitBadge = fit === 'perfect' ? '' : `<span class="fit-badge fit-${fit}">${fit} fit</span>`;
      const previewH1 = lp && lp.hero_h1 ? lp.hero_h1 : '';
      return `
        <a class="variant-cluster-tile" href="${base}services/${CLUSTER_SLUG[k]}.html">
          <div class="tile-cluster">${clusterLabel(k)}</div>
          <div class="tile-preview">${previewH1}</div>
          ${fitBadge}
        </a>
      `;
    }).join('');

    // Map each variant's anchor angle to the closest cluster's Higgsfield scene
    // so the variant homepage hero feels tied to the angle, not generic.
    const VARIANT_TO_HERO_CLUSTER = {
      'stop-calls':       'harassment',   // anchor cluster of the angle
      'fight-back':       'lawsuit',      // most action-oriented vertical
      'respond-in-time':  'lawsuit',      // deadline urgency = lawsuit cluster
      'demand-proof':     'credit-card',  // proof challenge runs across CC
      'know-your-rights': 'harassment',   // FDCPA Education champion is in harassment
      'reduce-or-remove': 'credit-card',  // negotiation / reduce = CC champion territory
    };
    const heroClusterSlug = VARIANT_TO_HERO_CLUSTER[variant.slug];
    let heroImg;
    if (heroClusterSlug) {
      const assetBase = (document.documentElement.getAttribute('data-asset-base') || '') + 'assets/heros/';
      const heroStyle = (typeof window !== 'undefined' && window.CREDO_HERO_STYLE)
        || document.documentElement.getAttribute('data-hero-style')
        || 'portrait';
      const isPortrait = heroStyle === 'portrait';
      const assetSlug = isPortrait ? heroClusterSlug + '-portrait' : heroClusterSlug;
      const altPrefix = isPortrait ? 'Editorial photograph' : 'Watercolor illustration';
      heroImg = `
        <picture>
          <source srcset="${assetBase}${assetSlug}-960.webp" media="(min-width: 768px)" type="image/webp">
          <source srcset="${assetBase}${assetSlug}-480.webp" type="image/webp">
          <img src="${assetBase}${assetSlug}-480.jpg" alt="${altPrefix} anchoring the ${variant.label} variant" loading="eager" decoding="async" width="960" height="${isPortrait ? 1280 : 960}" style="width:100%;height:100%;object-fit:cover;display:block;">
        </picture>
      `;
    } else {
      heroImg = window.__imagePlaceholder
        ? window.__imagePlaceholder(variant.home_hero_h1 + ' — illustrative image', { w: 600, h: 480 })
        : '';
    }
    // The landing pages' form in the home hero (operator, 2 Oct 2026); phone of the variant's first service page.
    const firstSlot = variant.services[CO[0]];
    const firstLp = firstSlot && window.LP_CONTENT[firstSlot.lp];
    const homeForm = window.__renderMultiStepForm ? window.__renderMultiStepForm((firstLp && firstLp.phone) || '(718) 865-8350') : '';
    return `
      <main class="variant-home">
        <section class="variant-hero-row">
          <div class="variant-hero">
            <h1>${variant.home_hero_h1}</h1>
            <p class="hero-sub">${variant.home_hero_sub}</p>
            <p class="hero-filler">Fill in the form below or call us for a free review of your case.</p>
            ${homeForm}
          </div>
          <div class="variant-hero-image" aria-hidden="true">${heroImg}</div>
        </section>

        ${trustBand()}

        <section class="variant-clusters">
          <h2>Which describes you?</h2>
          <p class="muted">${variant.home_cluster_lead}</p>
          <div class="cluster-tile-grid">${tiles}</div>
        </section>

        <section class="variant-process">
          <h2>How it works</h2>
          <ol class="steps numbered">
            <li><span class="step-num">1</span><div><strong>Free consultation</strong> — tell us what's happening. No cost, no commitment.</div></li>
            <li><span class="step-num">2</span><div><strong>Case review</strong> — our attorneys examine the debt, the conduct, and the legal claims available to you.</div></li>
            <li><span class="step-num">3</span><div><strong>Recommendation</strong> — we explain your options and which one fits your situation best.</div></li>
            <li><span class="step-num">4</span><div><strong>Action</strong> — if you move forward, we handle the filings, letters, and follow-up.</div></li>
          </ol>
        </section>

        <section class="variant-faq">
          <h2>Common questions</h2>
          <details class="qa"><summary>How much does it cost?</summary><p class="muted">Free consultation. Flat monthly fee from there. No contingency cut, no settlement-pot setup.</p></details>
          <details class="qa"><summary>Where do you practice?</summary><p class="muted">Attorneys licensed across most US states. We disclose coverage at intake; states we can't serve are disclosed before you commit.</p></details>
          <details class="qa"><summary>What kinds of debt do you handle?</summary><p class="muted">Credit card, medical, payday and personal loans, utilities, auto repossession. We do not handle student loans, tax debt, child support, or government debt.</p></details>
        </section>

        <section class="variant-bottom-cta">
          <h2>${variant.primary_promise}</h2>
          <a href="${base}services/${CLUSTER_SLUG[CO[0]]}.html" class="cta primary">Get a Free Case Evaluation</a>
        </section>
      </main>

      <div class="lp-sticky-cta">
        <a href="${base}services/${CLUSTER_SLUG[CO[0]]}.html" class="cta">Get a Free Case Evaluation</a>
      </div>
    `;
  }

  // ---------- About (shared across variants) ----------

  function renderAbout(variant) {
    return `
      <main class="variant-about">
        <section class="lp-hero">
          <h1>About Credo Legal</h1>
          <p class="muted">A consumer-debt defense law firm operating through a nationwide network of state-licensed attorneys.</p>
        </section>

        <section class="about-section">
          <h2>Our specialty</h2>
          <p>Debt validation and invalidation. We compel creditors and collection agencies to prove debts are legitimate and enforceable, rather than settling or consolidating them. If validation fails, we defend you in court or negotiate down as a fallback. This is a deliberate distinction we draw publicly from debt-settlement and debt-consolidation companies, whose incentives favor quick settlements over invalidation.</p>
        </section>

        <section class="about-section">
          <h2>Who we help</h2>
          <p>Americans facing consumer-debt distress — harassment from debt collectors, lawsuits over unpaid balances, wage garnishment, credit-card debt, medical bills, unsecured and payday loans. We position ourselves as accessible regardless of financial situation: the flat monthly-fee structure is designed to make legal defense affordable for people who'd otherwise face creditors without representation.</p>
        </section>

        <section class="about-section">
          <h2>What you can expect</h2>
          <p><strong>We believe in you. We are here for you. We fight for you.</strong> The posture is fighting-for-the-consumer rather than processing-a-case. Plain language, mechanical explanations of what each step does, and attorneys — not salespeople — on the phone.</p>
        </section>

        <section class="about-section">
          <h2>Engagement model</h2>
          <p>Monthly subscription. A flat monthly fee covers the legal work: validation attempts, court representation if you're sued, settlement negotiation when it's the best outcome. The program typically runs 18–24 months. This model differentiates us from debt-settlement companies (who direct payments toward settlement pots) and from contingency-fee attorneys (who take a cut of recovery).</p>
        </section>

        ${trustBand()}
      </main>

      <div class="lp-sticky-cta">
        <a href="#" class="cta">Get a Free Case Evaluation</a>
      </div>
    `;
  }

  // ---------- Legal pages (Terms of Use, Privacy Policy, Cookie Policy) ----------
  // Text from shared/legal-content.js (generated by tools/legal/build.py): drafts pending attorney review.

  const LEGAL = { terms: ['Terms of Use', 'terms-of-use.html'], privacy: ['Privacy Policy', 'privacy-policy.html'], cookie: ['Cookie Policy', 'cookie-policy.html'] };
  function escHtml(t) { return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function renderLegal(key, base) {
    const doc = window.CREDO_LEGAL[key];
    // link the first mention of each other legal document in a block
    const link = (html) => {
      Object.keys(LEGAL).forEach(k => {
        if (k === key) return;
        const name = LEGAL[k][0], i = html.indexOf(name);
        if (i >= 0) html = html.slice(0, i) + `<a href="${base}${LEGAL[k][1]}">${name}</a>` + html.slice(i + name.length);
      });
      return html;
    };
    let out = '', inList = false, updated = '';
    doc.blocks.forEach((b, i) => {
      if (b.t === 'h1') return;
      if (i <= 2 && /^Last updated/.test(b.x)) { updated = b.x; return; }
      if (b.t === 'li') { if (!inList) { out += '<ul>'; inList = true; } out += `<li>${link(escHtml(b.x))}</li>`; return; }
      if (inList) { out += '</ul>'; inList = false; }
      out += (b.t === 'h2' || b.t === 'h3') ? `<${b.t}>${escHtml(b.x)}</${b.t}>` : `<p>${link(escHtml(b.x))}</p>`;
    });
    if (inList) out += '</ul>';
    const others = Object.keys(LEGAL).filter(k => k !== key).map(k => `<a href="${base}${LEGAL[k][1]}">${LEGAL[k][0]}</a>`).join(' · ');
    return `
      <main class="variant-about variant-legal">
        <section class="lp-hero">
          <h1>${escHtml(doc.title)}</h1>
          ${updated ? `<p class="muted legal-updated">${escHtml(updated)}</p>` : ''}
        </section>
        <section class="legal-text">
          <p class="legal-note">Draft for review by the firm's attorney. Text in square brackets is still to be confirmed.</p>
          ${out}
          <h2>Related documents</h2>
          <p>${others}</p>
        </section>
      </main>
    `;
  }

  // ---------- Service page (renders the matched LP) ----------

  function renderServicePage(variant, clusterKey, base) {
    const slot = variant.services[clusterKey];
    if (!slot) {
      return `<main class="variant-home"><div class="lp-banner">No LP mapped for ${clusterKey} in variant ${variant.label}.</div></main>`;
    }
    const lp = window.LP_CONTENT[slot.lp];
    if (!lp) {
      return `<main class="variant-home"><div class="lp-banner placeholder-banner">LP slug not found: <code>${slot.lp}</code></div></main>`;
    }

    // Variant context banner that sits above the LP
    const fitNote = slot.fit === 'perfect'
      ? `<strong>${variant.label}</strong> · ${clusterLabel(clusterKey)} — this is the cluster's ${variant.label.toLowerCase()} LP, a direct match for your visit.`
      : `<strong>${variant.label}</strong> · ${clusterLabel(clusterKey)} — closest match in this cluster for the <em>${variant.label.toLowerCase()}</em> angle.${slot.note ? ' ' + slot.note : ''}`;

    const banner = `<div class="variant-context-banner">${fitNote}</div>`;

    // Resolve shared/404 LPs via the same logic as renderLP. We don't call renderLP
    // directly because we want to inject the variant banner above, share the variant
    // chrome (which differs from the raw LP chrome), and not double up on header/footer.
    let content;
    if (lp.status === '404') {
      content = window.__renderLPInnerComingSoon(lp);
    } else if (lp.status === 'shared') {
      const canonical = window.LP_CONTENT[lp.canonical_of];
      const sharedBanner = `Shared URL. Live URL <code>${lp.live_url || ''}</code> serves the same content as the ${clusterLabel(canonical.cluster)} canonical capture.`;
      content = window.__renderLPInnerBody(canonical, { banner: sharedBanner });
    } else {
      content = window.__renderLPInnerBody(lp);
    }

    return banner + content;
  }

  // ---------- Page entry ----------

  function renderVariantPage(config) {
    const variant = getVariant(config.variant);
    const app = document.getElementById('app');
    document.documentElement.classList.add('sk');   // landing-page skin (shared/skin-lp.css)
    // Use nullish coalescing so empty string '' (valid base for home/about) doesn't fall back.
    const base = (config.base !== undefined && config.base !== null) ? config.base : '../';

    if (!variant) {
      app.innerHTML = '<main><h1>Variant not found</h1><p>Slug: ' + config.variant + '</p></main>';
      return;
    }

    let body = '';
    let cluster = null;
    if (config.type === 'home') {
      body = renderHome(variant, base);
      document.title = variant.label + ' — Credo Legal';
    } else if (config.type === 'about') {
      body = renderAbout(variant);
      document.title = 'About — ' + variant.label + ' — Credo Legal';
    } else if (config.type === 'legal') {
      body = renderLegal(config.doc, base);
      document.title = LEGAL[config.doc][0] + ' — Credo Legal';
    } else if (config.type === 'service') {
      cluster = config.cluster;
      body = renderServicePage(variant, config.cluster, base);
      const slot = variant.services[config.cluster];
      const lp = slot && window.LP_CONTENT[slot.lp];
      document.title = (lp && lp.hero_h1 ? lp.hero_h1 : clusterLabel(config.cluster)) + ' — Credo Legal';
    } else {
      app.innerHTML = '<main><h1>Unknown page type</h1></main>';
      return;
    }

    app.innerHTML = renderHeader(variant, base, cluster) + body + renderFooter(base) + renderMobileOverlay(base);
    wireMobileOverlay();

    // Tidio offsets per brief 4 §5.5
    function setTidioOffsets() {
      if (window.tidioChatApi && typeof window.tidioChatApi.setBottomOffset === 'function') {
        window.tidioChatApi.setBottomOffset(0);
        window.tidioChatApi.setRightOffset(12);
      }
    }
    document.addEventListener('tidioChat-ready', setTidioOffsets);
    setTimeout(setTidioOffsets, 1500);
  }

  window.renderVariantPage = renderVariantPage;
})();
