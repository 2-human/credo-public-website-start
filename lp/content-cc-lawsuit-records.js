/* Credo Legal — Credit Card / Lawsuit — "Proof Challenge / Records" angle (Var B).
   Phone (646) 952-7380 (CC-Lawsuit routing, shared with Var A Urgency).
   Per-LP: label-only Why Choose + Common Problems → expand. FAQ 4 → 5,
   add 5th. Bottom CTA heading-only → add body. Voice ×2 + label fix. */
window.CREDO = {
  phone: "(407) 624-3722", phoneHref: "tel:+14076243722",
  cluster: "Credit Card", angle: "Lawsuit. Proof challenge",
  statute: "Civil procedure + FDCPA + FCRA",

  hero: {
    eyebrow: "Credit card lawsuit · Demand the records",
    h1: ["Sued for Credit Card ", "Debt", "?"],
    lede: "Our Attorneys Find Errors and Challenge Their Claims.",
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
      "Just got served / received summons",
      "Response deadline approaching",
      "Wage garnishment threatened",
      "Default judgment already entered",
      "Negotiating with creditor counsel",
      "Bank account levy or asset seizure",
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
    headline: "We demand the documentation they must provide.",
    intro: "At Credo Legal, we don't take debt claims at face value. We challenge them legally, and demand the documentation creditors must provide.",
    bullets: [
      "Investigate whether the creditor holds valid documentation of the debt.",
      "Demand legal proof the debt is yours and the amount is accurate.",
      "Fight to have invalid or undocumented debts dismissed.",
      "Remove invalid debts from your credit report.",
    ],
  },

  whyChoose: [
    ["Attorney assistance from day one", "Licensed attorneys handle your case from the first conversation, no handoffs, no delays."],
    ["We challenge every dollar of debt validity", "Inflated balances, missing assignments, calculation errors, all become grounds for defense."],
    ["Debt removal from credit report", "When the debt is dismissed or invalidated, we pursue removal from your credit report under the FCRA."],
    ["Protection from unjust lawsuits", "Most collection lawsuits depend on the defendant not showing up. With an attorney, the case becomes a contest."],
    ["Flexible payment plans", "Attorney-led defense structured around your budget."],
  ],

  commonProblems: [
    ["Debts sold without complete records", "Card debts sell many times before reaching court. The documentation often doesn't survive the journey.", "FRE 803(6), 901"],
    ["Inflated or unverifiable balances", "Fees, interest, and adjustments can multiply a balance well beyond what the cardmember agreement allows.", "State usury / contract"],
    ["Invalid or “zombie” debts", "Old debts past the statute of limitations sometimes get brought back to court by new collectors.", "State SOL"],
    ["Credit report damage from unenforceable debts", "Even debts that can't be enforced in court can sit on your credit report, until challenged.", "FCRA § 623"],
    ["Collectors who cannot prove you owe", "Many collection lawsuits rely on default. When attorneys appear, the proof requirement bites.", "Chain of assignment"],
    // Synthesized 6th to hit standard cluster count.
    ["Wrongly identified accounts", "Identity issues, mistaken accounts, and payment errors can mean the debt isn't yours at all.", "FDCPA § 1692g"],
  ],

  howItWorks: [
    ["Free consultation", "We review the debt claim and your situation.", "DAY 0"],
    ["Debt investigation", "We demand documentation and examine the evidence.", "WEEK 1"],
    ["Legal representation", "We challenge the debt's validity in court.", "BY DEADLINE"],
    ["Dismissal or debt resolution", "Invalid debts get dismissed and removed from your record.", "ONGOING"],
  ],

  rights: {
    intro: "Federal consumer protection laws give you the right to challenge a debt before paying it.",
    items: [
      { cite: "FDCPA § 1692g",       label: "Documentation required",     text: "Collectors cannot claim you owe a debt without being able to prove it with proper documentation.", exLabel: "Right", ex: "Send a validation request. Collection pauses until they respond in writing." },
      { cite: "Discharge / payment",  label: "Resolved debts off limits", text: "Collectors cannot pursue a debt that has already been discharged or resolved.", exLabel: "Right", ex: "Paid, settled, or bankruptcy-discharged = no collection." },
      { cite: "FCRA § 623",           label: "Accurate credit reporting", text: "Collectors cannot report inaccurate debt information to credit bureaus.", exLabel: "Violation", ex: "Willful false reporting = statutory damages + attorney fees." },
      { cite: "FDCPA § 1692e(5)",     label: "No false threats",          text: "Collectors cannot threaten legal action on a debt they cannot legally enforce.", exLabel: "Violation", ex: "Threatening to sue on a time-barred debt = federal violation." },
      { cite: "State SOL",            label: "Time-barred debts",         text: "Collectors cannot collect on debts where the statute of limitations has expired.", exLabel: "Right", ex: "Most consumer debts: 3–6 years depending on state." },
      { cite: "Chain of assignment",  label: "Standing to sue",           text: "Debt buyers must prove a complete, documented chain of ownership from the original creditor.", exLabel: "Right", ex: "No complete chain = standing problem." },
    ],
  },

  whoHelps: [
    "People sued over credit card debt they believe is wrong or unverifiable.",
    "Anyone whose debt has been bought and sold between multiple collectors.",
    "Those who have been contacted about old or “zombie” debts resurfacing.",
    "People whose credit report shows debts they don't recognize.",
    "Anyone who wants to verify whether a debt is legally enforceable before paying a cent.",
  ],

  faq: [
    ["How do credit card debts lose their documentation?", "Credit card debts are frequently sold to third-party collectors, sometimes multiple times over. Each sale risks paperwork loss, and many resold debts arrive in court without the documentation needed to enforce them."],
    ["What happens if they can't prove the debt?", "If a creditor cannot provide proper documentation to verify the debt, the case can be dismissed. We pursue dismissal and removal of the debt from your credit report."],
    ["Can invalid debts really be removed from my credit report?", "Yes. If a debt is invalid, unenforceable, or improperly documented, we work to have it removed from your credit report under the FCRA."],
    // Synthesized 4th item — addresses cluster-pattern timing concern.
    ["What if my lawsuit deadline is approaching?", "Call us immediately. Even with limited time, we can review the complaint, file a response, and protect your right to be heard. Missing the deadline is what hands them the win."],
    // Voice fix in body ('real attorney representation' → 'attorney representation').
    ["How much does this cost?", "We offer flexible payment plans so you can get attorney representation without paying everything upfront. Your consultation is free."],
  ],

  // Body synthesized — live was heading-only.
  bottomCta: {
    headline: "Don't pay debt you may not owe. Get a free review today.",
    body: "Many credit card debts can't survive a legal challenge. Our attorneys check first, and pursue what the evidence supports.",
    cta: "Get a free case evaluation",
  },

  disclaimer: "This is attorney advertising. Prior results do not guarantee a similar outcome.",
};
