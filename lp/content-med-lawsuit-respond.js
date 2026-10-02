/* Credo Legal — Medical Debt / Lawsuit — "Urgency / Respond on Time" angle (Var A).
   Source: live re-fetch during 2026-06-23 audit. NOT in 2026-06-01
   capture set (capture had mapped Var A to typo'd /medica-debt-...
   which 404'd; the corrected slug /medical-debt-lawsuit-respond IS
   live). Phone (612) 260-9170 (same as /medical-debt-bills-errors).

   Per-LP deviations resolved:
   - Tab title 'Mount Your Defence' → 'Mount Your Defense' (US).
   - H1 typo 'Medial Debt Collector Suing?' → 'Medical Debt Collector
     Suing You?' (also adds 'You' for clarity).
   - Subhead typo 'Help Your Respond' → 'Help You Respond'.
   - Voice subhead 'Real Attorneys' → 'Our Attorneys'. */
window.CREDO = {
  phone: "(801) 386-9050", phoneHref: "tel:+18013869050",
  cluster: "Medical Debt", angle: "Lawsuit. Respond on time",
  statute: "Civil procedure + FDCPA + No Surprises Act",

  hero: {
    eyebrow: "Medical lawsuit · Respond on time",
    // Typos fixed: 'Medial' → 'Medical'; added 'You?' for parallelism.
    h1: ["Medical Debt Collector ", "Suing", " You?"],
    // Typo fixed: 'Help Your Respond' → 'Help You Respond'.
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
    headline: "Sued for medical debt? We act first.",
    intro: "When you're sued for medical debt, we don't wait. We review the lawsuit, identify errors or invalid charges in the bill, file your legal answer before the deadline, and build a defense. A timely response is the single most important thing that can happen right now, and it's what we do first.",
    bullets: [
      "Review the summons and confirm your response deadline (typically 20–28 days from service).",
      "Examine the underlying medical bill for errors, inflated charges, and documentation gaps the hospital or collector can't close.",
      "File your legal answer before the deadline, the single step that blocks a default judgment.",
      "Build the defense to challenge the bill's validity, the collector's standing to sue, and any misrepresentation in the filing itself under FDCPA § 1692e.",
    ],
  },

  whyChoose: [
    ["Licensed attorneys, court-ready legal defense", "We appear in court and file documents on your behalf in most cases."],
    ["We help you file your response", "Your response is submitted before your deadline. We don't let that window close."],
    ["We challenge the bill", "Before we respond, we review the charges for errors, inflation, and validity issues that can strengthen your defense."],
    ["Free consultation", "Know your options now, at no cost."],
    ["Flexible payment plans", "Legal defense that fits your budget, not theirs."],
  ],

  commonProblems: [
    ["Default judgment risk", "No response means the court rules against you automatically. The collector wins without proving a thing.", "FRCP 55"],
    ["Missed deadlines", "Courts rarely grant extensions. Once the window closes, your options shrink dramatically.", "FRCP 12(a)"],
    ["Wage garnishment", "A default judgment allows collectors to take a percentage of every paycheck until the debt is paid.", "15 U.S.C. § 1673"],
    ["Bank account levies", "Collectors with a judgment can freeze and drain your bank account.", "State levy rules"],
    ["Bills you don't recognize", "Medical debt is frequently sold between collectors. The entity suing you may not be the one you originally owed.", "FDCPA § 1692g"],
    ["Inflated or inaccurate amounts", "The figure in the lawsuit may not reflect what was actually owed, and that matters in court.", "FDCPA § 1692e(2)"],
  ],

  howItWorks: [
    ["Free consultation", "Tell us about the lawsuit. We review the summons, the complaint, and the debt at no cost.", "DAY 0"],
    ["Response filed", "Our attorneys file your legal answer before the court deadline, protecting your right to contest the claim.", "BY DEADLINE"],
    ["Defense built", "We examine the bill for errors, validity issues, and procedural defects in the filing that can be used in your defense.", "WEEK 1–2"],
    ["Resolution", "We fight the case in court, negotiate a favorable settlement, or move to reduce or dismiss the debt based on what we find.", "ONGOING"],
  ],

  rights: {
    intro: "Even when you've been sued, federal law continues to protect you.",
    items: [
      { cite: "Civil right",        label: "Right to respond + counsel", text: "You have the right to respond to any civil lawsuit filed against you, and to have an attorney represent you.", exLabel: "Right", ex: "File an answer. Be represented at every stage." },
      { cite: "FRCP 8, 12",         label: "Procedural compliance",      text: "Collectors who sue must follow proper legal procedures, procedural defects in the filing can be challenged.", exLabel: "Right", ex: "Defective complaints, missing service, etc., all grounds to attack." },
      { cite: "FDCPA § 1692e(2)",   label: "Accurate amount required",   text: "Medical debt collectors cannot misrepresent the amount owed, even in a court complaint.", exLabel: "Violation", ex: "Inflated balance in the lawsuit = federal claim against the collector filing it." },
      { cite: "Chain of assignment", label: "Standing for debt buyers",  text: "If the debt was sold, the collector must prove ownership and the validity of the original amount claimed.", exLabel: "Right", ex: "No complete chain = standing problem the collector must resolve." },
      { cite: "FRCP 60(b)",         label: "Vacating a judgment",        text: "A default judgment is not always permanent, in certain circumstances it can be vacated with the right legal action.", exLabel: "Right", ex: "Improper service, mistake, excusable neglect, narrow but real grounds." },
      { cite: "FDCPA",              label: "Continued FDCPA protection", text: "The FDCPA continues to apply to collector conduct even after a lawsuit has been filed.", exLabel: "Right", ex: "Harassment, false statements, threats, still violations even mid-litigation." },
    ],
  },

  whoHelps: [
    "Anyone who has received a summons or court papers for a medical debt lawsuit.",
    "People who ignored an early notice and are now facing a default judgment.",
    "Those whose wages are already being garnished following a medical debt judgment.",
    "Patients being sued for bills they believe are inaccurate, inflated, or already paid.",
    "Anyone who received lawsuit papers but doesn't know what to do next or how much time they have.",
  ],

  faq: [
    ["I got court papers and I do not understand what they mean. Where do I start?", "Call us. We read the documents and explain exactly what you are facing in plain language. We confirm your deadline, identify your options, and tell you what we can do. That conversation is completely free."],
    ["How long do I have to respond?", "Deadlines vary by state, typically 20 to 30 days from the date you were served. The clock starts the day papers were delivered. Every day you wait narrows your options."],
    ["What if I already missed the deadline and a judgment was entered?", "A default judgment may be vacatable depending on the circumstances. We can review your case and advise whether there are grounds to reopen it, the sooner you act, the more options exist."],
    ["Do I have to go to court myself?", "Usually not. Our attorneys can appear and file all required documents on your behalf in most cases."],
    ["How much does this cost?", "Your consultation is free. We offer flexible payment plans and will walk you through every option before any commitment is made."],
  ],

  bottomCta: {
    headline: "Don't let the deadline cost you everything.",
    body: "A lawsuit isn't a final outcome, it's an opening. But only if you respond in time. Our attorneys file. Let's use the time you have left.",
    cta: "Get a free case evaluation",
  },

  disclaimer: "This is attorney advertising. Prior results do not guarantee a similar outcome.",
};
