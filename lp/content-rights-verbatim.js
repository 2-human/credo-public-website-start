/* Credo Legal — FDCPA Harassment / Rights Education ("Know Your FDCPA Rights")
   VERBATIM live copy from https://start.credolegal.com/debt-harassment-fdcpa-rights.
   Source: LP_Harassment-FDCPA_VarA_Education.md (captured 2026-06-01).
   Performance: Harassment cluster CHAMPION — 33.5 conv, 7% CTR.

   Differs from the original prototype's content.js, which carries the Action 6
   rewrite ("Make the collection calls stop. Legally."). This file is for the
   verbatim live-copy A/B comparison approved 2026-06-23.

   Universal fixes applied:
   - "Real Attorneys" → "Our Attorneys" voice fix (2 instances in hero;
     none observed in body sections of this LP).
   - State exclusion list includes NC (Action 1).

   Design enhancements applied per 2026-06-23 socratic decisions:
   - Common Problems gains FDCPA § citations per bullet
   - How It Works gains time markers (DAY 0 → ONGOING)
   - Your Rights bullets promoted to structured items (cite + label +
     body + violation/right/remedy example)
   - Trust strip = prototype's compliance-safe credentials. */
window.CREDO = {
  phone: "(612) 256-8820",
  phoneHref: "tel:+16122568820",
  cluster: "Harassment",
  angle: "Rights education (verbatim)",
  statute: "FDCPA",

  hero: {
    eyebrow: "FDCPA · Know your rights",
    // Live H1 with "Real" voice fix: "Real Attorneys Can Explain Your Rights and Act."
    // → "Our Attorneys Can Explain Your Rights and Act." with "Rights" in red.
    // 2026-06-30 (milos, h1-1): widened red emphasis to "Your Rights".
    h1: ["Our Attorneys Can Explain ", "Your Rights", " and Act."],
    // Live subhead with "Real" voice fix.
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

  // Trust strip: prototype's compliance-safe credentials retained.
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
  // 2026-06-30 (Sona meta-instruction, span-12 on rights-verbatim): mirror the
  // metric swap applied to content-attorney.js. Numbers confirmed correct by
  // team@2-human.com 2026-06-30. Other Sona edits on the attorney LP didn't
  // apply here (different verbatim copy in WhatWeDo / WhyChoose / HowItWorks
  // / FAQ — the rights-verbatim wording stays distinct).
  metrics: [
    ["10 million+", "In debt wiped"],
    ["500k", "Debts settled every month"],
  ],

  // ---- WHAT WE DO — live copy, verbatim ----
  whatWeDo: {
    headline: "Education first. Then enforcement.",
    intro: "At Credo Legal, we start with education, because knowing your rights is the first form of protection.",
    bullets: [
      "Break down the FDCPA in plain English: what collectors can do, what they can't do, and where the line is.",
      "Review the calls, letters, and contacts you've received and flag every likely violation.",
      "Recommend the specific next step: cease letter, validation dispute, legal action, or a combination.",
      "Carry out the path you choose, with attorneys handling every filing and response.",
    ],
  },

  // ---- WHY CHOOSE — live copy, verbatim ----
  whyChoose: [
    ["Licensed attorneys, legal advice, not just information", "We don't hand you a fact sheet. We review your specific situation and tell you where you stand."],
    ["We know the FDCPA inside out", "Proven track record. \"Know Your FDCPA Rights\" has driven thousands of consultations because the need is real."],
    ["We explain before we act", "You'll understand your options clearly before we recommend anything or ask you to commit."],
    ["Free consultation", "No cost to know whether collectors have violated your rights."],
    ["Flexible payment plans", "If you decide to move forward, legal help is structured around your budget."],
  ],

  // ---- COMMON PROBLEMS — live copy + statute § tags (verified against
  //      15 U.S.C. § 1692 per 2026-06-23 design decision) ----
  commonProblems: [
    ["Collectors calling at illegal hours", "Before 8 AM or after 9 PM is prohibited by federal law.", "§ 1692c(a)(1)"],
    ["Contact at your workplace", "Collectors cannot call where you work if they know your employer objects.", "§ 1692c(a)(3)"],
    ["Reaching out to family or friends", "Third-party contact is strictly limited under the FDCPA.", "§ 1692c(b)"],
    ["Threatening arrest or criminal consequences", "Debt is a civil matter. Arrest threats from collectors are illegal.", "§ 1692e(4)"],
    ["Claiming to be attorneys or government officials", "Misrepresentation of identity is a federal violation.", "§ 1692e(1),(3)"],
    ["Refusing to verify the debt", "Collectors must provide written verification when you request it. Refusing is a violation.", "§ 1692g(b)"],
  ],

  // ---- HOW IT WORKS — live copy + time markers ----
  howItWorks: [
    ["Free consultation", "Tell us what collectors have been doing. We explain your FDCPA rights and whether they've been violated.", "DAY 0"],
    ["Case review", "Our attorneys examine the collector's conduct against the specific requirements of the FDCPA.", "WEEK 1"],
    ["Recommendation", "We outline your options clearly: cease letter, formal complaint, legal claim, or a combination.", "WEEK 1–2"],
    ["Action", "If you choose to move forward, we handle everything, from stopping the calls to pursuing violations.", "ONGOING"],
  ],

  // ---- YOUR RIGHTS — live bullets promoted to structured items.
  //      Body text from live capture; cites + violation/right/remedy
  //      examples added from 15 U.S.C. § 1692. ----
  rights: {
    intro: "The Fair Debt Collection Practices Act creates specific, enforceable rules that collectors must follow.",
    items: [
      { cite: "§ 1692c(a)(1)", label: "Calling hours",         text: "Collectors cannot call before 8 AM or after 9 PM in your local time zone.", exLabel: "Violation", ex: "A 7:14 AM call to discuss a balance is a documented breach." },
      { cite: "§ 1692c(a)(3)", label: "Workplace contact",     text: "Collectors cannot contact you at work if they know your employer prohibits it.", exLabel: "Violation", ex: "Your employer told them to stop. They called you at work anyway." },
      { cite: "§ 1692g",       label: "Validation right",      text: "You can demand written verification of any debt. Collectors must stop collection activity until they provide it.", exLabel: "Right", ex: "Send a validation request. Collection pauses until they respond in writing." },
      { cite: "§ 1692d",       label: "Harassment ban",        text: "Collectors cannot use abusive, obscene, or threatening language under any circumstances.", exLabel: "Violation", ex: "Profane voicemails. Repeated calls intended to annoy." },
      { cite: "§ 1692e",       label: "False representations", text: "Collectors cannot make false representations, including claiming to be attorneys, police, or government officials.", exLabel: "Violation", ex: "A caller says they're a “process server” or threatens a “warrant.”" },
      { cite: "§ 1692k",       label: "Damages + fee-shifting", text: "Each lawsuit can result in up to $1,000 in statutory damages, plus attorney fees paid by the collector.", exLabel: "Remedy", ex: "$1,000 in statutory damages. Fees recoverable from the collector." },
    ],
  },

  // ---- WHO HELPS — live copy, verbatim ----
  whoHelps: [
    "Anyone currently being contacted by a debt collector and unsure what the rules are.",
    "People who suspect collectors have crossed a legal line but aren't certain.",
    "Those doing research before deciding how to respond to collection activity.",
    "Anyone who wants to understand all their legal options before taking any action.",
    "People who've been threatened, misled, or pressured by collectors and want to know if it was legal.",
  ],

  // ---- FAQ — live copy, verbatim ----
  faq: [
    ["What is the FDCPA and does it apply to me?", "The Fair Debt Collection Practices Act is a federal law that regulates how third-party debt collectors can contact and treat you."],
    ["What are the most common FDCPA violations?", "Calling at illegal hours, contacting your employer or family, threatening arrest, using abusive language."],
    ["Do I have to prove I was harmed to have an FDCPA claim?", "No. The FDCPA creates liability for violations themselves, not just for proven harm. If a collector violates the statute, you have a claim."],
    ["What if I'm not sure whether my collector broke the law?", "That's exactly what the free consultation is for. You tell us what happened, we tell you whether it was a violation."],
    ["How much does this cost?", "Your consultation is free. We offer flexible payment plans, and FDCPA attorney fees are recoverable from the collector if your claim succeeds."],
  ],

  // ---- BOTTOM CTA — live copy, verbatim ----
  bottomCta: {
    headline: "Know your rights before you make any decisions.",
    body: "Collectors count on you not knowing the rules. Our attorneys do, and a free consultation puts that knowledge in your hands.",
    cta: "Get a free case evaluation",
  },

  disclaimer: "This is attorney advertising. Prior results do not guarantee a similar outcome.",
};
