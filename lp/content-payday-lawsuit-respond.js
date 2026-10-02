/* Credo Legal — Payday / Lawsuit — "Deadline Urgency" angle (Var A).
   Phone (347) 744-9014 (shared with Payday Rights + Var B). Sibling
   of /payday-loan-lawsuit-proof. Standard structure, voice fix. */
window.CREDO = {
  phone: "(347) 744-9014", phoneHref: "tel:+13477449014",
  cluster: "Payday Loan", angle: "Lawsuit. Deadline urgency",
  statute: "Civil procedure + state payday law + FDCPA",

  hero: {
    eyebrow: "Payday lawsuit · Respond on time",
    h1: ["Payday Lender ", "Suing", " You?"],
    lede: "Our Attorneys Can Help You Act On Time.",
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
    headline: "Sued over a payday loan? We answer fast.",
    intro: "At Credo Legal, when you're sued over a payday loan, we act immediately. We review the lawsuit and the loan, then file your response before the deadline.",
    bullets: [
      "File your legal answer before the response deadline.",
      "Review whether the payday loan was licensed and legal in your state.",
      "Challenge inflated balances from fees, interest, and rollovers.",
      "Defend you against default judgment and its consequences.",
    ],
  },

  whyChoose: [
    ["Licensed attorneys, we file", "Your response is submitted before the deadline. We don't let that window close."],
    ["We know payday loan law", "Payday loans are subject to specific state and federal rules. We examine the loan itself, not just the lawsuit."],
    ["We challenge the loan", "Before we respond, we examine whether the lender was licensed, whether the rate was legal in your state."],
    ["Protection from default judgment", "A default judgment enables wage garnishment and bank levies. We fight to prevent it."],
    ["Flexible payment plans", "Attorney-led lawsuit defense structured around your budget."],
  ],

  commonProblems: [
    ["Default judgment risk", "No response = the lender wins automatically, without proving the loan was valid or legally made.", "FRCP 55"],
    ["Expiring response deadlines", "20 to 28 days passes quickly. Courts rarely grant extensions once it expires.", "FRCP 12(a)"],
    ["Inflated balances from rollovers", "A payday loan originally for a few hundred dollars may have grown into thousands through repeated rollovers.", "State payday law"],
    ["Unlicensed or illegal lenders", "Some payday lenders operate without a license or charge above the legal rate in your state, making the loan voidable.", "State payday law"],
    ["Loans sold to collectors", "The entity suing you may be a debt buyer who purchased the loan, with incomplete documentation.", "FRE 803(6), 901"],
    ["Garnishment exposure", "A default judgment opens the door to wage garnishment and bank account levies immediately.", "15 U.S.C. § 1673"],
  ],

  howItWorks: [
    ["Free consultation", "Tell us about the lawsuit. We review the complaint and the loan at no cost.", "DAY 0"],
    ["Loan investigation", "Our attorneys examine the loan for licensing issues, rate violations, inflated fees, and documentation gaps.", "WEEK 1"],
    ["Legal response filed", "We file your answer before the deadline, incorporating every defense we've identified.", "BY DEADLINE"],
    ["Resolution", "We fight in court, negotiate a settlement, or pursue dismissal, based on what the review finds.", "ONGOING"],
  ],

  rights: {
    intro: "Even after a payday loan lawsuit is filed, significant legal protections remain available.",
    items: [
      { cite: "Civil right",         label: "Right to respond + counsel", text: "You have the right to respond to the lawsuit and be represented by an attorney in court.", exLabel: "Right", ex: "File an answer. Be heard. Force the lender to prove the case." },
      { cite: "State payday law",    label: "Unlicensed lender forfeits", text: "The lender must prove the loan was legally made and properly documented. In many states, unlicensed lenders forfeit the right to collect.", exLabel: "Right", ex: "Unlicensed lender = potential void of the entire claim." },
      { cite: "State usury law",     label: "Rate caps + payday rules",   text: "State usury and payday lending laws set rate caps and licensing requirements. A loan made in violation may be void or voidable.", exLabel: "Right", ex: "Above-cap rate = potential void of the interest, sometimes principal too." },
      { cite: "Chain of assignment", label: "Standing for debt buyers",   text: "If the debt was sold to a collector, they must prove an unbroken, documented chain of ownership.", exLabel: "Right", ex: "Multiple sales without documentation = standing problem." },
      { cite: "CFPB rules",          label: "Disclosure requirements",    text: "CFPB regulations require specific disclosures and lending practices. Violations can be raised as defenses.", exLabel: "Right", ex: "Missing or inadequate ability-to-repay assessment = potential defense." },
      { cite: "FRCP 60(b)",          label: "Vacating a judgment",        text: "A default judgment, while serious, can sometimes be vacated with prompt legal action.", exLabel: "Right", ex: "Improper service, mistake, excusable neglect, narrow but real grounds." },
    ],
  },

  whoHelps: [
    "Anyone who has received a summons or court papers for a payday loan lawsuit.",
    "People whose payday loan balance has grown far beyond the original amount through fees and rollovers.",
    "Those who borrowed from an online lender and aren't sure whether it was licensed in their state.",
    "Anyone who ignored early notices and is now facing a default judgment deadline.",
    "People who want the loan and the lawsuit independently reviewed before paying anything.",
  ],

  faq: [
    ["What happens if I don't respond to a payday loan lawsuit?", "The court enters a default judgment automatically. This gives the lender or collector the right to garnish wages and levy bank accounts, without ever having to prove the loan was valid."],
    ["How long do I have to respond?", "Typically 20 to 28 days from the date you were served, depending on your state. The clock starts the day of service."],
    ["Can a payday loan be challenged if I actually borrowed the money?", "Yes, in many cases. The original loan amount may be legally disputed if the lender was unlicensed, if the rate was above the state cap, or if disclosures were inadequate."],
    ["What if I borrowed from an online lender I found through an ad?", "Online payday lenders are required to be licensed in the state where the borrower lives. Many are not. Lack of licensing where you live can void the loan."],
    ["How much does this cost?", "Your consultation is free. We offer flexible payment plans and will explain every option before any commitment."],
  ],

  bottomCta: {
    headline: "Don't let the deadline hand them the win.",
    body: "Filing a response is the most important thing that can happen right now. Our attorneys act fast and explain the path forward.",
    cta: "Get a free case evaluation",
  },

  disclaimer: "This is attorney advertising. Prior results do not guarantee a similar outcome.",
};
