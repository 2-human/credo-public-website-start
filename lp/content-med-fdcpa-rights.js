/* Credo Legal — Medical Debt / Rights — "Education" angle (Var A).
   Phone (347) 744-9014 (Medical Rights default). Sibling of Credit Report
   Removal LP (URL #23). WWD had 3 bullets on live (std 4) → synth 4th.
   Voice ×2. */
window.CREDO = {
  phone: "(801) 386-9050", phoneHref: "tel:+18013869050",
  cluster: "Medical Debt", angle: "Rights. Education",
  statute: "FDCPA + FCRA + No Surprises Act + CFPB",

  hero: {
    eyebrow: "Medical debt · Know your rights",
    h1: ["Confused About Your Medical ", "Debt", "?"],
    lede: "Our Attorneys Can Help You Know Your Rights and Act.",
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
      "Researching options before acting",
      "Recent collection notice received",
      "Confused about whether I actually owe it",
      "Worried about credit report damage",
      "Surprise out-of-network bill",
      "Insurance dispute or denial",
    ],
    submit: "Get a free case evaluation",
    stateExclusion: "We currently do not service DC, DE, ID, NC, OK, WV, or WY.",
  },

  trust: [
    { n: "44", lbl: "States with licensed attorneys" },
    { n: "$0", lbl: "Cost of your consultation" },
    { n: "FCRA", lbl: "Credit-report cleanup" },
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

  // WWD live had only 3 bullets; synthesized 4th to match standard.
  whatWeDo: {
    headline: "Medical debt has rules. We explain them first.",
    intro: "At Credo Legal, we start with education. Before recommending any course of action, our attorneys review the rules that govern your specific medical debt and explain exactly where your situation stands.",
    bullets: [
      "Break down the rules that apply to medical debt in plain English: FDCPA for collector conduct, FCRA for credit reporting, federal surprise billing laws.",
      "Review the bill, the collector contacts, and your credit report side by side, flag every likely FDCPA or FCRA violation.",
      "Recommend the specific next step: validation dispute, cease letter, credit-report removal, bill challenge, or another approach.",
      // Synthesized 4th matching the cluster pattern.
      "Carry out the path you choose, with attorneys handling every letter, filing, and follow-up.",
    ],
  },

  whyChoose: [
    ["Licensed attorneys, legal advice, not just information", "We don't hand you a brochure. We review your specific situation and give you direct legal guidance."],
    ["We explain before we act", "You'll understand your options clearly before we recommend anything."],
    ["FDCPA knowledge", "We know what collectors can and can't do, and we explain where your situation falls."],
    ["Free consultation", "No cost to know where you stand and what's possible."],
    ["Flexible payment plans", "If you decide to move forward, legal help fits your budget."],
  ],

  commonProblems: [
    ["Not knowing whether the debt is actually valid", "Medical bills are complex. You may owe less than claimed, or nothing at all.", "FDCPA § 1692g"],
    ["Unsure what collectors are allowed to do", "There are strict rules, most people don't know where the legal lines are.", "FDCPA"],
    ["Confused about what happens if you ignore it", "Doing nothing has real consequences. Knowing them helps you make better decisions.", "FRCP 55"],
    ["Worried about credit report damage", "Medical debt has specific, changing rules on credit reporting that many people aren't aware of.", "FCRA + CFPB"],
    ["Receiving conflicting information from collectors", "Collectors aren't required to explain your rights. Attorneys are.", "FDCPA § 1692e"],
    ["Unsure whether to pay, negotiate, or dispute", "Each option has different legal and financial implications. You should know all three before choosing.", "Legal counsel"],
  ],

  howItWorks: [
    ["Free consultation", "Tell us what's happening. We review your situation and explain your rights at no cost, no pressure.", "DAY 0"],
    ["Case review", "Our attorneys examine the debt, the collector's conduct, and the full range of your options.", "WEEK 1"],
    ["Recommendation", "We outline the best path forward based on your specific situation: cease letter, debt challenge, negotiation, or another approach.", "WEEK 1–2"],
    ["Action", "If you choose to move forward, we handle it, from cease letters to court filings to settlement negotiation.", "ONGOING"],
  ],

  rights: {
    intro: "Medical debt is governed by more federal law than most people realize.",
    items: [
      { cite: "FDCPA",             label: "Anti-harassment",         text: "The Fair Debt Collection Practices Act prohibits collectors from harassment, deception, and unfair practices.", exLabel: "Right", ex: "Same federal protections that apply to other consumer debts apply here." },
      { cite: "FDCPA § 1692g",     label: "Validation right",        text: "You have the right to request written verification of any debt before paying or responding.", exLabel: "Right", ex: "Send a validation request. Collection activity pauses until they respond." },
      { cite: "FCRA § 611",        label: "FCRA disputes",           text: "The Fair Credit Reporting Act gives you the right to dispute inaccurate medical debt on your credit report.", exLabel: "Right", ex: "Inaccurate, outdated, or unverifiable = grounds for removal." },
      { cite: "No Surprises Act",  label: "Surprise-billing limits", text: "Federal surprise billing laws regulate what providers can charge you after the fact for out-of-network care.", exLabel: "Right", ex: "Out-of-network emergency or unannounced provider = protected." },
      { cite: "CFPB rules",        label: "Medical-debt restrictions", text: "Recent CFPB guidance has removed certain medical debts from credit reports entirely, yours may qualify.", exLabel: "Right", ex: "Paid debt under $500 and debt < 12 months old now excluded from reports." },
      { cite: "FDCPA § 1692e(5)",  label: "No false threats",        text: "Collectors cannot threaten legal actions they cannot legally or actually take.", exLabel: "Violation", ex: "'We'll have your wages garnished tomorrow' before any judgment = violation." },
    ],
  },

  whoHelps: [
    "People doing research before deciding what to do about a medical debt.",
    "Those who received a collection notice and aren't sure whether to pay, dispute, or ignore it.",
    "Anyone confused about what debt collectors are and aren't allowed to do under federal law.",
    "Patients who've received conflicting information from collectors, hospitals, or insurance companies.",
    "People who want to understand all their legal options before committing to any action.",
    "Anyone who suspects they may owe less, or nothing, but aren't sure how to find out.",
  ],

  faq: [
    ["What federal laws protect me from medical debt collectors?", "The Fair Debt Collection Practices Act (FDCPA) governs how collectors can contact you and what they can say. The Fair Credit Reporting Act (FCRA) governs how debts can be reported. The No Surprises Act limits surprise out-of-network bills."],
    ["Do I have to pay a medical debt that's already in collections?", "Not automatically. Collections don't validate the debt. You have the right to request verification, dispute inaccuracies, and challenge the underlying bill."],
    ["What happens if I do nothing about a medical debt?", "Ignoring it doesn't make it disappear. Collectors can escalate to lawsuits, which can result in default judgments and wage garnishment."],
    ["Can an attorney really help with something like a hospital bill?", "Yes. Medical billing is legally complex, and an attorney can evaluate things a non-attorney can't, including surprise-billing law claims, FCRA disputes, and FDCPA violations."],
    ["How much does this cost?", "Your consultation is free. We offer flexible payment plans, and we'll walk you through every option before any commitment."],
  ],

  bottomCta: {
    headline: "Know your rights before you make any decisions.",
    body: "The decision to pay, dispute, or fight a medical debt is easier, and smarter, when you know the full picture.",
    cta: "Get a free case evaluation",
  },

  disclaimer: "This is attorney advertising. Prior results do not guarantee a similar outcome.",
};
