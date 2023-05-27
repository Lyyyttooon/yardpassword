import { Form, InputNumber, Slider, Switch } from 'antd';
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
      wrapperCol={{ span: 20 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      className="w-full"
    >
      <Form.Item label="长度">
        <span className="flex justify-between">
          <Slider
            className="w-10/12"
            min={5}
            max={128}
            onChange={onSliderChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
          />
          <InputNumber
            className="w-2/12"
            min={5}
            max={128}
            style={{ margin: '0 16px' }}
            value={inputValue}
            onChange={onSliderChange}
          />
        </span>
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
