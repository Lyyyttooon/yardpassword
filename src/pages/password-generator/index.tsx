import { Button } from 'antd';
import { useEffect, useState } from 'react';

import PasswordForm from '@/components/password-form';
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
      if (generateConfig[i]) {
        hasTrue = true;
      }
    }
    if (!hasTrue) {
      generateConfig.lowercase = true;
    }
    setPasswordText(generatePassword(generateConfig));
  }, [generateConfig]);

  return (
    <div>
      <h1>{passwordText}</h1>
      <PasswordForm generateConfig={generateConfig} onChange={setGenerateConfig} />
      <Button onClick={flushClick}>刷新</Button>
    </div>
  );
}
