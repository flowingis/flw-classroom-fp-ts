import * as Se from "fp-ts/Semigroup";
import { MoneyEuro } from "./model";

export declare const Max: Se.Semigroup<MoneyEuro>;

export declare const MaxAll: <MoneyEuro>(
  S: Se.Semigroup<MoneyEuro>
) => (startWith: MoneyEuro) => (as: readonly MoneyEuro[]) => MoneyEuro;
