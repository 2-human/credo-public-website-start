/* Credo Legal — Harassment / Violations ($1K-per-violation / financial-motivation angle).
   Source: live re-fetch of https://start.credolegal.com/debt-harassment-violations
   (2026-06-23), supersedes the 2026-06-01 capture which had bracketed placeholders.

   No per-LP structural deviations. Sibling of /debt-harassment-stop-calls in
   the Creditor_Harassment ad group: same H1, same phone (201) 416-7080,
   different lede + body emphasis ("Make Them Pay" vs "Make Them Stop").

   Universal fixes applied:
   - Subhead is already "Our Attorneys Can Make Them Pay." on live (the
     2026-06-01 capture flagged "Real Attorneys" but the live page has
     since been corrected). No further voice fix needed.
   - State exclusion list includes NC.

   Live-copy bugs fixed silently while applying:
   - "$1,000per lawsuit" → "$1,000 per lawsuit" (missing space)
   - "everypost-letter call" → "every post-letter call" (missing space)

   Design enhancements applied per 2026-06-23 decisions:
   - Common Problems gains FDCPA § citations per bullet
   - How It Works gains time markers (DAY 0 → ONGOING)
   - Your Rights bullets promoted to structured items
   - Trust strip = prototype's compliance-safe credentials. */
window.CREDO = {
  phone: "(612) 256-8820",
  phoneHref: "tel:+16122568820",
  cluster: "Harassment",
  angle: "Violations ($1K per violation)",
  statute: "FDCPA",

  hero: {
    eyebrow: "FDCPA · Make them pay",
    // Same H1 as /debt-harassment-stop-calls; same emphasis to keep the
    // Creditor_Harassment ad group visually consistent — the lede does the
    // angle differentiation.
    // 2026-06-30 (milos, h1-1): widened red emphasis to "Stop Calling".
    h1: ["Debt Collectors Won't ", "Stop Calling", "?"],
    lede: "Our Attorneys Can Make Them Pay.",
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

  // ---- WHAT WE DO — live intro paragraph + 4 bullets (live verbatim,
  //      with spacing typos quietly corrected) ----
  whatWeDo: {
    headline: "Every illegal call becomes evidence.",
    intro: "At Credo Legal, we don't just make the calls stop, we turn every illegal call into evidence. Our attorneys identify each FDCPA violation, document the pattern of harassment, and build a legal case against the collector. The law was written to hold collectors accountable. We use it.",
    bullets: [
      "Turn every illegal contact into a documented FDCPA claim against the collector.",
      "Translate violations into dollars: statutory damages (up to $1,000 per lawsuit), actual damages, and attorney fees.",
      "Send the formal cease letter that either stops contact or adds every post-letter call to your claim.",
      "File and prosecute the FDCPA case on your behalf.",
    ],
  },

  // ---- WHY CHOOSE — live copy, verbatim ----
  whyChoose: [
    ["Licensed attorneys, we hold collectors accountable", "We don't send a strongly worded letter and hope for the best. We build FDCPA cases and pursue them."],
    ["We track every violation", "Each illegal call, threat, or contact after a cease request is documented and added to your claim."],
    ["The FDCPA pays you, we maximize that", "Statutory damages, actual damages, and attorney fees are all recoverable. We pursue the full amount."],
    ["Free consultation", "No cost to find out how many violations you have and what they're worth."],
    ["Flexible payment plans", "Legal help structured around your budget."],
  ],

  // ---- COMMON PROBLEMS — live copy + § citations ----
  commonProblems: [
    ["Calls before 8 AM or after 9 PM", "Each one is a documented violation.", "§ 1692c(a)(1)"],
    ["Calls to your workplace", "If your employer objects, every call to your job is illegal.", "§ 1692c(a)(3)"],
    ["Contacting family members about your debt", "Prohibited under the FDCPA. Each instance is a violation.", "§ 1692c(b)"],
    ["Threatening arrest or actions they can't take", "Collectors cannot threaten what they cannot legally do. Each threat counts.", "§ 1692e(4),(5)"],
    ["Continuing to call after a cease request", "Every call after a written cease is a separate, standalone violation.", "§ 1692c(c)"],
    ["Misrepresenting the amount owed", "Inflating or falsifying what you owe is a federal violation regardless of the actual debt.", "§ 1692e(2)"],
  ],

  // ---- HOW IT WORKS — live copy + time markers ----
  howItWorks: [
    ["Free consultation", "Tell us what's been happening. We review every collector contact and identify violations at no cost.", "DAY 0"],
    ["Violations documented", "Our attorneys catalog every illegal call, threat, and breach from day one. Each one is potential money in your pocket.", "DAY 0"],
    ["Cease letter sent", "We stop the calls while simultaneously building your FDCPA claim against the collector.", "WEEK 1"],
    ["Legal action", "We pursue the collector for statutory damages, actual damages, and attorney fees, shifting the financial pressure from you to them.", "ONGOING"],
  ],

  // ---- YOUR RIGHTS — live bullets promoted to structured items ----
  rights: {
    intro: "The FDCPA doesn't just protect you, it creates financial accountability for collectors who break it.",
    items: [
      { cite: "§ 1692k(a)(2)(A)", label: "Statutory damages",      text: "Each lawsuit under the FDCPA can result in up to $1,000 in statutory damages.", exLabel: "Remedy", ex: "Up to $1,000 per lawsuit, paid by the collector." },
      { cite: "§ 1692k(a)",       label: "Strict liability",       text: "You do not need to prove financial harm to recover. The violation itself is enough.", exLabel: "Right", ex: "No proven harm required. The violation alone creates liability." },
      { cite: "§ 1692k(a)(1)",    label: "Actual damages",         text: "Actual damages, including emotional distress, lost wages, and other real harm, are recoverable on top of statutory damages.", exLabel: "Remedy", ex: "Emotional distress, lost wages, real harm: all recoverable." },
      { cite: "§ 1692k(a)(3)",    label: "Fee-shifting",           text: "Attorney fees are recoverable from the collector.", exLabel: "Remedy", ex: "Collector pays your legal fees when the claim succeeds." },
      { cite: "§ 1692a(6)",       label: "Broad coverage",         text: "The law applies to all third-party collectors, regardless of what type of debt they are collecting.", exLabel: "Right", ex: "Credit cards, medical bills, payday loans, the FDCPA covers them all." },
    ],
  },

  // ---- WHO HELPS — live copy, verbatim ----
  whoHelps: [
    "Anyone who has received repeated or harassing calls from a debt collector about any unsecured debt.",
    "People who have been threatened, humiliated, or misled by a collector.",
    "Those who've asked collectors to stop but keep getting called, every call after that is a violation.",
    "Anyone whose collector has contacted their employer, family members, or neighbors.",
    "People who want to stop being the victim of debt harassment.",
  ],

  // ---- FAQ — live copy, verbatim ----
  faq: [
    ["How much can I recover from a debt collector who violated the FDCPA?", "Up to $1,000 per lawsuit in statutory damages, plus actual damages for real harm suffered, plus attorney fees, all recoverable from the collector if the claim is viable."],
    ["Do I need to prove I was financially harmed to make a claim?", "No. Under the FDCPA, a violation is enough, you don't need to show that the calls cost you money. The law creates automatic liability for each breach."],
    ["What if the collector only violated the law a few times?", "Even a handful of violations adds up. And in many cases, once we begin documenting, the pattern reveals more than clients initially realize."],
    ["How long does it take to resolve an FDCPA case?", "Timelines vary, but many cases resolve in weeks to months."],
    ["How much does this cost?", "Your consultation is free. After that we have affordable payment plans for you to tackle your debts."],
  ],

  // ---- BOTTOM CTA — live copy, verbatim ----
  bottomCta: {
    headline: "Every illegal call is evidence. Let's use it.",
    body: "Collectors broke federal law. That's not just something to complain about, it's a legal claim. Our attorneys build that case from day one.",
    cta: "Get a free case evaluation",
  },

  disclaimer: "This is attorney advertising. Prior results do not guarantee a similar outcome.",
};
