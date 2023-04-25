import { generatePassword, defaultConfig } from '@/utils/password';
import { Button, Switch, Form } from 'antd';
import { useEffect, useState } from 'react';

export default function PasswordGenerator() {
  const [passwordText, setPasswordText] = useState('');
  const [generateConfig, setGenerateConfig] = useState({ ...defaultConfig });

  // 刷新按钮
  function flushClick() {
    setPasswordText(generatePassword(16, generateConfig));
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
    setPasswordText(generatePassword(16, generateConfig));
  }, [generateConfig]);

  return (
    <div>
      <h1>{passwordText}</h1>
      <Form
        name="basic"
        labelCol={{ span: 16 }}
        wrapperCol={{ span: 24 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item label="大写字母">
          <Switch
            checked={generateConfig.uppercase}
            onChange={(e) =>
              setGenerateConfig({
                ...generateConfig,
                uppercase: e,
              })
            }
          />
        </Form.Item>
        <Form.Item label="小写字母">
          <Switch
            checked={generateConfig.lowercase}
            onChange={(e) =>
              setGenerateConfig({
                ...generateConfig,
                lowercase: e,
              })
            }
          />
        </Form.Item>
        <Form.Item label="数字">
          <Switch
            checked={generateConfig.number}
            onChange={(e) =>
              setGenerateConfig({
                ...generateConfig,
                number: e,
              })
            }
          />
        </Form.Item>
        <Form.Item label="特殊字符">
          <Switch
            checked={generateConfig.specialCharacter}
            onChange={(e) =>
              setGenerateConfig({
                ...generateConfig,
                specialCharacter: e,
              })
            }
          />
        </Form.Item>
      </Form>
      <Button onClick={flushClick}>刷新</Button>
    </div>
  );
}
