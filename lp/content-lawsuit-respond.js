/* Credo Legal — Lawsuit / Collection_Lawsuit — "Deadline Urgency" angle.
   Source: live capture LP_Lawsuit-Collection_VarA_Urgency.md (2026-06-01).

   This is the CAMPAIGN CHAMPION across the entire account:
   580+ conversions, 11% conv rate, $51 CPA per CAMPAIGN-PLAN.md.

   Sibling of /debt-lawsuit-proof (Var B Proof Challenge) in the
   Collection_Lawsuit ad group: same H1, same phone (212) 561-5902,
   different lede. This LP runs deadline-urgency framing.

   Per-LP deviations resolved (same defaults as URLs #5, #6, #9, #10):
   - Common Problems had 5 bullets (std 6) → added 6th 'Wage garnishment
     after default' (15 U.S.C. § 1673) matching the urgency angle.
   - Your Rights had 5 items (std 6) → added 6th 'Validation right'
     (FDCPA § 1692g) — matches cluster pattern.
   - Tab title 'Judgement' (UK) → 'Judgment' (US) per May action
     items §1 (broken on live, fixed here via new SEO-tuned title).

   Universal voice fixes (3 instances on this LP):
   - Hero subhead: 'Real Attorneys Can Help You Respond On Time' →
     'Our Attorneys Can Help You Respond On Time'.
   - Why Choose b1 body: 'Real lawyers defend you from day one' →
     'Our attorneys defend you from day one'.
   - Why Choose b5 body: 'Real legal defense, structured around your
     budget' → 'Legal defense, structured around your budget'.
   - State exclusion list includes NC.

   Footer phone bug noted in the audit — fixed automatically by the
   prototype's renderer (footer 'Existing Clients' line hardcoded to
   (212) 461-4026, separate from the per-LP routing number).

   Design enhancements applied (full set per 2026-06-23 decisions). */
