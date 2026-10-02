/* ==========================================================================
   Credo Legal — website prototype, site layer (2 Oct 2026).

   The website uses the landing-page engine as it is on Webflow today
   (lp/app.js, lp/tokens.css, lp/lp.css — a synced copy of public/harassment-lp,
   see tools/website-start/build.mjs). This file adds what a site needs on top:
   navigation between pages, one footer, the home services section, and the
   about, legal and thank-you pages.

   Page order:  content-*.js  →  site-data.js  →  site.js  →  CredoSite.prepare(…)
                →  lp/app.js  →  CredoSite.render()
   prepare() must run before app.js, which reads window.CREDO when it loads.
   ========================================================================== */
(function () {
  "use strict";

  var D = window.CREDO_SITE_DATA;   /* generated: variants, clusters, service slots */
  var cfg = null;

  var FOOTER_DISCLAIMER = "This is attorney advertising. Prior results do not guarantee a similar outcome. " +
    "Credo Legal is a multi-jurisdictional law firm. Communication through this site does not create an " +
    "attorney–client relationship. Not a debt-settlement company. Not a credit-counseling service.";

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  /* cfg: { variant, page: home|service|about|terms|privacy|cookie|thanks, cluster?, root, base }
     root = path to the website root (holds lp/ and shared/), base = path to this variant's folder. */
  function prepare(c) {
    cfg = c;
    var V = D.variants[c.variant];
    var C = window.CREDO;
    var b = c.base;
    window.CREDO_ASSET_BASE = c.root + "lp/";

    /* One phone number across the site: the new-clients line shown on every live page. */
    C.phone = "(718) 865-8350";
    C.phoneHref = "tel:+17188658350";

    C.site = {
      home: b + "index.html",
      thankYou: b + "thank-you.html",
      links: [
        { text: "Home", href: b + "index.html", current: c.page === "home" },
        { text: "Services", items: D.clusterOrder.map(function (k) {
            return { text: D.clusters[k].label, href: b + "services/" + D.clusters[k].slug + ".html", current: c.page === "service" && c.cluster === k };
          }) },
        { text: "About", href: b + "about.html", current: c.page === "about" }
      ],
      /* Pages without a form send the nav button to the form on the home page. */
      cta: (c.page === "home" || c.page === "service") ? null : { href: b + "index.html#lead-form" }
    };

    C.footer = {
      entity: "Credo Legal Services, P.C.",
      address: "1 Liberty Street, Suite 4010, New York, NY 10006",
      phones: [
        { label: "Existing clients", number: "(212) 461-4026", href: "tel:+12124614026" },
        { label: "New clients", number: "(718) 865-8350", href: "tel:+17188658350" }
      ],
      email: "support@credolegal.com",
      emailHref: "mailto:support@credolegal.com",
      links: [
        { text: "Home", href: b + "index.html", external: false },
        { text: "About", href: b + "about.html", external: false },
        { text: "Terms of Use", href: b + "terms-of-use.html", external: false },
        { text: "Privacy Policy", href: b + "privacy-policy.html", external: false },
        { text: "Cookie Policy", href: b + "cookie-policy.html", external: false }
      ],
      disclaimer: FOOTER_DISCLAIMER,
      copyright: "© 2026 Credo Legal. All rights reserved."
    };

    if (c.page === "home") {
      C.hero.h1 = V.homeH1;
      C.hero.lede = V.homeSub;
      C.hero.eyebrow = V.label;
    }
  }

  /* ---- home: the six services ------------------------------------------- */
  function servicesSection() {
    var V = D.variants[cfg.variant];
    var tiles = D.clusterOrder.map(function (k, i) {
      var s = V.services[k], cl = D.clusters[k];
      return '<a class="svc" href="' + cfg.base + 'services/' + cl.slug + '.html">' +
        '<div class="sm"><span>' + String(i + 1).padStart(2, "0") + '</span><span>' + esc(cl.label) + '</span></div>' +
        '<h3>' + esc(s.h1) + '</h3>' +
        '<p>' + esc(s.lede) + '</p>' +
        '<span class="go">See how we help →</span>' +
      '</a>';
    }).join("");
    return '<section class="section" id="services"><div class="container">' +
      '<div class="eyebrow">Our services</div>' +
      '<h2 class="h2">' + esc(V.clusterLead) + '</h2>' +
      '<div class="svc-grid">' + tiles + '</div>' +
    '</div></section>';
  }

  /* ---- page templates ---------------------------------------------------- */
  function head(eyebrow, h1, lede, upd) {
    return '<section class="page-head-wrap"><div class="container"><div class="page-head">' +
      '<div class="eyebrow">' + esc(eyebrow) + '</div>' +
      '<h1>' + h1 + '</h1>' +
      (lede ? '<p class="lede">' + esc(lede) + '</p>' : '') +
      (upd ? '<div class="upd">' + esc(upd) + '</div>' : '') +
    '</div></div></section>';
  }
  function pageCta(label) {
    var C = window.CREDO;
    return '<section class="bottom-cta"><div class="container">' +
      '<div class="eyebrow">Ready when you are</div>' +
      '<h2>Know your rights before you make any <em>decision</em>.</h2>' +
      '<p>' + C.bottomCta.body + '</p>' +
      '<a class="btn-stamp" href="' + cfg.base + 'index.html#lead-form">' + esc(label || C.bottomCta.cta) + ' <span class="ar">→</span></a>' +
      '<div class="bphone">Or call <a href="' + C.phoneHref + '">' + C.phone + '</a></div>' +
    '</div></section>';
  }

  function aboutHtml() {
    var P = window.CredoLP.parts;
    var sections = [
      ["Our specialty", "Debt validation and invalidation. Our attorneys compel creditors and collection agencies to prove that a debt is legitimate and enforceable, rather than settling or consolidating it. If validation fails, we defend you in court or negotiate the debt down as a fallback. That is the difference between a law firm and a debt-settlement or debt-consolidation company."],
      ["Who we help", "People facing consumer-debt distress: harassment from debt collectors, lawsuits over unpaid balances, wage garnishment, credit card debt, medical bills, and unsecured and payday loans."],
      ["What you can expect", "Plain language, a clear explanation of what each step does, and attorneys, not salespeople, on the phone. An attorney reviews every case."],
      ["How we work with you", "The first consultation is free. Legal services are provided only under a written engagement agreement between you and the firm, which sets out the services and the fees."]
    ];
    return head("About", "About Credo Legal", "A consumer-debt defense law firm working through attorneys licensed in the states we serve.") +
      '<div class="container"><div class="prose">' +
        sections.map(function (s) { return '<h2>' + esc(s[0]) + '</h2><p>' + esc(s[1]) + '</p>'; }).join("") +
      '</div></div>' +
      '<div class="container page-trust">' + P.ReviewBar(true) + '</div>' +
      pageCta();
  }

  var LEGAL_PAGES = { terms: "terms-of-use.html", privacy: "privacy-policy.html", cookie: "cookie-policy.html" };
  var LEGAL_NAMES = { terms: "Terms of Use", privacy: "Privacy Policy", cookie: "Cookie Policy" };
  /* Link the first mention of each other legal document in a block. */
  function crossLink(html, self) {
    Object.keys(LEGAL_NAMES).forEach(function (k) {
      if (k === self) return;
      var name = LEGAL_NAMES[k];
      var i = html.indexOf(name);
      if (i >= 0) html = html.slice(0, i) + '<a href="' + cfg.base + LEGAL_PAGES[k] + '">' + name + '</a>' + html.slice(i + name.length);
    });
    return html;
  }
  function legalHtml(key) {
    var doc = window.CREDO_LEGAL[key];
    var out = "", inList = false, upd = "";
    doc.blocks.forEach(function (b, i) {
      if (b.t === "h1") return;
      if (i <= 2 && /^Last updated/.test(b.x)) { upd = b.x; return; }
      if (b.t === "li") { if (!inList) { out += "<ul>"; inList = true; } out += "<li>" + crossLink(esc(b.x), key) + "</li>"; return; }
      if (inList) { out += "</ul>"; inList = false; }
      if (b.t === "h2" || b.t === "h3") out += "<" + b.t + ">" + esc(b.x) + "</" + b.t + ">";
      else out += "<p>" + crossLink(esc(b.x), key) + "</p>";
    });
    if (inList) out += "</ul>";
    var others = Object.keys(LEGAL_NAMES).filter(function (k) { return k !== key; }).map(function (k) {
      return '<a href="' + cfg.base + LEGAL_PAGES[k] + '">' + LEGAL_NAMES[k] + '</a>';
    }).join(" · ");
    return head("Legal", esc(doc.title), "", upd) +
      '<div class="container"><div class="prose">' +
        '<p class="note">Draft for review by the firm’s attorney. Text in square brackets is still to be confirmed.</p>' +
        out +
        '<h2>Related documents</h2><p>' + others + '</p>' +
      '</div></div>';
  }

  function thanksHtml() {
    var boxes = [
      ["Expertise", "Proven expertise", "Our attorneys have experience handling creditor disputes and helping clients reclaim control over their finances."],
      ["Guidance", "Personalized guidance", "Every financial challenge is unique. We tailor our approach to your circumstances."],
      ["Privacy", "Confidential and secure", "We handle all client information with care and strict confidentiality."],
      ["Contact", "Open communication", "We keep you informed at every step."]
    ];
    var C = window.CREDO;
    return head("Request received", "Thank you. Your request has been <em>received</em>.",
        "One of our legal professionals will contact you shortly to schedule your free, confidential consultation.") +
      '<div class="container"><div class="page-block">' +
        '<p class="note">Prototype: nothing was sent. On the live site this page follows a submitted form.</p>' +
        '<div class="box-grid">' + boxes.map(function (b, i) {
          return '<div class="box"><div class="bmeta"><span>' + String(i + 1).padStart(2, "0") + '</span><span>' + esc(b[0]) + '</span></div><h3>' + esc(b[1]) + '</h3><p>' + esc(b[2]) + '</p></div>';
        }).join("") + '</div>' +
        '<p class="after">Don’t want to wait? Call <a href="' + C.phoneHref + '">' + C.phone + '</a>, or go <a href="' + cfg.base + 'index.html">back to the home page</a>.</p>' +
      '</div></div>';
  }

  function render() {
    var L = window.CredoLP, p = cfg.page;
    if (p === "home" || p === "service") {
      L.render({ variant: "a", hero: "portrait" });
      if (p === "home") {
        var bar = document.querySelector("main .reviewbar");
        if (bar && bar.parentNode) bar.parentNode.insertAdjacentHTML("afterend", servicesSection());
      }
      /* arriving from another page's "Free review" button */
      if (location.hash === "#lead-form") {
        var f = document.getElementById("lead-form");
        if (f) window.scrollTo(0, f.getBoundingClientRect().top + window.scrollY - 72);   /* clear the sticky nav */
      }
    } else if (p === "about") {
      L.renderPage({ html: aboutHtml() });
    } else if (p === "thanks") {
      L.renderPage({ html: thanksHtml() });
    } else {
      L.renderPage({ html: legalHtml(p) });
    }
    /* Services dropdown: opens on hover and keyboard focus (CSS); the button also toggles it (touch, screen readers), Escape closes it. */
    var dd = document.querySelector(".nav-links .nav-dd");
    if (dd) {
      var btn = dd.querySelector("button");
      var set = function (open) { dd.classList.toggle("open", open); dd.classList.toggle("closed", !open); btn.setAttribute("aria-expanded", open ? "true" : "false"); };
      var reset = function () { dd.classList.remove("open", "closed"); btn.setAttribute("aria-expanded", "false"); };
      btn.addEventListener("click", function () { set(!dd.classList.contains("open")); });
      var shown = function () { if (!dd.classList.contains("closed")) btn.setAttribute("aria-expanded", "true"); };
      dd.addEventListener("mouseenter", shown);
      dd.addEventListener("focusin", shown);
      dd.addEventListener("mouseleave", reset);
      dd.addEventListener("focusout", function (e) { if (!dd.contains(e.relatedTarget)) reset(); });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape" && dd.contains(document.activeElement)) { set(false); btn.focus(); } });
    }
    /* close the mobile menu when a link in it is used or the page is clicked elsewhere */
    var menu = document.querySelector(".nav-menu");
    if (menu) document.addEventListener("click", function (e) { if (!menu.contains(e.target)) menu.removeAttribute("open"); });
  }

  window.CredoSite = { prepare: prepare, render: render };
})();
