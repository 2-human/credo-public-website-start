/* Credo Legal — Credit Card / Lawsuit — "Deadline Urgency" angle (Var A).
   Phone (646) 952-7380 (shared with #27 Var B). Per-LP: label-only Why
   Choose + Common Problems → expand. HIW step 4 missing body → write.
   FAQ 4→5. Bottom CTA heading→add body. H1 casing fix. Voice ×2. */
window.CREDO = {
  phone: "(407) 624-3722", phoneHref: "tel:+14076243722",
  cluster: "Credit Card", angle: "Lawsuit. Deadline urgency",
  statute: "Civil procedure + FDCPA",

  hero: {
    eyebrow: "Credit card lawsuit · Respond on time",
    // H1 casing fixed from live ('Sued for credit card debt?' lowercase).
    h1: ["Sued for Credit Card ", "Debt", "?"],
    lede: "Our Attorneys Can Help You Respond On Time.",
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
    headline: "Sued over a card balance? We answer.",
    intro: "At Credo Legal, when you're sued for credit card debt, we don't wait. We help file your response and defend you in court, before the deadline runs out.",
    bullets: [
      "File your legal answer before the response deadline.",
      "Challenge whether the creditor can legally enforce the debt.",
      "Defend you against default judgment.",
      "Hold credit card companies accountable for improper claims.",
    ],
  },

  whyChoose: [
    ["Attorney assistance from day one, not salespeople", "Licensed attorneys on your case from the first conversation. No handoffs, no delays."],
    ["We file your legal response before deadlines hit", "Filing the answer before the clock runs out is the single most important thing that can happen right now."],
    ["We challenge debt validity", "Before we respond, we examine the claim for errors, missing documentation, and inflated balances."],
    ["Protection from default judgment", "A default judgment opens the door to wage garnishment and bank levies. We fight to prevent it."],
    ["Flexible payment plans", "Legal defense structured around your budget."],
  ],

  commonProblems: [
    ["Default judgment risk", "No response = the creditor wins automatically without proving the case.", "FRCP 55"],
    ["Missed or expiring response deadlines", "20 to 28 days passes quickly. Courts rarely grant extensions once the window closes.", "FRCP 12(a)"],
    ["Creditors with unverified debt claims", "Many credit card suits arrive in court without the documentation needed to prove the debt.", "FRE 803(6), 901"],
    ["Credit card company legal teams", "Card issuers and their assignees employ attorneys who file these cases daily. You deserve representation too.", "Civil right"],
    ["Unfair or inflated balances", "The amount being claimed may include fees, default-rate interest, and adjustments that aren't legally enforceable.", "State usury / contract"],
    // Synthesized 6th.
    ["Wage garnishment after default", "A default judgment opens the door to garnishment, bank levies, and credit-report damage. Responding on time keeps that door closed.", "15 U.S.C. § 1673"],
  ],

  howItWorks: [
    ["Free consultation", "We review your lawsuit and explain your options at no cost.", "DAY 0"],
    ["Debt investigation", "We examine the claim, the creditor's documentation, and the legal basis for a viable defense.", "WEEK 1"],
    ["Legal representation", "We help file your response and fight in court on your behalf.", "BY DEADLINE"],
    // HIW step 4 had no body on live — synthesized.
    ["Work towards debt resolution", "We negotiate, defend, or pursue dismissal based on what the case supports, and pursue credit-report cleanup once resolved.", "ONGOING"],
  ],

  rights: {
    intro: "Federal law protects you when creditors take legal action. Before paying anything or accepting a default judgment, know your rights. Creditors cannot:",
    items: [
      { cite: "FRCP 4",            label: "Proper service first",      text: "Obtain a default judgment against you without first serving you properly.", exLabel: "Right", ex: "No valid service = no valid judgment." },
      { cite: "FRE 401–402",       label: "Burden of proof",           text: "Claim you owe a debt without being able to prove it legally.", exLabel: "Right", ex: "Plaintiff carries the burden. You don't have to prove a negative." },
      { cite: "FDCPA § 1692e(2)",  label: "Accurate amount required",  text: "Misrepresent the amount you owe or inflate the balance.", exLabel: "Violation", ex: "Inflated balance in the complaint = federal claim back against the collector." },
      { cite: "FDCPA § 1692e(5)",  label: "No abusive lawsuit threats", text: "Use the threat of a lawsuit as a harassment tactic.", exLabel: "Violation", ex: "Threats to sue with no intent to follow through = federal violation." },
      { cite: "Civil right",        label: "Right to defend",           text: "Proceed without giving you the opportunity to respond and defend yourself.", exLabel: "Right", ex: "Due process requires notice + opportunity to be heard." },
      // Synthesized 6th.
      { cite: "FRCP 60(b)",         label: "Vacating a judgment",        text: "A default judgment is not always final, in certain circumstances it can be vacated with prompt legal action.", exLabel: "Right", ex: "Improper service, mistake, excusable neglect, narrow but real grounds." },
    ],
  },

  whoHelps: [
    "People who have received a credit card lawsuit summons and don't know what to do.",
    "Anyone facing a debt lawsuit with a response deadline approaching.",
    "Those who believe the debt amount is incorrect or inflated.",
    "Anyone who feels outmatched by a credit card company's legal team.",
    "People looking for attorney-led lawsuit defense on a flexible payment plan.",
  ],

  faq: [
    ["What happens if I don't respond to a credit card lawsuit?", "If you don't respond within the deadline, typically 20 to 28 days, the court may enter a default judgment against you, giving the creditor the right to garnish wages and levy bank accounts."],
    ["How long do I have to respond?", "Response deadlines vary by state, but most give you 20 to 28 days from the date you were served. The clock starts at service."],
    ["Can you help even if I've already missed a deadline?", "Possibly. In some cases we can file a motion to vacate a default judgment, particularly if you weren't properly served or if other procedural issues exist. Every situation is different."],
    // Synthesized 4th.
    ["What if I think the debt amount is wrong?", "That's exactly what we examine before responding. Many credit card lawsuits include inflated balances, default-rate interest, or fees that aren't legally enforceable. The response is the place to raise it."],
    // Voice fix.
    ["How much does this cost?", "We offer flexible payment plans so you can get attorney help without paying everything upfront. Your consultation is free."],
  ],

  // Body synthesized — live was heading-only.
  bottomCta: {
    headline: "Don't let the deadline cost you. Get help today.",
    body: "Filing a response is the most important thing that can happen right now. Our attorneys act fast, and explain the path forward.",
    cta: "Get a free case evaluation",
  },

  disclaimer: "This is attorney advertising. Prior results do not guarantee a similar outcome.",
};
