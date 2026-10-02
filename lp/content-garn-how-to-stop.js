/* Credo Legal — Garnishment — "How to stop a garnishment" (NEW, search-term gap).
   Proposed 2026-09-30 from the search-term review (search-terms/index.html).
   Intent: the "how to stop (a) (wage) garnishment" query family, the account's
   highest-volume garnishment searches (17–27% CTR). Live traffic lands on
   /wage-garnishment-prevention (61% of the ad group's impressions), which is
   written for someone NOT yet garnished; "stop" usually means it has started.
   This page answers both stages: the H1 mirrors the query, the form's
   situation options start with the stage, and every section splits
   "already started" from "not started yet".
   Not live: proposed slug /how-to-stop-wage-garnishment. Phone = the
   Garnishment pages' number. Draft copy for attorney review. */
window.CREDO = {
  phone: "(720) 414-5055",
  phoneHref: "tel:+17204145055",
  cluster: "Garnishment",
  angle: "How to stop a garnishment. Both stages",
  statute: "15 U.S.C. § 1673 + state exemption law",

  hero: {
    eyebrow: "Garnishment defense · Already started or about to",
    h1: ["How to ", "Stop", " a Wage Garnishment"],
    lede: "Our Attorneys Can Help Cut It or End It, Even After It Starts.",
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
    // Stage first: this is the question that decides which remedy applies.
    situationOptions: [
      "Money is already being taken from my pay",
      "I received a garnishment notice, nothing taken yet",
      "A judgment was entered against me",
      "I was sued and have not answered yet",
      "My bank account was frozen or levied",
      "More than one garnishment on one paycheck",
    ],
    submit: "Get a free case evaluation",
    stateExclusion: "We currently do not service DC, DE, ID, NC, OK, WV, or WY.",
  },

  trust: [
    { n: "44", lbl: "States with licensed attorneys" },
    { n: "$0", lbl: "Cost of your consultation" },
    { n: "25%", lbl: "Federal garnishment cap" },
    { n: "Flat", lbl: "Monthly fee, no contingency" },
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
    headline: "There is more than one way to stop a garnishment.",
    intro: "Which one works depends on where you are. If money is already coming out of your pay, we look for exemptions and errors in the order. If it has not started, we act on the lawsuit or judgment before your employer receives the order.",
    bullets: [
      "Already garnished: file a claim of exemption to reduce or end the deduction.",
      "Judgment by default: ask the court to set it aside when you were not properly served.",
      "Order not yet served: answer the lawsuit or challenge the judgment first.",
      "Every stage: demand proof of the debt and the amount, and negotiate a release.",
    ],
  },

  whyChoose: [
    ["We start with your stage", "Our first question is whether money is already being taken. That answer decides the fastest remedy."],
    ["Exemption claims filed for you", "Claims of exemption have short deadlines and strict forms. Our attorneys prepare and file them."],
    ["We check the order itself", "Wrong amounts, missing notice and improper service are grounds to reduce or vacate a garnishment."],
    ["Attorney assistance from day one", "Licensed attorneys review your notice or pay stub in the first conversation and tell you the deadline that applies."],
    ["Flexible payment plans", "A flat monthly fee, structured around what is left of your paycheck."],
  ],

  commonProblems: [
    ["Garnishment already on your pay stub", "Money is being withheld each pay period. An exemption claim can reduce or stop it going forward.", "State exemption law"],
    ["Garnishment notice, nothing taken yet", "The order may not have reached your employer. This is the window to challenge the judgment behind it.", "State civil procedure"],
    ["Default judgment you never knew about", "If you were never properly served, the judgment and the garnishment that follows it can be challenged.", "Due process"],
    ["More withheld than the law allows", "Federal law caps most garnishments. Errors in the calculation are common.", "15 U.S.C. § 1673"],
    ["Federal benefits in your bank account", "Social Security, SSI and VA benefits deposited in your account are generally protected from private creditors.", "31 C.F.R. Part 212"],
    ["Two garnishments on one paycheck", "The cap applies to the total, not to each order. A second order may have to wait.", "15 U.S.C. § 1673"],
  ],

  howItWorks: [
    ["Free consultation", "Tell us whether money is already being taken. We review the notice, the order or your pay stub.", "DAY 0"],
    ["Find the remedy", "Exemption claim, objection to the order, or a motion to set aside the judgment, depending on your stage.", "DAY 1–3"],
    ["File before the deadline", "Exemption deadlines can be as short as 10 days after notice. We file within them.", "WEEK 1"],
    ["Work toward release", "We challenge the underlying debt and negotiate the garnishment's release where that is the better path.", "ONGOING"],
  ],

  rights: {
    intro: "A garnishment has to follow federal and state rules. Whether it has started or not, you have these protections:",
    items: [
      { cite: "15 U.S.C. § 1673",   label: "Federal cap",           text: "For most consumer debts, no more than 25% of your disposable earnings can be taken each pay period.", exLabel: "Right", ex: "Lower still if you earn close to the minimum wage. Many states set tighter limits." },
      { cite: "State exemption law", label: "Exemptions",            text: "Head of household, low income and other state exemptions can reduce or end a wage garnishment.", exLabel: "Right", ex: "Exemptions are claimed, not automatic. The claim has a deadline." },
      { cite: "31 C.F.R. Part 212",  label: "Protected benefits",    text: "Federal benefits deposited directly into your account are generally protected from private creditors.", exLabel: "Right", ex: "Banks must protect two months of directly deposited benefits." },
      { cite: "Due process",         label: "Valid judgment first",  text: "For a consumer debt, a private creditor needs a court judgment before it can garnish wages.", exLabel: "Right", ex: "No proper service of the lawsuit = grounds to challenge the judgment." },
      { cite: "15 U.S.C. § 1674",    label: "Job protection",        text: "Your employer cannot fire you because your wages are garnished for one debt.", exLabel: "Right", ex: "The protection covers one garnishment. Tell us if there are several." },
    ],
  },

  whoHelps: [
    "People who see a garnishment deduction on their pay stub.",
    "Anyone who received a garnishment notice and wants to act before the first deduction.",
    "People who learned about a default judgment only when the garnishment arrived.",
    "Anyone whose bank account was frozen or levied.",
    "People who want attorney help on a flat monthly fee instead of a large retainer.",
  ],

  faq: [
    ["Can you stop a garnishment after it starts?", "Often, yes. A claim of exemption can reduce or end the deduction, and a judgment entered without proper service can be challenged. The earlier we see the notice, the more options remain."],
    ["How quickly can a garnishment be stopped?", "It depends on the remedy and the court. Exemption claims usually have a hearing within weeks. We file as soon as we have your notice and pay details, because deadlines can be short."],
    ["How much of my paycheck can be taken?", "Federal law limits most consumer-debt garnishments to 25% of disposable earnings, and less if you earn close to the minimum wage. Several states set lower limits."],
    ["What if I never knew I was sued?", "That happens often. If you were not properly served, we can ask the court to set aside the default judgment, which also undoes the garnishment built on it."],
    ["How much does this cost?", "Your first case evaluation is free. Ongoing representation is a flat monthly fee, with payment plans that fit what is left of your paycheck."],
  ],

  bottomCta: {
    headline: "Find out which remedy fits your garnishment. Get help today.",
    body: "Whether money is already being taken or you only have a notice, the deadline that applies to you is the first thing to know. Our attorneys will tell you, for free.",
    cta: "Get a free case evaluation",
  },

  disclaimer: "This is attorney advertising. Prior results do not guarantee a similar outcome.",
};
