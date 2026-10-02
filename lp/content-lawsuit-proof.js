/* Credo Legal — Lawsuit / Collection_Lawsuit — "Proof Challenge" angle.
   Source: live capture LP_Lawsuit-Collection_VarB_ProofChallenge.md
   (2026-06-01, light bracketed completions filled from context).

   Sibling of /debt-lawsuit-respond-on-time (Collection_Lawsuit Var A
   Urgency) — same H1, same phone (212) 561-5902, different framing.
   This LP leans proof-challenge ("demand the records"); the sibling
   leans deadline-urgency ("respond on time").

   No structural deviations from the standard 14-block template.

   Universal fix:
   - Hero subhead: "Real Attorneys" → "Our Attorneys".
   - State exclusion list includes NC.

   Design enhancements applied:
   - Common Problems gains FRE / FCRA / state-SOL citations
   - How It Works gains time markers (DAY 0 → ONGOING)
   - Your Rights bullets promoted to structured items
   - Trust strip = Lawsuit-cluster "Court / Defense, not settlement only". */
window.CREDO = {
  phone: "(718) 521-4060",
  phoneHref: "tel:+17185214060",
  cluster: "Lawsuit",
  angle: "Collection_Lawsuit. Proof challenge",
  statute: "Civil procedure / FDCPA / FCRA",

  hero: {
    eyebrow: "Collection lawsuit · Demand the proof",
    // Same H1 as the sibling /debt-lawsuit-respond-on-time LP.
    h1: ["Debt Collector ", "Suing", " You?"],
    lede: "Our Attorneys Can Help You Challenge Their Claims.",
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
    { n: "Court", lbl: "Defense, not settlement only" },
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
    headline: "We don't take their claim at face value.",
    intro: "At Credo Legal, we don't take collection lawsuits at face value. Before filing a response, we investigate the underlying claim, who owns the debt, what they can prove, and where their documentation breaks down.",
    bullets: [
      "Examine the collector's documentation and proof of ownership.",
      "Challenge debt validity where records are incomplete or distorted.",
      "File your legal response addressing the specific weaknesses in their claim.",
      "Pursue dismissal or removal of invalid debts from your credit report.",
    ],
  },

  whyChoose: [
    ["Licensed attorneys, we challenge, not just respond", "We don't just file an answer. We examine the claim and attack its weaknesses."],
    ["We demand proof", "The collector must prove they own the debt, that it's accurate, and that they have the right to sue."],
    ["We challenge debt validity", "Errors, inflated balances, missing documentation, all become grounds for defense."],
    ["Dismissed debts come off your credit report", "A successfully challenged debt may be removed from your credit report entirely."],
    ["Flexible payment plans", "Attorney-led defense structured around your budget."],
  ],

  commonProblems: [
    ["Debts sold without complete records", "Collection agencies buy portfolios of debt, often without full documentation. The paper trail breaks down.", "FRE 803(6), 901"],
    ["No proof of ownership", "The entity suing you may not be able to prove they legally own the debt they're claiming.", "Chain of assignment"],
    ["Inflated or incorrect balances", "Fees, interest, and errors can be added over time. The amount claimed may not reflect what was originally owed.", "FDCPA § 1692e(2)"],
    ["Zombie debts", "Old debts past the statute of limitations brought back to court by new collectors.", "State SOL"],
    ["Debts you don't recognize", "Sold multiple times, often without notice. Many consumers are sued by collectors they've never heard of.", "FDCPA § 1692g"],
    ["Misrepresented claims", "Collectors sometimes file suits with inaccurate or exaggerated information, a violation in itself.", "FDCPA § 1692e(2),(10)"],
  ],

  howItWorks: [
    ["Free consultation", "Tell us about the lawsuit. We review the complaint and the debt at no cost.", "DAY 0"],
    ["Debt investigation", "Our attorneys examine documentation, ownership records, and the legal basis of the claim for vulnerabilities.", "WEEK 1"],
    ["Legal response filed", "We file your answer incorporating every valid challenge to the collector's claim.", "BY DEADLINE"],
    ["Resolution", "We fight to dismiss the case, negotiate a reduction, or have the debt declared invalid and removed from your credit report.", "ONGOING"],
  ],

  rights: {
    intro: "The burden of proof is on the collector, not on you.",
    items: [
      { cite: "Chain of assignment", label: "Standing to sue",          text: "Collectors must prove they legally own the debt before they can sue to collect it.", exLabel: "Right", ex: "No documented chain from original creditor to current collector = standing problem." },
      { cite: "FDCPA § 1692e(2)",    label: "Accurate amount required", text: "The amount claimed must be accurate. Misrepresenting what is owed is a federal FDCPA violation.", exLabel: "Violation", ex: "Inflated balance in the complaint = federal claim back against the collector." },
      { cite: "FRE 803(6), 901",     label: "Documentation chain",      text: "If the debt was sold, the collector must prove an unbroken chain of ownership and documentation.", exLabel: "Right", ex: "Each transfer must be authenticated with proper business records." },
      { cite: "State SOL",           label: "Time-barred debts",        text: "Debts past the statute of limitations cannot be legally enforced.", exLabel: "Right", ex: "Most consumer debts: 3–6 years depending on state. After that, suing is improper." },
      { cite: "FCRA",                label: "Credit-report cleanup",    text: "A successfully challenged and dismissed debt can be removed from your credit report under the Fair Credit Reporting Act.", exLabel: "Remedy", ex: "Dismissal in court → dispute with bureaus → removal from your report." },
      { cite: "FDCPA § 1692g",       label: "Validation right",         text: "You have the right to demand the collector verify the debt in writing before you are required to respond.", exLabel: "Right", ex: "Send a validation request. Collection activity pauses until they respond in writing." },
    ],
  },

  whoHelps: [
    "Anyone sued by a debt collection agency they may not recognize.",
    "People who believe the amount being claimed is incorrect, inflated, or includes fees they don't owe.",
    "Those whose debt has been sold multiple times and may lack complete documentation.",
    "Anyone who wants the claim independently examined before deciding how to respond.",
    "People looking for an attorney who will actively challenge the debt, not just negotiate a payment.",
  ],

  faq: [
    ["How do I know if the collector actually has proof of my debt?", "You often don't, until an attorney demands it. Many collectors file suits hoping for a default judgment without ever having to prove the claim in court."],
    ["What happens if the collector can't prove the debt?", "The case can be dismissed. A dismissed debt can then be disputed with the credit bureaus and removed from your credit report."],
    ["What is a “zombie debt” and do I have to pay it?", "A zombie debt is an old debt, often past the legal time limit for collection, that resurfaces when bought by a new collector. Suing on a time-barred debt may itself be illegal."],
    ["Do I still need to respond to the lawsuit even if I think the debt is wrong?", "Yes, and urgently. Failing to respond results in a default judgment regardless of whether the debt is valid. The response is what preserves your right to challenge."],
    ["How much does this cost?", "Your consultation is free. We offer flexible payment plans and will explain all options before any commitment."],
  ],

  bottomCta: {
    headline: "Don't pay a debt until you know it can be proven.",
    body: "Collectors file suits counting on you to give up. Our attorneys demand proof first, and fight on what the evidence shows.",
    cta: "Get a free case evaluation",
  },

  disclaimer: "This is attorney advertising. Prior results do not guarantee a similar outcome.",
};
