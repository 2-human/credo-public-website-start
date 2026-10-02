// LP renderer — applies the D3 + sticky CTA + same-row Tidio layout from
// content/web/sites/start-redesign/brief/4-lp-template.md to the 36 LP captures.
//
// Each LP at public/website-start/lps/{cluster-slug}/{lp-slug}.html boots by
// loading shared/data.js (nav), shared/lp-content.js (36 LP entries), and this
// file, then calls renderLP(slug, base).

(function () {
  function getLP(slug) {
    return window.LP_CONTENT && window.LP_CONTENT[slug];
  }

  function resolveContent(lp) {
    // Shared-URL LPs render with the canonical capture's content + a banner.
    if (lp.canonical_of && window.LP_CONTENT[lp.canonical_of]) {
      return window.LP_CONTENT[lp.canonical_of];
    }
    return lp;
  }

  function clusterLabel(clusterKey) {
    const cluster = window.CredoNav && window.CredoNav.CLUSTERS[clusterKey];
    return cluster ? cluster.label : clusterKey;
  }

  function clusterSlug(clusterKey) {
    return ({
      harassment: 'harassment',
      lawsuit: 'lawsuit',
      creditCard: 'credit-card',
      paydayLoan: 'payday-loan',
      medicalDebt: 'medical-debt',
      garnishment: 'garnishment',
    })[clusterKey] || clusterKey;
  }

  function phoneHref(phone) {
    return 'tel:+1' + (phone || '').replace(/[^0-9]/g, '');
  }

  // ---------- Page chrome ----------

  function renderHeader(base) {
    const CO = window.CredoNav.CLUSTER_ORDER;
    const CS = window.CredoNav.CLUSTERS;
    return `
      <header class="site-header">
        <a href="${base}index.html" class="logo">CRĒDO</a>
        <nav class="desktop-nav">
          <a href="${base}index.html">Home</a>
          <div class="dropdown">
            <a class="dropdown-trigger" tabindex="0">Services ▾</a>
            <div class="dropdown-menu">
              ${CO.map(k => `<a href="${base}lps/${clusterSlug(k)}/index.html">${CS[k].label}</a>`).join('')}
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
    const CS = window.CredoNav.CLUSTERS;
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
          ${CO.map(k => `<li><a class="row sub-item" href="${base}lps/${clusterSlug(k)}/index.html"><span class="label">${CS[k].label}</span><span class="chev">›</span></a></li>`).join('')}
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
            <div class="footer-brand">CRĒDO LEGAL</div>
            <div class="footer-small">Consumer-debt defense law firm. Attorneys licensed in your state.</div>
          </div>
          <div>
            <div class="footer-title">Contact</div>
            <div class="footer-small">Existing clients (212) 461-4026<br>support@credolegal.com</div>
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

  // ---------- LP body components ----------

  // ---------- Image placeholders (inline SVG, brand colors) ----------
  //
  // Each placeholder is a gradient block with descriptive label text. Real
  // photos/illustrations are slotted in by swapping the SVG.

  // Stable hash so a given label always produces the same gradient.
  function _hashStr(s) {
    let h = 0;
    for (let i = 0; i < s.length; i++) { h = ((h << 5) - h) + s.charCodeAt(i); h |= 0; }
    return Math.abs(h);
  }

  // Six motif families for illustration variety. Each is brand-colored,
  // geometric editorial illustration suitable for legal/consumer-services.
  function _motifHero(w, h, palette) {
    const [bg, accent, ink, paper] = palette;
    return `
      <rect width="${w}" height="${h}" fill="${bg}"/>
      <!-- abstract pillar / column motif -->
      <rect x="${w*0.18}" y="${h*0.22}" width="${w*0.14}" height="${h*0.62}" fill="${paper}" opacity="0.95" rx="2"/>
      <rect x="${w*0.40}" y="${h*0.15}" width="${w*0.14}" height="${h*0.69}" fill="${paper}" opacity="0.85" rx="2"/>
      <rect x="${w*0.62}" y="${h*0.28}" width="${w*0.14}" height="${h*0.56}" fill="${paper}" opacity="0.75" rx="2"/>
      <!-- pediment cap -->
      <polygon points="${w*0.1},${h*0.22} ${w*0.84},${h*0.15} ${w*0.84},${h*0.10} ${w*0.1},${h*0.17}" fill="${ink}" opacity="0.18"/>
      <!-- amber accent star -->
      <circle cx="${w*0.82}" cy="${h*0.28}" r="${h*0.06}" fill="${accent}"/>
      <!-- ground shadow -->
      <ellipse cx="${w*0.5}" cy="${h*0.92}" rx="${w*0.42}" ry="${h*0.04}" fill="${ink}" opacity="0.12"/>
      <!-- horizon -->
      <rect y="${h*0.84}" width="${w}" height="${h*0.02}" fill="${ink}" opacity="0.08"/>
    `;
  }

  function _motifShield(w, h, palette) {
    const [bg, accent, ink, paper] = palette;
    return `
      <rect width="${w}" height="${h}" fill="${bg}"/>
      <path d="M${w*0.5},${h*0.15} L${w*0.78},${h*0.25} L${w*0.74},${h*0.65} Q${w*0.62},${h*0.82} ${w*0.5},${h*0.88} Q${w*0.38},${h*0.82} ${w*0.26},${h*0.65} L${w*0.22},${h*0.25} Z" fill="${paper}" opacity="0.95"/>
      <path d="M${w*0.5},${h*0.15} L${w*0.5},${h*0.88} L${w*0.38},${h*0.82} L${w*0.26},${h*0.65} L${w*0.22},${h*0.25} Z" fill="${ink}" opacity="0.18"/>
      <circle cx="${w*0.5}" cy="${h*0.5}" r="${h*0.10}" fill="${accent}"/>
      <path d="M${w*0.42},${h*0.5} L${w*0.48},${h*0.58} L${w*0.58},${h*0.42}" stroke="${ink}" stroke-width="${h*0.018}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    `;
  }

  function _motifDocument(w, h, palette) {
    const [bg, accent, ink, paper] = palette;
    return `
      <rect width="${w}" height="${h}" fill="${bg}"/>
      <!-- back document -->
      <rect x="${w*0.28}" y="${h*0.18}" width="${w*0.46}" height="${h*0.66}" rx="4" fill="${paper}" opacity="0.85" transform="rotate(-4 ${w*0.51} ${h*0.51})"/>
      <!-- front document -->
      <rect x="${w*0.22}" y="${h*0.16}" width="${w*0.50}" height="${h*0.70}" rx="6" fill="${paper}"/>
      <!-- lines -->
      <rect x="${w*0.28}" y="${h*0.26}" width="${w*0.32}" height="${h*0.022}" fill="${ink}" opacity="0.30" rx="1"/>
      <rect x="${w*0.28}" y="${h*0.34}" width="${w*0.38}" height="${h*0.016}" fill="${ink}" opacity="0.20" rx="1"/>
      <rect x="${w*0.28}" y="${h*0.40}" width="${w*0.34}" height="${h*0.016}" fill="${ink}" opacity="0.20" rx="1"/>
      <rect x="${w*0.28}" y="${h*0.46}" width="${w*0.30}" height="${h*0.016}" fill="${ink}" opacity="0.20" rx="1"/>
      <rect x="${w*0.28}" y="${h*0.55}" width="${w*0.38}" height="${h*0.016}" fill="${ink}" opacity="0.20" rx="1"/>
      <!-- highlight checkmark badge -->
      <circle cx="${w*0.62}" cy="${h*0.74}" r="${h*0.07}" fill="${accent}"/>
      <path d="M${w*0.58},${h*0.74} L${w*0.61},${h*0.78} L${w*0.66},${h*0.70}" stroke="${ink}" stroke-width="${h*0.012}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    `;
  }

  function _motifConversation(w, h, palette) {
    const [bg, accent, ink, paper] = palette;
    return `
      <rect width="${w}" height="${h}" fill="${bg}"/>
      <!-- speech bubble left -->
      <path d="M${w*0.18},${h*0.30} L${w*0.50},${h*0.30} Q${w*0.56},${h*0.30} ${w*0.56},${h*0.38} L${w*0.56},${h*0.50} Q${w*0.56},${h*0.58} ${w*0.50},${h*0.58} L${w*0.30},${h*0.58} L${w*0.22},${h*0.66} L${w*0.24},${h*0.58} L${w*0.18},${h*0.58} Q${w*0.12},${h*0.58} ${w*0.12},${h*0.50} L${w*0.12},${h*0.38} Q${w*0.12},${h*0.30} ${w*0.18},${h*0.30} Z" fill="${paper}"/>
      <rect x="${w*0.17}" y="${h*0.38}" width="${w*0.28}" height="${h*0.022}" fill="${ink}" opacity="0.30" rx="1"/>
      <rect x="${w*0.17}" y="${h*0.46}" width="${w*0.22}" height="${h*0.022}" fill="${ink}" opacity="0.20" rx="1"/>
      <!-- speech bubble right (accent) -->
      <path d="M${w*0.50},${h*0.42} L${w*0.84},${h*0.42} Q${w*0.90},${h*0.42} ${w*0.90},${h*0.50} L${w*0.90},${h*0.66} Q${w*0.90},${h*0.74} ${w*0.84},${h*0.74} L${w*0.78},${h*0.74} L${w*0.72},${h*0.82} L${w*0.74},${h*0.74} L${w*0.56},${h*0.74} Q${w*0.50},${h*0.74} ${w*0.50},${h*0.66} L${w*0.50},${h*0.50} Q${w*0.50},${h*0.42} ${w*0.56},${h*0.42} Z" fill="${accent}"/>
      <rect x="${w*0.56}" y="${h*0.52}" width="${w*0.28}" height="${h*0.022}" fill="${ink}" opacity="0.40" rx="1"/>
      <rect x="${w*0.56}" y="${h*0.60}" width="${w*0.22}" height="${h*0.022}" fill="${ink}" opacity="0.30" rx="1"/>
    `;
  }

  function _motifPeople(w, h, palette) {
    const [bg, accent, ink, paper] = palette;
    return `
      <rect width="${w}" height="${h}" fill="${bg}"/>
      <!-- person 1 -->
      <circle cx="${w*0.30}" cy="${h*0.38}" r="${h*0.10}" fill="${paper}"/>
      <path d="M${w*0.18},${h*0.86} Q${w*0.18},${h*0.58} ${w*0.30},${h*0.58} Q${w*0.42},${h*0.58} ${w*0.42},${h*0.86} Z" fill="${paper}"/>
      <!-- person 2 (accent) -->
      <circle cx="${w*0.50}" cy="${h*0.32}" r="${h*0.11}" fill="${accent}"/>
      <path d="M${w*0.36},${h*0.86} Q${w*0.36},${h*0.55} ${w*0.50},${h*0.55} Q${w*0.64},${h*0.55} ${w*0.64},${h*0.86} Z" fill="${accent}"/>
      <!-- person 3 -->
      <circle cx="${w*0.70}" cy="${h*0.38}" r="${h*0.10}" fill="${paper}" opacity="0.85"/>
      <path d="M${w*0.58},${h*0.86} Q${w*0.58},${h*0.58} ${w*0.70},${h*0.58} Q${w*0.82},${h*0.58} ${w*0.82},${h*0.86} Z" fill="${paper}" opacity="0.85"/>
      <!-- foreground ribbon -->
      <rect x="0" y="${h*0.84}" width="${w}" height="${h*0.04}" fill="${ink}" opacity="0.20"/>
    `;
  }

  function _motifBookGavel(w, h, palette) {
    const [bg, accent, ink, paper] = palette;
    return `
      <rect width="${w}" height="${h}" fill="${bg}"/>
      <!-- book stack -->
      <rect x="${w*0.22}" y="${h*0.62}" width="${w*0.56}" height="${h*0.10}" fill="${paper}" rx="2"/>
      <rect x="${w*0.26}" y="${h*0.52}" width="${w*0.48}" height="${h*0.10}" fill="${paper}" opacity="0.92" rx="2"/>
      <rect x="${w*0.30}" y="${h*0.42}" width="${w*0.40}" height="${h*0.10}" fill="${paper}" opacity="0.84" rx="2"/>
      <!-- gold band on top book -->
      <rect x="${w*0.30}" y="${h*0.46}" width="${w*0.40}" height="${h*0.014}" fill="${accent}"/>
      <!-- gavel head -->
      <rect x="${w*0.42}" y="${h*0.22}" width="${w*0.22}" height="${h*0.10}" fill="${ink}" opacity="0.85" rx="3"/>
      <!-- gavel handle -->
      <rect x="${w*0.48}" y="${h*0.30}" width="${w*0.06}" height="${h*0.18}" fill="${ink}" opacity="0.85" rx="2"/>
      <!-- strike block -->
      <rect x="${w*0.38}" y="${h*0.36}" width="${w*0.30}" height="${h*0.04}" fill="${accent}" opacity="0.50"/>
    `;
  }

  function _motifProcess(w, h, palette) {
    const [bg, accent, ink, paper] = palette;
    return `
      <rect width="${w}" height="${h}" fill="${bg}"/>
      <!-- four circular steps -->
      ${[1,2,3,4].map((i) => {
        const x = w * (0.18 + (i-1) * 0.21);
        const isAccent = i === 2;
        return `
          ${i < 4 ? `<line x1="${x + h*0.10}" y1="${h*0.5}" x2="${x + w*0.21 - h*0.10}" y2="${h*0.5}" stroke="${ink}" stroke-opacity="0.25" stroke-width="${h*0.012}" stroke-dasharray="${h*0.04} ${h*0.04}"/>` : ''}
          <circle cx="${x}" cy="${h*0.5}" r="${h*0.10}" fill="${isAccent ? accent : paper}"/>
          <text x="${x}" y="${h*0.5 + 5}" text-anchor="middle" font-family="Inter, sans-serif" font-size="${h*0.10}" font-weight="700" fill="${isAccent ? ink : ink}" fill-opacity="${isAccent ? 0.85 : 0.40}">${i}</text>
        `;
      }).join('')}
    `;
  }

  // Pick a motif renderer based on the label hint.
  function _pickMotif(label) {
    const l = (label || '').toLowerCase();
    if (l.includes('hero')) return _motifHero;
    if (l.includes('why choose') || l.includes('shield') || l.includes('team')) return _motifShield;
    if (l.includes('common problems') || l.includes('document') || l.includes('case file')) return _motifDocument;
    if (l.includes('who this') || l.includes('client') || l.includes('people')) return _motifPeople;
    if (l.includes('rights') || l.includes('law book') || l.includes('gavel')) return _motifBookGavel;
    if (l.includes('faq') || l.includes('conversation')) return _motifConversation;
    if (l.includes('how') || l.includes('process')) return _motifProcess;
    return _motifHero;
  }

  function imagePlaceholder(label, opts) {
    opts = opts || {};
    const w = opts.w || 600;
    const h = opts.h || 400;
    // Brand-coordinated palette: warm-cream bg, brand red, charcoal ink, white paper.
    const palettes = [
      ['#FDF6EF', '#DC4646', '#131312', '#FFFFFF'], // warm cream
      ['#F4F4F2', '#F4B942', '#131312', '#FFFFFF'], // neutral + amber
      ['#FCE9E9', '#DC4646', '#3D3D3B', '#FFFFFF'], // soft brand wash
      ['#232322', '#F4B942', '#FAFAF9', '#FAFAF9'], // dark + amber
    ];
    const variant = _hashStr(label || 'x') % palettes.length;
    const palette = palettes[variant];
    const motif = _pickMotif(label);
    const safeLabel = (label || '').replace(/"/g, '&quot;');
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${safeLabel}">${motif(w, h, palette)}</svg>`;
  }

  // Map cluster key → asset slug. Payday Loan falls back to all-states (the asset
  // was generated as the cross-cluster fallback for exactly this case).
  const HIGGSFIELD_CLUSTER_TO_SLUG = {
    harassment:  'harassment',
    lawsuit:     'lawsuit',
    creditCard:  'credit-card',
    paydayLoan:  'payday-loan',    // currently uses the all-states scene
    medicalDebt: 'medical-debt',
    garnishment: 'garnishment',
  };

  // Compute the assets/ path from the current document's depth from the
  // website-start root. Pages live at one of:
  //   /website-start/index.html                                 → ''
  //   /website-start/lps/{cluster}/{lp}.html                    → '../../'
  //   /website-start/variants/{v}/index.html                    → '../../'
  //   /website-start/variants/{v}/about.html                    → '../../'
  //   /website-start/variants/{v}/services/{cluster}.html       → '../../../'
  //
  // Authoritative source: an explicit data-asset-base attribute set by the host
  // HTML. Fallback: derive from window.location.pathname by finding 'website-start'.
  function heroAssetBase() {
    const explicit = document.documentElement.getAttribute('data-asset-base');
    if (explicit !== null && explicit !== undefined) return explicit + 'assets/heros/';

    // Defensive: only walk window.location if it actually exists (Node test sandboxes
    // may not have it).
    const pathname = (typeof window !== 'undefined' && window.location && window.location.pathname) || '';
    const segs = pathname.split('/').filter(Boolean);
    const rootIdx = segs.indexOf('website-start');
    if (rootIdx === -1) {
      // Unknown layout — assume the file is at the website-start root.
      return 'assets/heros/';
    }
    const depth = Math.max(0, segs.length - 1 - rootIdx);
    return '../'.repeat(Math.max(0, depth - 1)) + 'assets/heros/';
  }

  // Hero variant: 'portrait' (photorealistic Soul 2 Sarah/Michael scenes) or
  // 'watercolor' ("After the Letter" Higgsfield watercolor scenes). Toggleable via
  // <html data-hero-style="watercolor"> per page or via window.CREDO_HERO_STYLE override.
  // Default = 'portrait' since the realistic Soul 2 set is now the canonical hero.
  function heroVariant() {
    if (typeof window !== 'undefined' && window.CREDO_HERO_STYLE) return window.CREDO_HERO_STYLE;
    const fromAttr = document.documentElement.getAttribute('data-hero-style');
    return fromAttr || 'portrait';
  }

  function heroImage(lp) {
    const slug = HIGGSFIELD_CLUSTER_TO_SLUG[lp.cluster];
    const label = 'Hero illustration · ' + (lp.hero_h1 || 'service');
    if (slug) {
      const base = heroAssetBase();
      const variant = heroVariant();
      const isPortrait = variant === 'portrait';
      // Asset slugs: 'harassment-960.webp' (watercolor) vs 'harassment-portrait-960.webp' (Sarah/Michael)
      const assetSlug = isPortrait ? slug + '-portrait' : slug;

      const isPaydayFallback = lp.cluster === 'paydayLoan' && !isPortrait;
      const alt = isPortrait
        ? 'Editorial photograph of a person at home, ' + (lp.cluster || '').replace(/([A-Z])/g, ' $1').trim() + ' scene'
        : (isPaydayFallback
            ? 'Watercolor illustration — generic consumer-debt scene (Payday Loan uses cross-cluster fallback)'
            : 'Watercolor illustration of a person at home, ' + (lp.cluster || '').replace(/([A-Z])/g, ' $1').trim() + ' theme');

      return `
        <picture>
          <source srcset="${base}${assetSlug}-960.webp" media="(min-width: 768px)" type="image/webp">
          <source srcset="${base}${assetSlug}-480.webp" type="image/webp">
          <img src="${base}${assetSlug}-480.jpg" alt="${alt}" loading="eager" decoding="async" width="960" height="${isPortrait ? 1280 : 960}" style="width:100%;height:100%;object-fit:cover;display:block;">
        </picture>
      `;
    }
    return imagePlaceholder(label, { w: 600, h: 480 });
  }

  function sectionImage(label, opts) {
    opts = opts || {};
    return imagePlaceholder(label, { w: 480, h: 320 });
  }

  // Inline SVG widgets approximating BBB, Trustpilot, Google Reviews.
  // Not the real embeds — those need compliance review (May action items §4).
  function bbbWidget() {
    return `
      <div class="trust-widget bbb">
        <svg viewBox="0 0 56 56" width="44" height="44" aria-hidden="true">
          <path d="M28 4 L48 14 L44 38 Q40 48 28 52 Q16 48 12 38 L8 14 Z" fill="#0e4684"/>
          <text x="28" y="26" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="#fff" letter-spacing="-0.5">BBB</text>
          <text x="28" y="40" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#fff">A</text>
        </svg>
        <div class="widget-text">
          <div class="widget-title">Accredited Business</div>
          <div class="widget-meta"><span class="rating">4.59</span><span class="of-5">/5</span> · BBB rating</div>
        </div>
      </div>
    `;
  }

  function trustpilotWidget() {
    const star = (filled) => `<polygon points="10,1 12.7,7 19,7.6 14.2,11.7 15.8,18 10,14.6 4.2,18 5.8,11.7 1,7.6 7.3,7" fill="${filled?'#00b67a':'#dcdce6'}"/>`;
    const stars = [1,1,1,1,1].map(() => `<svg viewBox="0 0 20 20" width="16" height="16">${star(true)}</svg>`).join('');
    return `
      <div class="trust-widget trustpilot">
        <div class="tp-bar">${stars}</div>
        <div class="widget-text">
          <div class="widget-title">Excellent</div>
          <div class="widget-meta"><strong>4.5</strong> on <span class="tp-brand">★ Trustpilot</span> · 1,247 reviews</div>
        </div>
      </div>
    `;
  }

  function googleReviewsWidget() {
    const star = `<svg viewBox="0 0 20 20" width="16" height="16"><polygon points="10,1 12.7,7 19,7.6 14.2,11.7 15.8,18 10,14.6 4.2,18 5.8,11.7 1,7.6 7.3,7" fill="#fbbc04"/></svg>`;
    const stars = star.repeat(5);
    // Google G
    const gLogo = `
      <svg viewBox="0 0 48 48" width="32" height="32" aria-hidden="true">
        <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
        <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
        <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
      </svg>
    `;
    return `
      <div class="trust-widget google">
        ${gLogo}
        <div class="widget-text">
          <div class="widget-title">Google Reviews</div>
          <div class="widget-meta"><strong>4.7</strong> <span class="g-stars">${stars}</span> · 892 reviews</div>
        </div>
      </div>
    `;
  }

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
  function trustBand() { return liveTrustStrip(); }

  // Action 1 (post-review 2026-06-02): NC added per Sona's comment.
  // Canonical no-service state list — bake into the Webflow build copy.
  const NO_SERVICE_STATES = 'DC, DE, ID, NC, OK, WV, WY';

  // Action 4 (post-review): Step 3 field spec for the Webflow build.
  //   REQUIRED: first_name, last_name, phone, email, state
  //   DROPPED:  alternative_phone
  //   OPTIONAL: address, city, zip, date_of_birth (mark '(optional)' visibly)
  // Captures address/DOB/zip via progressive profiling at the thank-you / scheduling step.
  // Source: 2026-06-02 post-review decision (batch 1 of AskUserQuestion sequence).
  const STEP_3_FIELDS = {
    required: ['first_name', 'last_name', 'phone', 'email', 'state'],
    optional: ['address', 'city', 'zip', 'date_of_birth'],
    dropped:  ['alternative_phone'],
  };

  // Action 9 (post-review): Phone CTA promoted to body-lg via CSS .lp-form .phone.

  function multiStepForm(phone) {
    // Unique slider/output IDs per render call so multiple forms on a page don't conflict.
    const uid = 'slider-' + Math.random().toString(36).slice(2, 8);
    return `
      <section class="lp-form" id="form-top">
        <div class="form-steps">
          <div class="step active"><div class="step-n">1</div><div class="step-l">Debt Estimate</div></div>
          <div class="step"><div class="step-n">2</div><div class="step-l">Personalization</div></div>
          <div class="step"><div class="step-n">3</div><div class="step-l">Personal Info</div></div>
        </div>
        <h3>How Much Debt Do You Currently Have?</h3>
        <div class="slider-amount" id="${uid}-out">$8,000</div>
        <input
          type="range" min="0" max="100000" step="500" value="8000"
          class="slider" id="${uid}-in"
          oninput="document.getElementById('${uid}-out').textContent = '$' + Number(this.value).toLocaleString()">
        <div class="slider-range-labels">
          <span>$0</span><span>$100,000+</span>
        </div>
        <div class="form-actions">
          <button type="button" class="primary">Continue</button>
          <a href="${phoneHref(phone)}" class="phone">Or Call Now ${phone}</a>
        </div>
        <div class="form-disclaimer-row">
          We currently do not service ${NO_SERVICE_STATES}.
        </div>
      </section>
    `;
  }

  function inlineCTA(label, slot) {
    // slot: 'after-pair1' | 'after-pair2' | 'after-process' | 'after-pair3'
    // CSS hides the right ones per breakpoint per brief 4 §5.1 / §5.2.
    return `
      <section class="lp-inline-cta lp-cta-${slot || 'generic'}">
        <a href="#form-top" class="cta">${label || 'Get a Free Case Evaluation'}</a>
      </section>
    `;
  }

  // Side-by-side section: text/content on the left, image on the right (desktop);
  // stacked single column on mobile.
  function sideImage(label) {
    return `<div class="section-side-image" aria-hidden="true">${sectionImage(label)}</div>`;
  }

  function whatWeDoSection(lp) {
    if (!lp.what_we_do || (!lp.what_we_do.intro && !(lp.what_we_do.bullets || []).length)) return '';
    return `
      <section class="lp-section lp-section-centered">
        <h2>What We Do</h2>
        ${lp.what_we_do.intro ? `<p class="muted">${lp.what_we_do.intro}</p>` : ''}
        ${(lp.what_we_do.bullets || []).length ? `<ul class="bullets">${(lp.what_we_do.bullets).map(b => `<li>${b.label ? '<strong>' + b.label + '</strong> ' : ''}${b.body}</li>`).join('')}</ul>` : ''}
      </section>
    `;
  }

  function whyChooseSection(lp) {
    if (!lp.why_choose || !lp.why_choose.length) return '';
    return `
      <section class="lp-section lp-section-with-image">
        <div class="section-content">
          <h2>Why Choose Credo Legal</h2>
          <ul class="bullets bold-label">${lp.why_choose.map(b => `<li>${b.label ? '<strong>' + b.label + '</strong> ' : ''}${b.body}</li>`).join('')}</ul>
        </div>
        ${sideImage('Section: Why Choose Credo — team of attorneys')}
      </section>
    `;
  }

  function commonProblemsSection(lp) {
    if (!lp.common_problems || !lp.common_problems.length) return '';
    return `
      <section class="lp-section lp-section-with-image">
        <div class="section-content">
          <h2>${lp.common_problems_title || 'Common Problems We See'}</h2>
          <ul class="bullets bold-label">${lp.common_problems.map(b => `<li>${b.label ? '<strong>' + b.label + '</strong> ' : ''}${b.body}</li>`).join('')}</ul>
        </div>
        ${sideImage('Section: Common Problems — documents and case files')}
      </section>
    `;
  }

  function howItWorksSection(lp) {
    if (!lp.how_it_works || !lp.how_it_works.length) return '';
    return `
      <section class="lp-section lp-howitworks">
        <h2>How Our Program Works</h2>
        <ol class="steps numbered">${lp.how_it_works.map((s, i) => `<li><span class="step-num">${i + 1}</span><div><strong>${s.title}</strong>${s.body ? ' — ' + s.body : ''}</div></li>`).join('')}</ol>
      </section>
    `;
  }

  function yourRightsSection(lp) {
    if (!lp.your_rights || (!lp.your_rights.intro && !(lp.your_rights.items || []).length)) return '';
    return `
      <section class="lp-section lp-section-with-image">
        <div class="section-content">
          <h2>Your Rights Under Federal Law</h2>
          ${lp.your_rights.intro ? `<p class="muted">${lp.your_rights.intro}</p>` : ''}
          ${(lp.your_rights.items || []).length ? `<ul class="bullets">${lp.your_rights.items.map(i => `<li>${i}</li>`).join('')}</ul>` : ''}
        </div>
        ${sideImage('Section: Your Federal Rights — law book and gavel')}
      </section>
    `;
  }

  function whoThisHelpsSection(lp) {
    if (!lp.who_this_helps || !lp.who_this_helps.length) return '';
    return `
      <section class="lp-section lp-section-with-image">
        <div class="section-content">
          <h2>Who This Program Helps</h2>
          <ul class="bullets">${lp.who_this_helps.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
        ${sideImage('Section: Who This Helps — diverse clients')}
      </section>
    `;
  }

  function faqSection(lp) {
    if (!lp.faq || !lp.faq.length) return '';
    return `
      <section class="lp-section lp-faq">
        <h2>Frequently Asked Questions</h2>
        <p class="muted small">Our Team is always happy to help.</p>
        ${lp.faq.map(f => `<details class="qa"><summary>${f.q}</summary><p class="muted">${f.a}</p></details>`).join('')}
      </section>
    `;
  }

  function bottomCTASection(lp) {
    const phone = lp.phone || '';
    const c = lp.bottom_cta || {};
    return `
      <section class="lp-bottom-cta">
        <h2>${c.headline || 'Get a Free Case Evaluation'}</h2>
        ${c.body ? `<p>${c.body}</p>` : ''}
        <a href="#form-top" class="cta primary">Get a Free Case Evaluation</a>
        ${phone ? `<div class="bottom-phone"><a href="${phoneHref(phone)}">Call ${phone}</a></div>` : ''}
        <!-- Action 13 (post-review 2026-06-02): attorney-advertising disclaimer moved from here to the global footer. -->
      </section>
    `;
  }

  function stickyCTA(phone) {
    return `
      <div class="lp-sticky-cta" aria-label="Get a free case evaluation">
        <a href="#form-top" class="cta">Get a Free Case Evaluation</a>
        ${phone ? `<a href="${phoneHref(phone)}" class="sticky-phone" aria-label="Call ${phone}">📞</a>` : ''}
        <!-- ~80px right-edge reservation for Tidio launcher per brief 4 §5.5 -->
      </div>
    `;
  }

  // ---------- LP shell ----------

  function renderLPBody(lp, opts) {
    opts = opts || {};
    const banner = opts.banner ? `<div class="lp-banner">${opts.banner}</div>` : '';
    const phone = lp.phone || '';

    return `
      <main class="lp-page">
        ${banner}

        <section class="lp-hero-row">
          <div class="lp-hero-left">
            <div class="lp-hero">
              <h1>${lp.hero_h1 || ''}</h1>
              ${lp.hero_sub ? `<p class="hero-sub">${lp.hero_sub}</p>` : ''}
              ${lp.hero_filler ? `<p class="hero-filler">${lp.hero_filler}</p>` : ''}
            </div>
            ${multiStepForm(phone)}
          </div>
          <div class="lp-hero-right">
            <div class="lp-hero-image" aria-hidden="true">
              ${heroImage(lp)}
            </div>
          </div>
        </section>

        ${trustBand()}

        ${whatWeDoSection(lp)}
        ${whyChooseSection(lp)}

        ${inlineCTA('Get a Free Case Evaluation', 'after-pair1')}

        ${commonProblemsSection(lp)}
        ${whoThisHelpsSection(lp)}

        ${inlineCTA('Speak to an Attorney Now', 'after-pair2')}

        ${howItWorksSection(lp)}

        ${inlineCTA('Start Your Journey to Debt Relief Today', 'after-process')}

        ${trustBand({ withMetrics: true })}

        ${yourRightsSection(lp)}
        ${faqSection(lp)}

        ${bottomCTASection(lp)}
      </main>

      ${stickyCTA(lp.phone)}
    `;
  }

  function renderComingSoon(lp) {
    const cluster = clusterLabel(lp.cluster);
    return `
      <main class="lp-page">
        <div class="lp-banner placeholder-banner">
          <strong>⚠ Placeholder.</strong> This page is a coming-soon stub for the ${cluster} cluster's
          ${lp.lp_name.replace('LP_', '').replace(/_/g, ' ')} angle. The original URL
          <code>${lp.live_url || ''}</code> currently returns 404. Final copy will be added once the
          live URL is provided.
        </div>

        <section class="lp-hero-row">
          <div class="lp-hero-left">
            <div class="lp-hero">
              <h1>Sued Over Medical Debt?</h1>
              <p class="hero-sub">Our Attorneys Help You Respond On Time.</p>
              <p class="hero-filler">Fill in the form below or call us for a free review of your case.</p>
            </div>
            ${multiStepForm('(347) 744-9014')}
          </div>
          <div class="lp-hero-right">
            <div class="lp-hero-image" aria-hidden="true">
              ${heroImage({ hero_h1: 'Medical debt lawsuit — coming soon' })}
            </div>
          </div>
        </section>

        ${trustBand()}

        <section class="lp-section">
          <h2>What We Do</h2>
          <p class="muted">Placeholder content. Final body copy for the deadline-urgency angle will replace this stub once the live page is restored or the original URL is provided.</p>
        </section>

        ${inlineCTA('Get a Free Case Evaluation')}

        <section class="lp-section">
          <h2>Coming soon</h2>
          <p class="muted">If you've landed here, the link you followed pointed at a page that's no longer live. While that page is rebuilt, our team can still help — pick up the phone or fill in the form and we'll get back to you.</p>
        </section>

        ${bottomCTASection({
          phone: '(347) 744-9014',
          bottom_cta: {
            headline: "Don't Miss the Deadline — Talk to an Attorney Today.",
            body: 'A free consultation takes 10 minutes. We can tell you whether the lawsuit has problems before you respond.',
          },
        })}
      </main>

      ${stickyCTA('(347) 744-9014')}
    `;
  }

  function renderLP(slug, base) {
    base = base || '../../';
    // Action 15 (post-review 2026-06-02): ?borders=off query string toggles the
    // no-border comparison treatment for Vernon's note.
    try {
      const params = new URLSearchParams(window.location.search || '');
      if (params.get('borders') === 'off') {
        document.documentElement.setAttribute('data-borders', 'off');
      }
    } catch (e) {}
    const lp = getLP(slug);
    const app = document.getElementById('app');
    if (!lp) {
      app.innerHTML = renderHeader(base) + '<main class="lp-page"><div class="lp-banner placeholder-banner">LP not found: <code>' + slug + '</code></div></main>' + renderFooter(base) + renderMobileOverlay(base);
      return;
    }

    // Set the document title to the captured browser_title where available
    if (lp.browser_title) document.title = lp.browser_title + ' | Credo Legal';

    let body;
    if (lp.status === '404') {
      body = renderComingSoon(lp);
    } else if (lp.status === 'shared') {
      const canonical = resolveContent(lp);
      const canonicalCluster = clusterLabel(canonical.cluster || lp.cluster);
      const banner = `
        <strong>Shared URL.</strong> This LP variant (${lp.lp_name.replace('LP_', '').replace(/_/g, ' ')})
        shares the live URL <code>${lp.live_url || ''}</code> with the canonical
        ${canonicalCluster} capture. Content shown below is from the canonical page; the angle differentiation
        drafted in the campaign plan is not currently reflected on the live site.
      `;
      body = renderLPBody(canonical, { banner });
    } else {
      body = renderLPBody(lp);
    }

    app.innerHTML = renderHeader(base) + body + renderFooter(base) + renderMobileOverlay(base);

    // Wire mobile overlay
    const menuBtn = document.querySelector('#menu-btn');
    const overlay = document.querySelector('#nav-overlay');
    if (menuBtn && overlay) {
      menuBtn.addEventListener('click', () => overlay.classList.add('open'));
      overlay.querySelector('.close').addEventListener('click', () => overlay.classList.remove('open'));
    }

    // Tidio same-row positioning per brief 4 §5.5 (no-op if Tidio not loaded)
    function setTidioOffsets() {
      if (window.tidioChatApi && typeof window.tidioChatApi.setBottomOffset === 'function') {
        window.tidioChatApi.setBottomOffset(0);
        window.tidioChatApi.setRightOffset(12);
      }
    }
    document.addEventListener('tidioChat-ready', setTidioOffsets);
    setTimeout(setTidioOffsets, 1500);
  }

  // Renders a cluster's LP index — a list of all LPs in the cluster with their angles
  function renderClusterIndex(clusterKey, base) {
    base = base || '../../';
    const cluster = window.CredoNav.CLUSTERS[clusterKey];
    const app = document.getElementById('app');
    if (!cluster) {
      app.innerHTML = '<p>Unknown cluster: ' + clusterKey + '</p>';
      return;
    }

    document.title = cluster.label + ' Services | Credo Legal';

    const lps = cluster.items.map(it => {
      // Map draft name → our slug
      const draftSlug = it.lp ? it.lp.toLowerCase()
        .replace(/^lp_/, '')
        .replace(/ - dyn$/, '-dyn')
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/_/g, '-')
        .replace(/-+/g, '-')
        .toLowerCase() : null;
      const lp = draftSlug && window.LP_CONTENT[draftSlug];
      return { item: it, slug: draftSlug, lp };
    });

    const tiles = lps.map(({ item, slug, lp }) => {
      const status = lp ? lp.status : 'unknown';
      const statusBadge = status === '404' ? '<span class="status-badge red">404</span>'
        : status === 'shared' ? '<span class="status-badge amber">shared URL</span>'
        : '';
      const href = slug ? `${slug}.html` : '#';
      const heroLine = lp && lp.hero_h1 ? `<p class="tile-h1">${lp.hero_h1}</p>` : '';
      const angle = item.angle ? `<span class="angle-pill angle-${item.angle}">${item.angle}</span>` : '';
      return `
        <a class="cluster-lp-tile" href="${href}">
          <div class="tile-top">${angle}${statusBadge}</div>
          <div class="tile-label">${item.label}</div>
          ${heroLine}
        </a>
      `;
    }).join('');

    app.innerHTML = renderHeader(base) + `
      <main class="lp-page">
        <section class="lp-hero">
          <div class="eyebrow">${cluster.label}</div>
          <h1>How we help with ${cluster.label.toLowerCase()}</h1>
          <p class="muted">Pick the closest fit. Each option below routes to a landing page tuned to that specific angle.</p>
        </section>

        ${trustBand()}

        <section class="cluster-lp-grid">
          ${tiles}
        </section>
      </main>
    ` + renderFooter(base) + renderMobileOverlay(base);

    const menuBtn = document.querySelector('#menu-btn');
    const overlay = document.querySelector('#nav-overlay');
    if (menuBtn && overlay) {
      menuBtn.addEventListener('click', () => overlay.classList.add('open'));
      overlay.querySelector('.close').addEventListener('click', () => overlay.classList.remove('open'));
    }
  }

  window.renderLP = renderLP;
  window.renderClusterIndex = renderClusterIndex;
  // Inner helpers used by variant-template.js to embed LP body content under
  // a variant-specific chrome (header / footer rendered by the variant).
  window.__renderLPInnerBody = renderLPBody;
  window.__renderLPInnerComingSoon = renderComingSoon;
  window.__imagePlaceholder = imagePlaceholder;
  window.__renderTrustBand = trustBand;
  window.__renderMultiStepForm = multiStepForm;
})();
