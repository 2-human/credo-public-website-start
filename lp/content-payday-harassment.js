/* Credo Legal — Payday Loan / Harassment — "Stop Calls" angle.
   Source: live capture LP_PaydayLoan-Harassment_VarA_StopCalls - DYN.md
   (2026-06-01). Bracketed placeholders inferred from context.

   FIRST PAYDAY-CLUSTER LP applied to the new design. The Payday cluster
   introduces vertical-specific mechanics not present in other clusters:
   - EFTA / ACH revocation rights (15 U.S.C. § 1693) — payday lenders
     typically debit via ACH; consumers can revoke that authorization
     independent of resolving the underlying debt.
   - Military Lending Act 36% rate cap (10 U.S.C. § 987) — active-duty
     service members protected against predatory rates.
   - State-specific payday loan rules — some states ban payday loans;
     others cap rates; loan validity varies by jurisdiction.

   Sibling of /payday-loan-debt-violations (URL #18, Var B Violations
   Payoff) in the Payday_Brand_Harassment ad group: same phone
   (407) 512-0808, different framing.

   Per-LP deviations resolved:
   - SUBHEAD-ANGLE MISMATCH on live: H1 frames Stop Calls but subhead
     reads 'Make Them Pay' (VarB Violations angle, looks copy-pasted).
     Rewritten here to match VarA Stop Calls framing.
   - Voice fix: hero subhead 'Real Attorneys' → 'Our Attorneys'.
   - Voice fix: Why Choose b1 body 'We're real lawyers' → 'Our
     attorneys are real lawyers'.
   - State exclusion list includes NC.

   No structural deviations. Standard 14-block template.
   Common Problems section heading on live reads 'Common Examples Of
   Payday Lender Harassment We May Stop' — angle-specific variation,
   preserved here. */
