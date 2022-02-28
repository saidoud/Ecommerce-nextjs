import type { NextPage } from 'next';
import Head from 'next/head';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home: NextPage = () => {
    const { t } = useTranslation('common');
    return <div></div>;
};

export const getStaticProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'footer']))
    }
});

export default Home;
