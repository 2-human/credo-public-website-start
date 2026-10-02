/* Credo Legal — Lawsuit / Served_Papers — "Act Now / Immediate Action" angle.
   Source: live capture LP_Lawsuit-ServedPapers_VarA_ActNow.md (2026-06-01).

   Sibling of /debt-lawsuit-options (URL #9, Served_Papers Var B
   Reassurance) in the Served_Papers ad group: same phone (347) 523-4662,
   different framing + lede + Bottom CTA. This LP is urgent/aggressive
   ("Act Today"); the sibling is calming/explanatory ("One Free
   Conversation").

   Per-LP deviations resolved:
   - Subhead typo on live: "Repond" → "Respond" (May action item).
   - WRONG FAQ #1 content: live page's first FAQ ("What exactly happens
     if I do not respond to the court papers?") has an answer copy-
     pasted from an FDCPA cease-letter LP — wrong context entirely.
     Fixed here with a correct default-judgment answer that matches
     the question.
   - Common Problems 5 → 6: synthesized 6th 'Wage garnishment and
     asset seizure after default' (15 U.S.C. § 1673 + state levy
     rules) — same consequence-chain logic as the URL #11 champion.

   Universal voice fixes (4 instances on this LP):
   - Hero subhead: 'Real Attorneys' → 'Our Attorneys'.
   - WWD bullet 5: 'real attorneys, not salespeople' → 'our attorneys,
     not salespeople'.
   - Why Choose b2 label: 'Real Attorneys' → 'Our Attorneys'.
   - Why Choose b2 body: 'Real legal authority' → 'Real legal
     authority' (kept — 'real' as adjective is fine; only the
     pronoun substitution rule applies).
   - State exclusion list includes NC. */