window.CREDO = {
  phone: "(718) 521-4060",
  phoneHref: "tel:+17185214060",
  cluster: "Lawsuit",
  angle: "Collection_Lawsuit. Deadline urgency (CHAMPION)",
  statute: "Civil procedure / FDCPA",

  hero: {
    eyebrow: "Collection lawsuit · Respond on time",
    h1: ["Debt Collector ", "Suing", " You?"],
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

  whatWeDo: {
    headline: "We answer the lawsuit on time.",
    intro: "At Credo Legal, when you're sued by a debt collector, we don't wait. We review the lawsuit, examine the claim, and respond before the deadline runs out.",
    bullets: [
      "File your legal answer by the deadline.",
      "Challenge whether the collector can legally enforce the debt.",
      "Defend you against default judgment in court.",
      "Hold collectors accountable for improper or inflated claims.",
    ],
  },

  // Voice fixes applied to bullets 1 and 5.
  whyChoose: [
    ["Licensed attorneys, not salespeople", "Our attorneys defend you from day one. Not a settlement service."],
    ["We file before deadlines hit", "Filing your response before the clock runs out is the single most important thing that can happen right now."],
    ["We challenge the debt", "Before we respond, we examine the claim, for errors, inflated amounts, and documentation gaps that can lead to dismissal."],
    ["Protection from default judgment", "A default judgment allows collectors to garnish your wages and freeze your accounts. We fight to prevent that."],
    ["Flexible payment plans", "Legal defense, structured around your budget."],
  ],

  // Live 5 + 1 synthesized to hit std 6. 6th addresses the urgency-angle
  // consequence chain (default → garnishment).
  commonProblems: [
    ["Default judgment risk", "No response = the collector wins automatically, without proving anything.", "FRCP 55"],
    ["Missed or expiring response deadlines", "Courts rarely grant extensions. Once the window closes, options narrow sharply.", "FRCP 12(a)"],
    ["Collectors with unverified claims", "Sometimes collection lawsuits are filed without complete documentation. That's a defense.", "FRE 803(6), 901"],
    ["Collector legal teams", "Debt buyers employ attorneys specifically to win by default. You deserve representation too.", "Civil right"],
    ["Inflated or incorrect balances", "The amount being claimed may include fees, interest, or errors that can be challenged.", "FDCPA § 1692e(2)"],
    // Synthesized 6th — the consequence the urgency angle is designed to prevent.
    ["Wage garnishment after default", "A default judgment opens the door to wage garnishment, bank levies, and credit-report damage. Responding on time keeps that door closed.", "15 U.S.C. § 1673"],
  ],

  howItWorks: [
    ["Free consultation", "We review your lawsuit and explain exactly where you stand and what options you have, at no cost.", "DAY 0"],
    ["Debt investigation", "Our attorneys examine the claim, the documentation, and the legal basis before we respond.", "WEEK 1"],
    ["Legal response filed", "We file your answer by the deadline, preserving your right to defend the case.", "BY DEADLINE"],
    ["Work towards resolution", "We fight the case in court, negotiate a settlement, or move to reduce or dismiss the debt based on the strength of the case.", "ONGOING"],
  ],

  // Live 5 items + 1 synthesized to hit std 6.
  rights: {
    intro: "Even after a lawsuit is filed, the law continues to protect you.",
    items: [
      { cite: "FRCP 4",            label: "Proper service first",      text: "Collectors cannot obtain a default judgment without first properly serving you with the lawsuit.", exLabel: "Right", ex: "No valid service = no default judgment." },
      { cite: "FRE 401–402",       label: "Burden of proof",           text: "Collectors must be able to prove the debt is valid, accurate, and that they have the legal right to collect.", exLabel: "Right", ex: "Plaintiff carries the burden. You don't have to disprove the claim." },
      { cite: "FDCPA § 1692e(2)",  label: "No false court filings",    text: "Misrepresenting the amount owed, even in a court filing, violates the FDCPA.", exLabel: "Violation", ex: "Inflated balance in the complaint = federal claim back against the collector." },
      { cite: "FRCP 60(b)",        label: "Vacating a judgment",       text: "A default judgment is not always final. In certain circumstances, it can be vacated with prompt legal action.", exLabel: "Right", ex: "Improper service, mistake, excusable neglect, narrow but real grounds." },
      { cite: "Civil right",       label: "Right to defend",           text: "You have the right to respond, appear, and be represented by an attorney in any civil lawsuit.", exLabel: "Right", ex: "File an answer. Be heard. Be represented at every stage." },
      // Synthesized 6th — validation right.
      { cite: "FDCPA § 1692g",     label: "Validation right",          text: "You have the right to demand the collector verify the debt in writing before you are required to respond.", exLabel: "Right", ex: "Send a validation request. Collection activity pauses until the collector responds." },
    ],
  },

  whoHelps: [
    "Anyone who has received a summons or court papers for a debt collection lawsuit.",
    "People who ignored an early notice and are now facing a default judgment deadline.",
    "Those whose wages are being garnished following a debt judgment they didn't respond to.",
    "Anyone who believes the amount being claimed is incorrect, inflated, or not theirs to owe.",
    "People who received lawsuit papers and don't know what to do next or how much time they have.",
  ],

  faq: [
    ["What happens if I don't respond to a collection lawsuit?", "The court enters a default judgment against you automatically. This gives the collector the legal right to garnish your wages, freeze your bank accounts, and collect."],
    ["How long do I have to respond?", "Deadlines vary by state, typically 20 to 28 days from the date you were served. The clock starts the day of service."],
    ["What if I've already missed the deadline?", "A default judgment may be vacatable depending on the circumstances. We can review your case and advise on whether there are grounds to reopen it."],
    ["Do I have to go to court myself?", "Usually not. Our attorneys can appear and file all required documents on your behalf in most cases."],
    ["How much does this cost?", "Your consultation is free. We offer flexible payment plans and will explain all options before any commitment."],
  ],

  bottomCta: {
    headline: "Don't let the deadline cost you. Act now.",
    body: "A collection lawsuit isn't a final outcome, it's a starting point. But only if you respond in time.",
    cta: "Get a free case evaluation",
  },

  disclaimer: "This is attorney advertising. Prior results do not guarantee a similar outcome.",
};
