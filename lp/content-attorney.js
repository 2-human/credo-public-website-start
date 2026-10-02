/* Credo Legal — FDCPA Harassment / Action ("We Sue Them") content model.
   Source: live capture of https://start.credolegal.com/debt-harassment-fdcpa-attorney
   (LP_Harassment-FDCPA_VarB_WeSueThem.md, captured 2026-06-01).

   Copy applied verbatim with the four design enhancements approved 2026-06-23:
   - H1 keeps live wording, emphasizes "Attorney" in red
   - Eyebrow: "FDCPA · Take legal action"
   - Trust strip: prototype's compliance-safe credentials retained
   - Common Problems statute tags, How It Works time markers, and Your Rights
     structured items (cite + label + body + violation example) added per
     design support; statute references verified against 15 U.S.C. § 1692.
   Voice fix: "Real attorneys" in Why Choose bullet 1 → "Our attorneys". */
window.CREDO = {
  phone: "(612) 256-8820",
  phoneHref: "tel:+16122568820",
  cluster: "Harassment",
  angle: "FDCPA action",
  statute: "FDCPA",

  hero: {
    eyebrow: "FDCPA · Take legal action",
    // 2026-06-30 (Sona, h1-1): "FDCPA" reads as jargon → "Consumer Debt Attorney".
    // 2026-06-30 (milos, em-1): red emphasis narrowed to "Attorney" only.
    h1: ["Need a Consumer Debt ", "Attorney", "?"],
    // 2026-06-30 (Sona, p-1): added "under FDCPA" to specify the statute.
    lede: "We Explain Your Rights Against Debt Harassment under FDCPA for Free.",
    filler: "Fill in the form or call for a free review of your case.",
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

  // Trust strip: prototype's compliance-safe credentials retained per
  // 2026-06-23 socratic decision (Option A). Live page metrics ($10M+ /
  // 500k) are under compliance hold and intentionally excluded.
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
  // 2026-06-30 (Sona, span-12 + span-14): trust-strip metrics replaced with
  // the volume figures she confirmed. Number + label confirmed correct by
  // team@2-human.com 2026-06-30.
  metrics: [
    ["10 million+", "In debt wiped"],
    ["500k", "Debts settled every month"],
  ],

  // ---- WHAT WE DO — live copy + 2026-06-30 Sona feedback ----
  whatWeDo: {
    headline: "Knowing your rights is where we start.",
    intro: "At Credo Legal, knowing your rights isn't where we stop, it's where we start. Our attorneys review your situation and pursue the violations the FDCPA creates.",
    bullets: [
      "Review your collector's conduct against each provision of the FDCPA.",
      // 2026-06-30 (Sona, span-20): added "you report" so the bullet credits
      // the client's role in surfacing violations.
      "Document every violation you report, with date, time, and the statute it breaches.",
      "Send a formal cease-communication letter to halt further contact.",
      "File legal claims against the collector for statutory damages, actual damages, and attorney fees.",
    ],
  },

  // ---- WHY CHOOSE — live copy, with voice fix on bullet 1 + 2026-06-30 Sona pass ----
  whyChoose: [
    // 2026-06-30 (Sona, p-7): "filing" → "file" (parallel verb form).
    ["Licensed attorneys", "Our attorneys file real FDCPA claims. Not a complaint hotline, not a settlement company."],
    // 2026-06-30 (Sona, p-9): added "upon enrollment" so the immediacy claim
    // is anchored to a defined trigger.
    ["We act on day one", "Cease letter sent immediately upon enrollment. Violations documented from the first conversation. No waiting."],
    ["We identify every breach", "A single collector interaction can contain multiple violations. We find all of them."],
    ["Free consultation", "No cost to find out whether your collector broke the law and what your claim is worth."],
    // 2026-06-30 (Sona, p-15): added "if case is won" — fee-shifting is
    // conditional on prevailing under § 1692k(a)(3).
    ["Flexible payment plans", "FDCPA attorney fees are recoverable from the collector if case is won; Credo Legal has affordable payment plans for the rest."],
  ],

  // ---- COMMON PROBLEMS — live copy + statute § tags (added per
  // 2026-06-23 design decision; cites verified against 15 U.S.C. § 1692) ----
  commonProblems: [
    ["Calls after a cease request", "Every call after written notice to stop is a standalone, federal violation.", "§ 1692c(c)"],
    ["Calls at illegal hours", "Before 8 AM or after 9 PM, each call is a documented breach.", "§ 1692c(a)(1)"],
    ["Workplace contact", "If your employer objects, every call to your job is illegal under the FDCPA.", "§ 1692c(a)(3)"],
    ["Third-party disclosure", "Discussing your debt with family, neighbors, or coworkers is prohibited. Each instance is a violation.", "§ 1692c(b)"],
    ["Threats of arrest or false legal action", "Collectors cannot threaten what they cannot legally do. Each threat is actionable.", "§ 1692e(4),(5)"],
    ["Misrepresenting identity or debt amount", "Claiming to be an attorney, police officer, or government official is a federal violation.", "§ 1692e(1),(3)"],
  ],

  // ---- HOW IT WORKS — live copy + time markers + 2026-06-30 Sona pass ----
  howItWorks: [
    ["Free consultation", "Tell us what the collector has done. We review every contact and identify violations at no cost.", "DAY 0"],
    // 2026-06-30 (Sona, h3-8 + p-23): time marker DAY 0 → DAY 1 (Day 0 is the
    // free consultation; cease letter sequence begins after enrollment), and
    // body anchors the cease letter to first payment of legal fees.
    ["Cease letter sent, day one", "Our attorneys send a formal cease-communication letter immediately upon first payment of legal fees, stopping the calls while we build the case.", "DAY 1"],
    // 2026-06-30 (Sona, p-24 + div-18): added "if there is a clear violation"
    // (claims aren't guaranteed) and shifted time marker to WEEK 3–4 to match
    // the realistic intake → cease → review → file cadence.
    ["Violations documented and filed", "Every breach is catalogued. We file your FDCPA claim formally and pursue statutory and actual damages if there is a clear violation.", "WEEK 3–4"],
    ["Resolution", "We pursue the collector for $1,000 per lawsuit, actual damages, and attorney fees, holding them accountable.", "ONGOING"],
  ],

  // ---- YOUR RIGHTS — live bullets promoted to structured items
  // (cite + label + body + remedy/right/deadline example) per
  // 2026-06-23 design decision. Body text from live capture; cites
  // and example labels added from 15 U.S.C. § 1692. ----
  rights: {
    intro: "The FDCPA gives you the right to sue, and collectors know it.",
    items: [
      { cite: "§ 1692k(a)(2)(A)", label: "Statutory damages", text: "Each FDCPA lawsuit can result in up to $1,000 in statutory damages, collectible from the collector.", exLabel: "Remedy", ex: "Up to $1,000 per lawsuit, paid by the collector." },
      { cite: "§ 1692k(a)(1)",    label: "Actual damages",    text: "Actual damages, emotional distress, job loss, medical expenses related to harassment, are recoverable on top of statutory damages.", exLabel: "Remedy", ex: "Emotional distress, job loss, medical expenses: all recoverable." },
      { cite: "§ 1692k(a)(3)",    label: "Fee-shifting",      text: "Attorney fees and court costs are paid by the collector, not you, when you prevail.", exLabel: "Remedy", ex: "Collector pays your legal fees when the claim succeeds." },
      { cite: "§ 1692k(a)",       label: "Strict liability",  text: "You do not need to prove financial harm. The violation itself creates liability.", exLabel: "Right", ex: "The violation alone is enough; no proven harm required." },
      { cite: "§ 1692k(d)",       label: "One-year window",   text: "FDCPA claims must be filed within one year of the violation. Act while the window is open.", exLabel: "Deadline", ex: "One year from the date of the violation, no extensions." },
      { cite: "§ 1692k(b)",       label: "Per-violation accumulation", text: "Multiple violations in the same case are pursued individually. More violations mean a larger claim.", exLabel: "Remedy", ex: "Each call after a cease request can add evidence of another FDCPA violation." },
    ],
  },

  // ---- WHO HELPS — live copy, verbatim ----
  whoHelps: [
    "Anyone whose debt collector has violated the FDCPA and wants to take legal action.",
    "People who've already asked collectors to stop and keep getting calls. Every call is evidence.",
    "Those who've been threatened with arrest, jail, or legal action collectors cannot legally take.",
    "Anyone whose collector has contacted their employer, family, or neighbors about their debt.",
    "People who are done being the victim and want their attorney to be the one doing the pursuing.",
  ],

  // ---- FAQ — live copy, verbatim ----
  faq: [
    ["Can I really sue a debt collector?", "Yes. The FDCPA explicitly gives consumers the right to sue collectors who violate it, in federal or state court."],
    ["What if my collector only violated the law once or twice?", "Even a single violation is actionable. And once we begin reviewing, clients often discover more violations than they expected."],
    ["How long do I have to file an FDCPA claim?", "One year from the date of the violation. If you've been harassed recently, the window is open. Don't wait."],
    // 2026-06-30 (Sona, p-35): "rarely required" → "may be required under
    // certain circumstances only" — more legally precise.
    ["Do I have to go to court?", "Many FDCPA cases are resolved before trial. Our attorneys handle proceedings, and you may be required to appear under certain circumstances only."],
    ["How much does this cost?", "Your consultation is free."],
  ],

  // ---- BOTTOM CTA — live copy, verbatim ----
  bottomCta: {
    headline: "They broke the law. Use it.",
    body: "The FDCPA wasn't written for collectors, it was written for you. Our attorneys know how to use it, and pursue it on your behalf.",
    cta: "Get a free case evaluation",
  },

  disclaimer: "This is attorney advertising. Prior results do not guarantee a similar outcome.",
};
