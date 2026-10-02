/* Credo Legal — Harassment / Multiple Collectors — Aggregation / "More Money" angle.
   Source: live re-fetch of https://start.credolegal.com/multiple-collectors-more-money
   (2026-06-23), supersedes the 2026-06-01 capture which had bracketed placeholders.

   Per-LP deviations handled per 2026-06-23 socratic decisions:
   - H1 typos on live: "Multipe Debt Collectors Harrasing You?" → fixed to
     "Multiple Debt Collectors Harassing You?". Brand-quality copy on the
     new design; the broken live H1 remains on production until they
     push their own fix.
   - Section heading typo on live: "Common Problems we See" → "Common
     Problems We See". (Handled by renderer's standard heading.)
   - Why Choose had 4 bullets (std 5) → added "Free consultation" row
     matching the sibling Harassment LPs' pattern.
   - Common Problems had 5 bullets (std 6) → added "Misrepresenting the
     amount owed" entry (§ 1692e(2)) to match the standard cluster set.
   - FAQ had 4 items (std 5) → added "How much does this cost?" entry
     matching every other Harassment LP's last FAQ.

   Universal fixes:
   - Live page already shows voice-corrected "Our Attorneys" in hero +
     Why Choose label (capture's flagged "Real Attorneys" instances were
     fixed upstream).
   - State exclusion list includes NC.

   Design enhancements applied:
   - Common Problems gains FDCPA § citations
   - How It Works gains time markers (DAY 0 → ONGOING)
   - Your Rights bullets promoted to structured items
   - Trust strip = prototype's compliance-safe credentials. */