window.CREDO = {
  phone: "(407) 512-0808",
  phoneHref: "tel:+14075120808",
  cluster: "Payday Loan",
  angle: "Payday Harassment. Stop calls",
  statute: "FDCPA + EFTA + state payday law",

  hero: {
    eyebrow: "Payday loans · Stop the calls",
    // 'Aggressively' gets red emphasis — names the behavior pattern
    // this LP responds to.
    h1: ["Payday Lenders Calling ", "Aggressively", "?"],
    // Lede REWRITTEN. Live subhead 'Make Them Pay' was copy-pasted from
    // the Var B Violations sibling and mismatched this Stop Calls angle.
    lede: "Our Attorneys Can Help Make Them Stop.",
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
    // Cluster-specific situation options — Payday-Harassment intent.
    situationOptions: [
      "Calls before 8 AM or after 9 PM",
      "Threats of arrest over the loan",
      "Calls to my workplace",
      "Contacting my family",
      "ACH withdrawals continuing despite revocation",
      "Lender threatening criminal prosecution",
    ],
    submit: "Get a free case evaluation",
    stateExclusion: "We currently do not service DC, DE, ID, NC, OK, WV, or WY.",
  },

  // Cluster trust strip introduces EFTA as the vertical-specific value
  // anchor (alongside FDCPA which Payday Harassment LPs also invoke).
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
    headline: "We remove the fear they rely on.",
    intro: "Payday lenders count on fear and confusion to collect. At Credo Legal, we remove both. We send a cease letter, document violations, and pursue the federal claims the law creates.",
    bullets: [
      "Cease-communication letter sent on day one.",
      "Document every violation that occurs after the cease request.",
      "Review whether the underlying loan was legal in your state.",
      "Pursue FDCPA claims against collectors who continue to call.",
    ],
  },

  whyChoose: [
    // Voice fix on b1 body.
    ["Licensed attorneys, not a settlement company", "Our attorneys are real lawyers. A cease letter from our firm carries legal authority, and if it's ignored, we have grounds to act."],
    ["We act on day one of enrollment", "The cease letter goes out immediately. You don't spend weeks waiting for relief."],
    ["We know payday lender tactics", "Threatening arrest, calling before 8 AM, contacting family, we know every tactic and exactly which ones violate the law."],
    ["Free consultation", "No cost to understand your rights and what we can do today."],
    ["Flexible payment plans", "Legal help that works with your financial situation."],
  ],

  commonProblems: [
    ["Calls before 8 AM or after 9 PM", "A federal violation under the FDCPA, regardless of what you owe or to whom.", "§ 1692c(a)(1)"],
    ["Threatening arrest for a debt", "Failing to repay a payday loan is a civil matter, not a criminal one. Arrest threats are illegal.", "§ 1692e(4),(5)"],
    ["Calling your employer", "Collectors cannot contact your workplace if they know your employer objects.", "§ 1692c(a)(3)"],
    ["Contacting family members", "Third-party contact is strictly limited. Collectors may not discuss your debt with others.", "§ 1692c(b)"],
    ["Continued calls after you've asked them to stop", "Once a cease request is made in writing, every call after is a standalone violation.", "§ 1692c(c)"],
    ["Threatening wage garnishment without a judgment", "Collectors cannot threaten legal actions they cannot yet take.", "§ 1692e(5)"],
  ],

  howItWorks: [
    ["Free consultation", "Tell us what's been happening. We review your situation and explain your rights at no cost.", "DAY 0"],
    ["Cease letter sent, day one", "Our attorneys send a formal cease-communication letter to the collector immediately upon enrollment.", "DAY 0"],
    ["Violations documented", "If contact continues after the cease letter, each instance is a potential $1,000 FDCPA lawsuit. We track every one.", "WEEK 1+"],
    ["Resolution", "We resolve the harassment and, where warranted, pursue legal claims against the collector, turning violations into recovery.", "ONGOING"],
  ],

  rights: {
    intro: "Payday loan collectors must follow strict federal rules. Most people being collected on don't know them.",
    items: [
      { cite: "FDCPA",             label: "FDCPA applies",            text: "The Fair Debt Collection Practices Act applies to third-party collectors pursuing payday loan debt and prohibits harassment, threats, and deception.", exLabel: "Right", ex: "Same federal protections that apply to other consumer debts apply here." },
      { cite: "§ 1692c(a)(1)",     label: "Calling hours",            text: "Collectors cannot call before 8 AM or after 9 PM in your local time zone.", exLabel: "Violation", ex: "A 7:14 AM call from a payday collector is its own violation." },
      { cite: "§ 1692c(c)",        label: "Cease request",            text: "Once you send a written cease request, all contact must stop. Each call after is a statutory violation.", exLabel: "Right", ex: "Send the cease letter. Contact must end except to confirm receipt or give notice of legal action." },
      { cite: "§ 1692e(4)",        label: "No arrest threats",        text: "Threatening arrest for an unpaid payday loan is illegal. Payday debt is a civil matter, not criminal.", exLabel: "Violation", ex: "'We will have you arrested' from any collector = federal violation." },
      { cite: "15 U.S.C. § 1693",  label: "EFTA / ACH revocation",    text: "The Electronic Funds Transfer Act gives you the right to revoke ACH authorization for automatic withdrawals from your bank account.", exLabel: "Right", ex: "Notify your bank in writing. The withdrawals must stop within 3 business days." },
      { cite: "State payday law",  label: "State-specific protections", text: "State laws may provide additional protections beyond the FDCPA, including rules that apply to the original payday lender, not just collectors.", exLabel: "Right", ex: "Some states cap rates. Some ban payday loans entirely. Some void loans that violate state law." },
    ],
  },

  whoHelps: [
    "Anyone receiving repeated or harassing calls from a payday lender or debt collector about a payday loan.",
    "People being threatened with arrest, wage seizure, or criminal consequences for an unpaid payday loan.",
    "Those being contacted at their workplace or through family members about payday loan debt.",
    "Anyone who has asked a collector to stop but keeps receiving calls.",
    "People who want the harassment to stop immediately while they evaluate their options on the underlying debt.",
  ],

  faq: [
    ["Does the FDCPA cover payday loan collectors?", "Yes, when a third-party debt collector is pursuing a payday loan debt, the FDCPA applies fully. Many payday lenders also fall under it, depending on how the operation is structured."],
    ["Can a payday lender threaten to have me arrested?", "No. Failing to repay a payday loan is a civil debt matter, not a criminal one. Any collector threatening arrest is violating the FDCPA, every instance is a documented violation."],
    ["Can I stop automatic withdrawals from my bank account?", "Yes. Under the Electronic Funds Transfer Act, you have the right to revoke the ACH authorization that allowed the lender to debit your account. Notify your bank in writing. The withdrawals must stop within 3 business days."],
    ["Will stopping the calls affect the debt itself?", "Stopping the calls is separate from the underlying debt. A cease letter halts contact; we then evaluate the underlying debt and advise on the best path forward, including whether the loan itself was legally valid in your state."],
    ["How much does this cost?", "Your consultation is free. We offer flexible payment plans, and in cases where we pursue FDCPA violations, attorney fees are recoverable from the collector if case is won, so pursuing the claim may cost you nothing out of pocket on that side."],
  ],

  bottomCta: {
    headline: "You shouldn't have to live under this pressure.",
    body: "Payday loan collectors are relentless by design. But federal law limits what they can do, and our attorneys enforce those limits.",
    cta: "Get a free case evaluation",
  },

  disclaimer: "This is attorney advertising. Prior results do not guarantee a similar outcome.",
};
