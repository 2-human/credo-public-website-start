// Shared page rendering for the three Services nav prototypes (A / B / C).
// Each option exposes:
//   1 homepage  +  6 cluster service pages  +  1 about page  =  8 pages per option.
//
// Per-cluster service page content varies by option:
//   A — Overview: cluster intro + sub-service list + lightweight form
//   B — Champion LP: full LP-style with multi-step form, conversion sections
//   C — Hybrid: champion hero with an "all-options" menu visible

(function () {
  const { CLUSTERS, CLUSTER_ORDER, CLUSTER_CONTENT } = window.CredoNav;

  function getCurrentOption() {
    return document.documentElement.getAttribute('data-option') || 'A';
  }

  function basePath() {
    // For pages at depth 0 (index.html, about.html), shared/ is at ../shared/ from index but option pages live one or two deep.
    // We rely on the data-base attribute set per HTML.
    return document.documentElement.getAttribute('data-base') || '../';
  }

  // ---------- HEADER ----------
  function renderHeader() {
    const opt = getCurrentOption();
    const base = basePath();
    return `
      <header class="site-header">
        <a href="${base}index.html" class="logo">CRĒDO</a>
        <nav class="desktop-nav">
          <a href="${base}index.html">Home</a>
          <div class="dropdown">
            <a class="dropdown-trigger" tabindex="0">Services ▾</a>
            <div class="dropdown-menu">
              ${CLUSTER_ORDER.map(k => `<a href="${base}services/${slugify(k)}.html">${CLUSTERS[k].label}</a>`).join('')}
            </div>
          </div>
          <a href="${base}about.html">About</a>
        </nav>
        <div class="header-actions">
          <a href="#" class="book-btn">Book Consult</a>
          <button id="menu-btn" class="menu-btn" aria-label="Open menu">☰</button>
        </div>
      </header>
      <div class="variant-ribbon">
        <div><strong>Prototype ${opt}</strong> — ${ribbonText(opt)}</div>
        <div class="switcher">${['A','B','C'].map(v => `<a href="${variantPath(v)}" ${v===opt?'class="active"':''}>${v}</a>`).join('')}</div>
      </div>
    `;
  }

  function ribbonText(opt) {
    if (opt === 'A') return 'overview-default — six cluster overview pages';
    if (opt === 'B') return 'champion-default — six cluster pages = champion LPs';
    return 'hybrid — champion hero plus overview menu on each cluster page';
  }

  function rootPath() {
    return basePath() + '../';
  }

  function variantPath(target) {
    const pageType = document.documentElement.getAttribute('data-page-type') || 'home';
    const cluster = document.documentElement.getAttribute('data-cluster');
    const optLower = target.toLowerCase();
    const root = rootPath();
    if (pageType === 'home') return `${root}${optLower}/index.html`;
    if (pageType === 'about') return `${root}${optLower}/about.html`;
    if (pageType === 'service') return `${root}${optLower}/services/${slugify(cluster)}.html`;
    return `${root}${optLower}/index.html`;
  }

  function slugify(k) {
    return ({ harassment:'harassment', lawsuit:'lawsuit', creditCard:'credit-card', paydayLoan:'payday-loan', medicalDebt:'medical-debt', garnishment:'garnishment' })[k] || k;
  }
  function unslugify(s) {
    return ({ 'harassment':'harassment','lawsuit':'lawsuit','credit-card':'creditCard','payday-loan':'paydayLoan','medical-debt':'medicalDebt','garnishment':'garnishment' })[s] || s;
  }

  // ---------- MOBILE OVERLAY ----------
  function renderMobileOverlay() {
    const base = basePath();
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
          ${CLUSTER_ORDER.map(k => `<li><a class="row sub-item" href="${base}services/${slugify(k)}.html"><span class="label">${CLUSTERS[k].label}</span><span class="chev">›</span></a></li>`).join('')}
          <li><a class="row" href="${base}about.html"><span class="label">About</span><span class="chev">›</span></a></li>
        </ul>
      </div>
    `;
  }

  // ---------- FOOTER ----------
  function renderFooter() {
    const base = basePath();
    return `
      <footer class="site-footer">
        <div class="footer-cols">
          <div>
            <div class="footer-brand">CRĒDO LEGAL</div>
            <div class="footer-small">Consumer-debt defense law firm. Attorneys licensed in your state.</div>
          </div>
          <div>
            <div class="footer-title">Contact</div>
            <div class="footer-small">Existing clients (212) 461-4026<br>New clients (443) 483-4080<br>support@credolegal.com</div>
          </div>
          <div>
            <div class="footer-title">Support</div>
            <div class="footer-small"><a href="${base}about.html">About</a><br><a href="#">Contact</a><br><a href="#">Privacy policy</a><br><a href="#">Disclaimer</a></div>
          </div>
        </div>
        <div class="footer-disclaimer">Attorney Advertising. Prior results do not guarantee a similar outcome.</div>
      </footer>
    `;
  }

  // ---------- HOMEPAGE ----------
  function renderHome(opt) {
    const base = basePath();
    return `
      <main class="page-body">
        <section class="hero hero-dark">
          <h1>Stop collector harassment. Defend lawsuits. Stop garnishment.</h1>
          <p>A consumer-debt defense law firm with attorneys licensed in your state.</p>
          <a href="#chooser" class="cta-link">Find your situation ↓</a>
        </section>

        ${trustBand()}

        <section id="chooser" class="cluster-chooser">
          <h2>Which best describes your situation?</h2>
          <p class="muted">Pick your cluster to ${opt === 'A' ? 'browse what we cover' : opt === 'B' ? 'go straight to our highest-converting service' : 'see our champion offer and other options'}.</p>
          <div class="tile-grid">
            ${CLUSTER_ORDER.map(k => {
              const cluster = CLUSTERS[k];
              const content = CLUSTER_CONTENT[k];
              return `
                <a class="tile" href="${base}services/${slugify(k)}.html">
                  <div class="tile-tag">${content.overviewIntro.tag}</div>
                  <div class="tile-h">${cluster.label}</div>
                  <div class="tile-sub">${content.overviewIntro.sub}</div>
                </a>
              `;
            }).join('')}
          </div>
        </section>

        <section class="how-works">
          <h2>How Our Program Works</h2>
          <ol class="steps">
            <li><strong>Free Consultation</strong> · Tell us what's happening.</li>
            <li><strong>Debt Investigation</strong> · We examine the claim and the legal basis.</li>
            <li><strong>Recommendation</strong> · We outline your options clearly.</li>
            <li><strong>Action</strong> · We handle the filings and follow-through.</li>
          </ol>
        </section>

        <section class="faq">
          <h2>Common questions</h2>
          <div class="qa"><strong>How much does it cost?</strong> Free consultation, then flexible monthly plans.</div>
          <div class="qa"><strong>Where do you practice?</strong> Most US states. Coverage list at intake.</div>
          <div class="qa"><strong>What kinds of debt?</strong> Credit card, medical, payday, auto repossession, utilities.</div>
        </section>
      </main>
      <div class="sticky-bar">
        <a href="#chooser" class="cta">Find Your Situation</a>
        <div class="chat" aria-label="Open chat"><span>💬</span><span class="badge">2</span></div>
      </div>
    `;
  }

  // ---------- ABOUT ----------
  function renderAbout() {
    return `
      <main class="page-body">
        <section class="hero">
          <h1>About Credo Legal</h1>
          <p class="muted">A consumer-debt defense law firm operating through a nationwide network of state-licensed attorneys.</p>
        </section>

        <div class="placeholder-section"><strong>Our specialty</strong>Debt validation and invalidation. We compel creditors and collection agencies to prove debts are legitimate and enforceable, rather than settling or consolidating them. If validation fails, we defend you in court or negotiate down as a fallback. This is a deliberate distinction we draw publicly from debt-settlement and debt-consolidation companies, whose incentives favor quick settlements over invalidation.</div>

        <div class="placeholder-section"><strong>Who we help</strong>Americans facing consumer-debt distress — harassment from debt collectors, lawsuits over unpaid balances, wage garnishment, credit-card debt, medical bills, unsecured and payday loans. We position ourselves as accessible regardless of financial situation: the flat monthly-fee structure is designed to make legal defense affordable for people who'd otherwise face creditors without representation.</div>

        <div class="placeholder-section"><strong>What you can expect</strong>We believe in you. We are here for you. We fight for you. The posture is fighting-for-the-consumer rather than processing-a-case. Plain language, mechanical explanations of what each step does, and attorneys (not salespeople) on the phone.</div>

        <div class="placeholder-section"><strong>Engagement model</strong>Monthly subscription. A flat monthly fee covers the legal work: validation attempts, court representation if you're sued, settlement negotiation when it's the best outcome. The program typically runs 18–24 months. This model differentiates us from debt-settlement companies (who direct payments toward settlement pots) and from contingency-fee attorneys (who take a cut of recovery).</div>

        ${trustBand()}
      </main>
      <div class="sticky-bar">
        <a href="#" class="cta">Get a Free Case Evaluation</a>
        <div class="chat" aria-label="Open chat"><span>💬</span><span class="badge">2</span></div>
      </div>
    `;
  }

  // ---------- SERVICE PAGE ----------
  function renderService(opt, clusterKey) {
    if (opt === 'A') return renderServiceA(clusterKey);
    if (opt === 'B') return renderServiceB(clusterKey);
    return renderServiceC(clusterKey);
  }

  // Reusable trust band, multi-step form stub, and LP body section renderers.
  // Trust strip as on the live landing pages (staging.credolegal.com, 2 Oct 2026): the Trustpilot
  // widget and the BBB seal, with the two figures below. The same embeds as the live pages.
  function liveTrustStrip() {
    setTimeout(function () {
      if (window.Trustpilot && window.Trustpilot.loadFromElement) {
        document.querySelectorAll('.trustpilot-widget:not([data-tp-done])').forEach(function (el) { el.setAttribute('data-tp-done', '1'); window.Trustpilot.loadFromElement(el, true); });
      } else if (!document.getElementById('tp-bootstrap')) {
        var s = document.createElement('script'); s.id = 'tp-bootstrap'; s.async = true;
        s.src = 'https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
        document.head.appendChild(s);
      }
    }, 0);
    return `
      <div class="live-trust">
        <div class="lt-badges">
          <div class="lt-cell">
            <div class="trustpilot-widget" data-locale="en-US" data-template-id="53aa8807dec7e10d38f59f32" data-businessunit-id="66f1b872822deaf8e3b0c570" data-style-height="150px" data-style-width="100%" data-token="6137cfd2-eaf3-4249-b1cc-4c3f351d81b0">
              <a href="https://www.trustpilot.com/review/credolegal.com" target="_blank" rel="noopener">Trustpilot</a>
            </div>
          </div>
          <div class="lt-cell">
            <a href="https://www.bbb.org/us/fl/jacksonville/profile/legal-services/credo-legal-services-p-a-0403-236025533/#sealclick" target="_blank" rel="nofollow noopener"><img src="https://seal-northeastflorida.bbb.org/seals/blue-seal-293-61-bbb-236025533.png" width="384" height="80" loading="lazy" alt="Credo Legal Services, P.C. BBB Business Review"></a>
          </div>
        </div>
        <div class="lt-facts">
          <div class="lt-fact"><span class="lt-n">10 million+</span><span class="lt-l">In debt wiped</span></div>
          <div class="lt-fact"><span class="lt-n">500k</span><span class="lt-l">Debts settled every month</span></div>
        </div>
      </div>
    `;
  }
  function trustBand() { return window.__renderTrustBand ? window.__renderTrustBand() : liveTrustStrip(); }

  function multiStepForm(phone) {
    const phoneNum = phone.replace(/[^0-9]/g, '');
    return `
      <section class="multi-step-form">
        <div class="form-steps">
          <div class="step active"><div class="step-n">1</div><div class="step-l">Debt Estimate</div></div>
          <div class="step"><div class="step-n">2</div><div class="step-l">Personalization</div></div>
          <div class="step"><div class="step-n">3</div><div class="step-l">Personal Info</div></div>
        </div>
        <h3>How Much Debt Do You Currently Have?</h3>
        <input type="range" min="0" max="100000" value="10000" class="slider">
        <div class="form-actions">
          <button type="button" class="primary">Continue</button>
          <a href="tel:+1${phoneNum}" class="phone">Or Call Now ${phone}</a>
        </div>
      </section>
    `;
  }

  function lpBodySections(content) {
    return `
      <section class="lp-section">
        <h2>What We Do</h2>
        <p class="muted">${content.whatWeDo.intro}</p>
        <ul class="bullets">${content.whatWeDo.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
      </section>

      <section class="lp-section">
        <h2>Why Choose Credo Legal</h2>
        <ul class="bullets bold-label">${content.whyChoose.map(b => `<li><strong>${b.label}</strong> ${b.body}</li>`).join('')}</ul>
      </section>

      <section class="lp-section">
        <h2>${content.commonProblems.title}</h2>
        <ul class="bullets bold-label">${content.commonProblems.items.map(b => `<li><strong>${b.label}</strong> ${b.body}</li>`).join('')}</ul>
      </section>

      <section class="lp-section">
        <h2>How Our Program Works</h2>
        <ol class="steps">${content.howItWorks.map(s => `<li><strong>${s.title}</strong> — ${s.body}</li>`).join('')}</ol>
      </section>

      <section class="lp-section">
        <h2>Your Rights Under Federal Law</h2>
        <p class="muted">${content.yourRights.intro}</p>
        <ul class="bullets">${content.yourRights.items.map(i => `<li>${i}</li>`).join('')}</ul>
      </section>

      <section class="lp-section">
        <h2>Who This Program Helps</h2>
        <ul class="bullets">${content.whoThisHelps.map(i => `<li>${i}</li>`).join('')}</ul>
      </section>

      <section class="lp-section faq-section">
        <h2>Frequently Asked Questions</h2>
        <p class="muted small">Our Team is always happy to help.</p>
        ${content.faq.map(f => `<div class="qa-block"><strong>${f.q}</strong><p class="muted">${f.a}</p></div>`).join('')}
      </section>

      <section class="bottom-cta">
        <h2>${content.bottomCta.h1}</h2>
        <p>${content.bottomCta.body}</p>
        <a href="#" class="cta">Get a Free Case Evaluation</a>
        <div class="bottom-phone"><a href="tel:+1${content.phone.replace(/[^0-9]/g, '')}">Call ${content.phone}</a></div>
      </section>
    `;
  }

  function stickyBar() {
    return `
      <div class="sticky-bar">
        <a href="#" class="cta">Get a Free Case Evaluation</a>
        <div class="chat" aria-label="Open chat"><span>💬</span><span class="badge">2</span></div>
      </div>
    `;
  }

  function renderServiceA(clusterKey) {
    const content = CLUSTER_CONTENT[clusterKey];
    const clusterSlugMap = { harassment:'harassment', lawsuit:'lawsuit', creditCard:'credit-card', paydayLoan:'payday-loan', medicalDebt:'medical-debt', garnishment:'garnishment' };
    const lpIndexPath = basePath() + '../lps/' + clusterSlugMap[clusterKey] + '/index.html';
    return `
      <main class="page-body">
        <section class="hero">
          <div class="eyebrow">${content.overviewIntro.tag}</div>
          <h1>${content.overviewIntro.h1}</h1>
          <p class="muted">${content.overviewIntro.sub}</p>
        </section>

        <p style="text-align:center;margin:12px 0;"><a href="${lpIndexPath}" class="cta" style="display:inline-block;background:var(--brand);color:white;padding:10px 18px;border-radius:8px;font-size:14px;font-weight:600;">See all ${CLUSTERS[clusterKey].label} landing pages →</a></p>

        ${trustBand()}

        <section class="overview-services">
          <h2>What we cover in this area</h2>
          <ul class="service-list">
            ${content.whatWeDo.bullets.slice(0, 4).map(s => `<li>${s}</li>`).join('')}
          </ul>
          <p class="muted small">Pick the closest fit. We start with a free case review, then recommend the specific next step.</p>
        </section>

        <section class="lightweight-form">
          <h2>Get a free case review</h2>
          <p class="muted">Tell us your situation. An attorney reviews and calls you back.</p>
          <form class="lite">
            <input type="text" placeholder="Name *">
            <input type="tel" placeholder="Phone *">
            <textarea placeholder="What's happening?"></textarea>
            <button type="button">Submit</button>
          </form>
        </section>

        <section class="lp-section">
          <h2>Why Choose Credo Legal</h2>
          <ul class="bullets bold-label">${content.whyChoose.slice(0, 3).map(b => `<li><strong>${b.label}</strong> ${b.body}</li>`).join('')}</ul>
        </section>

        <section class="lp-section faq-section">
          <h2>Frequently Asked Questions</h2>
          ${content.faq.slice(0, 3).map(f => `<div class="qa-block"><strong>${f.q}</strong><p class="muted">${f.a}</p></div>`).join('')}
        </section>

        ${content.source.startsWith('inferred') ? `<div class="caveat">Content for this cluster is inferred from common patterns and the campaign plan. Verify against the live LP at <code>${content.sourceUrl}</code>.</div>` : ''}
      </main>
      ${stickyBar()}
    `;
  }

  function renderServiceB(clusterKey) {
    const content = CLUSTER_CONTENT[clusterKey];
    const clusterSlugMap = { harassment:'harassment', lawsuit:'lawsuit', creditCard:'credit-card', paydayLoan:'payday-loan', medicalDebt:'medical-debt', garnishment:'garnishment' };
    const lpIndexPath = basePath() + '../lps/' + clusterSlugMap[clusterKey] + '/index.html';
    return `
      <main class="page-body">
        <p style="text-align:right;margin:6px 0;padding:0 6px;"><a href="${lpIndexPath}" style="font-size:12px;color:var(--text-muted);text-decoration:underline;">All ${CLUSTERS[clusterKey].label} angles →</a></p>
        <section class="hero hero-dark">
          <h1>${content.hero.h1}</h1>
          <p>${content.hero.sub}</p>
          <p class="filler">${content.hero.filler}</p>
        </section>

        ${multiStepForm(content.phone)}

        ${trustBand()}

        ${lpBodySections(content)}

        ${content.source.startsWith('inferred') ? `<div class="caveat">Content for this cluster is inferred from common patterns and the campaign plan. Verify against the live LP at <code>${content.sourceUrl}</code>.</div>` : ''}
      </main>
      ${stickyBar()}
    `;
  }

  function renderServiceC(clusterKey) {
    const content = CLUSTER_CONTENT[clusterKey];
    const cluster = CLUSTERS[clusterKey];
    const clusterSlugMap = { harassment:'harassment', lawsuit:'lawsuit', creditCard:'credit-card', paydayLoan:'payday-loan', medicalDebt:'medical-debt', garnishment:'garnishment' };
    const lpIndexPath = basePath() + '../lps/' + clusterSlugMap[clusterKey] + '/index.html';
    return `
      <main class="page-body">
        <section class="hybrid-toggle">
          <div class="ht-cluster">${cluster.label}</div>
          <div class="ht-desc">Champion offer below. <a href="#all-options">See all options ↓</a> · <a href="${lpIndexPath}">Or browse the ${cluster.label} LP set →</a></div>
        </section>

        <section class="hero hero-dark">
          <h1>${content.hero.h1}</h1>
          <p>${content.hero.sub}</p>
          <p class="filler">${content.hero.filler}</p>
        </section>

        ${multiStepForm(content.phone)}

        ${trustBand()}

        <section class="lp-section">
          <h2>What We Do</h2>
          <p class="muted">${content.whatWeDo.intro}</p>
          <ul class="bullets">${content.whatWeDo.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
        </section>

        <section id="all-options" class="all-options-menu">
          <h2>Other ways we help with ${cluster.label.toLowerCase()}</h2>
          <p class="muted">Want a different angle? Pick the closest fit.</p>
          <ul class="service-list">
            ${cluster.items.slice(0, 4).map(it => `<li>${it.label}</li>`).join('')}
          </ul>
          <p class="muted small">Each routes to its own LP with copy tuned to that angle.</p>
        </section>

        <section class="lp-section">
          <h2>Why Choose Credo Legal</h2>
          <ul class="bullets bold-label">${content.whyChoose.map(b => `<li><strong>${b.label}</strong> ${b.body}</li>`).join('')}</ul>
        </section>

        <section class="lp-section">
          <h2>${content.commonProblems.title}</h2>
          <ul class="bullets bold-label">${content.commonProblems.items.map(b => `<li><strong>${b.label}</strong> ${b.body}</li>`).join('')}</ul>
        </section>

        <section class="lp-section">
          <h2>How Our Program Works</h2>
          <ol class="steps">${content.howItWorks.map(s => `<li><strong>${s.title}</strong> — ${s.body}</li>`).join('')}</ol>
        </section>

        <section class="lp-section">
          <h2>Your Rights Under Federal Law</h2>
          <p class="muted">${content.yourRights.intro}</p>
          <ul class="bullets">${content.yourRights.items.map(i => `<li>${i}</li>`).join('')}</ul>
        </section>

        <section class="lp-section faq-section">
          <h2>Frequently Asked Questions</h2>
          <p class="muted small">Our Team is always happy to help.</p>
          ${content.faq.map(f => `<div class="qa-block"><strong>${f.q}</strong><p class="muted">${f.a}</p></div>`).join('')}
        </section>

        <section class="bottom-cta">
          <h2>${content.bottomCta.h1}</h2>
          <p>${content.bottomCta.body}</p>
          <a href="#" class="cta">Get a Free Case Evaluation</a>
          <div class="bottom-phone"><a href="tel:+1${content.phone.replace(/[^0-9]/g, '')}">Call ${content.phone}</a></div>
        </section>

        ${content.source.startsWith('inferred') ? `<div class="caveat">Content for this cluster is inferred from common patterns and the campaign plan. Verify against the live LP at <code>${content.sourceUrl}</code>.</div>` : ''}
      </main>
      ${stickyBar()}
    `;
  }

  // ---------- ENTRY ----------
  function renderPage(config) {
    document.documentElement.setAttribute('data-option', config.option);
    document.documentElement.setAttribute('data-page-type', config.type);
    if (config.cluster) document.documentElement.setAttribute('data-cluster', config.cluster);
    if (config.base) document.documentElement.setAttribute('data-base', config.base);

    const app = document.getElementById('app');
    let body = '';
    if (config.type === 'home') body = renderHome(config.option);
    else if (config.type === 'about') body = renderAbout();
    else if (config.type === 'service') body = renderService(config.option, config.cluster);

    app.innerHTML = renderHeader() + body + renderFooter() + renderMobileOverlay();

    // Wire up the mobile overlay
    const menuBtn = document.querySelector('#menu-btn');
    const overlay = document.querySelector('#nav-overlay');
    if (menuBtn && overlay) {
      menuBtn.addEventListener('click', () => overlay.classList.add('open'));
      overlay.querySelector('.close').addEventListener('click', () => overlay.classList.remove('open'));
    }
  }

  window.renderPage = renderPage;
})();
