'use client';

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
    <div className="w-full max-w-screen-sm">
      <h1 className="text-3xl text-[#262626] mb-[32px]">生成器</h1>
      <PasswordText text={passwordText} onReloadClick={flushClick}></PasswordText>
      <PasswordForm generateConfig={generateConfig} onChange={setGenerateConfig} />
    </div>
  );
}
