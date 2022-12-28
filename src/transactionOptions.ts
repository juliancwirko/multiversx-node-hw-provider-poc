import { TRANSACTION_OPTIONS_TX_HASH_SIGN } from "./constants";
import { ITransactionOptions } from "./interface";

export class TransactionOptions implements ITransactionOptions {
  private readonly value: number;

  constructor(value: number) {
    this.value = value;
  }

  static withTxHashSignOptions(): TransactionOptions {
    return new TransactionOptions(TRANSACTION_OPTIONS_TX_HASH_SIGN);
  }

  valueOf(): number {
    return this.value;
  }
}
