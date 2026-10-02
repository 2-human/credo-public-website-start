/* Credo Legal — Credit Card / Negotiation — "Negotiate Down" angle (Var A).
   Source: live re-fetch during 2026-06-23 audit (not in capture set —
   capture mapped this angle to /credit-cards which serves multiple
   drafts; the corrected campaign URL is /credit-card-debt-negotiation
   with unique routing (646) 952-7404). Sibling of URL #26 Challenge.

   No structural deviations (all 7 body sections present on live).
   Voice on subhead is already 'Our Attorneys' (no fix needed). */
window.CREDO = {
  phone: "(407) 624-3722", phoneHref: "tel:+14076243722",
  cluster: "Credit Card", angle: "Negotiation. Negotiate down",
  statute: "FDCPA + state contract / UCC",

  hero: {
    eyebrow: "Credit card · Negotiate down",
    h1: ["Got Credit Card ", "Debt", "?"],
    lede: "Our Attorneys Can Help You Negotiate.",
    filler: "Fill in the form below or call us for a free review of your case.",
  },

  form: {
    steps: [
      { key: "debt", label: "Your debt", n: "01" },
      { key: "situation", label: "Your situation", n: "02" },
      { key: "details", label: "Your details", n: "03" },
    ],
    debtQuestion: "How much do you currently owe in total?",
    situationFields: {
      count:    { label: "How many debts do you have?", placeholder: "Select debts", options: ["1 debt", "2–3 debts", "4–5 debts", "6 or more"] },
      type:     { label: "What types of debt do you have?", placeholder: "Select all that apply", multi: true, options: ["Credit card", "Medical bills", "Personal or payday loan", "Auto loan", "Student loan", "Other"] },
      stage:    { label: "What stage is your debt at?", placeholder: "Select debt stage", options: ["Behind on payments", "In collections", "Being sued / served papers", "Judgment entered", "Wage garnishment"] },
      security: { label: "Is your debt secured or unsecured?", placeholder: "Select debt security", options: ["Unsecured (no collateral)", "Secured (collateral)", "Not sure"] },
      more:     { label: "Tell us more about your situation", placeholder: "Tell us more about your situation" },
    },
    detailLabels: {
      first: "First name", last: "Last name", phone: "Phone number", email: "Email",
      altPhone: "Alternative phone number", address: "Address", city: "City",
      state: "State", zip: "Zip code", dob: "Date of birth",
    },
    states: ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],
    situationOptions: [
      "Unmanageable card balance",
      "Multiple cards across creditors",
      "High-interest spiral",
      "Already in collections",
      "Pre-lawsuit, no summons yet",
      "Just want to settle for less",
    ],
    submit: "Get a free case evaluation",
    stateExclusion: "We currently do not service DC, DE, ID, NC, OK, WV, or WY.",
  },

  trust: [
    { n: "44", lbl: "States with licensed attorneys" },
    { n: "$0", lbl: "Cost of your consultation" },
    { n: "FCRA", lbl: "Credit-report cleanup" },
    { n: "Flat", lbl: "Monthly fee, no contingency" },
  ],

  reviews: {
    bbb:        { title: "Accredited Business", meta: "A rating · 4.59 / 5" },
    trustpilot: { title: "Excellent",           meta: "4.5 / 5 · 1,247 reviews" },
    google:     { title: "Google Reviews",      meta: "4.7 / 5" },
  },
  // 2026-06-30 (Sona, span-12 + span-14, propagated): metrics swap applied
  // across all LPs. Numbers confirmed by team@2-human.com 2026-06-30.
  metrics: [
    ["10 million+", "In debt wiped"],
    ["500k", "Debts settled every month"],
  ],

  whatWeDo: {
    headline: "Not advice. Legal representation.",
    intro: "At Credo Legal, we don't just advise you on your credit card debt. We represent you legally to get better terms than you could get alone.",
    bullets: [
      "Negotiate directly with credit card companies on your behalf.",
      "Pursue a lump-sum settlement for less than the full balance.",
      "Challenge inflated interest charges, penalties, and fees.",
      "Handle all creditor communication, so you don't speak to them at all.",
    ],
  },

  whyChoose: [
    ["Attorney assistance from day one", "Licensed attorneys on your case from the first conversation, no handoffs, no delays."],
    ["We talk to them so you don't have to", "Once we engage, all communication routes through our office. No more calls, letters, or pressure on you directly."],
    ["Attorney-led negotiation gets better terms", "Card companies negotiate differently when an attorney is involved, they know we can challenge validity, dispute amounts, and apply legal pressure."],
    ["We challenge inflated balances and fees", "Late fees, default-rate interest, and certain penalties may not be enforceable. We push back on every charge that isn't."],
    ["Flexible payment plans", "Attorney-led negotiation structured around your budget."],
  ],

  commonProblems: [
    ["Unmanageable credit card balances", "When monthly minimums grow beyond what's sustainable, negotiation becomes the path forward, not just minimum payments forever.", "State contract"],
    ["High-interest rate debt spirals", "Default-rate interest can double the effective cost of carrying a balance. Negotiation often includes resetting the rate or settling the inflated portion.", "State usury"],
    ["Multiple cards across several creditors", "Negotiating one at a time is slow. Coordinated multi-creditor negotiation is faster and often produces better terms.", "Legal counsel"],
    ["Debt already in collections or pre-lawsuit stage", "Once debt is in collections, settlement leverage shifts, and the collector's documentation often becomes the issue.", "FDCPA § 1692g"],
    ["Balances inflated by fees and penalties", "Card agreements limit what can be added on top of principal. Many post-default charges don't survive scrutiny.", "State contract"],
    // Synthesized 6th.
    ["Garnishment risk if a lawsuit is filed", "Settling pre-lawsuit avoids the default-judgment cascade: garnishment, levies, credit damage.", "15 U.S.C. § 1673"],
  ],

  howItWorks: [
    ["Free consultation", "We review your cards, balances, and options.", "DAY 0"],
    ["Debt investigation", "We evaluate what's valid and what can be challenged or reduced.", "WEEK 1"],
    ["Legal representation", "We negotiate directly with card companies on your behalf.", "WEEK 1–4"],
    ["Work towards debt resolution", "Settle for less than the full amount owed, and pursue credit-report cleanup once resolved.", "ONGOING"],
  ],

  rights: {
    intro: "Consumer protection laws give you rights when dealing with credit card debt. Card companies and collectors cannot:",
    items: [
      { cite: "FDCPA § 1692d, e, f",  label: "No deceptive collection",   text: "Use deceptive or abusive tactics to collect a debt.", exLabel: "Violation", ex: "Threats, false statements, or harassment = federal violation." },
      { cite: "FDCPA § 1692e(2)",     label: "Accurate amount required",  text: "Misrepresent the amount you legally owe.", exLabel: "Violation", ex: "Inflated balance in a collection letter or lawsuit = federal claim." },
      { cite: "State contract",        label: "Original agreement controls", text: "Add fees or charges that weren't in your original agreement.", exLabel: "Right", ex: "Late fee not in the cardmember agreement = challengeable." },
      { cite: "FDCPA § 1692e(5)",     label: "No false legal threats",    text: "Threaten legal action they don't intend to take.", exLabel: "Violation", ex: "'We're suing you Friday' with no intent to file = federal violation." },
      { cite: "FDCPA § 1692c, d",     label: "No abusive contact",        text: "Contact you in ways that are abusive or harassing.", exLabel: "Right", ex: "Calls after a cease request, calls at illegal hours, calls to your workplace." },
      // Synthesized 6th.
      { cite: "FDCPA § 1692g",        label: "Validation right",          text: "Demand a debt without providing written validation when you request it.", exLabel: "Right", ex: "Send a validation request. Collection activity pauses until they respond." },
    ],
  },

  whoHelps: [
    "People overwhelmed by credit card debt they can't pay in full.",
    "Anyone being pursued by collectors and looking for a real resolution.",
    "Those who want to settle their debt for less without negotiating alone.",
    "People who feel card companies won't deal with them fairly.",
    "Anyone ready to put credit card debt behind them for good.",
  ],

  faq: [
    ["How is attorney-led negotiation different from doing it myself?", "Card companies negotiate differently when there's an attorney involved. A lawyer can challenge the validity of the debt, dispute inflated amounts, and apply legal pressure that a consumer calling on their own simply can't. That difference typically means better terms and a lower settlement."],
    ["Will settling for less hurt my credit?", "Settlements can affect your credit score, but so does ongoing unpaid debt. In many cases, resolving debt is better for your long-term credit health than letting balances continue to grow. We'll walk you through all the tradeoffs in your free consultation."],
    ["What if my debt is already in collections?", "We work with debt at all stages, including debt that's already been sold to collectors. In some cases, collectors cannot even prove you owe the debt, which creates additional leverage in negotiations."],
    ["What if the creditor sues me before we settle?", "We're prepared to defend you if it gets to that point. Many settlements happen specifically because the creditor knows we're ready to litigate if needed."],
    ["How much does this cost?", "We offer flexible payment plans so attorney-led help is accessible without paying everything upfront. Your first case evaluation is completely free."],
  ],

  bottomCta: {
    headline: "You can pay less than you owe. Let's find out how much less.",
    body: "Attorney-led negotiation regularly produces better terms than consumer-side negotiation alone. Find out what's possible for your situation, for free.",
    cta: "Get a free case evaluation",
  },

  disclaimer: "This is attorney advertising. Prior results do not guarantee a similar outcome.",
};
