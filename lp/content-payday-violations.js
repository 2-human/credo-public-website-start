/* Credo Legal — Payday Loan / Harassment — "Violations Payoff" angle (Var B).
   Source: live capture LP_PaydayLoan-Harassment_VarB_Violations - DYN.md
   (2026-06-01). Sibling of /payday-loan-debt-harassment (Var A Stop Calls).

   Per-LP deviations resolved:
   - SUBHEAD MISSING on live (accessibility tree shows filler text where
     subhead should be — bug). Synthesized matching the angle:
     'Our Attorneys Can Help Make Them Pay.'
   - Voice fix: Why Choose b1 'Real lawyers pursuing real legal claims'
     → 'Our attorneys pursuing real legal claims'. */
window.CREDO = {
  phone: "(407) 512-0808", phoneHref: "tel:+14075120808",
  cluster: "Payday Loan", angle: "Payday Harassment. Violations payoff",
  statute: "FDCPA + EFTA + state payday law",

  hero: {
    eyebrow: "Payday loans · Make them pay",
    h1: ["Payday Lenders ", "Violating", " Your Rights?"],
    lede: "Our Attorneys Can Help Make Them Pay.",
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
      "Calls before 8 AM or after 9 PM",
      "Threats of arrest over the loan",
      "Calls to my workplace",
      "Contacting my family",
      "ACH withdrawals continuing despite revocation",
      "Lender threatening criminal prosecution",
    ],
    submit: "Get a free case evaluation",
    stateExclusion: "We currently do not service DC, DE, ID, NC, OK, WV, or WY.",
  },

  trust: [
    { n: "44", lbl: "States with licensed attorneys" },
    { n: "$0", lbl: "Cost of your consultation" },
    { n: "EFTA", lbl: "Stop ACH withdrawals" },
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
    headline: "Every breach documented. Every claim pursued.",
    intro: "At Credo Legal, we don't just make the calls stop, we turn every illegal call into evidence. Payday collectors break the law often. We document every breach and build the federal claims the FDCPA creates.",
    bullets: [
      "Identify and document every FDCPA violation from day one.",
      "Send cease letter to halt contact while building your claim.",
      "Pursue statutory damages of up to $1,000 per lawsuit.",
      "Recover actual damages, attorney fees, and court costs from the collector.",
    ],
  },

  whyChoose: [
    ["Licensed attorneys, we build FDCPA cases", "Our attorneys pursue real legal claims against collectors who broke federal law."],
    ["We track every violation", "Each illegal call, threat, or contact after a cease request is catalogued and added to your claim."],
    ["Payday lenders violate more, we find more", "The aggressive collection tactics common in the payday loan industry create more violations, and more opportunities for recovery."],
    ["Free consultation", "No cost to find out how many violations you have and what your claim could be worth."],
    ["Flexible payment plans", "FDCPA attorney fees are recoverable from the collector if case is won, so pursuing your claim may cost you nothing out of pocket on that side."],
  ],

  commonProblems: [
    ["Calls before 8 AM or after 9 PM", "Each one is a documented, standalone FDCPA violation.", "§ 1692c(a)(1)"],
    ["Threatening arrest for an unpaid payday loan", "Illegal, and a common payday collector tactic. Every threat is actionable.", "§ 1692e(4)"],
    ["Calls to your workplace", "If your employer objects, every call to your job is a federal violation.", "§ 1692c(a)(3)"],
    ["Contacting family or friends about your debt", "Prohibited under the FDCPA. Each instance is a separate claim.", "§ 1692c(b)"],
    ["Continuing to call after a written cease request", "Every call after a cease is a standalone violation worth up to $1,000.", "§ 1692c(c)"],
    ["Misrepresenting the amount owed", "Payday lenders often inflate balances with fees and rollovers, misrepresenting the legal amount owed.", "§ 1692e(2)"],
  ],

  howItWorks: [
    ["Free consultation", "Tell us what the collector has been doing. We review every contact and identify violations at no cost.", "DAY 0"],
    ["Cease letter sent", "We stop the calls immediately while simultaneously beginning to document and build your FDCPA claim.", "DAY 0"],
    ["Violations catalogued", "Every illegal call, threat, and breach is recorded. Each one is potential money recovered from the collector.", "WEEK 1+"],
    ["Legal action", "We pursue statutory damages, actual damages, and attorney fees, shifting the financial pressure from you to them.", "ONGOING"],
  ],

  rights: {
    intro: "The FDCPA creates real financial accountability for collectors who break it.",
    items: [
      { cite: "§ 1692k(a)(2)(A)", label: "Per-lawsuit damages",        text: "Each FDCPA violation can result in up to $1,000 in statutory damages per lawsuit, recovered from the collector.", exLabel: "Remedy", ex: "Multiple collectors / multiple lawsuits, damages stack." },
      { cite: "§ 1692k(a)",       label: "Strict liability",           text: "You do not need to prove financial harm. The violation itself is enough to create liability.", exLabel: "Right", ex: "No proven harm required. The violation alone is the claim." },
      { cite: "§ 1692k(a)(1)",    label: "Actual damages",             text: "Actual damages, including emotional distress, lost wages, other real harm, are recoverable on top of statutory damages.", exLabel: "Remedy", ex: "Emotional distress, lost wages, real harm: all recoverable." },
      { cite: "§ 1692k(a)(3)",    label: "Fee-shifting",               text: "Attorney fees and court costs are recoverable from the collector, meaning your claim may cost you nothing out of pocket.", exLabel: "Remedy", ex: "Collector pays your legal fees when your claim succeeds." },
      { cite: "FDCPA",            label: "Sold debt fully covered",    text: "Payday lenders who sell debt to collectors make those collectors fully subject to the FDCPA.", exLabel: "Right", ex: "Original lender outside FDCPA? Third-party collector still bound by every rule." },
      { cite: "State consumer law", label: "Additional state claims",  text: "State consumer protection laws may provide additional claims against original payday lenders beyond what the FDCPA covers.", exLabel: "Right", ex: "Some states have private rights of action against unlicensed lenders." },
    ],
  },

  whoHelps: [
    "Anyone receiving repeated or harassing calls from a payday loan collector.",
    "People who've been threatened with arrest, criminal charges, or actions a collector cannot legally take.",
    "Those who've asked a collector to stop and keep receiving calls, every call after that is money owed.",
    "Anyone whose collector has contacted their employer, family members, or neighbors.",
    "People who are ready to stop being the victim and become the plaintiff.",
  ],

  faq: [
    ["How much can I recover from a payday loan collector who violated the FDCPA?", "Up to $1,000 per lawsuit in statutory damages, plus actual damages for any real harm suffered, plus attorney fees recoverable from the collector when you prevail."],
    ["Payday collectors threaten arrest constantly. Is that really illegal?", "Yes. Payday loan debt is a civil matter, not criminal. Any collector threatening arrest or criminal consequences is violating the FDCPA, every instance is a documented violation."],
    ["Do I need to prove I was financially harmed to make a claim?", "No. Under the FDCPA, a violation creates automatic liability. You don't need to show that the illegal contact cost you money."],
    ["What if the payday lender itself is calling, not a collector?", "The FDCPA applies to third-party collectors. However, many states have consumer protection laws that also apply to original lenders, providing additional claims against the lender directly."],
    ["How much does this cost?", "Your consultation is free. FDCPA attorney fees are recoverable from the collector when you prevail, meaning legal help on the harassment side may cost you nothing out of pocket."],
  ],

  bottomCta: {
    headline: "Every illegal call is evidence. Let's use it.",
    body: "Payday loan collectors bet on you not knowing your rights. Our attorneys know the law, and they build your case from the violations.",
    cta: "Get a free case evaluation",
  },

  disclaimer: "This is attorney advertising. Prior results do not guarantee a similar outcome.",
};
