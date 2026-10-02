/* Credo Legal: /medical-debt-attorney in the new landing-page design.
   Design-alignment preview, 2026-09-28 (staging design-system plan, DS-7).

   Source: the live staging page staging.credolegal.com/medical-debt-attorney, captured 28 Sep.
   Its copy is richer than the state pages, so almost every block maps 1:1:
   - hero: live H1 + subhead + filler, verbatim
   - What we do: live "Unexpected medical bills..." block
   - Why Credo: live "How a medical debt lawyer can help" (3) + "Real legal help" (2)
   - Common problems: live "What happens if you can't pay" (4) + "We help with" (2 of 5)
   - Who this helps: live "We help with" list (5)
   - FAQ: live, all 7, verbatim
   - Closing: live "Take control before it escalates"
   NEW (not on the live page): statute tags on the problem cards, step markers,
   and the structured rights list (approved wording reused from the medical-debt
   FDCPA-rights prototype family). Needs approval before it goes into Webflow. */
window.CREDO = {
  phone: "(718) 865-8350", phoneHref: "tel:+17188658350",
  cluster: "Medical Debt",
  angle: "Medical debt attorney (legacy page)",
  statute: "FDCPA",

  hero: {
    eyebrow: "Medical debt · Attorney help",
    h1: ["Struggling With ", "Medical Debt", "?"],
    lede: "Our Attorneys Can Help You Fight Harassment & Challenge Debt.",
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
      "Emergency room or surgery bills",
      "Uninsured or out-of-network expenses",
      "Being sued over a medical bill",
      "Billing disputes and surprise charges",
      "Medical liens or wage garnishment threats",
      "Other",
    ],
    submit: "Get a free case evaluation",
    stateExclusion: "We currently do not service DC, DE, ID, NC, OK, WV, or WY.",
  },

  trust: [
    { n: "44", lbl: "States with licensed attorneys" },
    { n: "$0", lbl: "Cost of your consultation" },
    { n: "10,000+", lbl: "Clients helped" },
    { n: "5 mo", lbl: "Average time to resolve" },
  ],
  reviews: {
    bbb:        { title: "Accredited Business", meta: "A rating · 4.59 / 5" },
    trustpilot: { title: "Excellent",           meta: "4.5 / 5 · 1,247 reviews" },
    google:     { title: "Google Reviews",      meta: "4.7 / 5" },
  },
  metrics: [
    ["10 million+", "In debt wiped"],
    ["500k", "Debts settled every month"],
  ],

  whatWeDo: {
    headline: "Unexpected medical bills shouldn't ruin your financial future.",
    intro: "Whether you're overwhelmed with hospital debt, facing aggressive collectors, or being sued over unpaid healthcare expenses, our attorneys can help you understand your options and fight back to regain control.",
    bullets: [
      "Free legal consultation available today.",
      "When appropriate, we help challenge, negotiate, or eliminate medical debt.",
      "Fight against debt collectors and lawsuits before it's too late.",
    ],
  },

  whyChoose: [
    ["Review the validity of the debt", "We examine billing statements and collection activity for potential legal violations or errors."],
    ["Negotiate or settle the debt on your behalf", "We strive to negotiate fair terms or if grounds exist, eliminate all or part of the debt."],
    ["Defend you if you're being sued", "If a collection attorney files a lawsuit, we respond in court and fight to protect your rights."],
    ["Licensed attorneys, not a settlement company", "Medical debt collections are legal matters and you deserve real legal defense."],
    ["10,000+ clients helped", "Average debt resolved in just over 5 months."],
  ],

  commonProblems: [
    ["Your debt is sent to collection agencies", "Collections do not make the debt automatically valid. You may not owe what they say you do.", "§ 1692g"],
    ["Your credit is damaged", "Resolving or challenging unpaid medical bills can protect your score or even help it recover.", "Credit"],
    ["A lawsuit to recover payment", "If you've received a summons, we can represent you in court and build a legal defense.", "Lawsuit defense"],
    ["Liens on your property or garnished wages", "The sooner you contact us, the better chance we have to prevent a judgment or wage garnishment.", "Garnishment"],
    ["Billing disputes and surprise charges", "Errors, overcharges and expired billing timelines can occur, and we have experience fighting against them.", "Billing errors"],
    ["Illegal collection tactics", "If your rights were violated during the collection process, we may be able to challenge the debt.", "§ 1692e"],
  ],

  whoHelps: [
    "Anyone with emergency room or surgery bills.",
    "Anyone with uninsured or out-of-network expenses.",
    "Anyone facing a collection lawsuit related to healthcare.",
    "Anyone with billing disputes and surprise charges.",
    "Anyone facing medical liens or wage garnishment threats.",
  ],

  howItWorks: [
    ["Free consultation", "We walk you through your options before any commitment is made.", "Consultation"],
    ["Review the validity of the debt", "We examine billing statements and collection activity for potential legal violations or errors.", "Review"],
    ["Negotiate, settle or challenge", "We strive to negotiate fair terms or if grounds exist, eliminate all or part of the debt.", "Resolution"],
    ["Defend you in court if needed", "Our attorneys can appear and file documents on your behalf in most cases.", "Defense"],
  ],

  rights: {
    intro: "You may not owe what they say you do. Federal law gives you rights against unfair medical debt collection.",
    items: [
      { cite: "§ 1692g",          label: "Debt validation", text: "You can require the collector to validate the debt before paying.", exLabel: "Right", ex: "Dispute in writing within 30 days of the collector's first notice." },
      { cite: "§ 1692e(2)",       label: "False amounts",   text: "Misrepresenting the amount or status of a debt is prohibited.", exLabel: "Violation", ex: "Inflated or incorrect medical charges in collection." },
      { cite: "§ 1692c(b)",       label: "Third-party contact", text: "Collectors cannot contact your employer, family, or neighbors about your debt.", exLabel: "Violation", ex: "Each third-party contact about your debt = separate claim." },
      { cite: "§ 1692k(a)(2)(A)", label: "Statutory damages", text: "Each FDCPA violation entitles you to up to $1,000 in statutory damages, plus actual damages and attorney fees from the collector.", exLabel: "Remedy", ex: "$1,000 per lawsuit. Fees recoverable from the collector." },
    ],
  },

  faq: [
    ["Can a lawyer really help with medical debt?", "Yes. A medical debt attorney can review your bills and debt collection activity to determine if the charges are accurate, inflated, or illegally pursued. If errors or legal violations are identified, an attorney can challenge the debt and pursue legal remedies."],
    ["Is it worth hiring an attorney for a hospital bill?", "Medical debt may contain billing errors, surprise charges, or expired claims. An attorney can help you evaluate the bill and if grounds exist, challenge the debt. An attorney also can stop creditors from contacting you directly and defend you if a legal action has been filed."],
    ["What if I've already been sent to collections?", "You still have options. Collections do not make the debt automatically valid. We may be able to negotiate, settle, or challenge the debt, especially if your rights were violated during the collection process."],
    ["Can you stop medical debt lawsuits?", "If you've received a summons or are being sued, we can represent you in court and build a legal defense. The sooner you contact us, the better chance we have to prevent a judgment or wage garnishment."],
    ["How much does legal help cost?", "We offer free consultations and flexible payment plans. We'll walk you through your options before any commitment is made."],
    ["Will this affect my credit score?", "Unpaid medical bills can hurt your credit, but resolving or challenging them can protect your score or even help it recover. We'll guide you on the best path forward under your specific circumstances."],
    ["Do I need to show up in court?", "Usually not. Our attorneys can appear and file documents on your behalf in most cases. We handle the legal work so you don't have to."],
  ],

  bottomCta: {
    headline: "Take Control Before It Escalates",
    body: "The earlier you act, the more options you have. A free consultation could potentially spare you from needless expenses and protect your credit.",
    cta: "Get help with medical bills",
  },

  disclaimer: "This is attorney advertising. Prior results do not guarantee a similar outcome.",
};
