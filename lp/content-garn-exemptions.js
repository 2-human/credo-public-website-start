/* Credo Legal — Garnishment / Post-Judgment — "Exemptions" angle.
   Source: live capture LP_PostJudgment-Garn_VarB_Exemptions.md (2026-06-01).

   Sibling of /wage-garnishment-attorney (URL #13, Var A Fight Active)
   in the Post-Judgment Garn ad group: same phone (720) 414-1751,
   different framing. This LP narrows specifically to exemptions
   (head of household, federal benefits, low income); the sibling is
   general "fight the garnishment".

   Per-LP deviations resolved (heaviest synthesis of any LP so far):
   - Why Choose label-only bullets on live → expanded to label+body
     matching cluster template.
   - Common Problems label-only bullets on live → expanded to
     label+body + citations. Count 5→6 (added 'Improperly calculated
     disposable income' 15 U.S.C. § 1672(b)).
   - HIW step 4 concatenated on live ('Work Towards Debt Resolution.
     Reduce the amount being taken, or stop it entirely') → split
     into label + body.
   - Your Rights 5 → 6 (added 'Retroactive exemption filing' as 6th
     matching the angle).
   - FAQ 4 → 5 (added 'Are exemptions automatic?' matching cluster
     pattern about retroactivity).
   - Bottom CTA was heading-only on live → added body matching the
     angle's 'you may not know you qualify' framing.

   Universal voice fixes (3 instances on this LP):
   - Hero subhead: 'Real Attorneys Can Help' → 'Our Attorneys Can Help'
   - Why Choose b4 label: 'Real Attorneys Review Your Full Case' →
     'Our Attorneys Review Your Full Case'
   - FAQ last item body: 'real attorney help is affordable' → 'attorney
     help is affordable'
   - State exclusion list includes NC. */
