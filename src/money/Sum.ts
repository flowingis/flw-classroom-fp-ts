import { Monoid } from "fp-ts/Monoid";
import { MoneyEuro } from "./model";

export declare const Sum: Monoid<MoneyEuro>;

export declare const SumAll: (as: readonly MoneyEuro[]) => MoneyEuro;
