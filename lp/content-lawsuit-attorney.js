/* Credo Legal — Lawsuit / Defense — "Level the Field" angle.
   Source: live re-fetch of https://start.credolegal.com/debt-lawsuit-attorney
   (2026-06-23), supersedes the 2026-06-01 capture which had placeholders.

   First Lawsuit cluster LP applied to the new design. The Lawsuit cluster
   diverges from Harassment in two ways:
   - Section heading shifts to "Your Rights Under [Federal / Civil] Law" —
     statute citations on Common Problems and Your Rights items are a MIX
     of FDCPA (still applies to collector misconduct in court filings),
     FRCP / FRE (federal civil procedure + evidence), and general
     due-process principles rather than pure FDCPA § 1692 references.
   - Phone routing differs: (347) 523-4568 for Defense, shared between
     Defense_VarA (FightBack) and Defense_VarB (LevelField).

   No per-LP structural deviations. Standard 14-block template.

   Universal fixes:
   - Hero subhead already shows "Our Attorneys" on live (capture flagged
     "Real Attorneys" — fixed upstream).
   - Why Choose bullet 1 body still says "Real lawyers handle your case"
     on live → fixed here ("Our attorneys handle your case").
   - State exclusion list includes NC.

   Design enhancements applied per 2026-06-23 decisions:
   - Common Problems gains citation tags (FRCP / FRE / FDCPA mix)
   - How It Works gains time markers (DAY 0 → ONGOING; lawsuit-defense
     timeline reflects the typical 20–28 day response window)
   - Your Rights bullets promoted to structured items
   - Trust strip = prototype's compliance-safe credentials. */
