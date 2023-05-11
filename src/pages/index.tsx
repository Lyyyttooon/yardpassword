import Head from 'next/head';
import PasswordGenerator from './password-generator';

export default function Index() {
  return (
    <>
      <Head>
        <title>YardPassword</title>
      </Head>
      <main>
        <PasswordGenerator></PasswordGenerator>
      </main>
    </>
  );
}
