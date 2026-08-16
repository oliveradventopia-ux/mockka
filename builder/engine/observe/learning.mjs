// observe/learning — is the learning loop paying off?
// Computes the payoff signals the reconcile watches. If learning isn't paying off
// (nothing acted on, or defects keep recurring), the loop should be killed (fail-closed).

/**
 * @param {{ learningsCaptured?: number, learningsActedOn?: number,
 *           repeatDefects?: number, totalDefects?: number,
 *           gateRejections?: number, gateRuns?: number }} stats
 */
export function learningPayoff(stats = {}) {
  const {
    learningsCaptured = 0,
    learningsActedOn = 0,
    repeatDefects = 0,
    totalDefects = 0,
    gateRejections = 0,
    gateRuns = 0,
  } = stats;
  const ratio = (n, d) => (d > 0 ? n / d : 0);
  const actedOnRate = ratio(learningsActedOn, learningsCaptured);
  const repeatDefectRate = ratio(repeatDefects, totalDefects);
  const gateRejectionRate = ratio(gateRejections, gateRuns);
  // Paying off = we act on what we learn AND defects aren't recurring.
  const payingOff = learningsCaptured > 0 && actedOnRate >= 0.25 && repeatDefectRate <= 0.5;
  return { actedOnRate, repeatDefectRate, gateRejectionRate, payingOff };
}
