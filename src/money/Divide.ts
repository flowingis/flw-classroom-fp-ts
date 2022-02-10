import * as M from "fp-ts/Magma";
import { MoneyEuro } from "./model";

export declare const Divide: M.Magma<MoneyEuro>;

export declare const DivideAll: (
  startWith: MoneyEuro
) => (as: readonly MoneyEuro[]) => MoneyEuro;
