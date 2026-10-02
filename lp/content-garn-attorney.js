/* Credo Legal — Garnishment / Post-Judgment — "Fight Active Garnishment" angle.
   Source: live capture LP_PostJudgment-Garn_VarA_FightActive.md (2026-06-01).

   This is the FIRST GARNISHMENT-CLUSTER LP applied to the new design.
   Cluster-level shifts from Lawsuit:
   - Trust strip 'Court / Defense, not settlement only' → '25% / Federal
     garnishment cap' (15 U.S.C. § 1673) — concrete, vertical-specific.
   - situationOptions retuned for garnishment intent (threatened →
     ongoing → multiple → federal benefits → bank levy).
   - Citations lean on 15 U.S.C. § 1673, 31 C.F.R. § 212 (federal
     benefit protection), and state exemption rules.

   Per-LP deviations resolved:
   - Spacing bugs in HIW step 4 on live ('settle theunderlying debt',
     'another round ofenforcement') → fixed.
   - Voice violation in hero subhead → 'Real Attorneys' → 'Our
     Attorneys'.
   - Why Choose label-only bullets on live → expanded to label+body
     matching the cluster template.
   - Common Problems label-only bullets → expanded to label+body +
     citations. Count 5→6 (added 'Federal benefits being garnished'
     31 C.F.R. § 212).
   - Your Rights 5 → 6 (added 'Federal benefit protection' as 6th
     item, matching the synthesized Common Problem).
   - Bottom CTA was heading-only on live → added body matching the
     angle's reassurance + action framing.
   - State exclusion list includes NC. */