window.CREDO = {
  phone: "(720) 414-5055",
  phoneHref: "tel:+17204145055",
  cluster: "Garnishment",
  angle: "Post-Judgment. Exemptions",
  statute: "Federal + state garnishment law",

  hero: {
    eyebrow: "Garnishment defense · Claim your exemptions",
    // Sibling H1 to URL #13. Different emphasis: VarA used "Garnished"
    // (the active state); VarB uses "Already" (the after-the-fact angle).
    h1: ["Paycheck ", "Already", " Garnished?"],
    lede: "You May Qualify for Exemptions. Our Attorneys Can Help.",
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
    headline: "We claim every exemption that protects you.",
    intro: "At Credo Legal, we dig into the exemptions that can protect your income, and file the claims that put the protections in place.",
    bullets: [
      "Identify every exemption that applies to your income and household situation.",
      "File exemption claims with the court on your behalf.",
      "Challenge whether the underlying debt is valid and enforceable.",
      "Fight to reduce the garnishment amount, or stop it entirely.",
    ],
  },

  // Bodies synthesized (live were label-only).
  whyChoose: [
    ["Attorney assistance from day one", "Licensed attorneys handle your case from the first conversation. No handoffs, no delays."],
    ["We file exemption claims", "Court filings to claim head of household, low income, federal benefits, and any other exemption that applies to your situation."],
    ["We know which exemptions apply to your situation", "Every state has its own exemption rules. We know which ones apply, how to document them, and how to get them granted by the court."],
    // Voice fix on label.
    ["Our attorneys review your full case", "Licensed attorneys examine the garnishment order, the judgment behind it, and your income situation to identify every protection available."],
    ["Flexible payment plans", "Attorney-led defense structured around your budget, accessible even while a garnishment is hitting your paycheck."],
  ],

  // Bodies synthesized + 6th added (live were label-only, 5 entries).
  commonProblems: [
    ["Head of household income protection", "Many states substantially reduce or eliminate garnishment for primary household earners. Documenting head-of-household status is the unlock.", "State exemption law"],
    ["Low-income wage exemptions", "Some states protect wages below a threshold (often tied to federal poverty level or minimum wage) from garnishment entirely.", "State exemption law"],
    ["Social Security, disability, and federal benefit income", "Federal benefits are categorically protected from garnishment by most creditors. Bank accounts holding marked federal-benefit deposits are off-limits to levy.", "31 C.F.R. § 212"],
    ["Cases where exemptions were never filed or applied", "Most people never claim exemptions they qualify for because no one told them. Filing late is usually possible if action is prompt.", "State exemption law"],
    ["Garnishments that are exceeding legal limits", "Federal cap is 25% of disposable income, state caps are often lower. Mathematically excessive garnishments are correctable.", "15 U.S.C. § 1673"],
    // Synthesized 6th matching the exemptions angle.
    ["Improperly calculated 'disposable income'", "Employers sometimes garnish from gross pay instead of disposable pay (after taxes + mandatory deductions). The garnishable amount can be far less than what's being taken.", "15 U.S.C. § 1672(b)"],
  ],

  // HIW step 4 split from concatenated string.
  howItWorks: [
    ["Free consultation", "We review your active garnishment and identify every applicable exemption.", "DAY 0"],
    ["Debt investigation", "We check the underlying debt and garnishment order for additional challenges.", "WEEK 1"],
    ["Legal representation", "We file exemption claims and any other applicable motions.", "WEEK 1–2"],
    // Label + body separated.
    ["Work towards debt resolution", "Once exemptions are in place, we work to reduce the amount being taken, or stop the garnishment entirely, by addressing the underlying debt.", "ONGOING"],
  ],

  // Live 5 + 1 synthesized.
  rights: {
    intro: "Federal and state law provide specific exemptions that can protect your income from garnishment. These are not automatic, you have to claim them.",
    items: [
      { cite: "State exemption law",  label: "Head of household",        text: "Head of household status can significantly reduce or eliminate garnishment in many states.", exLabel: "Right", ex: "In some states, head of household = full protection. Documentation is the unlock." },
      { cite: "31 C.F.R. § 212",      label: "Federal benefit protection", text: "Social Security, disability, and most federal benefit income cannot be garnished by most creditors.", exLabel: "Right", ex: "Marked federal-benefit accounts cannot be levied. Protected funds must be released." },
      { cite: "State exemption law",  label: "Low-income exemption",     text: "Low-income earners may qualify for complete exemption from wage garnishment.", exLabel: "Right", ex: "Wages below the state threshold may be fully exempt." },
      { cite: "15 U.S.C. § 1673",     label: "Federal 25% cap",          text: "Federal law caps garnishment at 25% of disposable income, and many people qualify for less.", exLabel: "Right", ex: "If more than 25% of disposable pay is being taken, the calculation is wrong." },
      { cite: "FDCPA § 1692f",        label: "Accountability for garnishing exempt income", text: "A creditor who garnishes exempt income can be held legally accountable.", exLabel: "Violation", ex: "Garnishing protected Social Security or VA benefits = grounds for a separate claim." },
      // Synthesized 6th.
      { cite: "State exemption law",  label: "Retroactive exemption filing", text: "You can claim exemptions even after a garnishment has started. There is no requirement to have claimed them at the outset.", exLabel: "Right", ex: "Garnishment running for months without exemption claim? File now, get protection going forward, sometimes refund of past." },
    ],
  },

  whoHelps: [
    "People currently having wages garnished who haven't yet claimed exemptions.",
    "Anyone who is the head of their household or primary income earner.",
    "Those receiving any form of federal or state benefit income alongside their wages.",
    "People with lower incomes who may qualify for full exemption from garnishment.",
    "Anyone who wants to know whether they are being over-garnished.",
  ],

  // Live 4 + 1 synthesized to hit std 5.
  faq: [
    ["How do I know if I qualify for an exemption?", "Exemptions vary by state and depend on factors like your income level, household status, and the type of income you receive. The first conversation tells you which ones apply."],
    ["If an exemption applies, does the garnishment stop immediately?", "Once an exemption claim is filed and granted by the court, the garnishment must be adjusted or stopped accordingly. Timing depends on how quickly the court rules."],
    ["Can exemptions be claimed after a garnishment has already started?", "Yes. Exemptions can be claimed at any point during an active garnishment. If you were never informed of available exemptions, you may still be able to claim them now."],
    // Synthesized 5th — addresses the angle's core misconception.
    ["Are exemptions automatic?", "No, exemptions must be claimed. The court does not apply them on its own. That's why so many people qualify but never get the protection."],
    // Voice fix in body.
    ["How much does this cost?", "Your first case evaluation is completely free. We offer flexible payment plans so attorney help is affordable."],
  ],

  // Body synthesized (live was heading-only).
  bottomCta: {
    headline: "You may be entitled to more protection than you know. Find out today.",
    body: "Most people who qualify for exemptions never claim them, and never know they did. Our attorneys file the claims, document the qualifications, and put the protections in place. Find out what you're entitled to, for free.",
    cta: "Get a free case evaluation",
  },

  disclaimer: "This is attorney advertising. Prior results do not guarantee a similar outcome.",
};
