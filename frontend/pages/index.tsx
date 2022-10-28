import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Editor from '../components/codeEditor';
import Header from '../components/Header';
import NavBar from '../components/navbar';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
    const router = useRouter();
    console.log('query', router.query);
    return (
        <div>
            <Head>
                <title>Code Share</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <>
                <div className='min-h-full'>
                    {/* Header */}
                    <Header />

                    {/* Content */}
                    <Editor />
                </div>
            </>
        </div>
    );
};

export default Home;
