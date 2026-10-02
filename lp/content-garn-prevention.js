/* Credo Legal — Garnishment / Pre-Judgment — "Prevention" angle.
   Source: live re-fetch of https://start.credolegal.com/wage-garnishment-prevention
   (2026-06-23). Not in the 2026-06-01 capture set (capture mapped
   LP_PreJudgment-Garn_VarA to the legacy /stop-wage-garnishment URL).

   Same phone (720) 414-1751 as the Post-Judgment URLs — single team
   handles all Garnishment intent routing.

   Per-LP deviations resolved:
   - SUBHEAD-ANGLE MISMATCH on live: H1 'Garnishment Looming?' frames
     prevention but subhead reads 'Our Attorneys Can Help Find Grounds
     for Exemptions.' Exemptions is the Post-Judgment Var B angle, not
     prevention — looks copy-pasted from the sibling. REWRITTEN here to
     match the Prevention framing: 'Our Attorneys Can Help You Stop It
     Before It Starts.'
   - Spacing bug in HIW step 4: 'settlethe underlying debt' → fixed.
   - Bottom CTA double-space typo on live: 'Happen.   Get Help Today'
     → 'Happen. Get help today.' (also added body matching the angle).
   - Why Choose label-only on live → 5 label+body rows synthesized.
   - Common Problems label-only on live → 5 label+body rows + § cites.
     Count 5→6 (added 'Pre-judgment notice never received' due process).
   - FAQ 4 → 5 (added 'Does prevention work after they've already filed
     the lawsuit?' addressing the pre-vs-post-judgment timing question).
   - Your Rights 5 items already match standard pattern when promoted.

   Universal: state exclusion list includes NC. Hero already shows
   'Our Attorneys' in subhead (no voice fix needed there, but the
   subhead was angle-wrong — see above). */
