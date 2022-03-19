import Commerce from '@chec/commerce.js';

const commercejsPublicKey = process.env.NEXT_PUBLIC_CHEC_PUBLIC_API_KEY as string;

export const commerce = new Commerce(commercejsPublicKey.toString(), true);
