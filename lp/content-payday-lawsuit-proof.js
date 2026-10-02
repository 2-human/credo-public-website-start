/* Credo Legal — Payday / Lawsuit — "Proof Challenge" angle (Var B).
   Phone (347) 744-9014 (shared with Rights + Lawsuit cluster).
   No structural deviations. Voice fix on subhead. */
window.CREDO = {
  phone: "(347) 744-9014", phoneHref: "tel:+13477449014",
  cluster: "Payday Loan", angle: "Lawsuit. Proof challenge",
  statute: "Civil procedure + state payday law + FCRA",

  hero: {
    eyebrow: "Payday lawsuit · Demand the proof",
    h1: ["Payday Loan Debt Seems ", "Wrong", "?"],
    lede: "Our Attorneys Can Help You Dispute It.",
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
    headline: "We check whether the loan was even legal.",
    intro: "At Credo Legal, we don't accept payday loan lawsuits at face value. Before we file a response, we investigate the loan's legality, the lender's licensing, and whether the collector can actually prove the debt is owed.",
    bullets: [
      "Demand proof of debt ownership and complete documentation.",
      "Challenge whether the loan was licensed and legally made in your state.",
      "Contest inflated balances from fees, rollovers, and improper charges.",
      "File your legal response incorporating every valid defense before the deadline.",
    ],
  },

  whyChoose: [
    ["Licensed attorneys, we examine before we respond", "We investigate the claim's foundation before filing a single word in court."],
    ["Payday loans have unique vulnerabilities", "Unlicensed lenders, rate violations, rollover inflation, and missing documentation create defenses that don't exist in other consumer-debt cases."],
    ["We demand proof", "The collector must prove they own the debt, that it's accurate, and that the original loan was legal in your state."],
    ["Dismissed debts come off your credit report", "A successfully challenged and dismissed payday loan debt may be removed from your credit report entirely."],
    ["Flexible payment plans", "Attorney-led defense structured around your budget."],
  ],

  commonProblems: [
    ["Debt sold without complete records", "Payday lenders sell portfolios frequently, often without full loan documentation. The paper trail required to prove a debt may simply not exist.", "FRE 803(6), 901"],
    ["No proof of ownership", "The entity suing you may be three or four steps removed from the original lender, with no clean chain of title.", "Chain of assignment"],
    ["Inflated balances", "Fees, rollovers, and interest charges can multiply the original loan amount many times over. Not all of those charges are legally enforceable.", "State payday law"],
    ["Unlicensed lenders", "Online payday lenders are required to hold a license in your state. Many don't. A loan from an unlicensed lender may be void.", "State payday law"],
    ["Above-cap interest rates", "Many states cap payday loan rates. A loan made above the cap may be partially or fully unenforceable.", "State usury law"],
    ["Loans you don't recognize", "If a loan was sold multiple times, the name on the lawsuit may bear no resemblance to who you originally borrowed from.", "FDCPA § 1692g"],
  ],

  howItWorks: [
    ["Free consultation", "Tell us about the lawsuit. We review the complaint and the debt with you at no cost.", "DAY 0"],
    ["Loan and debt investigation", "Our attorneys examine licensing, documentation, ownership, and the legality of the rate and fees claimed.", "WEEK 1"],
    ["Legal response filed", "We file your answer before the deadline, incorporating every challenge we've identified.", "BY DEADLINE"],
    ["Resolution", "We fight to dismiss, reduce, or settle the claim based on what the investigation reveals, and pursue removal from your credit report where dismissed.", "ONGOING"],
  ],

  rights: {
    intro: "The law puts the burden of proof on the lender, not on you.",
    items: [
      { cite: "Chain of assignment", label: "Proof of ownership",       text: "The collector must prove they legally own the debt, an unbroken, documented chain of ownership is required.", exLabel: "Right", ex: "No complete chain from original lender to current collector = standing problem." },
      { cite: "FDCPA § 1692e(2)",    label: "Accurate amount required", text: "The amount claimed must be accurate. Inflated balances from improper fees and rollovers can be challenged.", exLabel: "Violation", ex: "Inflated balance in the complaint = federal claim against the collector filing it." },
      { cite: "State payday law",    label: "Licensing + rate caps",    text: "State payday lending laws set licensing requirements and rate caps. Loans made in violation are often unenforceable.", exLabel: "Right", ex: "Above-cap rate or unlicensed lender = potential void." },
      { cite: "State payday law",    label: "Unlicensed loan defense",  text: "If the lender was unlicensed in your state, the loan itself may be void and the lawsuit without merit.", exLabel: "Right", ex: "Void loan = principal possibly not owed." },
      { cite: "CFPB rules",          label: "Disclosure requirements",  text: "CFPB rules require clear disclosures on payday loan terms. Violations can be raised as defenses.", exLabel: "Right", ex: "Missing or false disclosures = additional defense to add to the answer." },
      { cite: "FCRA",                label: "Credit-report cleanup",    text: "A successfully challenged and dismissed debt can be removed from your credit report under the Fair Credit Reporting Act.", exLabel: "Remedy", ex: "Dismissal in court → dispute with bureaus → removal." },
    ],
  },

  whoHelps: [
    "Anyone sued by a debt buyer or collector over a payday loan they may not fully recognize.",
    "People whose payday loan balance has grown far beyond the original amount through fees and rollovers.",
    "Those who borrowed from an online lender and aren't sure whether it was licensed in their state.",
    "Anyone who wants the loan and the claim independently reviewed before paying, settling, or responding.",
    "People looking for an attorney who will actively challenge the debt, not just negotiate a payment plan.",
  ],

  faq: [
    ["How do I know if the collector actually has documentation for my payday loan?", "You often don't, and many collectors count on that. We demand documentation as part of our defense, and many cannot produce it."],
    ["Can a payday loan be challenged if I actually borrowed the money?", "Yes. The original loan amount may be legally disputed if the lender wasn't licensed, if the rate was above your state cap, or if fees were applied improperly."],
    ["What happens if the collector can't prove their case?", "The lawsuit can be dismissed. A dismissed payday loan debt can then be disputed with credit bureaus and potentially removed from your credit report."],
    ["Do I still need to respond even if I think the debt is wrong?", "Yes, and urgently. Failing to respond results in a default judgment regardless of whether the claim has merit. Responding is what preserves your right to challenge."],
    ["How much does this cost?", "Your consultation is free. We offer flexible payment plans and will explain every option before any commitment."],
  ],

  bottomCta: {
    headline: "Don't pay a payday loan debt until you know it can be proven.",
    body: "Collectors sue on payday loans counting on you to give up without checking. Our attorneys check every claim.",
    cta: "Get a free case evaluation",
  },

  disclaimer: "This is attorney advertising. Prior results do not guarantee a similar outcome.",
};
