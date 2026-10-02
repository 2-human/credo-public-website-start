/* ==========================================================================
   Credo Legal — FDCPA Harassment LP
   Vanilla render + multi-step form controller.

   Ported from the Claude Design prototype (React + Babel) to dependency-free
   vanilla JS for production. DOM structure and class names are preserved
   verbatim, so tokens.css + lp.css produce a pixel-faithful result.

   Entry pages call:  CredoLP.render({ variant: "a" | "c", hero: "portrait" | "watercolor" });
   ========================================================================== */
(function () {
  "use strict";

  var C = window.CREDO;
  /* Asset base (added 2026-10-02): pages outside this folder (the website prototype) set
   * window.CREDO_ASSET_BASE to the folder that holds assets/. Empty for the LP prototype. */
  var AB = (window.CREDO_ASSET_BASE || "") + "assets/";

  /* ---- inline SVG icons (Lucide-style, stroke currentColor) -------------- */
  var Ico = {
    check: function (size) {
      size = size || 24;
      return '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
    },
    arrow: '<span class="ar">→</span>',
    phone: function (size) {
      size = size || 24;
      return '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';
    },
    chat: function (size) {
      size = size || 24;
      return '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';
    },
    scale: function (size) {
      size = size || 24;
      return '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M7 7h10M5 7l-2.5 6a3.5 3.5 0 0 0 7 0L7 7zM17 7l-2.5 6a3.5 3.5 0 0 0 7 0L19 7zM7 21h10"/></svg>';
    },
    close: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
  };

  /* ---- small helpers ----------------------------------------------------- */
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  // 2026-06-23: renderH1 reads C.hero.h1 (a 3-part array: prefix / emphasis / suffix)
  // and produces "prefix<em>middle</em>suffix". Fixes a long-standing bug where the
  // H1 in VariantA + VariantC was hardcoded to the rights-education champion copy
  // and never read C.hero.h1 — every variant therefore rendered the same H1
  // regardless of the per-LP content file. See content-*.js for the per-LP h1.
  function renderH1(parts) {
    if (!Array.isArray(parts) || parts.length < 3) {
      // Defensive fallback for legacy content files without an h1 array.
      return esc(String(parts || "Our Attorneys Can Help."));
    }
    return esc(parts[0]) + "<em>" + esc(parts[1]) + "</em>" + esc(parts[2]);
  }
  // 2026-06-23: heroEyebrow reads C.hero.eyebrow when present, falling back
  // to the prototype's original hard-coded "§ 00 · HARASSMENT · FDCPA" so
  // the rights-education champion variants don't regress. data-labels="plain"
  // hides this whole div anyway on the new noborders variants.
  function heroEyebrow() {
    var eb = (C.hero && C.hero.eyebrow) ? C.hero.eyebrow : "§ 00 · " + (C.cluster || "HARASSMENT").toUpperCase() + " · " + (C.statute || "FDCPA");
    return '<div class="hero-no" data-slot="hero.eyebrow"><span>' + esc(eb) + '</span></div>';
  }
  function pad2(i) { return String(i).padStart(2, "0"); }
  function heroStyle() {
    return window.CREDO_HERO_STYLE || document.documentElement.getAttribute("data-hero-style") || "portrait";
  }
  /* Subject switches: pick the man (m) or woman (w) photoshoot for hero / whoHelps.
   * Priority: ?hero=m / ?who=m query param, then data-* attr, then global, default 'w'.
   * Added 2026-06-24 to support the man/woman image-mix variants on the review hub. */
  function _qsHas(key, val) {
    var qs = (window.location.search || "").toLowerCase();
    var pair = key + "=" + val;
    return qs.indexOf(pair) >= 0;
  }
  function heroSubject() {
    if (_qsHas("hero", "m")) return "m";
    if (_qsHas("hero", "w")) return "w";
    return window.CREDO_HERO_SUBJECT || document.documentElement.getAttribute("data-hero-subject") || "w";
  }
  function whoSubject() {
    if (_qsHas("who", "m")) return "m";
    if (_qsHas("who", "w")) return "w";
    return window.CREDO_WHO_SUBJECT || document.documentElement.getAttribute("data-who-subject") || "w";
  }

  /* Variant dimensions API (added 2026-06-24). The review widget reads
   * window.CREDO_VARIANT_DIMENSIONS to scope comments left on variant-tagged
   * elements (data-variant-scope="hero"|"who"|…) to the variant they were
   * left in. Adding a new dimension here + tagging the corresponding element
   * is all it takes to extend scoping to layout/copy/etc. A/B/C variants. */
  window.CREDO_VARIANT_DIMENSIONS = window.CREDO_VARIANT_DIMENSIONS || {};
  window.CREDO_VARIANT_DIMENSIONS.hero = heroSubject;
  window.CREDO_VARIANT_DIMENSIONS.who  = whoSubject;

  /* Slot catalog for the cross-LP comment feature (added 2026-06-30).
   * Lists every dotted-path slot this LP's renderer emits via data-slot=…
   * attributes. The review widget reads window.CREDO_SLOTS to know which
   * slots exist on this page (so it can show the right counts in the
   * composer scope chooser, and so it can suppress "all pages with X"
   * when a particular LP doesn't render X — e.g. an LP without a 6th FAQ
   * entry doesn't get faq[5].answer).
   *
   * The list is enumerated dynamically from the current C.* arrays so each
   * LP exposes exactly what it renders. Bullet/list lengths come from the
   * content file, not hardcoded here. */
  function buildSlotCatalog() {
    var slots = [
      'hero.eyebrow', 'hero.h1', 'hero.lede', 'hero.filler',
      'reviews.bbb', 'reviews.trustpilot', 'reviews.google',
      'whatWeDo.headline', 'whatWeDo.intro',
      'rights.intro',
      'bottomCta.headline', 'bottomCta.body', 'bottomCta.cta',
      'disclaimer'
    ];
    var i;
    if (C.metrics) for (i = 0; i < C.metrics.length; i++) slots.push('metrics[' + i + ']');
    if (C.whatWeDo && C.whatWeDo.bullets) for (i = 0; i < C.whatWeDo.bullets.length; i++) slots.push('whatWeDo.bullets[' + i + ']');
    if (C.whyChoose) for (i = 0; i < C.whyChoose.length; i++) { slots.push('whyChoose[' + i + '].label'); slots.push('whyChoose[' + i + '].body'); }
    if (C.commonProblems) for (i = 0; i < C.commonProblems.length; i++) { slots.push('commonProblems[' + i + '].label'); slots.push('commonProblems[' + i + '].body'); slots.push('commonProblems[' + i + '].statute'); }
    if (C.howItWorks) for (i = 0; i < C.howItWorks.length; i++) { slots.push('howItWorks[' + i + '].label'); slots.push('howItWorks[' + i + '].body'); slots.push('howItWorks[' + i + '].timeMarker'); }
    if (C.rights && C.rights.items) for (i = 0; i < C.rights.items.length; i++) { slots.push('rights.items[' + i + '].cite'); slots.push('rights.items[' + i + '].label'); slots.push('rights.items[' + i + '].text'); slots.push('rights.items[' + i + '].ex'); }
    if (C.whoHelps) for (i = 0; i < C.whoHelps.length; i++) slots.push('whoHelps[' + i + ']');
    if (C.faq) for (i = 0; i < C.faq.length; i++) { slots.push('faq[' + i + '].question'); slots.push('faq[' + i + '].answer'); }
    return slots;
  }
  /* Smart-default scope: slots whose prefix is in this list default to "all
   * pages with this slot" in the composer (brand-wide stats, disclaimers,
   * review marks). Everything else defaults to "this page only". Reviewer
   * can always override either way. */
  var BROADCAST_DEFAULT_PREFIXES = ['metrics', 'trust', 'disclaimer', 'reviews'];

  function fmtAmt(v) { return v >= 100000 ? "$100,000+" : "$" + Number(v).toLocaleString(); }

  /* Auto-format a date of birth as MM/DD/YYYY. Inserts "/" after the MM and DD
     pairs while typing forward; leaves the field alone on backspace/delete. */
  function formatDob(value, isDelete) {
    var d = value.replace(/\D/g, "").slice(0, 8);
    var out;
    if (d.length > 4) out = d.slice(0, 2) + "/" + d.slice(2, 4) + "/" + d.slice(4);
    else if (d.length > 2) out = d.slice(0, 2) + "/" + d.slice(2);
    else out = d;
    if (!isDelete) {
      if (d.length === 2) out = d + "/";
      else if (d.length === 4) out = d.slice(0, 2) + "/" + d.slice(2, 4) + "/";
    }
    return out;
  }

  function scrollToForm() {
    var el = document.getElementById("lead-form");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  }

  /* ---- shared form state (inline step-1 + overlay stay in sync) ---------- */
  // Action 4 (post-review 2026-06-02): Step 3 trimmed. Required = first + last + phone + email + state.
  // Dropped: altPhone. Optional (marked '(optional)'): address, city, zip, dob.
  // Slider start: 8000 per user direction (was 15000).
  var state = {
    open: false,
    step: 0,
    amount: 8000,
    // 2026-06-04: sit.type is an array now (multi-select). Other situation fields stay scalar.
    sit: { count: "", type: [], stage: "", security: "", more: "" },
    // 2026-06-04 (Sona's progressive-profiling note): lead on name/phone/email/state/ZIP only.
    // address, city, DOB captured later during the call or client onboarding.
    fields: { first: "", last: "", phone: "", email: "", state: "", zip: "" }
  };

  /* ======================================================================
     SECTION MARKUP (returns HTML strings; classes identical to prototype)
     ====================================================================== */

  /* Site navigation (added 2026-10-02, website prototype). When the content object carries
   * C.site = { home, links: [{ text, href } | { text, items: [{ text, href, current }] }], cta: { href } },
   * the nav shows those links (with a dropdown and a mobile menu) instead of the landing page's
   * in-page anchors. Landing pages have no C.site and render exactly as before. */
  function SiteLinks(S, inMenu) {
    return (S.links || []).map(function (l) {
      if (l.items) {
        /* In the mobile menu the group is always open, so its title is a plain label, not a button. */
        var t = inMenu
          ? '<span class="nav-dd-t">' + esc(l.text) + '</span>'
          : '<button type="button" class="nav-dd-t" aria-haspopup="true" aria-expanded="false">' + esc(l.text) + ' <span aria-hidden="true">▾</span></button>';
        return '<div class="nav-dd">' + t +
          '<div class="nav-dd-m">' + l.items.map(function (it) {
            return '<a href="' + esc(it.href) + '"' + (it.current ? ' aria-current="page"' : '') + '>' + esc(it.text) + '</a>';
          }).join("") + '</div></div>';
      }
      return '<a href="' + esc(l.href) + '"' + (l.current ? ' aria-current="page"' : '') + '>' + esc(l.text) + '</a>';
    }).join("");
  }
  function Nav() {
    var S = C.site;
    var links = S ? SiteLinks(S) :
      '<a href="#whatwedo">What we do</a>' +
      '<a href="#why">Why us</a>' +
      '<a href="#process">How it works</a>' +
      '<a href="#rights">Your rights</a>' +
      '<a href="#faq">FAQ</a>';
    var cta = (S && S.cta && S.cta.href)
      ? '<a href="' + esc(S.cta.href) + '" class="nav-cta">Free review →</a>'
      : '<a href="#lead-form" data-scrollform class="nav-cta">Free review →</a>';
    var menu = S
      ? '<details class="nav-menu"><summary aria-label="Menu">Menu</summary><div class="nav-menu-m">' + SiteLinks(S, true) + '</div></details>'
      : '';
    return '' +
      '<nav class="nav' + (S ? ' nav-site' : '') + '"><div class="container nav-inner">' +
        '<a href="' + (S ? esc(S.home) : '#top') + '" class="brand"><img src="' + AB + 'credo-logo.png" alt="Credo Legal, consumer-debt defense law firm"/></a>' +
        '<div class="nav-right">' +
          '<div class="nav-links">' + links + '</div>' +
          '<a href="' + C.phoneHref + '" class="nav-phone"><span class="nav-phone-pre">Call us: </span>' + C.phone + '</a>' +
          cta + menu +
        '</div>' +
      '</div></nav>';
  }

  function SectionNo(no, label) {
    return '<div class="section-no"><span>§ ' + no + ' · ' + label + '</span></div>';
  }

  /* hero figure — two systems (portrait / watercolor) × two subjects (w / m); optional tight crop.
   * Slug convention (added 2026-06-24):
   *   default (woman): harassment-portrait, harassment-portrait-wc, *-tight variants
   *   man variant:     harassment-portrait-m, harassment-portrait-wc-m, *-m-tight variants
   */
  var HERO_ART = {
    portrait: {
      slug: "harassment-portrait",
      altW: "Sarah stands at her kitchen counter, arms crossed, looking out the window as her phone rings face-down beside her.",
      altM: "Michael stands at his kitchen counter, arms crossed, looking out the window as his phone rests face-down beside an opened collection letter and a deep-red mug."
    },
    watercolor: {
      slug: "harassment-portrait-wc",
      altW: "Watercolor illustration: a woman stands at her kitchen counter, arms crossed, looking out the window, her phone face-down beside an opened collection letter and a red mug.",
      altM: "Watercolor illustration: a man stands at his kitchen counter, arms crossed, looking out the window, his phone face-down beside an opened collection letter and a red mug."
    }
  };
  function HeroFigure(tight) {
    var hs = heroStyle();
    var subj = heroSubject(); // "w" or "m"
    var a = HERO_ART[hs] || HERO_ART.portrait;
    // base slug without -tight; inject -m before -tight if subject is m.
    // base: harassment-portrait | harassment-portrait-wc
    // + man: harassment-portrait-m | harassment-portrait-wc-m
    // + tight: same with -tight appended (always last)
    var base = a.slug + (subj === "m" ? "-m" : "");
    var slug = tight ? base + "-tight" : base;
    var alt = subj === "m" ? a.altM : a.altW;
    return '' +
      '<div class="hero-figure" data-style="' + hs + '" data-subject="' + subj + '" data-variant-scope="hero">' +
        '<picture>' +
          '<source srcset="' + AB + slug + '-960.webp" media="(min-width: 768px)" type="image/webp"/>' +
          '<source srcset="' + AB + slug + '-480.webp" type="image/webp"/>' +
          '<img src="' + AB + slug + '-480.jpg" loading="eager" decoding="async" alt="' + esc(alt) + '"/>' +
        '</picture>' +
      '</div>';
  }

  /* right-column body figure — photo on portrait site, watercolor on wc site */
  function BodyFig(kind) {
    var portrait = heroStyle() === "portrait";
    var map = {
      what: { wc: "body-what", ph: "body-what-photo",
        altWc: "Watercolor illustration: hands reviewing an opened collection letter and a notepad at a kitchen table.",
        altPh: "A person at a wooden table reviewing an opened letter and writing on a notepad, a deep-red mug beside them." },
      why: { wc: "body-why", ph: "body-why-photo",
        altWc: "Watercolor illustration: an attorney's desk with a legal pad, fountain pen, lamp, and a law book with a red ribbon marker.",
        altPh: "An attorney's desk with a legal pad, fountain pen, banker's lamp, and a law book with a red ribbon marker." },
      who: { wc: "who-hope", ph: "who-onphone",
        altWc: "Watercolor illustration: a woman at her kitchen counter on the phone with her attorney, a cease-letter and law book beside her in warm morning light.",
        altPh: "A woman standing in her kitchen on the phone with her attorney, holding a notepad in warm morning light.",
        altWcM: "Watercolor illustration: a man at his kitchen counter on the phone with his attorney, a cease-letter and book beside him in warm morning light.",
        altPhM: "A man standing in his kitchen on the phone with his attorney, holding paperwork, an open law book on the counter in warm morning light." }
    };
    var m = map[kind];
    var slug = portrait ? m.ph : m.wc;
    var alt = portrait ? m.altPh : m.altWc;
    // Subject swap for the "who this helps" image (added 2026-06-24).
    // who-onphone → who-onphone-m | who-hope → who-hope-m. 'what' + 'why' unchanged
    // (those are still neutral hands/desk scenes — no person in shot to swap yet).
    if (kind === "who" && whoSubject() === "m") {
      slug = slug + "-m";
      alt = portrait ? m.altPhM : m.altWcM;
    }
    /* Only the 'who' body figure swaps with whoSubject; declare variant-scope
     * accordingly so comments on the 'who' image are scoped to the current
     * who=w|m. 'what' + 'why' images stay neutral across variants. */
    var scopeAttr = (kind === 'who') ? ' data-variant-scope="who"' : '';
    return '' +
      '<div class="body-fig has-img"' + scopeAttr + '>' +
        '<picture>' +
          '<source srcset="' + AB + slug + '-960.webp" media="(min-width: 768px)" type="image/webp"/>' +
          '<source srcset="' + AB + slug + '-480.webp" type="image/webp"/>' +
          '<img src="' + AB + slug + '-480.jpg" alt="' + esc(alt) + '" loading="lazy" decoding="async"/>' +
        '</picture>' +
      '</div>';
  }

  /* ---- multi-step form bodies ------------------------------------------- */
  function StepIndicator(step) {
    return '<div class="form-steps">' + C.form.steps.map(function (s, i) {
      var cls = "st" + (i === step ? " active" : "") + (i < step ? " done" : "");
      var mark = i < step ? Ico.check(12) : s.n;
      return '<div class="' + cls + '"><span class="stn">' + mark + '</span><span class="stl">' + s.label + '</span></div>';
    }).join("") + '</div>';
  }

  function StepDebt() {
    return '' +
      '<p class="q">' + C.form.debtQuestion + '</p>' +
      '<p class="qsub">An estimate is fine. It helps us understand your situation.</p>' +
      '<div class="amount" data-amount>' + fmtAmt(state.amount) + '</div>' +
      '<input class="slider" type="range" min="0" max="100000" step="1000" value="' + state.amount + '" aria-label="Estimated amount owed" data-slider/>' +
      '<div class="slider-ends"><span>$0</span><span>$100,000+</span></div>';
  }

  function StepSituation() {
    var s = C.form.situationFields;
    function sel(k) {
      var opts = '<option value="">' + s[k].placeholder + '</option>' +
        s[k].options.map(function (o) {
          return '<option value="' + esc(o) + '"' + (state.sit[k] === o ? " selected" : "") + '>' + o + '</option>';
        }).join("");
      return '<div><label>' + s[k].label + '</label><select data-sit="' + k + '">' + opts + '</select></div>';
    }
    // 2026-06-04 (revised): multi-select rendered as a dropdown field that mirrors
    // the look of the single-select <select> dropdowns. Trigger shows the placeholder
    // when empty, the comma-joined selection when not. Panel reveals the checkboxes.
    function multi(k) {
      var f = s[k];
      var selected = state.sit[k] || [];
      var display = selected.length === 0
        ? '<span class="multi-dd-placeholder">' + esc(f.placeholder) + '</span>'
        : '<span class="multi-dd-selected">' + esc(selected.join(", ")) + '</span>';
      var boxes = f.options.map(function (o) {
        var checked = selected.indexOf(o) !== -1;
        return '<label class="multi-opt' + (checked ? " is-checked" : "") + '">' +
          '<input type="checkbox" data-multi="' + k + '" value="' + esc(o) + '"' + (checked ? " checked" : "") + '/>' +
          '<span class="multi-box" aria-hidden="true"></span>' +
          '<span class="multi-lbl">' + esc(o) + '</span>' +
          '</label>';
      }).join("");
      return '<div><label>' + f.label + '</label>' +
        '<div class="multi-dd" data-multi-dd="' + k + '">' +
          '<button type="button" class="multi-dd-trigger" data-multi-toggle="' + k + '" aria-haspopup="listbox" aria-expanded="false">' +
            display +
            '<span class="multi-dd-caret" aria-hidden="true">' +
              '<svg viewBox="0 0 12 8" width="12" height="8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 1 6 7 11 1"/></svg>' +
            '</span>' +
          '</button>' +
          '<div class="multi-dd-panel" role="listbox" aria-multiselectable="true" hidden>' + boxes + '</div>' +
        '</div>' +
        '</div>';
    }
    return '' +
      '<p class="q">Tell us about the debt.</p>' +
      '<p class="qsub">A few details help an attorney assess your case before the call.</p>' +
      '<div class="field row2">' + sel("count") + multi("type") + '</div>' +
      '<div class="field row2">' + sel("stage") + sel("security") + '</div>' +
      '<div class="field"><label>' + s.more.label + '</label>' +
        '<textarea data-sit="more" placeholder="' + esc(s.more.placeholder) + '">' + esc(state.sit.more) + '</textarea></div>';
  }

  function StepDetails() {
    var L = C.form.detailLabels;
    function inp(k, attrs) {
      attrs = attrs || "";
      return '<input value="' + esc(state.fields[k]) + '" placeholder="' + esc(L[k]) + '" data-field="' + k + '" ' + attrs + '/>';
    }
    var stateOpts = '<option value="">Select state</option>' + C.form.states.map(function (st) {
      return '<option value="' + esc(st) + '"' + (state.fields.state === st ? " selected" : "") + '>' + st + '</option>';
    }).join("");
    return '' +
      '<p class="q">Where should an attorney reach you?</p>' +
      '<p class="qsub">An attorney reviews every case. We never sell your information.</p>' +
      // 2026-06-04 (Sona's progressive-profiling final): name + phone + email + state + ZIP only.
      // Address, city, DOB captured later during the call or client onboarding.
      '<div class="field row2"><div><label>' + L.first + ' *</label>' + inp("first") + '</div><div><label>' + L.last + ' *</label>' + inp("last") + '</div></div>' +
      '<div class="field row2"><div><label>' + L.phone + ' *</label>' + inp("phone", 'inputmode="tel"') + '</div><div><label>' + L.email + ' *</label>' + inp("email", 'inputmode="email"') + '</div></div>' +
      '<div class="field row2"><div><label>' + L.state + ' *</label>' +
        '<select data-field="state">' + stateOpts + '</select></div><div><label>' + L.zip + ' *</label>' + inp("zip", 'inputmode="numeric" maxlength="5"') + '</div></div>' +
      '<div class="form-exclusion">' + C.form.stateExclusion + '</div>';
  }

  /* inline step-1 card. Continue opens the overlay at step 2. */
  function LeadForm(opts) {
    opts = opts || {};
    var id = opts.id || "lead-form";
    var headLabel = opts.headLabel || "FREE CASE EVALUATION";
    return '' +
      '<div class="form" id="' + id + '">' +
        '<div class="form-head"><span>' + headLabel + '</span><span class="red">NO UPFRONT COST</span></div>' +
        StepIndicator(0) +
        '<div class="form-body">' + StepDebt() + '</div>' +
        '<div class="form-foot">' +
          '<div class="form-nav">' +
            '<button class="btn-stamp full" data-form-continue>Continue ' + Ico.arrow + '</button>' +
          '</div>' +
          // Action 13 (post-review 2026-06-02): disclaimer removed from in-form footer.
          // Compliance kept via the global page disclaimer at line ~402.
        '</div>' +
      '</div>';
  }

  /* full-screen overlay wizard (steps 1–3). Covers the nav. */
  function overlayMarkup() {
    var heads = ["YOUR DEBT", "YOUR SITUATION", "YOUR DETAILS"];
    var titles = ["Let's start with the basics.", "Tell us what's been happening.", "How do we reach you?"];
    var body = state.step === 0 ? StepDebt() : state.step === 1 ? StepSituation() : StepDetails();
    var nav = '<button class="btn-ghost" data-fo-back>' + (state.step > 0 ? "Back" : "Close") + '</button>';
    if (state.step < 2) {
      nav += '<button class="btn-stamp" data-fo-next>Continue ' + Ico.arrow + '</button>';
    } else {
      nav += '<button class="btn-stamp" data-fo-submit' + (canSubmit() ? "" : " disabled") + '>' + C.form.submit + ' ' + Ico.arrow + '</button>';
    }
    return '' +
      '<div class="form-overlay" role="dialog" aria-modal="true" aria-label="Free case evaluation">' +
        '<div class="fo-bar">' +
          '<span class="fo-brand"><img src="' + AB + 'credo-logo.png" alt="Credo Legal"/></span>' +
          '<span class="fo-step">FREE CASE EVALUATION · STEP ' + (state.step + 1) + ' OF 3</span>' +
          '<button class="fo-close" data-fo-close aria-label="Close">' + Ico.close + '</button>' +
        '</div>' +
        '<div class="fo-body">' +
          '<div class="fo-card">' +
            '<h2 class="fo-title">' + titles[state.step] + '</h2>' +
            '<div class="form">' +
              '<div class="form-head"><span>' + heads[state.step] + '</span><span class="red">NO UPFRONT COST</span></div>' +
              StepIndicator(state.step) +
              '<div class="form-body">' + body + '</div>' +
              '<div class="form-foot">' +
                '<div class="form-nav">' + nav + '</div>' +
                // Action 13 (post-review 2026-06-02): disclaimer removed from in-form footer.
          // Compliance kept via the global page disclaimer at line ~402.
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  function canSubmit() {
    var f = state.fields;
    // 2026-06-04: ZIP added per Sona's progressive-profiling note. Five required fields.
    var zipOk = /^\d{5}$/.test((f.zip || "").trim());
    return !!(f.first.trim() && f.last.trim() && f.phone.trim() && f.email.trim() && f.state && zipOk);
  }

  /* ---- review badges (BBB / Trustpilot / Google) + headline metrics ----- */
  function BBBMark() {
    return '<svg class="logo" viewBox="0 0 56 56" width="42" height="42" aria-hidden="true">' +
      '<path d="M28 3 L49 12 L45 36 Q41 48 28 53 Q15 48 11 36 L7 12 Z" fill="#0e4684"/>' +
      '<text x="28" y="27" text-anchor="middle" font-family="Hanken Grotesk, sans-serif" font-size="15" font-weight="800" fill="#fff" letter-spacing="-0.5">BBB</text>' +
      '<text x="28" y="42" text-anchor="middle" font-family="Hanken Grotesk, sans-serif" font-size="13" font-weight="700" fill="#fff">A</text>' +
      '</svg>';
  }
  function TrustpilotMark() {
    return '<svg class="logo" viewBox="0 0 24 24" width="34" height="34" aria-hidden="true">' +
      '<rect width="24" height="24" rx="3" fill="#00b67a"/>' +
      '<polygon points="12,4 14.3,9.3 20,9.7 15.6,13.4 17,19 12,15.7 7,19 8.4,13.4 4,9.7 9.7,9.3" fill="#fff"/>' +
      '</svg>';
  }
  function GoogleMark() {
    return '<svg class="logo" viewBox="0 0 48 48" width="32" height="32" aria-hidden="true">' +
      '<path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"/>' +
      '<path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>' +
      '<path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.5-5.2l-6.2-5.3C29.2 35 26.7 36 24 36c-5.3 0-9.7-3.1-11.3-8l-6.5 5C9.6 39.6 16.2 44 24 44z"/>' +
      '<path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4 5.5l6.2 5.3C39.3 41.5 44 38 44 24c0-1.3-.1-2.3-.4-3.5z"/>' +
      '</svg>';
  }
  function Stars(n) {
    var out = '<span class="stars" aria-hidden="true">';
    for (var i = 0; i < 5; i++) {
      out += '<svg viewBox="0 0 20 20" width="12" height="12"><polygon points="10,1 12.6,7 19,7.6 14,11.8 15.6,18 10,14.6 4.4,18 6,11.8 1,7.6 7.4,7" fill="' + (i < Math.round(n) ? "#e0a92e" : "#d6dae0") + '"/></svg>';
    }
    return out + '</span>';
  }
  function ReviewBar(metrics) {
    var r = C.reviews;
    var rows = '' +
      '<div class="rev-row">' +
        /* 2026-10-02: order and set as on Webflow (Trustpilot widget, BBB seal); the Google badge is not on the live pages. */
        '<div class="rev" data-slot="reviews.trustpilot">' + TrustpilotMark() + '<div><div class="rv-title">' + r.trustpilot.title + ' ' + Stars(4.5) + '</div><div class="rv-meta">' + r.trustpilot.meta + '</div></div></div>' +
        '<div class="rev" data-slot="reviews.bbb">' + BBBMark() + '<div><div class="rv-title">' + r.bbb.title + '</div><div class="rv-meta">' + r.bbb.meta + '</div></div></div>' +
      '</div>';
    var mrow = "";
    if (metrics) {
      mrow = '<div class="metric-row">' + C.metrics.map(function (m, i) {
        return '<div class="m" data-slot="metrics[' + i + ']"><span class="m-n">' + m[0] + '</span><span class="m-l">' + m[1] + '</span></div>';
      }).join("") + '</div>';
    }
    return '<div class="reviewbar">' + rows + mrow + '</div>';
  }

  /* ---- body sections ----------------------------------------------------
   * data-slot tags (added 2026-06-30): every leaf that carries a piece of
   * authored copy is tagged with its dotted path under C.*. The review widget
   * uses these to scope cross-LP comments (apply to this page / all pages
   * with this slot / a subset). Tagging is leaf-level so a comment on a
   * single FAQ answer doesn't drag the whole FAQ along with it. */
  function WhatWeDo() {
    var headline = C.whatWeDo.headline || C.whatWeDo.intro;
    var paragraph = C.whatWeDo.headline ? '<p class="wwd-lede" data-slot="whatWeDo.intro">' + C.whatWeDo.intro + '</p>' : '';
    return '' +
      '<div class="eyebrow">What we do</div>' +
      '<h2 class="h2" data-slot="whatWeDo.headline">' + headline + '</h2>' +
      paragraph +
      '<ol class="claim-list">' + C.whatWeDo.bullets.map(function (b, i) {
        return '<li data-slot="whatWeDo.bullets[' + i + ']"><span class="cn">' + pad2(i + 1) + '</span><span>' + b + '</span></li>';
      }).join("") + '</ol>';
  }
  function WhyChoose() {
    return '' +
      '<div class="eyebrow">Why Credo</div>' +
      // 2026-06-30 (Sona, h2-2): "not a fact sheet" → "not debt consolidation".
      // Applies to every LP because this heading is rendered here, not in the
      // per-LP content files.
      '<h2 class="h2">Legal advice, not debt consolidation.</h2>' +
      '<ul class="why" style="margin-top:28px">' + C.whyChoose.map(function (row, i) {
        return '<li><p class="wl" data-slot="whyChoose[' + i + '].label">' + row[0] + '</p><p class="wb" data-slot="whyChoose[' + i + '].body">' + row[1] + '</p></li>';
      }).join("") + '</ul>';
  }
  function CommonProblems(cols3) {
    return '' +
      '<div class="eyebrow">What we see</div>' +
      '<h2 class="h2">Common problems, and the line each one crosses.</h2>' +
      '<div class="box-grid' + (cols3 ? " cols3" : "") + '" style="margin-top:28px">' + C.commonProblems.map(function (row, i) {
        return '<div class="box" id="cp-' + i + '"><div class="bmeta"><span>' + pad2(i + 1) + '</span><span data-slot="commonProblems[' + i + '].statute">' + row[2] + '</span></div><h3 data-slot="commonProblems[' + i + '].label">' + row[0] + '</h3><p data-slot="commonProblems[' + i + '].body">' + row[1] + '</p></div>';
      }).join("") + '</div>';
  }
  function HowItWorks(cols) {
    return '' +
      '<div class="eyebrow">How it works</div>' +
      '<h2 class="h2">A clear sequence, on a known timeline.</h2>' +
      '<div class="process' + (cols ? " cols" : "") + '" style="margin-top:28px">' + C.howItWorks.map(function (row, i) {
        return '<div class="step"><div class="n">' + pad2(i + 1) + '</div><div><h3 data-slot="howItWorks[' + i + '].label">' + row[0] + '</h3><p data-slot="howItWorks[' + i + '].body">' + row[1] + '</p></div></div>';   /* time tags (row[2]) removed 2026-10-02, as on Webflow (PBI-32) */
      }).join("") + '</div>';
  }
  function Rights() {
    return '' +
      '<div class="eyebrow">Your rights</div>' +
      '<h2 class="h2" data-slot="rights.intro">' + C.rights.intro + '</h2>' +
      '<div class="rights" style="margin-top:28px">' + C.rights.items.map(function (r, i) {
        return '<div class="right">' +
          '<div class="gut"><span data-slot="rights.items[' + i + '].cite">' + r.cite + '</span><span class="b" data-slot="rights.items[' + i + '].label">' + r.label + '</span></div>' +
          '<div><h3 data-slot="rights.items[' + i + '].text">' + r.text + '</h3><div class="ex"><div class="exl">' + r.exLabel + '</div><p data-slot="rights.items[' + i + '].ex">' + r.ex + '</p></div></div>' +
        '</div>';
      }).join("") + '</div>';
  }
  function WhoHelps() {
    return '' +
      '<div class="eyebrow">Who this helps</div>' +
      '<h2 class="h2">You\'ll recognize your own situation here.</h2>' +
      '<ul class="who-list" style="margin-top:28px">' + C.whoHelps.map(function (w, i) {
        return '<li data-slot="whoHelps[' + i + ']"><span class="wn">' + pad2(i + 1) + '</span><span>' + w + '</span></li>';
      }).join("") + '</ul>';
  }
  function FAQ() {
    return '' +
      '<div class="eyebrow">Frequently asked</div>' +
      '<h2 class="h2">Questions, answered plainly.</h2>' +
      '<div class="faq faq-static" style="margin-top:28px">' + C.faq.map(function (qa, i) {
        return '<div class="qa open" id="faq-' + i + '"><div class="q" data-slot="faq[' + i + '].question">' + qa[0] + '</div><div class="a"><p data-slot="faq[' + i + '].answer">' + qa[1] + '</p></div></div>';
      }).join("") + '</div>';
  }
  function InlineCTA(label) {
    return '<div class="inline-cta"><button class="btn-stamp" data-scrollform>' + (label || "Get a free case evaluation") + ' ' + Ico.arrow + '</button></div>';
  }
  function BottomCTA() {
    return '' +
      '<section class="bottom-cta" id="begin"><div class="container">' +
        SectionNo("99", "Closing") +
        '<div class="eyebrow">Ready when you are</div>' +
        '<h2 data-slot="bottomCta.headline">Know your rights before you make any <em>decision</em>.</h2>' +
        '<p data-slot="bottomCta.body">' + C.bottomCta.body + '</p>' +
        '<button class="btn-stamp" data-slot="bottomCta.cta" data-scrollform>' + C.bottomCta.cta + ' ' + Ico.arrow + '</button>' +
        '<div class="bphone">Or call <a href="' + C.phoneHref + '">' + C.phone + '</a></div>' +
      '</div></section>';
  }
  function Footer() {
    var F = C.footer || {};
    var links = (F.links || []).map(function (l) {
      return l.external === false
        ? '<a href="' + esc(l.href) + '">' + esc(l.text) + '</a>'
        : '<a href="' + esc(l.href) + '" target="_blank" rel="noopener">' + esc(l.text) + '</a>';
    }).join("");
    var phones = (F.phones || []).map(function (p) {
      return '<div class="fcontact-row"><span class="flabel">' + esc(p.label) + '</span>' +
        '<a href="' + esc(p.href) + '">' + esc(p.number) + '</a></div>';
    }).join("");
    var email = F.email
      ? '<div class="fcontact-row"><span class="flabel">Email</span>' +
        '<a href="' + esc(F.emailHref || ('mailto:' + F.email)) + '">' + esc(F.email) + '</a></div>'
      : '';
    // Site legal statements (from the live LP) + campaign compliance tail.
    // F.disclaimer (optional, added 2026-10-02) replaces the composed statement with the exact footer text used on Webflow.
    var legal = F.disclaimer ? esc(F.disclaimer) : ((F.legal || []).join(" ") +
      ' ' + esc(F.entity || 'Credo Legal') + ' is a multi-jurisdictional law firm. ' +
      'Not a debt-settlement company. Not a credit-counseling service.').trim();
    return '' +
      '<footer class="foot"><div class="container">' +
        '<div class="frow">' +
          '<a href="' + (C.site ? esc(C.site.home) : '#top') + '" class="brand"><img src="' + AB + 'credo-logo.png" alt="Credo Legal"/></a>' +
          '<div class="flinks">' + links + '</div>' +
        '</div>' +
        '<div class="fgrid">' +
          '<div class="fcol fcol-org">' +
            '<div class="fentity">' + esc(F.entity || '') + '</div>' +
            '<address class="faddr">' + esc(F.address || '') + '</address>' +
          '</div>' +
          '<div class="fcol fcol-contact">' + phones + email + '</div>' +
        '</div>' +
        '<p class="disclaimer" data-slot="disclaimer">' + legal + '</p>' +
        '<p class="state-excl">' + C.form.stateExclusion + '</p>' +
        '<div class="fbottom">' +
          '<span class="fcopy">' + esc(F.copyright || '') + '</span>' +
          '<span class="fmeta">Attorney Advertising</span>' +
        '</div>' +
      '</div></footer>';
  }
  function StickyCTA() {
    // Mobile sticky CTA button + phone removed per request — chat launcher only.
    return '<div class="tidio-ghost" title="Chat (Tidio launcher placeholder)">' + Ico.chat(22) + '</div>';
  }

  /* ======================================================================
     VARIANTS
     ====================================================================== */

  /* Variant A — Locked · paired (default) */
  function VariantA() {
    return '' +
      '<div class="lp" data-variant="a">' +
        '<section class="hero" id="top"><div class="container">' +
          '<div class="hero-grid">' +
            '<div>' +
              heroEyebrow() +
              '<h1 class="h1" data-slot="hero.h1">' + renderH1(C.hero.h1) + '</h1>' +
              '<p class="lede" data-slot="hero.lede">' + C.hero.lede + '</p>' +
              '<p class="form-fine" data-slot="hero.filler" style="margin:0 0 22px">' + C.hero.filler + '</p>' +
              LeadForm() +
              '<a class="hero-call" href="' + C.phoneHref + '" style="display:inline-block;margin-top:18px">Or call <b>' + C.phone + '</b></a>' +
            '</div>' +
            '<div>' + HeroFigure(false) + '</div>' +
          '</div>' +
        '</div></section>' +

        '<div class="container" style="padding-top:0">' + ReviewBar(true) + '</div>' +

        '<section class="section"><div class="container">' +
          '<div class="imgrow">' +
            '<div id="whatwedo">' + SectionNo("01", "Practice") + WhatWeDo() + '</div>' +
            BodyFig("what") +
          '</div>' +
          '<div style="height:48px"></div>' +
          '<div class="imgrow">' +
            '<div id="why">' + SectionNo("02", "Difference") + WhyChoose() + '</div>' +
            BodyFig("why") +
          '</div>' +
          '<div class="inline-cta only-desktop" style="margin-top:48px"><button class="btn-stamp" data-scrollform>See if you qualify, free ' + Ico.arrow + '</button></div>' +
        '</div></section>' +

        '<section class="section alt"><div class="container">' +
          '<div>' + SectionNo("03", "Patterns") + CommonProblems(true) + '</div>' +
          '<div style="height:64px"></div>' +
          '<div class="imgrow">' +
            '<div>' + SectionNo("04", "Fit") + WhoHelps() + '</div>' +
            BodyFig("who") +
          '</div>' +
        '</div></section>' +

        '<section class="section" id="process"><div class="container">' +
          '<div>' + SectionNo("05", "Method") + HowItWorks(true) + '</div>' +
          InlineCTA("Speak to an attorney now") +
        '</div></section>' +

        '<div class="container">' + ReviewBar(true) + '</div>' +

        '<section class="section" id="rights"><div class="container">' +
          '<div>' + SectionNo("06", "Statute") + Rights() + '</div>' +
          '<div id="faq" style="margin-top:72px">' + SectionNo("07", "Questions") + FAQ() + '</div>' +
        '</div></section>' +

        BottomCTA() +
      '</div>';
  }

  /* Variant C — Sticky conversion rail */
  function VariantC() {
    return '' +
      '<div class="lp" data-variant="c">' +
        '<section class="hero" id="top"><div class="container">' +
          '<div class="hero-grid">' +
            '<div>' +
              heroEyebrow() +
              '<h1 class="h1">' + renderH1(C.hero.h1) + '</h1>' +
              '<p class="lede">' + C.hero.lede + '</p>' +
              '<div class="hero-cta" style="margin-top:52px">' +
                '<button class="btn-stamp" data-scrollform>' + C.form.submit + ' ' + Ico.arrow + '</button>' +
                '<a class="hero-call" href="' + C.phoneHref + '">Or call <b>' + C.phone + '</b></a>' +
              '</div>' +
            '</div>' +
            '<div>' + HeroFigure(true) + '</div>' +
          '</div>' +
        '</div></section>' +

        '<div class="container" style="padding-top:0">' + ReviewBar(true) + '</div>' +

        '<section class="section"><div class="container">' +
          '<div class="rail-wrap">' +
            '<div class="rail-content">' +
              '<div id="whatwedo">' + SectionNo("01", "Practice") + WhatWeDo() + '</div>' +
              '<div style="height:48px"></div>' +
              '<div id="why">' + SectionNo("02", "Difference") + WhyChoose() + '</div>' +
              '<div style="height:48px"></div>' +
              '<div>' + SectionNo("03", "Patterns") + CommonProblems(false) + '</div>' +
              '<div style="height:48px"></div>' +
              '<div>' + SectionNo("04", "Fit") + WhoHelps() + '</div>' +
              '<div style="height:48px"></div>' +
              '<div id="process">' + SectionNo("05", "Method") + HowItWorks(false) + '</div>' +
            '</div>' +
            '<div class="rail-side">' +
              LeadForm({ headLabel: "START. FREE REVIEW" }) +
              '<p class="rail-reassure">' + Ico.scale(16) + '<span>A licensed attorney reviews your case. We never sell your information. ' + C.form.stateExclusion + '</span></p>' +
            '</div>' +
          '</div>' +
        '</div></section>' +

        '<div class="container">' + ReviewBar(true) + '</div>' +

        '<section class="section" id="rights"><div class="container">' +
          '<div>' + SectionNo("06", "Statute") + Rights() + '</div>' +
          '<div id="faq" style="margin-top:72px">' + SectionNo("07", "Questions") + FAQ() + '</div>' +
        '</div></section>' +

        BottomCTA() +
      '</div>';
  }

  /* ======================================================================
     RENDER + INTERACTIVITY
     ====================================================================== */

  var overlayEl = null;

  function renderOverlay() {
    if (overlayEl) { overlayEl.parentNode.removeChild(overlayEl); overlayEl = null; }
    if (!state.open) { document.body.style.overflow = ""; return; }
    document.body.style.overflow = "hidden";
    var wrap = document.createElement("div");
    wrap.innerHTML = overlayMarkup();
    overlayEl = wrap.firstChild;
    document.body.appendChild(overlayEl);
    wireOverlay(overlayEl);
  }

  function wireOverlay(root) {
    var amount = root.querySelector("[data-amount]");
    var slider = root.querySelector("[data-slider]");
    if (slider) {
      slider.addEventListener("input", function () {
        state.amount = +slider.value;
        if (amount) amount.textContent = fmtAmt(state.amount);
        syncInlineSlider();
      });
    }
    // 2026-06-04 (revised): multi-select dropdown handlers — trigger toggles the panel,
    // checkboxes mutate state.sit[k] (array), and the trigger display refreshes on each change.
    function refreshMultiDisplay(dd) {
      var k = dd.getAttribute("data-multi-dd");
      var arr = state.sit[k] || [];
      var disp = dd.querySelector(".multi-dd-trigger > span:first-child");
      if (!disp) return;
      var f = C.form.situationFields[k];
      if (arr.length === 0) {
        disp.outerHTML = '<span class="multi-dd-placeholder">' + esc(f.placeholder) + '</span>';
      } else {
        disp.outerHTML = '<span class="multi-dd-selected">' + esc(arr.join(", ")) + '</span>';
      }
    }
    function closeAllMultiPanels(except) {
      root.querySelectorAll(".multi-dd").forEach(function (dd) {
        if (dd === except) return;
        var trig = dd.querySelector(".multi-dd-trigger");
        var panel = dd.querySelector(".multi-dd-panel");
        if (trig) trig.setAttribute("aria-expanded", "false");
        if (panel) panel.hidden = true;
        dd.classList.remove("is-open");
      });
    }
    root.querySelectorAll("[data-multi-toggle]").forEach(function (trigger) {
      trigger.addEventListener("click", function (e) {
        e.stopPropagation();
        var dd = trigger.closest(".multi-dd");
        var panel = dd.querySelector(".multi-dd-panel");
        var willOpen = panel.hidden;
        closeAllMultiPanels(willOpen ? dd : null);
        if (willOpen) {
          panel.hidden = false;
          trigger.setAttribute("aria-expanded", "true");
          dd.classList.add("is-open");
        } else {
          panel.hidden = true;
          trigger.setAttribute("aria-expanded", "false");
          dd.classList.remove("is-open");
        }
      });
    });
    root.querySelectorAll("[data-multi]").forEach(function (node) {
      var k = node.getAttribute("data-multi");
      if (!Array.isArray(state.sit[k])) state.sit[k] = [];
      node.addEventListener("change", function () {
        var arr = state.sit[k];
        if (node.checked) {
          if (arr.indexOf(node.value) === -1) arr.push(node.value);
        } else {
          var i = arr.indexOf(node.value);
          if (i !== -1) arr.splice(i, 1);
        }
        var parent = node.closest(".multi-opt");
        if (parent) parent.classList.toggle("is-checked", node.checked);
        var dd = node.closest(".multi-dd");
        if (dd) refreshMultiDisplay(dd);
      });
    });
    // Click outside any open multi-select dropdown closes it.
    if (!root._multiOutsideBound) {
      root._multiOutsideBound = true;
      document.addEventListener("click", function (e) {
        if (e.target.closest(".multi-dd")) return;
        closeAllMultiPanels(null);
      });
      // Esc closes any open panel.
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeAllMultiPanels(null);
      });
    }
    root.querySelectorAll("[data-sit]").forEach(function (node) {
      var k = node.getAttribute("data-sit");
      node.addEventListener("input", function () { state.sit[k] = node.value; });
      node.addEventListener("change", function () { state.sit[k] = node.value; });
    });
    root.querySelectorAll("[data-field]").forEach(function (node) {
      var k = node.getAttribute("data-field");
      node.addEventListener("input", function (e) {
        if (k === "dob") {
          var isDel = e.inputType && e.inputType.indexOf("delete") === 0;
          node.value = formatDob(node.value, isDel);
        }
        state.fields[k] = node.value;
        var submit = root.querySelector("[data-fo-submit]");
        if (submit) submit.disabled = !canSubmit();
      });
      node.addEventListener("change", function () { state.fields[k] = node.value; });
    });
    var back = root.querySelector("[data-fo-back]");
    if (back) back.addEventListener("click", function () {
      if (state.step > 0) { state.step--; renderOverlay(); } else { closeOverlay(); }
    });
    var next = root.querySelector("[data-fo-next]");
    if (next) next.addEventListener("click", function () { state.step++; renderOverlay(); });
    var submit = root.querySelector("[data-fo-submit]");
    if (submit) submit.addEventListener("click", function () {
      if (canSubmit()) window.location.href = (C.site && C.site.thankYou) || "thank-you.html";
    });
    var close = root.querySelector("[data-fo-close]");
    if (close) close.addEventListener("click", closeOverlay);
  }

  function openOverlay(step) {
    state.step = step;
    state.open = true;
    renderOverlay();
  }
  function closeOverlay() {
    state.open = false;
    renderOverlay();
  }

  /* keep the inline step-1 slider/amount in sync with overlay edits */
  function syncInlineSlider() {
    var inline = document.getElementById("lead-form");
    if (!inline) return;
    var a = inline.querySelector("[data-amount]");
    var s = inline.querySelector("[data-slider]");
    if (a) a.textContent = fmtAmt(state.amount);
    if (s) s.value = state.amount;
  }

  function wireInlineForm() {
    document.querySelectorAll(".form .form-body [data-slider]").forEach(function (slider) {
      var card = slider.closest(".form");
      var amount = card.querySelector("[data-amount]");
      slider.addEventListener("input", function () {
        state.amount = +slider.value;
        if (amount) amount.textContent = fmtAmt(state.amount);
      });
    });
    document.querySelectorAll("[data-form-continue]").forEach(function (btn) {
      btn.addEventListener("click", function () { openOverlay(1); });
    });
  }

  function wireScrollForm(root) {
    root.querySelectorAll("[data-scrollform]").forEach(function (el) {
      el.addEventListener("click", function (e) { e.preventDefault(); scrollToForm(); });
    });
  }

  function onKey(e) {
    if (e.key === "Escape" && state.open && state.step === 0) closeOverlay();
  }

  function render(opts) {
    opts = opts || {};
    var variant = (opts.variant || "a").toLowerCase();
    var hero = opts.hero || "portrait";
    window.CREDO_HERO_STYLE = hero;
    document.documentElement.setAttribute("data-hero-style", hero);
    document.documentElement.setAttribute("data-labels", "plain");

    var root = document.getElementById("root");
    var body = variant === "c" ? VariantC() : VariantA();
    root.innerHTML = Nav() + '<main>' + body + '</main>' + Footer() + StickyCTA();   /* <main> as on Webflow (PBI-34) */

    wireScrollForm(root);
    wireInlineForm();
    window.addEventListener("keydown", onKey);

    /* Publish the slot catalog (added 2026-06-30 for cross-LP comment scoping).
     * Done after render so buildSlotCatalog() can introspect rendered C.*. */
    window.CREDO_SLOTS = {
      declared: buildSlotCatalog(),
      broadcastDefaultPrefixes: BROADCAST_DEFAULT_PREFIXES
    };
  }

  /* Non-landing pages of the website prototype (about, legal): same nav and footer around the
   * given HTML, no lead form. opts.html is trusted markup written by the site templates. */
  function renderPage(opts) {
    opts = opts || {};
    document.documentElement.setAttribute("data-labels", "plain");
    var root = document.getElementById("root");
    root.innerHTML = Nav() + '<main><div class="lp page" data-variant="page">' + (opts.html || "") + '</div></main>' + Footer() + StickyCTA();
  }

  window.CredoLP = {
    render: render,
    renderPage: renderPage,
    parts: { esc: esc, pad2: pad2, SectionNo: SectionNo, ReviewBar: ReviewBar, HowItWorks: HowItWorks, FAQ: FAQ, BottomCTA: BottomCTA, InlineCTA: InlineCTA }
  };
})();
