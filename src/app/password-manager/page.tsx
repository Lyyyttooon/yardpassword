'use client';

import PasswordList from '@/components/password-list';
import { Button } from 'antd';

export default function PasswordManager() {
  const listData = [
    {
      name: '重要',
    },
    {
      name: '通用',
    },
  ];

  return (
    <>
      <div>
        <Button>新增</Button>
        <Button>回收站</Button>
      </div>
      <div>
        <PasswordList listData={listData}></PasswordList>
      </div>
    </>
  );
}
