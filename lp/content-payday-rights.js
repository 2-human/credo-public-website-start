/* Credo Legal — Payday Loan / Rights — "Education" angle.
   Source: live capture LP_PaydayLoan-Rights_VarA_Education.md (2026-06-01).

   Phone (347) 744-9014 — Payday Rights + Lawsuit shared routing,
   distinct from Payday Harassment's (407) 512-0808. Internal logic:
   Lawsuit + Rights → defense-track team; Harassment → FDCPA-claims team.

   No structural deviations. Universal voice + grammar fix:
   Hero subhead 'Real Attorney Can Help You Understand Them and Act'
   (singular, missing article) → 'Our Attorneys Can Help You Understand
   Them and Act.'

   No other deviations. Clean LP. */
window.CREDO = {
  phone: "(347) 744-9014", phoneHref: "tel:+13477449014",
  cluster: "Payday Loan", angle: "Rights education",
  statute: "FDCPA + EFTA + state payday law + Military Lending Act",

  hero: {
    eyebrow: "Payday loans · Know your rights",
    h1: ["Confused About Payday Loan ", "Rights", "?"],
    lede: "Our Attorneys Can Help You Understand Them and Act.",
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
      "Researching my options before acting",
      "Lender harassment but no lawsuit yet",
      "Unsure whether the loan was legal",
      "Want to stop ACH withdrawals",
      "Considering whether to dispute the debt",
      "Active-duty military or dependent",
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
    headline: "Education first. Then the legal claim.",
    intro: "At Credo Legal, we start with education. Before recommending any course of action, our attorneys explain the federal and state rules that govern payday loans, so you can decide what to do from a position of knowledge.",
    bullets: [
      "Explain your FDCPA rights against third-party collectors.",
      "Review whether your original loan was legally made in your state.",
      "Advise on your right to stop automatic bank withdrawals.",
      "Assess whether the lender or collector has violated federal or state rules.",
    ],
  },

  whyChoose: [
    ["Licensed attorneys, legal advice, not just information", "We don't hand you a list of rules. We review your situation and tell you specifically where you stand."],
    ["We know payday loan law", "Federal rules, state licensing requirements, rate caps, CFPB regulations, we know them all and how they apply to your case."],
    ["We explain before we act", "You'll understand your options fully before we recommend anything."],
    ["Free consultation", "No cost to know whether you have rights being violated and what you can do about it."],
    ["Flexible payment plans", "If you decide to move forward, legal help is structured around your budget."],
  ],

  commonProblems: [
    ["Not knowing whether the loan itself was legal", "Payday lenders must be licensed in your state and comply with rate caps. Many online lenders don't, and those loans may be unenforceable.", "State payday law"],
    ["Unaware of the right to stop automatic withdrawals", "Payday lenders often use ACH authorization to pull payments. You have the right to revoke that authorization.", "15 U.S.C. § 1693"],
    ["Confused about what collectors are allowed to do", "Third-party collectors pursuing payday loan debt must follow the FDCPA. Most borrowers don't know which behaviors are illegal.", "FDCPA"],
    ["Worried about a lawsuit", "Many payday loan borrowers fear a lawsuit but don't know that payday loan claims are often challengeable, sometimes void entirely.", "State payday law"],
    ["Receiving threats that may be illegal", "Threatening arrest for an unpaid payday loan is a federal violation. Many borrowers assume it's legal and don't push back.", "FDCPA § 1692e(4)"],
    ["Unsure whether to pay, dispute, or ignore", "Each option has different legal and financial consequences. You should understand all three before choosing.", "Legal counsel"],
  ],

  howItWorks: [
    ["Free consultation", "Tell us about your situation. We explain your rights under federal and state law at no cost, no pressure.", "DAY 0"],
    ["Case review", "Our attorneys examine the loan, the collector's conduct, and the full range of your legal options.", "WEEK 1"],
    ["Recommendation", "We outline the best path forward for your specific situation: cease letter, loan challenge, FDCPA claim, or another approach.", "WEEK 1–2"],
    ["Action", "If you choose to move forward, we handle everything, from stopping the calls to challenging the loan or pursuing damages.", "ONGOING"],
  ],

  rights: {
    intro: "Payday loan borrowers have more legal protection than most realize, at both the federal and state level.",
    items: [
      { cite: "FDCPA",             label: "FDCPA applies",          text: "The FDCPA applies fully to third-party collectors pursuing payday loan debt, prohibiting harassment, threats, and abusive tactics.", exLabel: "Right", ex: "Same federal protections that apply to other consumer debts apply here." },
      { cite: "State payday law",  label: "Licensing + rate caps",  text: "State payday lending laws set licensing requirements and interest rate caps. A loan from an unlicensed lender or above the state cap may be unenforceable.", exLabel: "Right", ex: "Loan from a non-licensed online lender? May be void, principal possibly not owed." },
      { cite: "15 U.S.C. § 1693",  label: "EFTA / ACH revocation",  text: "The Electronic Funds Transfer Act gives you the right to revoke ACH authorization, you can legally stop automatic bank withdrawals.", exLabel: "Right", ex: "Notify your bank in writing. Withdrawals must stop within 3 business days." },
      { cite: "CFPB rules",        label: "Disclosure + ability-to-repay", text: "CFPB rules require payday lenders to make specific disclosures and assess ability to repay. Violations can create defenses.", exLabel: "Right", ex: "Loan made without proper ability-to-repay assessment = potential defense." },
      { cite: "FDCPA § 1692e(4)",  label: "No arrest threats",      text: "Threatening arrest for an unpaid payday loan is illegal. Debt is a civil matter, and this threat violates federal law.", exLabel: "Violation", ex: "Any 'we'll have you arrested' threat from a collector = federal violation." },
      { cite: "10 U.S.C. § 987",   label: "Military Lending Act",   text: "The Military Lending Act caps payday loan interest at 36% for active-duty military and their dependents.", exLabel: "Right", ex: "Active duty? Anything above 36% APR is illegal under federal law." },
    ],
  },

  whoHelps: [
    "People doing research before deciding what to do about a payday loan they can't repay.",
    "Anyone who has received threatening calls or letters from a payday lender or debt collector.",
    "Those unsure whether the payday loan they took was legally made in their state.",
    "People who want to stop automatic bank withdrawals but don't know how to do it properly.",
    "Anyone who wants to understand all their legal options before taking any action.",
  ],

  faq: [
    ["What laws protect me from payday loan collectors?", "The Fair Debt Collection Practices Act (FDCPA) applies to third-party collectors pursuing payday loan debt. State laws and CFPB rules also apply, and the Military Lending Act provides additional protections for active-duty service members."],
    ["Can I legally stop my payday lender from withdrawing money from my bank account?", "Yes. Under the Electronic Funds Transfer Act, you have the right to revoke ACH authorization, the electronic permission you gave the lender to debit your account. Notify your bank in writing; withdrawals must stop within 3 business days."],
    ["What happens if my payday lender wasn't licensed in my state?", "A payday lender operating without a license in your state may have made an unenforceable loan. If the loan is void, you may not legally owe the principal, let alone the interest."],
    ["What if I'm afraid to take any action because I think I'll be sued?", "Understanding your rights doesn't increase your legal exposure, it reduces it. Knowing whether the loan was legal and what defenses you have puts you in a stronger position regardless of what happens next."],
    ["How much does this cost?", "Your consultation is free. We offer flexible payment plans and will walk you through every option before any commitment."],
  ],

  bottomCta: {
    headline: "Know your rights before you make any decisions.",
    body: "Payday lenders count on you not knowing the rules. A free consultation puts that knowledge in your corner.",
    cta: "Get a free case evaluation",
  },

  disclaimer: "This is attorney advertising. Prior results do not guarantee a similar outcome.",
};
