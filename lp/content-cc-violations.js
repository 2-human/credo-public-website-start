/* Credo Legal — Credit Card / Harassment — "$1,000 Per Violation" angle (Var B).
   Sibling of #30. Same phone (646) 952-7392. Voice ×3. Label-only Why
   Choose + Common Problems → expand. Common Problems 5→6, FAQ 4→5.
   Bottom CTA body rewritten (live had VarA copy-paste). */
window.CREDO = {
  phone: "(407) 624-3722", phoneHref: "tel:+14076243722",
  cluster: "Credit Card", angle: "Harassment, $1K per violation",
  statute: "FDCPA",

  hero: {
    eyebrow: "Credit card · Make them pay",
    h1: ["Credit Card Debt Collectors After ", "You", "?"],
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
      "Calls to my workplace",
      "Contacting my family or friends",
      "Threats of arrest or lawsuit",
      "Claiming to be a lawyer or official",
      "Refusing to verify the debt",
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
    headline: "Every illegal call becomes your legal case.",
    intro: "At Credo Legal, we don't just stop the calls, we turn them into a legal case against the collector.",
    bullets: [
      "Track every FDCPA violation from the day you enroll.",
      "Identify every illegal call, threat, or unlawful contact for your claim.",
      "Build and file your case against the collector.",
      "Pursue the maximum financial recovery you're owed under federal law.",
    ],
  },

  whyChoose: [
    ["Attorney assistance from day one", "Licensed attorneys handle your case from the first conversation, no handoffs, no delays."],
    ["We track every single violation", "Each illegal call, threat, or contact after a cease request is documented and added to your claim."],
    ["We identify every illegal breach", "Many people don't realize each illegal contact is a separate $1,000 federal claim. We do, and we find all of them."],
    // Voice fix on label.
    ["Our attorneys build your case, not salespeople", "Licensed attorneys pursuing real legal claims. Not a settlement service. Real legal authority and real legal remedies."],
    ["Flexible payment plans", "Legal help that works with your financial situation."],
  ],

  commonProblems: [
    ["Calls before 8 AM or after 9 PM", "Each one is a documented federal violation regardless of what you owe.", "§ 1692c(a)(1)"],
    ["Threats of arrest or legal action they don't intend to take", "Credit card debt is civil. False arrest or legal-action threats are illegal.", "§ 1692e(4),(5)"],
    ["Contacting your employer or workplace", "If your employer objects, every call to your job is a federal violation.", "§ 1692c(a)(3)"],
    ["Discussing your debt with family or coworkers", "Third-party contact is strictly limited. Each instance is a separate claim.", "§ 1692c(b)"],
    ["Repeated calls designed to harass or annoy", "Volume and frequency are regulated. Patterns of harassment are violations.", "§ 1692d(5)"],
    // Synthesized 6th.
    ["Misrepresenting the amount owed", "Inflating or falsifying what you owe is a federal violation regardless of the actual balance.", "§ 1692e(2)"],
  ],

  howItWorks: [
    ["Free consultation", "We assess your violations and calculate what you may be owed, at no cost.", "DAY 0"],
    ["Violation tracking", "We document every illegal contact from day one.", "DAY 0"],
    ["Legal representation", "We build and file your FDCPA claim against the collector.", "WEEK 3–4"],
    ["Recovery", "We pursue the financial compensation the law entitles you to, statutory damages, actual damages, and attorney fees.", "ONGOING"],
  ],

  rights: {
    intro: "The FDCPA doesn't just protect you, it pays you. Every violation by a credit card debt collector can carry up to $1,000 in statutory damages. Collectors cannot:",
    items: [
      { cite: "§ 1692c(a)(1)",   label: "Illegal-hour calls",      text: "Call you before 8 AM or after 9 PM.", exLabel: "Violation", ex: "Each call outside hours = standalone $1,000 violation." },
      { cite: "§ 1692e(4),(5)",  label: "False legal threats",     text: "Threaten arrest or legal action they don't plan to take.", exLabel: "Violation", ex: "Each threat = standalone violation, even if never carried out." },
      { cite: "§ 1692c(a)(3)",   label: "Workplace calls",         text: "Contact you at work after being told to stop.", exLabel: "Violation", ex: "Employer objected = every subsequent workplace call is a violation." },
      { cite: "§ 1692c(b)",      label: "Third-party disclosure",  text: "Discuss your debt with family, friends, or coworkers.", exLabel: "Violation", ex: "Each third-party contact about your debt is a separate claim." },
      { cite: "§ 1692d(5)",      label: "Harassing call patterns", text: "Call repeatedly in a way designed to harass or annoy you.", exLabel: "Violation", ex: "Multiple calls per day with no purpose other than pressure = violation." },
      // Synthesized 6th.
      { cite: "§ 1692k",         label: "Per-violation damages",   text: "Each FDCPA violation can result in up to $1,000 in statutory damages, plus attorney fees recoverable from the collector.", exLabel: "Remedy", ex: "Multiple violations stack. Fees recoverable from the collector." },
    ],
  },

  whoHelps: [
    "People being harassed by credit card debt collectors.",
    "Anyone who has received illegal threats, early-morning calls, or workplace contacts.",
    "Those who want to do more than stop the calls, they want to fight back.",
    "Anyone who has dealt with repeated illegal contact from a collector.",
    "People who want to know what the collector legally owes them.",
  ],

  faq: [
    ["How much can I actually recover from a collector?", "Under the FDCPA, each lawsuit carries statutory damages of up to $1,000. If a collector has made multiple violations across separate cases, recovery can be higher."],
    ["Do I have to prove I was financially harmed?", "No. The FDCPA allows for statutory damages even without proving specific financial harm. The violation itself is enough to create liability."],
    ["How long does the process take?", "It depends on the collector and the number of violations. We'll give you a realistic assessment after the initial review."],
    // Synthesized 4th.
    ["What if the collector stops calling once they get the cease letter?", "That's a good outcome. If they stop, you have relief. If they don't, every contact after the cease request is a documented $1,000 violation. Either way, you're in a better position."],
    // Voice fix in body.
    ["How much does this cost?", "We offer flexible payment plans so you can get attorney representation from day one. Your first consultation is free."],
  ],

  // Body rewritten — live had VarA copy-paste ('Every day without a cease
  // letter is another day...') which didn't fit the recovery framing.
  bottomCta: {
    headline: "Every illegal call is evidence. Let's build your case.",
    body: "Collectors broke federal law. That's not just something to complain about, it's a legal claim. Our attorneys build that case from day one and pursue the maximum recovery the FDCPA supports.",
    cta: "Get a free case evaluation",
  },

  disclaimer: "This is attorney advertising. Prior results do not guarantee a similar outcome.",
};
