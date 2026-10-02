/* Credo Legal — Medical Debt / Lawsuit — "Billing Errors" angle (Var B).
   FIRST MEDICAL-DEBT CLUSTER LP. Phone (612) 260-9170 unique to Medical
   Debt cluster (distinct from all other cluster routings). Standard
   structure, voice fix on subhead. */
window.CREDO = {
  phone: "(801) 386-9050", phoneHref: "tel:+18013869050",
  cluster: "Medical Debt", angle: "Lawsuit. Billing errors",
  statute: "Civil procedure + FDCPA + FCRA + No Surprises Act",

  hero: {
    eyebrow: "Medical lawsuit · Challenge the bill",
    h1: ["Medical Bills Look ", "Wrong", "?"],
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
      "Sued by a hospital or provider",
      "Sued by a third-party medical collector",
      "Bill from a procedure I didn't have",
      "Surprise out-of-network charges",
      "Insurance should have covered it",
      "Bill far exceeds what was disclosed",
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
    headline: "We audit the bill, line by line.",
    intro: "We don't take medical debt lawsuits at face value. Before we file a response, we examine the billing record itself, line by line.",
    bullets: [
      "Examine every line of the billing record for duplicate charges, inflated amounts, missed insurance credits.",
      "Verify the collector's legal standing to sue: chain of title, assignment documentation, and proof they own the debt.",
      "Identify procedural defects in the filing: improper service, incomplete documentation, or claims the law doesn't support.",
      "Challenge the bill in writing and in court: motions, answers, and counterclaims where the law supports it.",
    ],
  },

  whyChoose: [
    ["Licensed attorneys, real legal defense", "We don't just help you respond, we examine the foundation of the claim before we do."],
    ["We examine the bill before responding", "Every charge is reviewed. Errors found before we respond become ammunition in your defense."],
    ["We challenge what's wrong", "Errors, inflation, and procedural defects all get raised formally."],
    ["Free consultation", "Know what you're actually dealing with, at no cost."],
    ["Flexible payment plans", "Legal defense that works with your financial situation."],
  ],

  commonProblems: [
    ["Inflated or upcoded charges", "Billing for more expensive procedures than were actually performed is common.", "FDCPA § 1692e(2)"],
    ["Debt sold without complete records", "Collectors often purchase debt portfolios with incomplete or distorted documentation.", "FRE 803(6), 901"],
    ["Charges for services never rendered", "Phantom procedures appear on medical bills more often than the industry acknowledges.", "FDCPA § 1692e(2)"],
    ["Surprise out-of-network bills", "Charges added after the fact for providers who weren't disclosed as out-of-network.", "No Surprises Act"],
    ["Statute of limitations issues", "Old debts brought to court may be past the legal window for collection.", "State SOL"],
    ["Duplicate bills", "The same service billed multiple times, sometimes across different entities.", "FDCPA § 1692f"],
  ],

  howItWorks: [
    ["Free consultation", "Tell us about the lawsuit. We review the complaint and the debt at no cost.", "DAY 0"],
    ["Bill review", "Our attorneys examine every charge, the collection history, and the court filing for errors, validity, and procedural defects.", "WEEK 1"],
    ["Response filed", "We file your legal answer before the deadline, incorporating the grounds we've identified to challenge the debt.", "BY DEADLINE"],
    ["Resolution", "We fight the case, negotiate a favorable settlement, or move to have the debt reduced or dismissed.", "ONGOING"],
  ],

  rights: {
    intro: "The law doesn't assume collectors are right, it requires them to prove it.",
    items: [
      { cite: "FDCPA § 1692g",      label: "Validation right",          text: "You have the right to demand proof that a debt is valid and accurately stated before paying.", exLabel: "Right", ex: "Send a validation request. Collection activity pauses until the collector responds in writing." },
      { cite: "Chain of assignment", label: "Standing for debt buyers", text: "Collectors must demonstrate legal ownership of the debt. If it was sold, the chain of ownership matters.", exLabel: "Right", ex: "No complete chain from provider to current collector = standing problem." },
      { cite: "FDCPA § 1692e(2)",   label: "Accurate amount required",   text: "Misrepresenting the amount owed in a court filing is a federal FDCPA violation.", exLabel: "Violation", ex: "Inflated balance in the complaint = federal claim back against the collector." },
      { cite: "No Surprises Act",   label: "Surprise-bill protection",   text: "Federal and state surprise billing laws protect you from certain out-of-network charges being collected.", exLabel: "Right", ex: "Out-of-network emergency or scheduled-procedure surprise = protected." },
      { cite: "State contract law", label: "Owe what's actually due",    text: "Even if you owe something, you may not legally owe the amount being claimed in the lawsuit.", exLabel: "Right", ex: "Reduction to actual reasonable charges is possible after challenge." },
      { cite: "FCRA",                label: "Credit-report cleanup",     text: "Successfully challenging an invalid debt may result in its dismissal and removal from your credit report.", exLabel: "Remedy", ex: "Dismissal + dispute with bureaus = removal." },
    ],
  },

  whoHelps: [
    "Anyone sued for a medical bill they believe is inaccurate, inflated, or already covered by insurance.",
    "Patients whose debt was sold to a third-party collector who may not have complete records.",
    "Those being sued for old hospital or emergency room bills they don't fully recognize.",
    "People who received surprise bills after a procedure and were never warned about out-of-network charges.",
    "Anyone who wants the bill independently verified before paying, settling, or responding.",
  ],

  faq: [
    ["How common are billing errors in medical debts that end up in lawsuits?", "Very common. When debts are sold between collectors, documentation frequently gets lost or distorted. Upcoded charges, phantom procedures, and duplicate bills are all routine."],
    ["What does “challenge the validity” of a medical debt in court mean?", "It means formally requiring the collector to prove the debt is accurate, that they legally own it, and that they have the right to collect it. Many collectors cannot."],
    ["If the debt is challenged successfully, does it come off my credit report?", "Yes. If a debt is dismissed or settled on favorable terms, you can request its removal from your credit report under the FCRA."],
    ["Do I still need to respond to the lawsuit even if I think the bill is wrong?", "Yes, and urgently. Failing to respond results in a default judgment regardless of whether the bill is right."],
    ["How much does this cost?", "Your consultation is free. We offer flexible payment plans and will walk you through every option before committing."],
  ],

  bottomCta: {
    headline: "Don't settle a medical debt until you know what you actually owe.",
    body: "Collectors file lawsuits counting on you to give up. Our attorneys count the charges first, and fight based on what we find.",
    cta: "Get a free case evaluation",
  },

  disclaimer: "This is attorney advertising. Prior results do not guarantee a similar outcome.",
};
