import Head from 'next/head';
import { useEffect, useState } from 'react';

import PasswordForm from '@/components/password-form';
import PasswordText from '@/components/password-text';

import { generatePassword, defaultConfig } from '@/utils/password';

export default function PasswordGenerator() {
  const [passwordText, setPasswordText] = useState('');
  const [generateConfig, setGenerateConfig] = useState({ ...defaultConfig });

  // 刷新按钮
  function flushClick() {
    setPasswordText(generatePassword(generateConfig));
  }

  useEffect(() => {
    let hasTrue = false;
    for (const i in generateConfig) {
      if (i !== 'textLength' && generateConfig[i]) {
        hasTrue = true;
      }
    }
    if (!hasTrue) {
      setGenerateConfig({ ...generateConfig, lowercase: true });
      setPasswordText(generatePassword({ ...generateConfig, lowercase: true }));
      return;
    }
    setPasswordText(generatePassword(generateConfig));
  }, [generateConfig]);

  return (
    <>
      <Head>
        <title>YardPassword</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center p-24">
        <PasswordText text={passwordText} onReloadClick={flushClick}></PasswordText>
        <PasswordForm generateConfig={generateConfig} onChange={setGenerateConfig} />
      </main>
    </>
  );
}
