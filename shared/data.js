// Shared nav data for the three Services nav prototypes (A/B/C).
// Source: content/web/sites/start-redesign/brief/2-services-nav.md
// All 36 angle sub-items map 1:1 to LP draft files at content/campaigns/google-ads/landing-page-drafts/

// Angle classes (cross-cluster taxonomy):
//   urgent     — Urgent Action (Var A typically): stop calls, urgency, fight
//   validity   — Validity Challenge (Var B typically): proof challenge, $1K per violation, billing errors
//   education  — Rights Education: FDCPA / FCRA / TILA explained
//   outcome    — Outcome Recovery: negotiation, credit-report removal, exemptions

const CLUSTERS = {
  harassment: {
    label: 'Harassment',
    slug: 'collector-harassment',
    overview: '/services/collector-harassment',
    champion: '/debt-harassment-fdcpa-rights',
    items: [
      { label: 'Stop Collector Calls', url: '/debt-harassment-stop-calls', angle: 'urgent', lp: 'LP_Harassment_VarA_StopCalls' },
      { label: 'FDCPA Violations Are Worth $1,000 Each', url: '/debt-harassment-violations', angle: 'validity', lp: 'LP_Harassment_VarB_Violations' },
      { label: 'Know Your FDCPA Rights', url: '/debt-harassment-fdcpa-rights', angle: 'education', lp: 'LP_Harassment-FDCPA_VarA_Education' },
      { label: 'FDCPA Action — We Sue Them', url: '/debt-harassment-fdcpa-attorney', angle: 'urgent', lp: 'LP_Harassment-FDCPA_VarB_WeSueThem' },
      { label: 'Multiple Collectors Harassing You', url: '/multiple-collectors-one-attorney', angle: 'urgent', lp: 'LP_Harassment_MultipleCollectors_VarA_Relief' },
      { label: 'Multiple Collectors — Combined Damages', url: '/multiple-collectors-more-money', angle: 'outcome', lp: 'LP_Harassment_MultipleCollectors_VarB_Aggregation' },
      { label: 'FDCPA Violation? We Act Fast', url: '/fcba-and-fdcpa', angle: 'urgent', lp: 'LP_AllStates-FDCPA_VarB_ActionFast' },
    ],
  },
  lawsuit: {
    label: 'Lawsuit',
    slug: 'lawsuits-summons',
    overview: '/services/lawsuits-summons',
    champion: '/debt-lawsuit-respond-on-time',
    items: [
      { label: 'Sued by a Debt Collector', url: '/debt-lawsuit-respond-on-time', angle: 'urgent', lp: 'LP_Lawsuit-Collection_VarA_Urgency' },
      { label: 'Sued — Demand They Prove It', url: '/debt-lawsuit-proof', angle: 'validity', lp: 'LP_Lawsuit-Collection_VarB_ProofChallenge' },
      { label: 'Build Your Court Defense', url: '/debt-lawsuit-fight-back', angle: 'urgent', lp: 'LP_Lawsuit-Defense_VarA_FightBack' },
      { label: 'Level the Field With an Attorney', url: '/debt-lawsuit-attorney', angle: 'education', lp: 'LP_Lawsuit-Defense_VarB_LevelField' },
      { label: 'Just Got Served? Act Now', url: '/debt-lawsuit-summons-respond', angle: 'urgent', lp: 'LP_Lawsuit-ServedPapers_VarA_ActNow' },
      { label: 'Just Got Served? Know Your Options', url: '/debt-lawsuit-options', angle: 'outcome', lp: 'LP_Lawsuit-ServedPapers_VarB_Reassurance' },
    ],
  },
  creditCard: {
    label: 'Credit Card',
    slug: 'credit-card-debt',
    overview: '/services/credit-card-debt',
    champion: '/credit-cards',
    items: [
      { label: 'Negotiate Credit Card Debt', url: '/credit-cards', angle: 'outcome', lp: 'LP_CC-Negotiation_VarA_Negotiate' },
      { label: 'Challenge Card Debt Validity', url: '/credit-cards?angle=challenge', angle: 'validity', lp: 'LP_CC-Negotiation_VarB_ChallengeValidity' },
      { label: 'Stop Card Collector Calls', url: '/credit-card-debt-stop-calls', angle: 'urgent', lp: 'LP_CC-Harassment_VarA_StopCalls' },
      { label: 'Each Card-Collector Violation = $1,000', url: '/credit-card-debt-violations', angle: 'validity', lp: 'LP_CC-Harassment_VarB_Violations' },
      { label: 'Sued for Credit Card Debt', url: '/credit-card-debt-lawsuit-respond', angle: 'urgent', lp: 'LP_CC-Lawsuit_VarA_Urgency' },
      { label: 'Card Lawsuit — Demand Proof', url: '/credit-card-debt-lawsuit-records', angle: 'validity', lp: 'LP_CC-Lawsuit_VarB_ProofChallenge' },
    ],
  },
  paydayLoan: {
    label: 'Payday Loan',
    slug: 'personal-payday-loans',
    overview: '/services/personal-payday-loans',
    champion: '/payday-loan-lawsuit-respond',
    items: [
      { label: 'Stop Payday Lender Calls', url: '/payday-loan-debt-harassment', angle: 'urgent', lp: 'LP_PaydayLoan-Harassment_VarA_StopCalls' },
      { label: 'Payday Violations & Damages', url: '/payday-loan-debt-violations', angle: 'validity', lp: 'LP_PaydayLoan-Harassment_VarB_Violations' },
      { label: 'Sued for a Payday Loan', url: '/payday-loan-lawsuit-respond', angle: 'urgent', lp: 'LP_PaydayLoan-Lawsuit_VarA_Urgency' },
      { label: 'Payday Lawsuit — Demand Proof', url: '/payday-loan-lawsuit-proof', angle: 'validity', lp: 'LP_PaydayLoan-Lawsuit_VarB_ProofChallenge' },
      { label: 'Know Your Payday Loan Rights', url: '/payday-loan-debt-rights', angle: 'education', lp: 'LP_PaydayLoan-Rights_VarA_Education' },
      { label: 'Fight Back Against Payday Lenders', url: '/payday-loan-fight-back', angle: 'outcome', lp: 'LP_PaydayLoan-Rights_VarB_FightBack' },
    ],
  },
  medicalDebt: {
    label: 'Medical Debt',
    slug: 'medical-bills',
    overview: '/services/medical-bills',
    champion: '/medica-debt-lawsuit-respond',
    items: [
      { label: 'Stop Medical Collector Calls', url: '/collection-defense', angle: 'urgent', lp: 'LP_MedDebt-Harassment_VarA_StopCalls' },
      { label: 'Medical Bills May Be Invalid', url: '/collection-defense?angle=invalid', angle: 'validity', lp: 'LP_MedDebt-Harassment_VarB_InvalidBills' },
      { label: 'Sued Over Medical Debt', url: '/medica-debt-lawsuit-respond', angle: 'urgent', lp: 'LP_MedDebt-Lawsuit_VarA_Urgency' },
      { label: 'Medical Lawsuit — Billing Errors', url: '/medical-debt-bills-errors', angle: 'validity', lp: 'LP_MedDebt-Lawsuit_VarB_BillingErrors' },
      { label: 'Your Medical Debt Rights', url: '/medical-debt-fdcpa-rights', angle: 'education', lp: 'LP_MedDebt-Rights_VarA_Education' },
      { label: 'Remove Medical Debt from Credit Report', url: '/medical-debt-credit-report-removal', angle: 'outcome', lp: 'LP_MedDebt-Rights_VarB_CreditReport' },
    ],
  },
  garnishment: {
    label: 'Garnishment',
    slug: 'wage-garnishment',
    overview: '/services/wage-garnishment',
    champion: '/stop-wage-garnishment',
    items: [
      { label: 'Fight Wage Garnishment', url: '/stop-wage-garnishment', angle: 'urgent', lp: 'LP_AllStates-Garn_VarA_Fight' },
      { label: 'Prevent Garnishment (Pre-Judgment)', url: '/stop-wage-garnishment?stage=pre', angle: 'urgent', lp: 'LP_PreJudgment-Garn_VarA_Prevention' },
      { label: 'Garnishment Rights & Legal Options', url: '/stop-wage-garnishment?stage=pre&angle=rights', angle: 'education', lp: 'LP_PreJudgment-Garn_VarB_Rights' },
      { label: 'Reduce Active Garnishment', url: '/wage-garnishment-attorney', angle: 'urgent', lp: 'LP_PostJudgment-Garn_VarA_FightActive' },
      { label: 'Garnishment Exemptions', url: '/wage-garnishment-exemptions', angle: 'outcome', lp: 'LP_PostJudgment-Garn_VarB_Exemptions' },
    ],
  },
};

