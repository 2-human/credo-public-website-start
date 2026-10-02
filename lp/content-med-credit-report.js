/* Credo Legal — Medical Debt — "Debt validation: do you owe it?" angle.
   Repurposed 2026-07 from the former "Credit Report Removal" angle per Sona's
   review comment (Credo does not do credit-report corrections). New angle:
   challenge whether the medical debt is valid/documented at all (FDCPA § 1692g
   validation). Phone (801) 386-9050 (Meta tracking, Medical cluster).
   NOTE: the live start.credolegal.com/medical-debt-credit-report-removal LP and
   the Medical_Rights Meta ad point here and need the same repurpose/repoint. */
window.CREDO = {
  phone: "(801) 386-9050", phoneHref: "tel:+18013869050",
  cluster: "Medical Debt", angle: "Debt validation — do you owe it?",
  statute: "FDCPA § 1692g validation + medical billing rules",

  hero: {
    eyebrow: "Medical debt · Do you really owe it?",
    h1: ["Chased for Medical Debt You ", "Don't Recognize", "?"],
    lede: "Make them prove it — our attorneys challenge whether you owe the debt at all, and how much.",
    filler: "Fill in the form below or call us for a free review of your case.",
  },

  form: {
    steps: [
      { key: "debt", label: "Your debt", n: "01" },
      { key: "situation", label: "Your situation", n: "02" },
      { key: "details", label: "Your details", n: "03" },
    ],
    debtQuestion: "How much are you being told you owe in total?",
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
      "A collector is demanding payment",
      "I already paid, or insurance should have",
      "I don't recognize this medical debt",
      "The amount looks wrong or inflated",
      "Billed before insurance was applied",
      "They can't show what I actually owe",
    ],
    submit: "Get a free case evaluation",
    stateExclusion: "We currently do not service DC, DE, ID, NC, OK, WV, or WY.",
  },

  trust: [
    { n: "44", lbl: "States with licensed attorneys" },
    { n: "$0", lbl: "Cost of your consultation" },
    { n: "§1692g", lbl: "Debt-validation law" },
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
    headline: "A collector says you owe it. Can they prove it?",
    intro: "At Credo Legal, we don't take a collector's word for what you owe. We demand they validate the debt, examine the billing and paperwork, and challenge anything they can't prove.",
    bullets: [
      "Demand written validation of the debt — under the FDCPA the collector must show you actually owe it, and how much.",
      "Examine the itemized bill, insurance, and chain of ownership for errors, duplicate charges, or amounts insurance should have covered.",
      "Flag debts the collector can't properly document — unverified, misassigned, or inflated balances are grounds to dispute.",
      "Push back on your behalf, attorneys handling every letter and demand until the debt is validated, corrected, or dropped.",
    ],
  },

  whyChoose: [
    ["Licensed attorneys. FDCPA validation", "Attorney-backed validation demands carry more weight than a consumer-filed letter alone."],
    ["Medical billing is error-prone", "Surprise bills, insurance mistakes, and duplicate charges are common, we know where to look."],
    ["We make them prove it", "If a collector can't document the debt, they may not be able to collect it."],
    ["Free consultation", "Find out whether the debt is valid and what you actually owe, at no cost."],
    ["Flexible payment plans", "Legal help that fits your budget."],
  ],

  commonProblems: [
    ["A collector you've never heard of", "Medical debts are sold and resold; the collector calling may not be able to prove they own it.", "FDCPA § 1692g"],
    ["A bill your insurance should have paid", "Debts sometimes go to collections before insurance is applied, or after it was wrongly denied.", "Billing error"],
    ["An amount that doesn't add up", "Itemized medical charges are often inflated, duplicated, or miscoded.", "FDCPA § 1692e"],
    ["A debt you don't recognize at all", "Old hospital or specialist bills can surface years later, sometimes misassigned to the wrong person.", "FDCPA § 1692g"],
    ["Duplicate collections for the same bill", "The same debt pursued by multiple collection agencies at the same time.", "FDCPA § 1692e"],
    ["No proof when you ask for it", "If you dispute and the collector can't validate, they must stop collecting until they do.", "FDCPA § 1692g"],
  ],

  howItWorks: [
    ["Free consultation", "Tell us about the debt and the collector. We review it at no cost.", "DAY 0"],
    ["Validation demanded", "We send a formal validation demand, the collector must prove you owe it, and how much.", "WEEK 1"],
    ["Debt examined", "Our attorneys review the documentation, billing, and insurance for anything they can't prove.", "WEEK 1–2"],
    ["Resolution", "Debts they can't validate are challenged and often dropped. The rest we work to reduce or resolve.", "ONGOING"],
  ],

  rights: {
    intro: "Federal law puts the burden on the collector to prove a debt, and gives you tools to make them.",
    items: [
      { cite: "FDCPA § 1692g", label: "Right to validation",       text: "Within 30 days of first contact you can demand written proof of the debt. The collector must verify it or stop collecting.", exLabel: "Right", ex: "No validation = they must cease collection until they provide it." },
      { cite: "FDCPA § 1692g", label: "Right to dispute",          text: "You can dispute all or part of a medical debt in writing. The collector must verify before continuing.", exLabel: "Right", ex: "Dispute the amount, the ownership, or the debt itself." },
      { cite: "FDCPA § 1692e", label: "Ban on false amounts",      text: "Collectors may not misrepresent the amount, status, or legal character of a debt.", exLabel: "Violation", ex: "Inflated or duplicated charges = grounds to challenge." },
      { cite: "FDCPA § 1692f", label: "Ban on unfair collection",  text: "Collecting an amount not authorized by the agreement or permitted by law is prohibited.", exLabel: "Violation", ex: "Charges above what you actually owe." },
      { cite: "FDCPA § 1692g", label: "The burden is on them",     text: "It is the collector's job to prove the debt, not yours to disprove it.", exLabel: "Right", ex: "Unverified medical debt is challengeable." },
      { cite: "FDCPA § 1692k", label: "Damages for violations",    text: "Collectors who break these rules may be liable for statutory damages plus attorney fees.", exLabel: "Remedy", ex: "Willful violation = statutory damages + fees." },
    ],
  },

  whoHelps: [
    "Anyone being contacted about a medical debt they don't recognize.",
    "People billed for charges their insurance should have covered.",
    "Those whose medical bill amount looks inflated, duplicated, or wrong.",
    "Anyone a collector can't, or won't, provide proof of the debt to.",
    "People contacted by a collection agency they've never dealt with before.",
    "Anyone who wants to know whether they actually owe a medical debt before paying it.",
  ],

  faq: [
    ["Do I have to pay a medical debt if the collector can't prove it?", "Not necessarily. Under the FDCPA you can demand validation. If the collector can't verify the debt, they must stop collecting until they do."],
    ["What does 'validating' a medical debt mean?", "The collector must show you actually owe the debt, who they are, and the correct amount, with documentation. Medical billing is complex, and often that proof is incomplete."],
    ["The bill is in my name but I don't recognize it. What can I do?", "You can dispute it. Medical debts are sold and resold and are sometimes misassigned. We can demand proof and challenge it."],
    ["My insurance was supposed to cover this. Does that matter?", "Yes. Debts that go to collections before insurance is applied, or after a wrongful denial, may not be valid as billed."],
    ["How much does this cost?", "Your consultation is free. We offer flexible payment plans, and we'll walk you through every option before any commitment."],
  ],

  bottomCta: {
    headline: "Before you pay, make them prove it.",
    body: "A collector calling about a medical debt has to show you actually owe it. Our attorneys demand validation and challenge what they can't prove.",
    cta: "Get a free case evaluation",
  },

  disclaimer: "This is attorney advertising. Prior results do not guarantee a similar outcome.",
};