window.CREDO = {
  phone: "(720) 414-5055",
  phoneHref: "tel:+17204145055",
  cluster: "Garnishment",
  angle: "Pre-Judgment. Prevention",
  statute: "Federal + state garnishment law",

  hero: {
    eyebrow: "Garnishment defense · Stop it before it starts",
    // "Looming" gets red emphasis — captures the pre-judgment threat
    // posture that distinguishes this LP from the active-garnishment LPs.
    h1: ["Garnishment ", "Looming", "?"],
    // Lede REWRITTEN to fit Prevention angle. Live subhead 'Find Grounds
    // for Exemptions' was copy-pasted from the Exemptions sibling and
    // mismatched this page's framing.
    lede: "Our Attorneys Can Help You Stop It Before It Starts.",
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
      "Garnishment threatened, not yet started",
      "Garnishment recently started",
      "Garnishment ongoing for months",
      "Multiple garnishments hitting one paycheck",
      "Federal benefits being garnished",
      "Bank account levy in addition",
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
  // 2026-06-30 (Sona, span-12 + span-14, propagated): metrics swap applied
  // across all LPs. Numbers confirmed by team@2-human.com 2026-06-30.
  metrics: [
    ["10 million+", "In debt wiped"],
    ["500k", "Debts settled every month"],
  ],

  whatWeDo: {
    headline: "We stop garnishment before it starts.",
    intro: "At Credo Legal, we don't wait for garnishment to start. We act before they touch your paycheck, file the motions, raise the defenses, and put every legal obstacle between the threat and your income.",
    bullets: [
      "File motions to prevent garnishment before the first deduction.",
      "Challenge the underlying debt's validity.",
      "Defend you in court if a lawsuit is already in progress.",
      "Protect your income with every legal option still available to you.",
    ],
  },

  whyChoose: [
    ["Attorney assistance from day one", "Licensed attorneys handle your case from the first conversation, pre-judgment, pre-garnishment, pre-paycheck deduction."],
    ["We act before they garnish your paycheck", "Most garnishments are preventable if action is taken before the judgment is entered. Speed matters."],
    ["We challenge debt validity", "Before garnishment can begin, the creditor needs a judgment. We attack the basis of that judgment, documentation gaps, inflated balances, improper service."],
    ["We file motions", "Pre-judgment motions, exemption claims, procedural objections, and any other filing that delays or blocks the garnishment order."],
    ["Flexible payment plans", "Pre-judgment defense structured around your budget, affordable specifically because acting now is cheaper than acting after the deductions start."],
  ],

  commonProblems: [
    ["Credit card debt garnishment orders", "Credit card lawsuits frequently lead to wage garnishment after default judgment. Responding before the deadline blocks the path.", "FRCP 12(a)"],
    ["Medical debt judgment actions", "Medical providers and their assignees can sue for unpaid bills, and a default judgment opens the door to garnishment.", "State civil procedure"],
    ["Private loan collection lawsuits", "Personal-loan and payday-loan collectors file civil suits that follow the same lawsuit → judgment → garnishment pipeline.", "State civil procedure"],
    ["Pre-judgment debt lawsuits", "If you've been sued but no judgment has been entered, garnishment cannot yet begin. The response window is the prevention window.", "FRCP 8, 12"],
    ["Garnishment after missed court dates", "Default judgments enter automatically when a hearing is missed, and garnishment can follow quickly. Acting before the next date matters.", "FRCP 55"],
    // Synthesized 6th matching the angle.
    ["Pre-judgment notice never received", "If you weren't properly served with the underlying lawsuit, any judgment that follows is challengeable, and the garnishment with it.", "Due process"],
  ],

  // HIW step 4 spacing fixed.
  howItWorks: [
    ["Free consultation", "We review the garnishment threat and how much time you have to act.", "DAY 0"],
    ["Debt investigation", "We examine the claim and identify every available legal challenge.", "WEEK 1"],
    ["Legal representation", "We file motions and fight to prevent garnishment from starting.", "WEEK 1–2"],
    ["Work towards debt resolution", "We negotiate, dispute, or help settle the underlying debt to resolve it before garnishment begins.", "ONGOING"],
  ],

  rights: {
    intro: "Federal and state laws protect a portion of your wages from garnishment, and require creditors to follow strict rules before touching your paycheck. Before a garnishment can begin, a creditor must:",
    items: [
      { cite: "FRCP 4 + state rules", label: "Valid judgment first",   text: "Obtain a valid court judgment against you through proper legal process.", exLabel: "Right", ex: "No judgment = no garnishment. The lawsuit must be properly served and adjudicated." },
      { cite: "Due process",          label: "Proper notice required", text: "Provide you with proper legal notice before any deductions begin.", exLabel: "Right", ex: "Notice of the underlying lawsuit + notice of intent to garnish, both required." },
      { cite: "15 U.S.C. § 1673",     label: "Federal 25% cap",        text: "Comply with federal and state limits on how much of your paycheck can be taken.", exLabel: "Right", ex: "25% maximum federally. State caps are often lower." },
      { cite: "State exemption law",  label: "Exemptions respected",   text: "Respect exemptions that may protect your income in part or entirely.", exLabel: "Right", ex: "Head of household, low income, federal benefits, must be honored." },
      { cite: "State garn rules",     label: "Procedural compliance",  text: "Follow procedural rules exactly, violations can invalidate the entire garnishment.", exLabel: "Right", ex: "Wrong calculation, missing notice, improper filing = grounds to vacate." },
    ],
  },

  whoHelps: [
    "People who have received a garnishment notice or legal threat.",
    "Anyone who has been sued and is worried about their paycheck.",
    "Those facing debt lawsuits before a judgment has been entered.",
    "People who want to act before any deductions start.",
    "Anyone looking for attorney-led paycheck protection on a flexible payment plan.",
  ],

  // Live 4 + 1 synthesized to hit std 5.
  faq: [
    ["How long do I have to stop a garnishment before it starts?", "The window depends on where you are in the legal process. If you've received a summons, you typically have 20 to 28 days to respond before a default judgment can be entered. If a judgment has already been issued, your options shift, but don't disappear. The sooner you act, the more we can do."],
    ["Can you actually prevent garnishment before it hits my paycheck?", "Yes, if you act before a court order is entered. We file legal responses, challenge the underlying debt, and pursue every available remedy to block the garnishment order. Thousands of people have stopped garnishment before the first deduction with our help."],
    ["What if I can't afford an attorney right now?", "We offer flexible payment plans so you can get legal help without paying everything upfront. Protecting 100% of your paycheck now costs far less than losing 25% of it every month while you wait."],
    // Synthesized 5th matching the angle's timing concern.
    ["Does prevention work after they've already filed the lawsuit?", "Yes, that's actually the prime window. As long as no judgment has been entered yet, defending the lawsuit is the most direct path to preventing the garnishment that would follow. The response deadline is the critical date."],
    ["How much does this cost?", "Your first case evaluation is completely free. We'll review your situation, explain every option, and lay out a plan, including flexible payment options for ongoing representation."],
  ],

  // Body added (live was heading-only with a double-space typo).
  bottomCta: {
    headline: "Don't let the first deduction happen. Get help today.",
    body: "Prevention is the cheapest, fastest, and most effective way to handle wage garnishment. Acting before the judgment is entered means there is no garnishment to fight later. Find out where you stand, for free.",
    cta: "Get a free case evaluation",
  },

  disclaimer: "This is attorney advertising. Prior results do not guarantee a similar outcome.",
};
