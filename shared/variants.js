// 6 angle-themed website variants per the user's 2026-06-01 brief:
// "6 website variants for the 6 services, where the 6 service pages on each
//  website are clustered according to their angle, with best possible fit."
//
// Each variant is themed around ONE rhetorical angle. Within each variant, every
// service page (one per cluster) uses the LP from that cluster whose angle best
// matches the variant's anchor angle. All 6 variants share the same chrome
// (header / footer / sticky CTA + Tidio per brief 4). The 36 LPs from the live
// captures fill the slots.
//
// "perfect fit" = the cluster has a drafted LP at exactly that angle.
// "best fit"    = no exact match; this is the closest available LP.

const VARIANTS = {
  'stop-calls': {
    slug: 'stop-calls',
    label: 'Stop the Calls',
    tagline: 'Relief from collector harassment',
    primary_promise: 'End the harassment. Stop the calls.',
    home_hero_h1: 'Stop the calls. Today.',
    home_hero_sub: 'When debt collectors won\'t stop calling, our attorneys send the legal notice that ends it. Same-day cease letters, federal-law protection, attorneys licensed in your state.',
    home_cluster_lead: 'Whatever kind of debt the calls are about, we can stop them.',
    visitor: 'Someone whose phone won\'t stop ringing — collectors before 8 AM, threats of arrest, calls to family or work. They want the calls to stop now.',
    services: {
      harassment:  { lp: 'harassment-var-a-stop-calls',                  fit: 'perfect' },
      lawsuit:     { lp: 'lawsuit-served-papers-var-a-act-now',          fit: 'best',    note: 'Lawsuit equivalent of "stop the calls" — act-now framing on a fresh summons.' },
      creditCard:  { lp: 'cc-harassment-var-a-stop-calls-dyn',           fit: 'perfect' },
      paydayLoan:  { lp: 'payday-loan-harassment-var-a-stop-calls-dyn',  fit: 'perfect' },
      medicalDebt: { lp: 'med-debt-harassment-var-a-stop-calls',         fit: 'perfect' },
      garnishment: { lp: 'all-states-garn-var-a-fight',                  fit: 'best',    note: 'Garn equivalent of "stop" — fight-the-garnishment champion.' },
    },
  },

  'fight-back': {
    slug: 'fight-back',
    label: 'Fight Back',
    tagline: 'Pursue damages, hold them accountable',
    primary_promise: 'They broke the law. We help you sue them.',
    home_hero_h1: 'Fight back. They broke the law.',
    home_hero_sub: 'FDCPA violations carry $1,000 per lawsuit. Garnishments can be reduced. Payday loans can be voided. Our attorneys turn what was done to you into a case against them.',
    home_cluster_lead: 'Whatever the violation, we build the claim.',
    visitor: 'Someone done waiting it out — wants to know what they can recover, who they can sue, and what the law gives them as leverage.',
    services: {
      harassment:  { lp: 'harassment-fdcpa-var-b-we-sue-them',          fit: 'perfect' },
      lawsuit:     { lp: 'lawsuit-defense-var-a-fight-back',            fit: 'perfect' },
      creditCard:  { lp: 'cc-harassment-var-b-violations-dyn',          fit: 'perfect' },
      paydayLoan:  { lp: 'payday-loan-rights-var-b-fight-back',         fit: 'perfect' },
      medicalDebt: { lp: 'med-debt-harassment-var-b-invalid-bills',     fit: 'best',    note: 'Medical equivalent — challenge the bills aggressively. (Shared URL with VarA.)' },
      garnishment: { lp: 'post-judgment-garn-var-a-fight-active',       fit: 'perfect' },
    },
  },

  'respond-in-time': {
    slug: 'respond-in-time',
    label: 'Respond in Time',
    tagline: 'Deadline urgency — don\'t miss the window',
    primary_promise: 'Don\'t miss the deadline. Respond on time.',
    home_hero_h1: 'You have a deadline. We help you meet it.',
    home_hero_sub: 'Default judgment, wage garnishment, repossession — all start when a deadline passes. Our attorneys file the response, examine the claim, and protect what\'s yours.',
    home_cluster_lead: 'Whatever started the clock, we beat it.',
    visitor: 'Someone holding a summons or notice with a date on it. The clock is ticking. They need to act before something irreversible happens.',
    services: {
      harassment:  { lp: 'all-states-fdcpa-var-b-action-fast',          fit: 'best',    note: 'Harassment equivalent — act fast on FDCPA timeline.' },
      lawsuit:     { lp: 'lawsuit-collection-var-a-urgency',            fit: 'perfect', note: 'Account champion (580+ conversions).' },
      creditCard:  { lp: 'cc-lawsuit-var-a-urgency',                    fit: 'perfect' },
      paydayLoan:  { lp: 'payday-loan-lawsuit-var-a-urgency',           fit: 'perfect' },
      medicalDebt: { lp: 'med-debt-lawsuit-var-a-urgency',              fit: 'placeholder', note: 'Live URL is 404 — coming-soon placeholder rendered.' },
      garnishment: { lp: 'pre-judgment-garn-var-a-prevention',          fit: 'best',    note: 'Garn equivalent — prevent garnishment before judgment. (Shared URL.)' },
    },
  },

  'demand-proof': {
    slug: 'demand-proof',
    label: 'Demand Proof',
    tagline: 'Make them prove the debt',
    primary_promise: 'Don\'t pay debt they can\'t prove.',
    home_hero_h1: 'Make them prove it. Or it goes away.',
    home_hero_sub: 'Debt collectors and original creditors must legally prove what they claim — ownership, amount, accuracy. When they can\'t, the case can be dismissed and the debt can come off your credit report.',
    home_cluster_lead: 'Whatever they claim, we test it.',
    visitor: 'Someone who suspects the debt isn\'t legitimate — wrong amount, doesn\'t recognize it, sold between collectors. They want to challenge before paying.',
    services: {
      harassment:  { lp: 'harassment-var-b-violations',                 fit: 'best',    note: 'Harassment equivalent — pursue evidence of each violation.' },
      lawsuit:     { lp: 'lawsuit-collection-var-b-proof-challenge',    fit: 'perfect' },
      creditCard:  { lp: 'cc-lawsuit-var-b-proof-challenge',            fit: 'perfect' },
      paydayLoan:  { lp: 'payday-loan-lawsuit-var-b-proof-challenge',   fit: 'perfect' },
      medicalDebt: { lp: 'med-debt-lawsuit-var-b-billing-errors',       fit: 'perfect' },
      garnishment: { lp: 'post-judgment-garn-var-a-fight-active',       fit: 'best',    note: 'Garn equivalent — challenge the underlying judgment.' },
    },
  },

  'know-your-rights': {
    slug: 'know-your-rights',
    label: 'Know Your Rights',
    tagline: 'Plain-English legal education',
    primary_promise: 'Know what the law gives you. Before you do anything.',
    home_hero_h1: 'You have more rights than you think.',
    home_hero_sub: 'FDCPA. FCRA. CFPB rules. State licensing law. Federal garnishment caps. Our attorneys explain what applies to your situation — at no cost — so you can decide from a position of knowledge.',
    home_cluster_lead: 'Whatever your situation, we explain where you stand.',
    visitor: 'Someone in the research phase. Not panicked yet. Wants to understand the law before deciding whether to pay, dispute, settle, or ignore.',
    services: {
      harassment:  { lp: 'harassment-fdcpa-var-a-education',            fit: 'perfect', note: 'Account champion for harassment angle.' },
      lawsuit:     { lp: 'lawsuit-defense-var-b-level-field',           fit: 'best',    note: 'Lawsuit equivalent — explains how attorney levels the field.' },
      creditCard:  { lp: 'cc-negotiation-var-a-negotiate',              fit: 'best',    note: 'CC equivalent — explains negotiation and validation options.' },
      paydayLoan:  { lp: 'payday-loan-rights-var-a-education',          fit: 'perfect' },
      medicalDebt: { lp: 'med-debt-rights-var-a-education',             fit: 'perfect' },
      garnishment: { lp: 'pre-judgment-garn-var-b-rights',              fit: 'perfect', note: 'Shared URL — renders canonical Garn champion content with banner.' },
    },
  },

  'reduce-or-remove': {
    slug: 'reduce-or-remove',
    label: 'Reduce or Remove',
    tagline: 'Outcome-focused — settle, exempt, remove',
    primary_promise: 'Reduce what you owe. Remove what you don\'t.',
    home_hero_h1: 'You may owe less than they say. Or nothing at all.',
    home_hero_sub: 'Negotiated settlements. Garnishment exemptions. Credit-report removals. FDCPA recoveries. Our attorneys pursue every avenue to reduce what\'s claimed and clear what shouldn\'t be there.',
    home_cluster_lead: 'Whatever the balance, we work it down.',
    visitor: 'Someone past the urgent phase and past the "is this legit?" question. They want to actually reduce the number — settle, exempt, remove, recover.',
    services: {
      harassment:  { lp: 'harassment-multiple-collectors-var-b-aggregation', fit: 'best',    note: 'Harassment equivalent — combined damages from multiple collectors.' },
      lawsuit:     { lp: 'lawsuit-served-papers-var-b-reassurance',     fit: 'best',    note: 'Lawsuit equivalent — "know your options" outcome framing.' },
      creditCard:  { lp: 'cc-negotiation-var-a-negotiate',              fit: 'perfect', note: 'CC champion (33.3% conv).' },
      paydayLoan:  { lp: 'payday-loan-harassment-var-b-violations-dyn', fit: 'best',    note: 'Payday equivalent — $1,000-per-violation recovery framing.' },
      medicalDebt: { lp: 'med-debt-rights-var-b-credit-report',         fit: 'perfect' },
      garnishment: { lp: 'post-judgment-garn-var-b-exemptions',         fit: 'perfect' },
    },
  },
};

const VARIANT_ORDER = [
  'stop-calls',
  'fight-back',
  'respond-in-time',
  'demand-proof',
  'know-your-rights',
  'reduce-or-remove',
];

window.VARIANTS = VARIANTS;
window.VARIANT_ORDER = VARIANT_ORDER;
