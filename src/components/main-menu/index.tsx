import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link } from 'umi';

const items: MenuProps['items'] = [
  {
    label: <Link to="/">密码库</Link>,
    key: 'password-manager',
  },
  {
    label: <Link to="/password-generator">生成器</Link>,
    key: 'password-generator',
  },
  {
    label: <Link to="/settings">设置</Link>,
    key: 'settings',
  },
];

export default function MainMenu() {
  return <Menu className="h-full w-[320px]" mode="inline" items={items} />;
}
