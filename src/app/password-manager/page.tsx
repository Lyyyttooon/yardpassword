'use client';

import PasswordList from '@/components/password-list';
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { kindData } from '@/components/password-items';

export default function PasswordManager() {
  const listData: kindData[] = [
    {
      name: '重要',
      items: [
        {
          name: '百度',
          website: 'www.baidu.com',
          password: '12345678',
          desc: '描述',
        },
      ],
    },
    {
      name: '通用',
      items: [],
    },
  ];

  return (
    <div className="w-7/12 max-w-screen-sm">
      <h1 className="text-3xl text-[#262626] mb-[48px]">密码库</h1>
      <div className="flex justify-between mb-[16px]">
        <Input className="w-[320px]" placeholder="搜索名称" suffix={<SearchOutlined />}></Input>
        <div className="flex">
          <Button className="ml-[6px]">新增</Button>
          <Button className="ml-[6px]">回收站</Button>
        </div>
      </div>
      <div>
        <PasswordList listData={listData}></PasswordList>
      </div>
    </div>
  );
}