// Order in which clusters appear in the nav.
const CLUSTER_ORDER = ['harassment', 'lawsuit', 'creditCard', 'paydayLoan', 'medicalDebt', 'garnishment'];

// Resolve a sibling nav destination given current angle context.
// If the sibling cluster has an LP with the same angle, route there; otherwise fall back to champion.
function siblingDestination(siblingKey, currentAngle, variant) {
  const sibling = CLUSTERS[siblingKey];
  if (!sibling) return null;
  if (currentAngle) {
    const match = sibling.items.find(it => it.angle === currentAngle);
    if (match) return { url: match.url, label: match.label, note: 'angle-matched' };
  }
  // No angle context or no match — fall back per variant:
  if (variant === 'A') return { url: sibling.overview, label: sibling.label + ' overview', note: 'overview fallback' };
  return { url: sibling.champion, label: 'Cluster champion', note: 'champion fallback' };
}

// Determine the cluster nav-item destination based on variant + current context.
function clusterDestination(clusterKey, currentAngle, variant) {
  const c = CLUSTERS[clusterKey];
  if (!c) return null;
  if (variant === 'A') {
    return { url: c.overview, label: c.label + ' overview', note: 'overview default' };
  }
  // B and C — champion default
  if (currentAngle) {
    const match = c.items.find(it => it.angle === currentAngle);
    if (match) return { url: match.url, label: match.label, note: 'angle-matched within cluster' };
  }
  return { url: c.champion, label: 'Cluster champion', note: 'champion fallback' };
}

window.CredoNav = { CLUSTERS, CLUSTER_ORDER, siblingDestination, clusterDestination };
