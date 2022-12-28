export class ErrNotInitialized extends Error {
  constructor() {
    super("HWApp not initialised, call init() first");
  }
}
