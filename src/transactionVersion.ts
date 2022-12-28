import { TRANSACTION_VERSION_TX_HASH_SIGN } from "./constants";
import { ITransactionVersion } from "./interface";

export class TransactionVersion implements ITransactionVersion {
  private readonly value: number;

  constructor(value: number) {
    this.value = value;
  }

  static withTxHashSignVersion(): TransactionVersion {
    return new TransactionVersion(TRANSACTION_VERSION_TX_HASH_SIGN);
  }

  valueOf(): number {
    return this.value;
  }
}