window.CREDO = {
  phone: "(718) 521-4060",
  phoneHref: "tel:+17185214060",
  cluster: "Lawsuit",
  angle: "Served_Papers. Act today",
  statute: "Civil procedure / FDCPA",

  hero: {
    eyebrow: "Lawsuit defense · Act today",
    // "Served" gets red emphasis — names the triggering event.
    h1: ["You've Been ", "Served", " Papers?"],
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
    headline: "Just served? We move immediately.",
    intro: "At Credo Legal, when you have just been served, speed is everything. We review your court papers immediately and respond before the deadline runs out.",
    bullets: [
      "Read and assess your court papers on the day you enroll.",
      "File your legal answer before the response deadline closes.",
      "Identify and raise every valid defense, including debt validity and documentation gaps.",
      "Protect you from an automatic default judgment and its consequences.",
      "Represent you through the case with our attorneys, not salespeople.",
    ],
  },

  whyChoose: [
    ["We act the day you call", "There is no time to wait. We read your papers and begin building your response immediately, the same day."],
    ["Our attorneys", "Your case is handled by licensed lawyers, not settlement negotiators. Real legal authority from the start."],
    ["We file before the deadline", "Filing a timely response is the single most important step. We have done it thousands of times and know how."],
    ["We challenge the debt before responding", "Before we file, we examine the claim for errors, inflated amounts, missing documentation, and anything contestable."],
    ["Flexible payment plans", "Urgent legal help does not have to break you financially. We structure our fees around what you can afford."],
  ],

  commonProblems: [
    ["No response filed, default judgment entered", "The most common and most preventable outcome. The collector wins automatically the moment the deadline passes.", "FRCP 55"],
    ["Deadline already close or passed", "Courts rarely grant extensions. If the window is closing fast, every hour matters. If it has already passed, prompt action may still help.", "FRCP 60(b)"],
    ["Papers not fully understood", "Most people served with a lawsuit do not know what the documents mean, what they are required to do, or when.", "Civil right"],
    ["Debt amount is wrong", "Many collection lawsuits include inflated balances, added fees, or duplicate charges. The figure being claimed is often disputable.", "FDCPA § 1692e(2)"],
    ["Debt already sold multiple times", "If the debt changed hands, the collector suing you may not have complete documentation. That is a defense.", "FRE 803(6), 901"],
    // Synthesized 6th — the consequence the urgency angle is designed to prevent.
    ["Wage garnishment and asset seizure after default", "A default judgment opens the door to garnishment, bank levies, and liens on your property. Responding on time keeps that door closed.", "15 U.S.C. § 1673"],
  ],

  howItWorks: [
    ["Free consultation", "Call us the day you are served. We review your papers immediately and explain exactly what you are facing, at no cost.", "DAY 0"],
    ["Papers reviewed and defense identified", "Our attorneys examine the complaint, the claimed amount, and the documentation. We identify every valid defense before we file.", "WEEK 1"],
    ["Legal response filed before deadline", "We file your formal answer with the court before the window closes, preserving your right to contest the lawsuit.", "BY DEADLINE"],
    ["Case fought through to resolution", "We represent you through negotiations, hearings, or trial as the case requires. Our goal is the best possible outcome for your situation.", "ONGOING"],
  ],

  rights: {
    intro: "Even after court papers are in your hands, the law protects you in ways most people do not know.",
    items: [
      { cite: "FRCP 8, 12",        label: "Right to respond",         text: "You have the right to respond and contest any debt lawsuit filed against you. The collector must prove their case in court if you do.", exLabel: "Right", ex: "Filing an answer forces the collector to prove every element of the claim." },
      { cite: "FRE 401–402",       label: "Burden of proof",          text: "Collectors must prove the debt is valid, accurate, and legally theirs to collect. Deficiencies in their documentation are your defense.", exLabel: "Right", ex: "Plaintiff carries the burden. Gaps in their records are gaps in their case." },
      { cite: "FRCP 4",            label: "Service required",         text: "A default judgment entered without proper service can be challenged and potentially vacated.", exLabel: "Right", ex: "No valid service = no valid judgment. Grounds to reopen." },
      { cite: "FDCPA § 1692e(2)",  label: "No false court filings",   text: "Collectors cannot misrepresent the amount owed, even in court filings. Inflated balances are an FDCPA violation.", exLabel: "Violation", ex: "Inflated balance in the complaint = federal claim back against the collector." },
      { cite: "FRCP 60(b)",        label: "Vacating a judgment",      text: "If a default judgment has already been entered, it is not always final. Prompt legal action can sometimes reopen the case.", exLabel: "Right", ex: "Improper service, mistake, excusable neglect, narrow but real grounds." },
      { cite: "Civil right",       label: "Right to counsel",         text: "You have the right to legal representation at every stage. Debt buyers have attorneys. So can you.", exLabel: "Right", ex: "Hire counsel pre-answer, mid-case, or post-judgment in appropriate cases." },
    ],
  },

  whoHelps: [
    "Anyone who has just been served with a debt lawsuit summons and does not know what to do.",
    "People whose response deadline is approaching and have not yet filed an answer.",
    "Those who received papers weeks ago, set them aside, and are now worried the deadline may have passed.",
    "Anyone who believes the amount being claimed is incorrect, inflated, or belongs to a debt they do not recognize.",
    "People who feel outmatched by a collector's legal team and need attorney representation.",
  ],

  // FAQ #1 ANSWER REWRITTEN: live has wrong copy (FDCPA cease-letter
  // content pasted from another LP). Synthesized correct answer here.
  faq: [
    ["What exactly happens if I do not respond to the court papers?", "The court enters a default judgment against you automatically, without ever hearing your side. That judgment gives the collector the legal right to garnish your wages, freeze your bank accounts, and place liens on your property. Responding is what preserves your right to be heard."],
    ["How long do I actually have to respond?", "In most states, 20 to 28 days from the date you were served, not the date you opened the papers. The clock starts at service."],
    ["What if my deadline has already passed?", "Depending on the circumstances, a default judgment may still be challengeable. We can review your case and advise on whether there are grounds to reopen it."],
    ["Do I have to appear in court myself?", "In most cases, no. Our attorneys file all required documents and can appear on your behalf."],
    ["What if I think the debt is not mine or the amount is wrong?", "That is exactly what we examine before filing your response. Many collection suits include errors, inflated balances, or invalid claims."],
    ["How much does this cost?", "Your consultation is free. We offer flexible payment plans and will walk you through all cost options before any commitment."],
  ],

  bottomCta: {
    headline: "The papers are real. The deadline is real. Act today.",
    body: "Every day you wait is a day closer to an automatic judgment you could have prevented. Our attorneys act fast.",
    cta: "Get a free case evaluation",
  },

  disclaimer: "This is attorney advertising. Prior results do not guarantee a similar outcome.",
};
