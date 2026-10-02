/* Credo Legal — Harassment / Stop Calls (emotional relief angle) content model.
   Source: live re-fetch of https://start.credolegal.com/debt-harassment-stop-calls
   (2026-06-23), supersedes the 2026-06-01 capture which had placeholders.

   Per-LP deviation handled per 2026-06-23 socratic decision:
   - Live page renders What We Do as a single paragraph with no bullets
     (deviation from the standard 14-block "intro + 4 bullets" pattern).
     Fix: keep the live intro, then distill 4 bullets from the action
     sentences in the paragraph. Faithful to the live copy.

   Universal fixes applied:
   - "We're real lawyers" (Why Choose bullet 1) → "Our attorneys are real lawyers"
   - "Real Attorneys Can Make Them Stop." (live subhead) → "Our Attorneys Can Make Them Stop."
   - State exclusion list includes NC (Action 1)

   Design enhancements applied per 2026-06-23 decisions:
   - Common Problems gains FDCPA § citations per bullet
   - How It Works gains time markers (DAY 0 → ONGOING)
   - Your Rights bullets promoted to structured items (cite + label +
     body + violation/right/remedy example)
   - Trust strip = prototype's compliance-safe credentials. */
window.CREDO = {
  phone: "(612) 256-8820",
  phoneHref: "tel:+16122568820",
  cluster: "Harassment",
  angle: "Stop calls (emotional relief)",
  statute: "FDCPA",

  hero: {
    eyebrow: "FDCPA · Stop the calls",
    // Live H1 ("Debt Collectors Won't Stop Calling?") with "Stop" emphasized in red.
    // 2026-06-30 (milos, h1-1): widened red emphasis to "Stop Calling".
    h1: ["Debt Collectors Won't ", "Stop Calling", "?"],
    // Live subhead with voice fix.
    lede: "Our Attorneys Can Make Them Stop.",
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

  // ---- WHAT WE DO — live intro paragraph + 4 bullets distilled from
  //      the action sentences in the live paragraph (per 2026-06-23
  //      deviation fix). ----
  whatWeDo: {
    headline: "We end the pressure legally.",
    intro: "Debt collectors rely on pressure, confusion, and the assumption that you don't know your rights. At Credo Legal, we cut through all of that. You shouldn't have to live with this, and with our attorneys on your side, you won't have to.",
    bullets: [
      "Cut through pressure tactics and collector misinformation.",
      "Send a formal cease-communication letter on the day you enroll.",
      "Document every contact after the cease letter as a federal violation.",
      "Take legal action when collectors ignore federal law.",
    ],
  },

  // ---- WHY CHOOSE — live copy, voice fix on bullet 1 ----
  whyChoose: [
    ["Licensed attorneys, not a settlement company", "Our attorneys are real lawyers. The cease letter carries legal authority, and if collectors keep calling, we have real legal remedies to pursue."],
    ["We act on day one", "The cease letter goes out immediately. You don't spend weeks waiting to feel relief."],
    ["We investigate every violation", "Calling before 8 AM, contacting your employer, threatening arrest, we identify every federal breach and document it."],
    ["Free consultation", "No cost to find out what's happening and what we can do about it."],
    ["Flexible payment plans", "Legal help that works with your financial situation, not against it."],
  ],

  // ---- COMMON PROBLEMS — live copy + § citations ----
  commonProblems: [
    ["Calls before 8 AM or after 9 PM", "A clear federal violation under the FDCPA, regardless of what you owe.", "§ 1692c(a)(1)"],
    ["Calls to your workplace", "Collectors cannot contact you at work if they know your employer objects.", "§ 1692c(a)(3)"],
    ["Calling family members", "Collectors may only contact third parties to locate you, not to discuss your debt.", "§ 1692c(b)"],
    ["Threatening arrest or legal action they can't take", "Illegal under federal law. Threats must be truthful and actionable.", "§ 1692e(4),(5)"],
    ["Repeated calls designed to harass", "Volume and frequency of calls is regulated. Patterns of harassment are violations.", "§ 1692d(5)"],
    ["Abusive or threatening language", "Prohibited under the FDCPA regardless of how much you owe or how long you've owed it.", "§ 1692d(2)"],
  ],

  // ---- HOW IT WORKS — live copy + time markers ----
  howItWorks: [
    ["Free consultation", "Tell us what's been happening. We review your situation and explain your rights at no cost.", "DAY 0"],
    ["Cease letter sent, day one", "Our attorneys send a formal cease-communication letter to the collector immediately after enrollment. Legally, they must stop.", "DAY 0"],
    ["Violations documented", "If contact continues after the cease letter, each instance is a federal violation. We track and record them.", "WEEK 1+"],
    ["Resolution", "We resolve the harassment and, where warranted, pursue legal claims against the collector, potentially recovering money on your behalf.", "ONGOING"],
  ],

  // ---- YOUR RIGHTS — live bullets promoted to structured items ----
  rights: {
    intro: "The Fair Debt Collection Practices Act (FDCPA) gives you enforceable, specific protections.",
    items: [
      { cite: "§ 1692c(a)(1)", label: "Calling hours",       text: "Collectors cannot call before 8 AM or after 9 PM in your local time zone.", exLabel: "Violation", ex: "A 6:30 AM call to remind you about a balance." },
      { cite: "§ 1692c(c)",    label: "Cease request",       text: "Once you request in writing that a collector stop contacting you, they must comply. Collectors cannot discuss your debt with anyone other than you, your spouse, or your attorney.", exLabel: "Right", ex: "Send a written cease letter, contact must stop." },
      { cite: "§ 1692e(4),(5)", label: "False threats",      text: "Threatening arrest, wage garnishment, or legal action they cannot legally take is prohibited.", exLabel: "Violation", ex: "Caller threatens jail time over a credit-card balance." },
      { cite: "§ 1692d",       label: "Harassment / abuse",  text: "Abusive, obscene, or threatening language is a federal violation regardless of circumstances.", exLabel: "Violation", ex: "Profane voicemails. Yelling. Personal insults." },
      { cite: "§ 1692k",       label: "Damages + fee-shifting", text: "Each violation of the FDCPA can result in $1,000 in statutory damages per lawsuit, plus attorney fees.", exLabel: "Remedy", ex: "$1,000 per lawsuit. Fees recoverable from the collector." },
    ],
  },

  // ---- WHO HELPS — live copy, verbatim ----
  whoHelps: [
    "Anyone receiving repeated or harassing calls from a debt collector about any type of unsecured debt.",
    "People being contacted at their workplace or through family members.",
    "Those who've asked collectors to stop but keep receiving calls.",
    "Anyone who has been threatened with arrest, wage seizure, or legal action by a collector.",
    "People who want the calls to stop immediately, before deciding how to handle the underlying debt.",
  ],

  // ---- FAQ — live copy, verbatim ----
  faq: [
    ["Can I legally force a debt collector to stop calling me?", "Yes. Under the FDCPA, once you send a written cease communication request, the collector must stop all contact. Our attorneys send that letter on the day you enroll."],
    ["What if the collector keeps calling after I've asked them to stop?", "Every call after a cease request is a federal law violation worth up to $1,000 in statutory damages. We document those violations and can pursue legal claims on your behalf."],
    ["Do I still owe the debt if the calls stop?", "Stopping the calls is separate from the underlying debt. A cease letter halts contact; we then evaluate the debt itself separately and advise you on the best path forward."],
    ["Does it matter what kind of debt it is?", "The FDCPA covers all third-party debt collectors, regardless of debt type, credit cards, medical bills, payday loans, utilities, and more."],
    ["How much does this cost?", "Your consultation is free. We offer flexible payment plans, and in cases where we pursue FDCPA violations, collector-paid penalties may offset costs entirely."],
  ],

  // ---- BOTTOM CTA — live copy, verbatim ----
  bottomCta: {
    headline: "You shouldn't have to live with this.",
    body: "The calls are stressful. They disrupt your work, your relationships, and your peace of mind. Our attorneys can make them stop today, at no cost to find out how.",
    cta: "Get a free case evaluation",
  },

  disclaimer: "This is attorney advertising. Prior results do not guarantee a similar outcome.",
};
