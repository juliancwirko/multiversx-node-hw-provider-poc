import { HWProvider } from "./hwProvider";
import { ISignableMessage } from "./interface";
import { SignableMessage, Address } from "@elrondnetwork/erdjs";

const login = async (hwProvider: HWProvider) => {
  console.log('Logging in, confirm on your device!');
  return await hwProvider.login({ addressIndex: 0 });
};

const signMessage = async (
  hwProvider: HWProvider,
  message: ISignableMessage
) => {
  return await hwProvider.signMessage(message);
};

const testing = async () => {
  try {
    const hwProvider = new HWProvider();
    await hwProvider.init();
    const address = await login(hwProvider);

    const signableMessage = new SignableMessage({
      message: Buffer.from("testing testing"),
      address: new Address(address),
    });

    console.log('Signing message, confirm on your device!');
    const message = await signMessage(hwProvider, signableMessage);

    console.log("signed message: ", message);
  } catch (e) {
    const error = e as unknown as Error;
    console.log('Error: ', error.message);
  }
};

testing();
