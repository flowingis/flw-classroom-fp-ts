export type MoneyEuro = {
  amount: number;
  currency: "€";
};

export const ofEuro = (amount: number, currency: "€"): MoneyEuro => ({
  amount,
  currency,
});

export const ZEROEuro = ofEuro(0, "€");

export const format = (money: MoneyEuro): string =>
  `${money.amount}${money.currency}`;
