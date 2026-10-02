/* Credo Legal — Lawsuit / Defense — "Fight Back" angle.
   Source: live re-fetch of https://start.credolegal.com/debt-lawsuit-fight-back
   (2026-06-23). Sibling of /debt-lawsuit-attorney in the Lawsuit-Defense
   ad group: same H1, same phone (347) 523-4568, different lede + tone.
   This LP runs combative ("they bet on default") framing; the sibling
   runs access-to-counsel ("level the field") framing.

   Per-LP deviation resolved (same defaults as URLs #5, #6):
   - Why Choose had 4 bullets (std 5) → added 5th "Free consultation"
     row matching the sibling LP and cluster pattern.

   Universal fixes already present on live:
   - Hero subhead reads "Our Attorneys Can Help You Challenge Their
     Claims." (capture's flagged "Real Attorneys" was fixed upstream).
   - Why Choose bullet 3 reads "Our Attorneys From Day One" (capture
     flagged "Real Attorneys" — fixed upstream).
   - State exclusion list includes NC.

   Design enhancements applied:
   - Common Problems gains civil-procedure / FDCPA citation mix
   - How It Works gains time markers (DAY 0 → ONGOING; deadline-aware)
   - Your Rights bullets promoted to structured items
   - Trust strip = "Court / Defense, not settlement only" (Lawsuit
     cluster), not the FDCPA Harassment-cluster set. */
