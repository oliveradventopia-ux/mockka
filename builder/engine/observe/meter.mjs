// observe/ — the live cost/time/token meter.
// Closes the "300k-token runaway caught only post-hoc" class: a run that crosses a budget
// line HALTS (throws) rather than being reconstructed after the burn.

export class BudgetExceededError extends Error {
  constructor(message, summary) {
    super(message);
    this.name = 'BudgetExceededError';
    this.summary = summary;
  }
}

// Illustrative blended price table, micro-USD per 1,000 tokens. Projects override with real numbers.
const PRICE_MICROS_PER_1K = {
  opus: { in: 15_000, out: 75_000 },
  sonnet: { in: 3_000, out: 15_000 },
  haiku: { in: 800, out: 4_000 },
};

/** Rough cost estimate in micro-USD for `tokens` at a model tier. */
export function estimateCostMicros(model, tokens, kind = 'out') {
  const row = PRICE_MICROS_PER_1K[model] ?? PRICE_MICROS_PER_1K.sonnet;
  const rate = row[kind] ?? row.out;
  return Math.round((tokens / 1000) * rate);
}

/** Accumulates a run's token/time/spend and fails closed on a budget crossing. */
export class RunMeter {
  constructor({ budgetTokens = Infinity, budgetMicros = Infinity, label = 'run' } = {}) {
    this.budgetTokens = budgetTokens;
    this.budgetMicros = budgetMicros;
    this.label = label;
    this.tokens = 0;
    this.ms = 0;
    this.costMicros = 0;
    this.events = [];
  }

  record({ tokens = 0, ms = 0, costMicros = 0, note = '' } = {}) {
    this.tokens += tokens;
    this.ms += ms;
    this.costMicros += costMicros;
    this.events.push({ tokens, ms, costMicros, note });
    if (this.overBudget) {
      throw new BudgetExceededError(
        `${this.label} budget exceeded: ${this.tokens} tok / ${this.costMicros} µ$`,
        this.summary(),
      );
    }
    return this.summary();
  }

  get overBudget() {
    return this.tokens > this.budgetTokens || this.costMicros > this.budgetMicros;
  }

  summary() {
    return {
      label: this.label,
      tokens: this.tokens,
      ms: this.ms,
      costMicros: this.costMicros,
      events: this.events.length,
      overBudget: this.overBudget,
      budgetTokens: this.budgetTokens,
      budgetMicros: this.budgetMicros,
    };
  }
}
