import { Button, message } from 'antd';
import { useEffect, useState } from 'react';

import PasswordForm from '@/components/password-form';
import { generatePassword, defaultConfig } from '@/utils/password';

export default function PasswordGenerator() {
  const [passwordText, setPasswordText] = useState('');
  const [generateConfig, setGenerateConfig] = useState({ ...defaultConfig });
  const [messageApi, contextHolder] = message.useMessage();

  // 刷新按钮
  function flushClick() {
    setPasswordText(generatePassword(generateConfig));
  }

  // 复制按钮
  function copyClick() {
    navigator.clipboard.writeText(passwordText).then(
      function () {
        messageApi.info('复制成功！');
      },
      function (err: Error) {
        messageApi.info('复制失败，原因：' + err);
      }
    );
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
    <>
      {contextHolder}
      <div>
        <h1>{passwordText}</h1>
        <PasswordForm generateConfig={generateConfig} onChange={setGenerateConfig} />
        <Button onClick={flushClick}>刷新</Button>
        <Button style={{ marginLeft: '3px' }} onClick={copyClick}>
          复制
        </Button>
      </div>
    </>
  );
}
