import * as M from "fp-ts/Magma";
import { MoneyEuro } from "./model";

export declare const Sub: M.Magma<MoneyEuro>;

export declare const SubAll: (
  startWith: MoneyEuro
) => (as: readonly MoneyEuro[]) => MoneyEuro;