window.CREDO = {
  phone: "(718) 521-4060",
  phoneHref: "tel:+17185214060",
  cluster: "Lawsuit",
  angle: "Defense. Level the field",
  statute: "Civil procedure / FDCPA",

  hero: {
    eyebrow: "Lawsuit defense · Level the field",
    // Same H1 as the sibling /debt-lawsuit-fight-back LP.
    // "Suing" gets the red emphasis — it names the action this LP responds to.
    h1: ["Is a Creditor ", "Suing", " You?"],
    lede: "Our Attorneys Can Help You Level the Playing Field.",
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
    { n: "Court", lbl: "Defense, not settlement only" },
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

  // ---- WHAT WE DO — live verbatim ----
  whatWeDo: {
    headline: "We level the playing field.",
    intro: "At Credo Legal, we level the playing field. We review the claim, challenge the debt's validity, and match the creditor's legal team with our own, attorney for attorney. You don't have to face their legal resources alone, and with flexible payment plans, you don't have to wait until you can afford it either.",
    bullets: [
      "Attorney representation from the first day of your case.",
      "Review and challenge of the creditor's debt claim and documentation.",
      "Legal response filed by the deadline on your behalf.",
      "Negotiation and court defense to achieve the best possible outcome.",
    ],
  },

  // ---- WHY CHOOSE — live verbatim with voice fix on bullet 1 ----
  whyChoose: [
    ["Licensed attorneys from day one, not salespeople", "Our attorneys handle your case from the first conversation. No handoffs, no delays."],
    ["We know creditor tactics", "We defend against collection lawsuits every day. We know what creditor law firms file, how they argue, and where their claims are vulnerable."],
    ["We challenge the debt", "We don't just respond, we investigate the claim for errors, documentation gaps, and grounds to reduce or dismiss."],
    ["You're not outgunned anymore", "Creditor firms rely on volume and default. With an attorney on your side, the case becomes an actual contest."],
    ["Flexible payment plans", "You shouldn't have to face their legal team alone because you can't afford an attorney upfront. We make it possible."],
  ],

  // ---- COMMON PROBLEMS — live verbatim + civil-procedure / FDCPA citations ----
  commonProblems: [
    ["Facing a law firm alone", "Creditors retain attorneys who file hundreds of these cases. Without representation, the odds are stacked.", "Civil right"],
    ["Not knowing the rules", "Response deadlines, required filings, valid defenses, the legal process is unfamiliar territory without guidance.", "FRCP 8, 12"],
    ["Inflated or questionable balances", "The amount a creditor claims may include fees and interest that can be challenged.", "State UCC + contract"],
    ["Intimidation tactics", "Legal language, official-looking filings, and tight deadlines are designed to pressure settlement on the creditor's terms.", "FDCPA § 1692e"],
    ["Uneven negotiating power", "Settling without an attorney almost always means settling for more than you have to.", "Due process"],
    ["Documentation gaps in the creditor's claim", "Creditor law firms sometimes file without complete records, an attorney finds these weaknesses.", "FRE 803(6), 901"],
  ],

  // ---- HOW IT WORKS — live verbatim + lawsuit-defense time markers
  //      (response deadline typically 20–28 days from service) ----
  howItWorks: [
    ["Free consultation", "Tell us about the lawsuit. We review the complaint and your situation at no cost, and explain exactly how we can help.", "DAY 0"],
    ["Debt investigation", "Our attorneys examine the claim, the creditor's documentation, and every angle for a viable defense.", "WEEK 1"],
    ["We represent you", "We file your legal response, appear on your behalf, and handle every step of the process.", "BY DEADLINE"],
    ["Resolution on your terms", "Through court defense or negotiation, we pursue the outcome that's best for you, not the easiest win for them.", "ONGOING"],
  ],

  // ---- YOUR RIGHTS — live bullets promoted to structured items.
  //      Citations mix FRCP / FRE / FDCPA / general civil rights since
  //      this is a civil-procedure defense LP, not a pure FDCPA LP. ----
  rights: {
    intro: "Federal and state law give you specific, enforceable rights when a creditor sues you for a consumer debt.",
    items: [
      { cite: "Civil right",      label: "Right to counsel",       text: "You have the right to be represented by an attorney in any civil lawsuit.", exLabel: "Right", ex: "Hire counsel at any stage, pre-answer, mid-litigation, even post-judgment in some cases." },
      { cite: "FRCP 4",            label: "Proper service",         text: "Creditors must properly serve you before the court can act against you.", exLabel: "Violation", ex: "'Sewer service', a process server claims to have served you but didn't, can void the judgment." },
      { cite: "FRE 401–402",       label: "Burden of proof",        text: "The creditor must prove the debt is valid, accurately stated, and legally theirs to collect.", exLabel: "Right", ex: "Plaintiff carries the burden. You don't have to prove you don't owe it." },
      { cite: "FDCPA § 1692e(2)",  label: "No false court filings", text: "Misrepresenting the amount owed in a legal filing is a violation of federal law.", exLabel: "Violation", ex: "Inflated balance in the complaint? Federal claim against the collector filing it." },
      { cite: "FRE 803(6), 901",   label: "Documentation standards", text: "If the debt was sold to a collection firm, they must prove complete documentation and ownership.", exLabel: "Right", ex: "No complete chain of assignment + no authenticated business records = case has problems." },
      { cite: "Due process",       label: "Right to raise defenses", text: "You are entitled to raise any and all legal defenses available to you, an attorney knows what those are.", exLabel: "Right", ex: "Statute of limitations, lack of standing, improper service, payment, accord and satisfaction, more." },
    ],
  },

  // ---- WHO HELPS — live verbatim ----
  whoHelps: [
    "Anyone sued by a creditor who feels outmatched by the legal process or the other side's resources.",
    "People who know they need an attorney but assumed they couldn't afford one.",
    "Those who received a creditor lawsuit and don't know what their options are or how the process works.",
    "Anyone who wants to negotiate or contest the claim from a position of legal strength.",
    "People ready to stop feeling like the underdog in a fight they didn't start.",
  ],

  // ---- FAQ — live verbatim ----
  faq: [
    ["Does having an attorney really make a difference in a debt lawsuit?", "Significantly. Creditor law firms depend on defaults and uncontested cases. When an attorney appears for you, the entire dynamic of the case changes, they can no longer count on an easy win."],
    ["What if I can't afford an attorney right now?", "That's exactly why we offer flexible payment plans. You shouldn't have to face a creditor's legal team unrepresented because of timing. We structure the cost around what you can manage."],
    ["Can an attorney help even if the debt is legitimate?", "Yes. Even on a valid debt, an attorney can challenge the amount, negotiate better settlement terms, raise procedural defenses, and ensure the creditor follows every legal requirement. Legitimacy of the debt is just one factor."],
    ["Do I have to appear in court?", "Usually not. Our attorneys handle court appearances and filings on your behalf in most cases."],
    ["How much does this cost?", "Your consultation is free. We offer flexible payment plans and will walk you through every option before any commitment is made."],
  ],

  // ---- BOTTOM CTA — live verbatim ----
  bottomCta: {
    headline: "You don't have to face their legal team alone.",
    body: "Creditors sue knowing most people won't have representation. With Credo Legal, now you do.",
    cta: "Get a free case evaluation",
  },

  disclaimer: "This is attorney advertising. Prior results do not guarantee a similar outcome.",
};
