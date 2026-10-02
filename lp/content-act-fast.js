/* Credo Legal — All-States FDCPA / "Act Fast" angle (the cross-vertical
   FDCPA overlay LP, exclusive to the All-States tab — not used by any
   cluster-specific ad group).

   Per-LP deviations resolved:
   - Live H1 is a long single-line sentence with no subhead ("Let's See
     If We Can Help You with Creditor Harassment and Debt"). Rewritten
     here as a standard H1 + subhead matching the angle's 'act today'
     framing — the live hero pattern doesn't fit the new design's
     two-part structure.
   - Live filler reads 'Fill in the short form below to see if you
     qualify' (qualification-gated framing). Rewritten to standard
     'Fill in the form...' for consistency.
   - Live Bottom CTA is missing the 'Call' link — only the button.
     Restored here. Phone: (718) 865-8350 (same as the legacy
     /fcba-and-fdcpa LP).
   - Standard 14-block template otherwise; live body sections are all
     present with rich copy.

   No voice violations on live (this LP was rewritten with 'Our
   Attorneys' throughout). */
window.CREDO = {
  phone: "(612) 256-8820", phoneHref: "tel:+16122568820",
  cluster: "All-States",
  angle: "FDCPA Action. Act fast (cross-vertical overlay)",
  statute: "FDCPA",

  hero: {
    eyebrow: "FDCPA · Act today",
    // Reverted to the live H1 verbatim per 2026-06-23 user instruction:
    // honor the live page H1s. "Creditor Harassment" is the angle-defining
    // phrase and gets the red emphasis.
    h1: ["Let's See If We Can Help You with ", "Creditor Harassment", " and Debt"],
    // Lede is the live "see if you qualify" filler promoted to subhead
    // position, since the live page has no separate subhead.
    lede: "Fill in the short form below to see if you qualify.",
    filler: "Or call us for a free review of your case.",
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
      "Multiple violations already known",
      "Cease request was ignored",
      "Calls before 8 AM or after 9 PM",
      "Threats of arrest",
      "Calls to my workplace",
      "Contacting my family",
    ],
    submit: "Get a free case evaluation",
    stateExclusion: "We currently do not service DC, DE, ID, NC, OK, WV, or WY.",
  },

  trust: [
    { n: "44", lbl: "States with licensed attorneys" },
    { n: "$0", lbl: "Cost of your consultation" },
    { n: "FDCPA", lbl: "The statute we practice in" },
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
    headline: "From violation to legal claim, fast.",
    intro: "At Credo Legal, an FDCPA violation is not just something to complain about, it's a legal claim we start building immediately. We send a cease letter the day you enroll, track every subsequent contact as potential evidence, and move your case from violation to legal action without delay.",
    bullets: [
      "Cease-communication letter sent on day one, contact must stop.",
      "Every violation after the cease request documented and catalogued.",
      "FDCPA claims pursued for up to $1,000 per lawsuit, plus attorney fees.",
      "Full case built and filed.",
    ],
  },

  whyChoose: [
    ["Licensed attorneys, we act the day you enroll", "No waiting for paperwork, no intake delays. The cease letter goes out the same day."],
    ["We track every violation", "Each illegal call, threat, or contact after a cease request is documented. Each one adds to your claim."],
    ["Speed is our USP", "FDCPA cases are built on documented violations. The sooner we start tracking, the stronger the case."],
    ["From violation to lawsuit", "We don't just stop the calls. We pursue every legal claim the violations support."],
    ["Flexible payment plans", "FDCPA attorney fees are recoverable from the collector if case is won, your claim may cost you nothing out of pocket on that side."],
  ],

  commonProblems: [
    ["Continued calls after requesting they stop", "Every call after a written cease request is a standalone $1,000 federal violation.", "§ 1692c(c)"],
    ["Calls before 8 AM or after 9 PM", "Each one is a documented breach, actionable from the moment it happens.", "§ 1692c(a)(1)"],
    ["Calls to your workplace", "If your employer objects, every workplace call is illegal under the FDCPA.", "§ 1692c(a)(3)"],
    ["Threatening arrest or actions they can't take", "Illegal threats are FDCPA violations, and common. We document them.", "§ 1692e(4),(5)"],
    ["Contacting family or third parties", "Discussing your debt with others is prohibited. Each instance is a violation.", "§ 1692c(b)"],
    ["Misrepresenting the debt amount", "Inflating what you owe is a federal violation whether or not the collector knows it.", "§ 1692e(2)"],
  ],

  howItWorks: [
    ["Free consultation", "Tell us what the collector has been doing. We review for violations at no cost and explain your options.", "DAY 0"],
    ["Cease letter sent the same day", "Our attorneys send a formal cease-communication letter to the collector the day you enroll. All contact must stop.", "DAY 0"],
    ["Violations tracked immediately", "From day one, every subsequent contact is documented as a potential $1,000 FDCPA violation. The clock starts the moment we engage.", "WEEK 1+"],
    ["Case built and filed", "We pursue statutory damages, actual damages, and attorney fees against the collector, moving from violation to resolution as quickly as the law allows.", "ONGOING"],
  ],

  rights: {
    intro: "The FDCPA gives you enforceable rights, and our job is to act on them immediately.",
    items: [
      { cite: "§ 1692c(c)",       label: "Cease request",         text: "Once you send a written cease request, collectors must stop all contact, every call after is a violation.", exLabel: "Right", ex: "Send the cease letter. Contact must end except to confirm receipt or give notice of legal action." },
      { cite: "§ 1692c(a)(1)",    label: "Calling hours",         text: "Collectors cannot call before 8 AM or after 9 PM in your local time zone.", exLabel: "Violation", ex: "A 7:14 AM call is a documented breach." },
      { cite: "§ 1692e(4),(5)",   label: "False threats",         text: "Threatening arrest, wage garnishment, or legal action the collector cannot take is prohibited.", exLabel: "Violation", ex: "'We'll have you arrested' = federal violation." },
      { cite: "§ 1692c(b)",       label: "Third-party contact",   text: "Collectors cannot contact your employer, family, or neighbors about your debt.", exLabel: "Violation", ex: "Each third-party contact about your debt = separate claim." },
      { cite: "§ 1692k(a)(2)(A)", label: "Statutory damages",     text: "Each FDCPA violation entitles you to up to $1,000 in statutory damages, plus actual damages and attorney fees from the collector.", exLabel: "Remedy", ex: "$1,000 per lawsuit. Fees recoverable from the collector." },
      { cite: "§ 1692k(d)",       label: "One-year window",       text: "You have one year from the date of each violation to file an FDCPA claim, fast action preserves your recovery.", exLabel: "Deadline", ex: "Statute of limitations: 1 year from the violation date." },
    ],
  },

  whoHelps: [
    "Anyone who already knows a collector has violated the FDCPA and wants to act on it now.",
    "People tired of reading about their rights and ready to have an attorney use them.",
    "Those receiving calls after having already asked the collector to stop, each one is money.",
    "Anyone who wants a cease letter sent today, not next week.",
    "People who want violations documented and pursued, not just stopped.",
  ],

  faq: [
    ["How fast do you actually send the cease letter?", "The same day you enroll. We don't wait. The cease-communication letter goes to the collector the day you enroll, starting the clock on any subsequent violations immediately."],
    ["Does sending a cease letter affect the underlying debt?", "No. A cease letter stops contact, it doesn't resolve or erase the debt. We handle the harassment and evaluate the debt separately, advising you on the best path for both."],
    ["What if the collector stops calling once they get the cease letter?", "That's the goal. If they stop, you have relief. If they don't, every subsequent call is a documented $1,000 violation that we pursue. Either way, you're in a better position."],
    ["What if violations already happened before I called you?", "We document what's already occurred as well. Violations from the past year are potentially recoverable. The sooner you call, the more we can document going forward too."],
    ["How much does this cost?", "Your first consultation is free. FDCPA attorney fees are recoverable from the collector when you prevail, meaning pursuing your claim may cost you nothing out of pocket on the harassment side."],
  ],

  bottomCta: {
    headline: "Don't just know your rights. Use them today.",
    body: "Every day without a cease letter is another day of potential violations going undocumented. Our attorneys act the same day you call.",
    cta: "Get a free case evaluation",
  },

  disclaimer: "This is attorney advertising. Prior results do not guarantee a similar outcome.",
};