window.CREDO = {
  phone: "(718) 521-4060",
  phoneHref: "tel:+17185214060",
  cluster: "Lawsuit",
  angle: "Defense. Fight back",
  statute: "Civil procedure / FDCPA",

  hero: {
    eyebrow: "Lawsuit defense · Fight back",
    h1: ["Is a Creditor ", "Suing", " You?"],
    lede: "Our Attorneys Can Help You Challenge Their Claims.",
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
    headline: "We know the playbook. We beat it.",
    intro: "At Credo Legal, we know the creditor's playbook, because we fight it every day. When a creditor sues you, we respond immediately, challenge the debt's validity, and build a defense designed to contest every weak point in their claim. They count on you giving up. We make sure you don't.",
    bullets: [
      "File your legal answer before the response deadline.",
      "Challenge the debt's validity and the creditor's documentation.",
      "Defend you in court against creditor legal teams.",
      "Fight to reduce, dismiss, or settle on terms that work for you.",
    ],
  },

  // ---- WHY CHOOSE — live 4 + 1 synthesized to hit standard 5 count ----
  whyChoose: [
    ["Licensed attorneys, we know their playbook", "We defend against creditor lawsuits every day. We know what they file, how they argue, and where their claims are weakest."],
    ["We fight, not just respond", "Filing an answer is the start. We actively challenge the claim and contest every point we can."],
    ["Our attorneys from day one", "Not salespeople. Attorneys handling your case from the first conversation."],
    ["Flexible payment plans", "Legal defense against a creditor doesn't have to cost you all your savings."],
    // Synthesized 5th row to match the standard cluster pattern.
    ["Free consultation", "No cost to find out what defenses you have, what the response deadline is, and what fighting back actually looks like."],
  ],

  // ---- COMMON PROBLEMS — live verbatim + citation tags ----
  commonProblems: [
    ["Creditors who bet on default", "Most lawsuits are filed expecting no response. That's how creditors win cheaply and quickly.", "FRCP 55"],
    ["Tight response deadlines", "20 to 28 days moves fast. Missing it hands them the win they were looking for.", "State civil rules"],
    ["Creditor legal teams", "They have attorneys who file these cases daily. You deserve representation too.", "Civil right"],
    ["Inflated balances", "Fees, penalties, and interest are often added to the original balance. We challenge what doesn't belong.", "State UCC + contract"],
    ["Judgments that enable garnishment", "A default judgment opens the door to wage garnishment and bank levies. We fight to close it.", "15 U.S.C. § 1673"],
    ["Debts with weak documentation", "Many creditor claims lack the complete records to survive a legal challenge. We find out.", "FRE 803(6), 901"],
  ],

  // ---- HOW IT WORKS — live verbatim + lawsuit-defense time markers ----
  howItWorks: [
    ["Free consultation", "Tell us what's happening. We review the lawsuit and your options at no cost.", "DAY 0"],
    ["Debt investigation", "We examine the claim, the documentation, and the legal basis to find every point worth contesting.", "WEEK 1"],
    ["Legal response filed", "We file your answer by the deadline, putting the creditor on notice that this case will be fought.", "BY DEADLINE"],
    ["We fight", "Through court filings, negotiations, or both, we pursue the best possible outcome and don't stop until we get there.", "ONGOING"],
  ],

  // ---- YOUR RIGHTS — live bullets promoted to structured items ----
  rights: {
    intro: "Creditors who sue you have legal obligations they often prefer you don't know about.",
    items: [
      { cite: "FRCP 4",            label: "Proper service",         text: "They must properly serve you before any default judgment can be entered against you.", exLabel: "Right", ex: "No valid service = no valid judgment. Improper service is grounds to vacate." },
      { cite: "FRE 401–402",       label: "Burden of proof",        text: "They must be able to prove the debt is valid, accurately stated, and legally theirs to collect.", exLabel: "Right", ex: "The plaintiff carries the burden. You don't have to prove you don't owe it." },
      { cite: "FDCPA § 1692e(2)",  label: "No false court filings", text: "Misrepresenting the amount owed, even in a court filing, is a federal FDCPA violation.", exLabel: "Violation", ex: "An inflated balance in the complaint is a federal claim against the collector." },
      { cite: "Civil right",       label: "Right to defend",        text: "You have the right to respond, contest the claim, and be represented by an attorney.", exLabel: "Right", ex: "File an answer. Raise defenses. Be heard before a court can rule against you." },
      { cite: "FRE 803(6), 901",   label: "Chain of ownership",     text: "If the debt was sold, the current collector must establish a complete and documented chain of ownership.", exLabel: "Right", ex: "No complete chain of assignment = standing problem the creditor must resolve." },
      { cite: "FRCP 60(b)",        label: "Vacating a judgment",    text: "A default judgment is not always permanent, in certain circumstances it can be vacated if you act.", exLabel: "Right", ex: "Improper service, mistake, excusable neglect, all grounds to reopen the case." },
    ],
  },

  // ---- WHO HELPS — live verbatim ----
  whoHelps: [
    "Anyone sued by a creditor, original lender, debt buyer, or collection attorney firm.",
    "People who received a summons and feel outmatched or overwhelmed by the legal process.",
    "Those who've been waiting to respond, hoping it goes away. It won't, but it can be fought.",
    "Anyone who believes the debt amount is wrong, inflated, or shouldn't legally be collected.",
    "People who are ready to fight back rather than accept the creditor's version of events.",
  ],

  // ---- FAQ — live verbatim ----
  faq: [
    ["Why do most people lose collection lawsuits?", "Because they don't respond. When no answer is filed, the court enters a default judgment, the creditor wins without proving a thing. The single most important thing you can do is respond."],
    ["What does “fighting back” actually mean legally?", "It means filing a formal legal answer to the lawsuit, raising defenses based on the law and the facts of your case, and requiring the creditor to prove every element of their claim. Many cannot."],
    ["What if the creditor has already gotten a default judgment against me?", "In some circumstances, a default judgment can be vacated, especially if you weren't properly served or if you act quickly. Contact us for a free review."],
    ["Do I have to show up in court?", "Usually not. Our attorneys can handle appearances and filings on your behalf in most cases."],
    ["How much does this cost?", "Your consultation is free. We offer flexible payment plans and will walk you through every option before any commitment is made."],
  ],

  // ---- BOTTOM CTA — live verbatim ----
  bottomCta: {
    headline: "They counted on you not showing up. Show up.",
    body: "A creditor lawsuit is a bet against you. Our attorneys take that bet personally, and fight to win.",
    cta: "Get a free case evaluation",
  },

  disclaimer: "This is attorney advertising. Prior results do not guarantee a similar outcome.",
};