window.CREDO = {
  phone: "(612) 256-8820",
  phoneHref: "tel:+16122568820",
  cluster: "Harassment",
  angle: "Multiple Collectors. Aggregation",
  statute: "FDCPA",

  hero: {
    eyebrow: "FDCPA · More collectors, more claims",
    // Typos fixed: "Multipe" → "Multiple", "Harrasing" → "Harassing".
    // "Multiple" is the angle-defining word and gets the red emphasis.
    h1: ["", "Multiple", " Debt Collectors Harassing You?"],
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

  // ---- WHAT WE DO — live intro paragraph + 5 bullets (live verbatim) ----
  whatWeDo: {
    headline: "Every collector. Every violation. Counted.",
    intro: "At Credo Legal, multiple collectors mean multiple claims. The FDCPA entitles you to up to $1,000 per lawsuit, and when several collectors are operating simultaneously, violations multiply fast. We track every breach from every source, every early-morning call, every workplace contact, every threat, every contact after a cease request. We document all of it and pursue statutory damages against each collector where violations are established. The harassment you have been living with has a dollar value. We find every dollar.",
    bullets: [
      "Violations tracked across every collector and every account from day one.",
      "Up to $1,000 in statutory damages pursued per lawsuit.",
      "Illegal calls, threats, and contacts documented and built into legal claims.",
      "FDCPA suits filed against each collector where violations are established.",
      "Attorney fees recovered from the collectors, not from you.",
    ],
  },

  // ---- WHY CHOOSE — live 4 + 1 added to hit standard 5 count ----
  whyChoose: [
    ["We track every violation from every collector", "Most people don't realize each illegal call is a separate legal violation. We do, and we document all of them from the moment you call us."],
    ["Multiple collectors mean multiple claims", "Each collector operates independently. Each one's violations are separately actionable under the FDCPA. We pursue all of them."],
    ["We build the full case, not just stop the calls", "Stopping the harassment is step one. Pursuing every violation we document across every collector is step two."],
    ["Our attorneys from day one", "Licensed attorneys on your case from the first call. Not a settlement company. Real legal authority and real legal remedies."],
    // Synthesized 5th row to match the standard cluster pattern.
    ["Free consultation", "No cost to find out how many violations exist across every collector and what they're collectively worth."],
  ],

  // ---- COMMON PROBLEMS — live 5 + 1 added to hit standard 6 count.
  //      Statute § citations added per design decision. ----
  commonProblems: [
    ["Multiple collectors, multiple violations", "Five collectors each making illegal contacts may be multiple violations, worth up to $5,000 in statutory damages. We count all of them, not just the most obvious ones.", "§ 1692k(a)(2)(A)"],
    ["Calls before 8 AM or after 9 PM", "Federal law applies to every collector equally. Every timing violation, from any of them, is separately actionable.", "§ 1692c(a)(1)"],
    ["Continued calls after a cease request", "Once we send a cease letter, any further contact from that collector may constitute a documented $1,000 violation. We send cease letters to all of them.", "§ 1692c(c)"],
    ["Calls to your employer or family", "Workplace and third-party contacts are federal violations. When multiple collectors do it, the claims stack across each of them.", "§ 1692c(a)(3), (b)"],
    ["Threats of arrest or actions they cannot take", "Every collector threatening what they cannot legally do is committing a separate FDCPA violation, one per instance, one per collector.", "§ 1692e(4),(5)"],
    // Synthesized 6th row to match the standard cluster pattern.
    ["Misrepresenting the amount owed", "Each collector that inflates or falsifies what you owe is a separate violation. Across multiple collectors, misrepresentation claims stack the same way the timing-violation claims do.", "§ 1692e(2)"],
  ],

  // ---- HOW IT WORKS — live copy + time markers ----
  howItWorks: [
    ["Free consultation", "Tell us how many collectors are calling and what they have been doing. We assess all potential violations across all collectors.", "DAY 0"],
    ["Cease letters sent, violations start tracking", "The moment we engage, cease letters go to every active collector. Any contact after that from any of them is a documented federal violation worth up to $1,000 per lawsuit.", "DAY 0"],
    ["Full violation audit across all accounts", "We review everything you can document and track all new violations from day one. Multiple collectors mean multiple streams of potential claims building simultaneously.", "WEEK 1–2"],
    ["Claims filed and pursued against each collector", "We pursue statutory damages, actual damages, and attorney fees against each collector where violations are established. The more they have done across more accounts, the stronger the overall case.", "ONGOING"],
  ],

  // ---- YOUR RIGHTS — live bullets promoted to structured items ----
  rights: {
    intro: "The FDCPA gives you financial recourse against every collector that violates it, and each violation stands on its own.",
    items: [
      { cite: "§ 1692k(a)(2)(A)", label: "Per-collector damages",  text: "Each FDCPA lawsuit entitles you to up to $1,000 in statutory damages. Violations from different collectors are separate claims.", exLabel: "Remedy", ex: "Three collectors. Three claims. Up to $3,000 in statutory damages." },
      { cite: "§ 1692c(a)(1)",    label: "Calling hours",          text: "Collectors cannot call before 8 AM or after 9 PM. Each illegal call from any collector is its own violation.", exLabel: "Violation", ex: "A 7:14 AM call from Collector A and another from Collector B count separately." },
      { cite: "§ 1692c(c)",       label: "Post-cease contact",     text: "Once a collector receives a cease request, every subsequent contact is a standalone federal violation.", exLabel: "Violation", ex: "Cease letter sent. Next call from that collector = documented $1,000 violation." },
      { cite: "§ 1692e(4),(5)",   label: "False threats",          text: "Threatening arrest, seizure, or action they cannot take is a violation, one per instance, one per collector.", exLabel: "Violation", ex: "Multiple collectors each threatening jail = multiple claims." },
      { cite: "§ 1692k(d)",       label: "Right to sue",           text: "You can sue each collector in federal or state court. Our attorneys handle the filing and the pursuit.", exLabel: "Right", ex: "One year from each violation to file. We file against each collector separately." },
      { cite: "§ 1692k(a)(3)",    label: "Fee-shifting",           text: "FDCPA attorney fees are recoverable from the collectors.", exLabel: "Remedy", ex: "Each collector pays your legal fees when your claim against them succeeds." },
    ],
  },

  // ---- WHO HELPS — live copy, verbatim ----
  whoHelps: [
    "Anyone receiving calls from multiple collectors and frustrated that no one seems to be held accountable.",
    "People who have been threatened, called at work, or contacted through family by one or more collectors.",
    "Those who have asked collectors to stop and are still receiving calls, every call after that request is money.",
    "Anyone who wants every violation tracked and pursued across all active collectors, not just the worst offender.",
    "People ready to go from the receiving end of harassment to the plaintiff side of a federal claim.",
  ],

  // ---- FAQ — live 4 + 1 added ("How much does this cost?") to match
  //      the standard 5-item count and the cluster pattern. ----
  faq: [
    ["Can I really recover $1,000 per lawsuit from multiple collectors?", "Yes. The FDCPA provides for up to $1,000 per lawsuit in statutory damages, and violations from different collectors are separate claims. If three collectors each made illegal contacts, you potentially have three separate cases with damages from each."],
    ["What counts as a violation?", "Calls before 8 AM or after 9 PM, contacting your employer or family members, threatening arrest or legal action they cannot take, and continuing to call after a written cease request. Each instance, from each collector, is a standalone violation."],
    ["How do we prove violations that happened before I called?", "We work with what you can document, call logs, voicemails, records of contacts. For everything going forward, we start tracking from day one. The sooner you call, the more we can capture in real time."],
    ["What if the collectors stop calling once they get the cease letters?", "That is a good outcome. If they stop, you have relief. If any of them do not, every contact after the cease request is a documented $1,000 violation. Either way, you are in a better position than before."],
    // Synthesized 5th item to match the standard cluster pattern.
    ["How much does this cost?", "Your consultation is free. We offer flexible payment plans, and FDCPA attorney fees are recoverable from each collector where your claim succeeds, so pursuing multiple claims may cost you nothing out of pocket on the harassment side."],
  ],

  // ---- BOTTOM CTA — live copy, verbatim ----
  bottomCta: {
    headline: "Every illegal call has a dollar value. We find them all.",
    body: "Multiple collectors mean multiple claims. Our attorneys track every violation from every source and pursue every dollar you are owed under federal law.",
    cta: "Get a free case evaluation",
  },

  disclaimer: "This is attorney advertising. Prior results do not guarantee a similar outcome.",
};
