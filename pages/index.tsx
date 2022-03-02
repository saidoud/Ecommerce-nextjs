import type { NextPage } from 'next';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';

const Home: NextPage = () => {
    const { t } = useTranslation('common');
    return (
        <div>
            <motion.h2
                initial={{
                    color: 'black',
                    y: -100
                }}
                animate={{
                    fontSize: 100,
                    color: 'red',
                    y: 0
                }}
            >
                Framer Motion Application
            </motion.h2>
        </div>
    );
};

export const getStaticProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'footer']))
    }
});

export default Home;
