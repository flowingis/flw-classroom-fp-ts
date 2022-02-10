import { Monoid } from "fp-ts/Monoid";
import { MoneyEuro } from "./model";

export declare const Multiply: Monoid<MoneyEuro>;

export declare const MultiplyAll: (as: readonly MoneyEuro[]) => MoneyEuro;