window.CREDO = {
  phone: "(720) 414-5055",
  phoneHref: "tel:+17204145055",
  cluster: "Garnishment",
  angle: "Post-Judgment. Fight active garnishment",
  statute: "Federal + state garnishment law",

  hero: {
    eyebrow: "Garnishment defense · Fight active garnishment",
    // "Garnished" gets red emphasis — it's the active state this LP responds to.
    h1: ["Is Your Paycheck Being ", "Garnished", "?"],
    lede: "Our Attorneys Can Challenge Their Claims and Fight for Your Paycheck.",
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

  // Cluster-specific trust strip — '25%' replaces 'Court' to surface
  // the federal garnishment cap as concrete educational anchor.
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
    headline: "We fight active garnishments.",
    intro: "At Credo Legal, we don't accept that a garnishment order is the end of the road. We fight to reduce or stop active garnishments, challenge improper judgments, and identify exemptions that protect your income.",
    bullets: [
      "File legal objections and motions to reduce or stop the active garnishment.",
      "Challenge whether the underlying debt is valid and properly enforceable.",
      "Identify exemptions that may protect a portion of your income.",
      "Hold creditors accountable for any procedural violations in the garnishment.",
    ],
  },

  // Live were label-only; bodies synthesized to match cluster template.
  whyChoose: [
    ["Attorney assistance from day one", "Licensed attorneys handle your case from the first conversation. No handoffs, no delays."],
    ["We file objections", "Motions to reduce or stop the garnishment, exemption claims, and procedural challenges go on the record promptly."],
    ["We challenge the validity of the underlying debt", "If the judgment behind the garnishment was improperly obtained or the debt itself is questionable, we attack the basis, not just the symptom."],
    ["We fight to reduce or stop what's being taken", "Federal cap is 25% of disposable income. State caps are often lower. Exemptions can reduce it further. We pursue every reduction the law allows."],
    ["Flexible payment plans", "Attorney-led defense structured around your budget, accessible even while a garnishment is hitting your paycheck."],
  ],

  // Live were label-only; bodies synthesized + 6th added (federal benefits)
  // to hit standard 6 count.
  commonProblems: [
    ["Garnishments taking the full 25% of your pay", "Federal law caps garnishment at 25% of disposable income, but state caps are often lower, and exemptions can reduce it further.", "15 U.S.C. § 1673"],
    ["Garnishments based on invalid or improperly obtained judgments", "If the underlying judgment was entered without proper service or based on a defective claim, the garnishment that follows is also vulnerable.", "FRCP 60(b)"],
    ["Cases where exemptions were never filed or applied", "Many people qualify for exemptions, head of household, low income, public benefits, and never claim them because no one told them.", "State exemption law"],
    ["Garnishments with procedural errors by the creditor", "Creditors and employers must follow strict procedure. Errors in notice, calculation, or filing can void the garnishment.", "State garnishment rules"],
    ["Multiple garnishments hitting the same paycheck", "Federal law limits how many active garnishments your employer can withhold from at once. We file to stop the stack.", "29 C.F.R. § 870"],
    // Synthesized 6th to hit std 6 + match cluster pattern.
    ["Federal benefits being garnished", "Social Security, VA benefits, and certain other federal income streams are legally protected from most garnishments. Marked accounts cannot be levied.", "31 C.F.R. § 212"],
  ],

  // Spacing bugs fixed in step 4 body.
  howItWorks: [
    ["Free consultation", "We review your active garnishment and identify every available option.", "DAY 0"],
    ["Debt investigation", "We examine the judgment and underlying debt for legal challenges.", "WEEK 1"],
    ["Legal representation", "We file motions and fight to reduce or stop the garnishment.", "WEEK 1–2"],
    ["Work towards debt resolution", "We negotiate, dispute, or settle the underlying debt so the judgment can't trigger another round of enforcement.", "ONGOING"],
  ],

  // Live 5 + 1 synthesized.
  rights: {
    intro: "Even after a garnishment order is in place, the law continues to protect you. Creditors and employers must follow strict rules.",
    items: [
      { cite: "15 U.S.C. § 1673",  label: "Federal 25% cap",         text: "Federal law caps garnishment at 25% of disposable income, and often less applies in practice.", exLabel: "Right", ex: "If more than 25% of your check is being taken, the calculation is wrong." },
      { cite: "State exemption law", label: "Exemptions",            text: "Exemptions you were never told about may reduce or eliminate what can be taken.", exLabel: "Right", ex: "Head of household, low income, public benefits, narrow but real protections vary by state." },
      { cite: "FRCP 60(b)",        label: "Improper judgment",       text: "A garnishment based on an improper judgment can be legally challenged and overturned.", exLabel: "Right", ex: "No valid service of the underlying lawsuit = grounds to vacate the judgment." },
      { cite: "Due process",        label: "Notice required",         text: "Creditors who garnished wages without proper notice may have violated your rights.", exLabel: "Violation", ex: "Garnishment initiated without notice or hearing = procedural defect." },
      { cite: "State garn rules",   label: "Right to a hearing",      text: "You have the right to contest an active garnishment and request a hearing at any time.", exLabel: "Right", ex: "Object. Request a hearing. Force the creditor to justify the amount." },
      // Synthesized 6th.
      { cite: "31 C.F.R. § 212",    label: "Federal benefit protection", text: "Social Security, VA benefits, and certain other federal income are legally protected from most garnishments.", exLabel: "Right", ex: "Marked accounts cannot be levied; protected funds must be released." },
    ],
  },

  whoHelps: [
    "People currently having wages deducted who want to fight back.",
    "Anyone who believes the garnishment amount is too high or incorrectly calculated.",
    "Those who never had the chance to claim exemptions they were entitled to.",
    "People whose garnishment is based on a debt they believe is invalid or inflated.",
    "Anyone who wants attorney-led defense even after a judgment has already been entered.",
  ],

  faq: [
    ["Can garnishment be stopped even after it's started?", "Yes. Active garnishment can be challenged through motions to reduce the amount, claims for applicable exemptions, or attacks on the underlying judgment."],
    ["What is a garnishment exemption and how do I know if I qualify?", "Exemptions are legal protections that reduce or eliminate the amount of your wages that can be garnished. They vary by state and circumstance, head of household, low income, federal benefits, and others."],
    ["Can the 25% cap be reduced further?", "Yes. State laws often set lower caps than the federal maximum, and exemptions can reduce the garnishable amount further. In some cases, the protected amount approaches the full paycheck."],
    ["What if my garnishment is based on a default judgment I didn't know about?", "Default judgments can sometimes be vacated, particularly if you weren't properly served with the original lawsuit. Vacating the judgment ends the garnishment that flows from it."],
    ["How much does this cost?", "Your consultation is free. We offer flexible payment plans and will explain every option before any commitment."],
  ],

  // Live was heading-only; body synthesized to match cluster template.
  bottomCta: {
    headline: "Active garnishment isn't the end. Get help today.",
    body: "Our attorneys file the motions, raise the exemptions, and challenge the judgment that put the garnishment in place. Find out what we can do for your situation, for free.",
    cta: "Get a free case evaluation",
  },

  disclaimer: "This is attorney advertising. Prior results do not guarantee a similar outcome.",
};
