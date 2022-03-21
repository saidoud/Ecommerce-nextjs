import Commerce from '@chec/commerce.js';

const commercejsPublicKey = process.env.NEXT_PUBLIC_CHEC_PUBLIC_API_KEY as string;
const devEnvironment = process.env.NODE_ENV === 'development';

export const commerce = new Commerce(commercejsPublicKey.toString(), devEnvironment);
