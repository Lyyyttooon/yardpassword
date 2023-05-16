import Link from 'next/link';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

const items: MenuProps['items'] = [
  {
    label: <Link href="/password-manager">密码库</Link>,
    key: 'password-manager',
  },
  {
    label: <Link href="/password-generator">生成器</Link>,
    key: 'password-generator',
  },
  {
    label: <Link href="/settings">设置</Link>,
    key: 'settings',
  },
];

export default function MainMenu() {
  return <Menu className="h-full w-[320px]" mode="inline" items={items} />;
}
