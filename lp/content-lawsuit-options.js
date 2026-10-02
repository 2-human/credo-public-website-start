/* Credo Legal — Lawsuit / Served_Papers — "Reassurance / Explore options" angle.
   Source: live re-fetch of https://start.credolegal.com/debt-lawsuit-options
   (2026-06-23). Sibling of /debt-lawsuit-summons-respond in the
   Served_Papers ad group: same phone (347) 523-4662, different framing.
   This LP is calming/explanatory ("One Free Conversation"); the sibling
   is urgent ("Act Today").

   Per-LP deviation resolved:
   - Common Problems had 5 bullets (std 6) → synthesized 6th "Default
     judgment already entered" matching the angle (reassurance about
     post-judgment options).

   Universal fixes already present on live:
   - Hero subhead reads "Our Attorneys" (was "Real Attorneys" in capture)
   - Why Choose bullet 2 reads "Our Attorneys Guide You Through" (was
     "Real Attorneys" in capture)
   - State exclusion list includes NC.

   Design enhancements applied: civil-procedure citation mix, time
   markers, structured Your Rights items. Trust strip uses the Lawsuit
   cluster's "Court / Defense, not settlement only" set. */
window.CREDO = {
  phone: "(718) 521-4060",
  phoneHref: "tel:+17185214060",
  cluster: "Lawsuit",
  angle: "Served_Papers. Explore options",
  statute: "Civil procedure / FDCPA",

  hero: {
    eyebrow: "Lawsuit defense · Explore your options",
    // "Summons" gets red emphasis — names the triggering event for this LP.
    h1: ["Received a Lawsuit ", "Summons", "?"],
    lede: "Our Attorneys Can Help You Make Sense of It and Act.",
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

  // ---- WHAT WE DO — live verbatim ----
  whatWeDo: {
    headline: "First we explain. Then we defend.",
    intro: "At Credo Legal, our first job is to help you understand what you are holding. We read your court papers, explain what they mean in plain language, and tell you exactly where you stand, what the deadline is, what can be challenged, and what your real options are. From there, we help file your legal response and build the strongest defense the facts support. Thousands of people in your situation have come to us not knowing what to do. Most of them had more options than they realized.",
    bullets: [
      "Free review of your court papers, explained in plain language.",
      "Deadline confirmed and response filed before the window closes.",
      "Every available defense identified, documentation gaps, billing errors, and legal deficiencies.",
      "Legal representation through negotiations or court, whichever the case requires.",
      "Flexible payment plans so you can get help without adding to your financial stress.",
    ],
  },

  // ---- WHY CHOOSE — live verbatim ----
  whyChoose: [
    ["We explain the papers first", "You do not need to walk in already knowing what to do. We read the documents and tell you exactly what you are facing, at no cost."],
    ["Our attorneys guide you through every step", "Not a chatbot. Licensed lawyers who handle debt lawsuits and know the collectors' playbook."],
    ["Many debts have weaknesses", "Before filing your response, we examine the claim for errors, inflated balances, missing documentation, and legal deficiencies that can work in your favor."],
    ["You do not have to go to court alone", "We can handle appearances, filings, and negotiations on your behalf so the legal process does not have to disrupt your life."],
    ["Flexible payment plans", "Getting proper legal help should not feel like another financial problem. We structure our fees around what you can manage."],
  ],

  // ---- COMMON PROBLEMS — live 5 + 1 synthesized to hit standard 6 ----
  commonProblems: [
    ["Fear and inaction after being served", "The most common response to court papers is to set them aside and hope they go away. They do not. But calling us costs nothing and tells you exactly what you are up against.", "FRCP 12(a)"],
    ["Not understanding what the papers say", "Debt lawsuit complaints are written in legal language most people have never encountered. We translate all of it for free.", "Civil right"],
    ["Assuming the debt must be valid", "Many collection lawsuits are filed on incomplete, inflated, or disputed claims. The collector filing the suit does not mean you automatically owe what they say.", "FRE 401–402"],
    ["Thinking it is already too late", "Unless a final judgment has been entered, there are almost always options. And even then, in some circumstances, those judgments can be challenged.", "FRCP 60(b)"],
    ["Facing a collector's legal team alone", "Debt buyers use experienced attorneys who file these cases every day. You deserve someone in your corner who knows the same playbook.", "Civil right"],
    // Synthesized 6th row matching the angle's reassurance theme.
    ["Default judgment already entered", "Even after the court has ruled, certain circumstances allow a judgment to be vacated, improper service, lack of notice, mistake. The window to act is narrow but real.", "FRCP 60(b)"],
  ],

  // ---- HOW IT WORKS — live verbatim + time markers ----
  howItWorks: [
    ["Free consultation", "Call us the day you are served. We review your papers immediately, explain exactly what you are facing, and tell you what needs to happen next. No cost, no commitment.", "DAY 0"],
    ["Defense identified before we file", "Our attorneys examine the complaint for billing errors, documentation gaps, inflated amounts, and anything else that gives us a stronger position before we respond.", "WEEK 1"],
    ["Legal response filed on your behalf", "We file your formal answer with the court, preserving your right to contest the lawsuit and be heard. You do not have to figure out the process yourself.", "BY DEADLINE"],
    ["Resolution pursued on your terms", "We negotiate, appear in court, or pursue dismissal based on what your case supports. Our goal is always the best realistic outcome for your situation.", "ONGOING"],
  ],

  // ---- YOUR RIGHTS — live bullets promoted to structured items ----
  rights: {
    intro: "Receiving court papers is not the end of the road. The law protects you in ways most people do not know.",
    items: [
      { cite: "FRCP 8, 12",        label: "Right to respond",          text: "You have the right to respond and contest any debt lawsuit. The collector must prove their case in court if you do.", exLabel: "Right", ex: "File an answer within the deadline. Force the collector to prove every element." },
      { cite: "FRE 401–402",       label: "Burden on the plaintiff",   text: "Collectors must show the debt is valid, accurate, and legally theirs to collect. If their documentation is incomplete, that is your defense.", exLabel: "Right", ex: "No complete records = no judgment for the collector." },
      { cite: "FDCPA § 1692e(2)",  label: "No false court filings",    text: "Collectors cannot misrepresent the amount you owe, even in court filings. Inflated balances are a federal violation.", exLabel: "Violation", ex: "Inflated balance in the complaint = federal claim back against the collector." },
      { cite: "FRCP 4 + 60(b)",    label: "Service required",          text: "A default judgment entered without proper service can be challenged and potentially vacated with the right legal action.", exLabel: "Right", ex: "No valid service = grounds to vacate the judgment." },
      { cite: "FRCP 60(b)",        label: "Vacating a judgment",       text: "Even an existing default judgment is not always final. In some cases, prompt legal action can reopen the matter.", exLabel: "Right", ex: "Mistake, excusable neglect, improper service, narrow but real grounds." },
      { cite: "Civil right",       label: "Right to counsel",          text: "You have the right to an attorney at every stage. The collector has one. There is no reason you should not.", exLabel: "Right", ex: "Hire counsel at any point, pre-answer, mid-litigation, post-judgment." },
    ],
  },

  // ---- WHO HELPS — live verbatim ----
  whoHelps: [
    "Anyone who has received court papers for a debt lawsuit and does not know what to do next.",
    "People who feel overwhelmed and are looking for someone to explain the situation before they act.",
    "Those who want to understand their options before deciding whether to fight the claim.",
    "Anyone who suspects the debt amount is wrong, inflated, or not theirs to owe.",
    "People whose response deadline is still open and who want real legal guidance on how to proceed.",
  ],

  // ---- FAQ — live verbatim (6 items; renderer accepts >5) ----
  faq: [
    ["I got court papers and I do not understand what they mean. Where do I start?", "Call us. Our first job is to read your documents and explain exactly what you are facing in plain language. We confirm your deadline, identify your options, and tell you what we can do. That conversation is completely free."],
    ["Is it really possible to fight a debt lawsuit?", "Yes. Many collection suits are filed with incomplete documentation, inflated fees, or on debts that have been sold so many times that proper records no longer exist. We review the claim before filing anything and raise every challenge the facts support."],
    ["What if I think the debt is not mine or the amount is wrong?", "That is exactly what we look at. Before we file a response, we examine the complaint for accuracy, verify the claimed amount, and check whether the collector can prove they have the legal right to sue. Errors and documentation gaps are more common than most people expect."],
    ["What if my deadline is very close?", "Call us today. We move fast when deadlines are near. Even with limited time, we can review the papers, file a response, and protect your right to be heard in court."],
    ["Do I have to appear in court?", "In most cases, no. Our attorneys can file all required documents and appear on your behalf. You can go about your life while we handle the legal process."],
    ["How much does this cost?", "Your first consultation is completely free. We explain every cost option before you commit to anything and offer flexible payment plans to make legal help accessible regardless of your current situation."],
  ],

  // ---- BOTTOM CTA — live verbatim ----
  bottomCta: {
    headline: "One free conversation can change your entire situation.",
    body: "Court papers feel final. They are not. Our attorneys will tell you exactly what you are facing and what can be done about it, for free, with no obligation.",
    cta: "Get a free case evaluation",
  },

  disclaimer: "This is attorney advertising. Prior results do not guarantee a similar outcome.",
};
