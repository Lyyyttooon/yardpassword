import { Switch, Form, Slider, InputNumber } from 'antd';
import { useState } from 'react';

import { generateConfig } from '@/utils/password';

type onChange = (data: generateConfig) => void;

interface Props {
  generateConfig: generateConfig;
  onChange: onChange;
}

export default function PasswordForm(props: Props) {
  const { generateConfig, onChange } = props;

  const [inputValue, setInputValue] = useState(generateConfig.textLength);

  const onSliderChange = (newValue: number | null) => {
    if (newValue != null) {
      setInputValue(newValue);
      onChange({
        ...generateConfig,
        textLength: newValue,
      });
    }
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      style={{ width: 600 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item label="长度">
        <Slider
          min={5}
          max={128}
          onChange={onSliderChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
        />
        <InputNumber
          min={5}
          max={128}
          style={{ margin: '0 16px' }}
          value={inputValue}
          onChange={onSliderChange}
        />
      </Form.Item>
      <Form.Item label="大写字母">
        <Switch
          checked={generateConfig.uppercase}
          onChange={(e) =>
            onChange({
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
            onChange({
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
            onChange({
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
            onChange({
              ...generateConfig,
              specialCharacter: e,
            })
          }
        />
      </Form.Item>
    </Form>
  );
}
