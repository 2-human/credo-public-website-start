/* Credo Legal — Payday / Rights — "Fight Back / Use Your Rights" angle (Var B).
   Sibling of /payday-loan-debt-rights (Var A Education). Same phone
   (347) 744-9014. Var A explains; Var B acts.
   No structural deviations. Voice fix on hero subhead. */
window.CREDO = {
  phone: "(347) 744-9014", phoneHref: "tel:+13477449014",
  cluster: "Payday Loan", angle: "Rights. Fight back",
  statute: "FDCPA + EFTA + state payday law + FCRA",

  hero: {
    eyebrow: "Payday loans · Use your rights",
    h1: ["Payday Loan ", "Broke the Law", "?"],
    lede: "Our Attorneys Can Check Legality and Build Your Case.",
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
      "Researching my options before acting",
      "Lender harassment but no lawsuit yet",
      "Unsure whether the loan was legal",
      "Want to stop ACH withdrawals",
      "Considering whether to dispute the debt",
      "Active-duty military or dependent",
    ],
    submit: "Get a free case evaluation",
    stateExclusion: "We currently do not service DC, DE, ID, NC, OK, WV, or WY.",
  },

  trust: [
    { n: "44", lbl: "States with licensed attorneys" },
    { n: "$0", lbl: "Cost of your consultation" },
    { n: "EFTA", lbl: "Stop ACH withdrawals" },
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
    headline: "Knowing isn't enough. We act.",
    intro: "At Credo Legal, knowing your rights is where we start, acting on them is where we finish. We send a cease letter on day one, document violations, examine the loan's legality, and pursue every legal claim available to you.",
    bullets: [
      "Cease letter sent day one of enrollment to stop collector contact immediately.",
      "FDCPA violations tracked and pursued for up to $1,000 per lawsuit.",
      "Loan reviewed for licensing violations and unenforceable rate charges.",
      "ACH authorization revocation to stop automatic bank withdrawals.",
    ],
  },

  whyChoose: [
    ["Licensed attorneys, we act, not just advise", "We don't hand you a pamphlet. We build cases and pursue them."],
    ["We move on day one", "Cease letter sent immediately upon enrollment. Violations documented from your first call. No waiting."],
    ["Payday loans have more legal vulnerabilities than most", "Unlicensed lenders, rate-cap violations, rollover abuse, missing documentation, we look for all of it."],
    ["Free consultation", "No cost to find out what violations exist and what claims you have."],
    ["Flexible payment plans", "FDCPA recoveries and attorney fees from the collector can offset your costs entirely."],
  ],

  commonProblems: [
    ["Collector calls after a cease request", "Every call after written notice is a standalone FDCPA violation. We document them all.", "§ 1692c(c)"],
    ["Illegal threats of arrest", "Threatening criminal consequences for unpaid payday loan debt is a federal violation, and common payday-collector behavior.", "§ 1692e(4)"],
    ["Unlicensed or above-cap loans", "Many online payday lenders aren't properly licensed or charge above your state's rate cap. These loans may be void.", "State payday law"],
    ["Unauthorized bank withdrawals", "If a lender is pulling money from your account after you've revoked ACH authorization, that's an EFTA violation.", "15 U.S.C. § 1693"],
    ["Inflated balances from rollovers", "A loan that's been rolled over repeatedly may contain fees and interest that exceed what state law allows.", "State payday law"],
    ["Selling debt without documentation", "When payday loans get sold, records disappear. That's both a collection-claim defense and a potential FDCPA issue.", "FDCPA § 1692g"],
  ],

  howItWorks: [
    ["Free consultation", "Tell us everything, the calls, the loan, the threats. We identify every legal claim at no cost.", "DAY 0"],
    ["Cease letter sent, day one", "Contact stops immediately while we begin building your case against the collector.", "DAY 0"],
    ["Violations and loan issues documented", "FDCPA violations, licensing issues, rate violations, ACH problems, all catalogued and prepared as claims.", "WEEK 1–2"],
    ["We fight on every front", "Cease letter, FDCPA claim, loan challenge, credit-report dispute, we pursue every avenue simultaneously.", "ONGOING"],
  ],

  rights: {
    intro: "The law gives you real tools to fight back, not just protection.",
    items: [
      { cite: "§ 1692k",          label: "Right to sue collectors",   text: "The FDCPA gives you the right to sue collectors who violate it for up to $1,000 per lawsuit, plus attorney fees paid by the collector.", exLabel: "Remedy", ex: "$1,000 per lawsuit, fees recoverable from the collector." },
      { cite: "State payday law",  label: "Direct lender claims",     text: "State payday lending laws may give you additional claims directly against the original lender, including the right to void an unlawful loan.", exLabel: "Right", ex: "Some states allow private right of action against unlicensed lenders." },
      { cite: "15 U.S.C. § 1693",  label: "EFTA / unauthorized ACH",  text: "The Electronic Funds Transfer Act prohibits unauthorized electronic withdrawals. Continued ACH pulls after revocation are actionable.", exLabel: "Violation", ex: "ACH pulls continuing after written revocation = EFTA claim." },
      { cite: "CFPB rules",        label: "Disclosures + practices",  text: "CFPB payday lending rules require specific disclosures and practices. Violations can be raised as defenses and potential claims.", exLabel: "Right", ex: "Loan made without ability-to-repay assessment = potential CFPB defense." },
      { cite: "State payday law",  label: "Void unlicensed / above-cap loans", text: "A loan from an unlicensed lender or made above your state's rate cap may be void, meaning you legally owe nothing, or far less than claimed.", exLabel: "Right", ex: "Loan void = principal possibly not owed." },
      { cite: "FCRA",              label: "Credit-report cleanup",    text: "You can have invalid or discharged debts removed from your credit report under the Fair Credit Reporting Act.", exLabel: "Remedy", ex: "Successful challenge + dispute with bureaus = removal." },
    ],
  },

  whoHelps: [
    "Anyone who has been harassed by a payday loan collector and wants to pursue legal claims, not just stop the calls.",
    "People who borrowed from an online payday lender and suspect the loan may not have been legally made.",
    "Those receiving unauthorized automatic withdrawals from their bank account after revoking ACH authorization.",
    "Anyone who wants to turn their legal rights into concrete outcomes, reduced debt, financial recovery, credit repair.",
    "People who are done being on the defensive and want an attorney actively fighting on their behalf.",
  ],

  faq: [
    ["Can I sue a payday lender or their collector under the FDCPA?", "Yes. When a third-party collector pursues a payday loan debt, the FDCPA applies fully. Many states also allow claims against original lenders directly."],
    ["What if my payday lender was online and I'm not sure where they're based?", "Online payday lenders are required to be licensed in the state where the borrower lives, regardless of where they operate from. Lack of licensing where you live can void the loan."],
    ["How do I stop my payday lender from withdrawing from my bank account?", "You can revoke ACH authorization under the EFTA. This must be done properly to be legally effective, written notice to both the lender and your bank within the required timeframes."],
    ["What if the loan has already grown to three or four times what I originally borrowed?", "Many state laws limit rollovers, fees, and interest charges. If those limits were exceeded, portions of the balance may be unenforceable, sometimes most of it."],
    ["How much does this cost?", "Your consultation is free. FDCPA attorney fees are recoverable from the collector if case is won, meaning pursuing your claim may cost you nothing out of pocket on that side."],
  ],

  bottomCta: {
    headline: "Don't just know your rights. Use them.",
    body: "The law gives you real tools, cease letters, FDCPA claims, loan challenges, credit repair. Our attorneys use every one of them.",
    cta: "Get a free case evaluation",
  },

  disclaimer: "This is attorney advertising. Prior results do not guarantee a similar outcome.",
};
