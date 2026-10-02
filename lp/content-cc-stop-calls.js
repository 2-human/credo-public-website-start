/* Credo Legal — Credit Card / Harassment — "Stop Calls" angle (Var A).
   Phone (646) 952-7392 unique CC-Harassment routing.
   Per-LP: label-only Why Choose + Common Problems + HIW step bodies →
   expand. Common Problems 5→6, Your Rights 5→6, FAQ 4→5. Voice ×2. */
window.CREDO = {
  phone: "(407) 624-3722", phoneHref: "tel:+14076243722",
  cluster: "Credit Card", angle: "Harassment. Stop calls",
  statute: "FDCPA + state consumer law",

  hero: {
    eyebrow: "Credit card · Stop the calls",
    h1: ["Credit Card Debt Collector Calling ", "You", "?"],
    lede: "Our Attorneys Can Help Make Them Stop.",
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
    headline: "We send the letter that legally requires it.",
    intro: "At Credo Legal, we don't just tell collectors to stop, we send the legal notice that requires them to.",
    bullets: [
      "Send a legal cease letter to the collector the day you enroll.",
      "Fight against credit card collector harassment under the FDCPA.",
      // 2026-06-30 (Sona attorney-LP precedent, propagated): verb changed to
      // "Document" + "you report" added, matching the attorney LP's
      // whatWeDo.bullets[1] wording so the cluster reads consistently.
      "Document every violation you report for your case.",
      "Hold collectors accountable for every illegal contact.",
    ],
  },

  whyChoose: [
    ["Attorney assistance from day one", "Licensed attorneys handle your case from the first conversation, no handoffs, no delays."],
    ["We send a cease letter the day you enroll", "The legal cease-communication notice goes out immediately. You don't spend weeks waiting for relief."],
    ["We track every FDCPA violation", "Every contact after the cease letter is documented and added to your claim."],
    ["Protection from abusive collector calls", "Once we engage, you stop being the contact point. Communication routes through our office."],
    ["Flexible payment plans", "Legal help that works with your financial situation."],
  ],

  commonProblems: [
    ["Calls before 8 AM or after 9 PM", "Each one is a documented federal violation regardless of what you owe.", "§ 1692c(a)(1)"],
    ["Calls to your workplace or employer", "Once your employer objects, every workplace call is illegal.", "§ 1692c(a)(3)"],
    ["Threats of arrest or legal action", "Credit card debt is civil, not criminal. Arrest threats are illegal.", "§ 1692e(4),(5)"],
    ["Calls to family members or coworkers", "Third-party contact is strictly limited. Discussing your debt with others is prohibited.", "§ 1692c(b)"],
    ["Repeated calls designed to harass or annoy", "Volume and frequency are regulated. Patterns of harassment are violations.", "§ 1692d(5)"],
    // Synthesized 6th.
    ["Continued calls after a cease request", "Every call after a written cease is a standalone $1,000 violation.", "§ 1692c(c)"],
  ],

  howItWorks: [
    ["Free consultation", "We review the harassment and your rights under the FDCPA at no cost.", "DAY 0"],
    ["Cease letter sent", "We send a legal cease notice to the collector on day one, contact must stop.", "DAY 0"],
    ["Violation tracking", "We document every illegal contact made against you from the moment we engage.", "WEEK 1+"],
    ["Legal action or resolution", "We hold collectors accountable for every breach, through claim, settlement, or court action.", "ONGOING"],
  ],

  rights: {
    intro: "The FDCPA strictly limits what credit card debt collectors can do. Collectors cannot:",
    items: [
      { cite: "§ 1692c(a)(1)",   label: "Illegal-hour calls",      text: "Call you before 8 AM or after 9 PM in your local time zone.", exLabel: "Violation", ex: "A 7:14 AM or 9:30 PM call is a documented breach." },
      { cite: "§ 1692c(a)(3)",   label: "Workplace calls",         text: "Contact you at work if you've told them to stop.", exLabel: "Violation", ex: "Employer told them to stop and they called anyway = federal violation." },
      { cite: "§ 1692e(4),(5)",  label: "False arrest / legal threats", text: "Threaten arrest or legal action they don't intend to take.", exLabel: "Violation", ex: "'We'll have you arrested' over a credit-card balance = federal violation." },
      { cite: "§ 1692c(b)",      label: "Third-party disclosure",  text: "Discuss your debt with family, friends, or coworkers.", exLabel: "Violation", ex: "Each third-party contact about your debt is a separate violation." },
      { cite: "§ 1692d(5)",      label: "Harassing call patterns", text: "Call repeatedly in a way designed to harass or annoy you.", exLabel: "Violation", ex: "Multiple calls per day with no purpose other than pressure = violation." },
      // Synthesized 6th.
      { cite: "§ 1692k",         label: "Per-violation damages",   text: "Each FDCPA violation can result in up to $1,000 in statutory damages, plus attorney fees recoverable from the collector.", exLabel: "Remedy", ex: "Multiple violations stack. Fees recoverable from the collector." },
    ],
  },

  whoHelps: [
    "People receiving repeated calls about credit card debt.",
    "Anyone whose employer or family members have been contacted by a collector.",
    "Those being threatened with arrest over a credit card balance.",
    "Anyone being called before 8 AM or after 9 PM.",
    "People who want the calls to stop, starting today.",
  ],

  faq: [
    ["Can a credit card collector really be forced to stop calling?", "Yes. Under the FDCPA, once a collector receives a legal cease-communication letter, they are required to stop all contact (with limited exceptions like notice of legal action)."],
    ["What if they keep calling after the cease letter?", "Every call after a cease letter is a separate FDCPA violation. We track every one. Each violation can be used to build your case for up to $1,000 in statutory damages per lawsuit."],
    ["Does this work for original credit card companies, or only third-party collectors?", "The FDCPA applies primarily to third-party debt collectors. If you're being contacted by the original card company, different rules apply, but state consumer protection laws often still provide remedies, and we can advise on what applies in your state."],
    // Synthesized 4th item.
    ["Will this affect the underlying debt?", "Stopping the calls is separate from the underlying debt. A cease letter halts contact; we then evaluate the debt itself and advise on the best path forward, including whether the amount can be reduced or challenged."],
    // Voice fix in body.
    ["How much does this cost?", "We offer flexible payment plans so attorney help is accessible from day one. Your first consultation is free."],
  ],

  bottomCta: {
    headline: "You shouldn't have to live with this. Let us stop it today.",
    body: "Every day without a cease letter is another day of potential violations going undocumented. Our attorneys send it the day you enroll.",
    cta: "Get a free case evaluation",
  },

  disclaimer: "This is attorney advertising. Prior results do not guarantee a similar outcome.",
};
