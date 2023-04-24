import { Switch, Form } from 'antd';
import { generateConfig } from '@/utils/password';

type onChange = (data: object) => void;

interface Props {
  generateConfig: generateConfig;
  onChange: onChange;
}

export default function PasswordForm(props: Props) {
  const { generateConfig, onChange } = props;

  return (
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
