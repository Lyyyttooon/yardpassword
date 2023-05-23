import { useEffect, useState } from 'react';
import { reserveChar } from '@/utils/password';
import { ReloadOutlined, CopyOutlined } from '@ant-design/icons';
import { message } from 'antd';

type onClick = () => void;

interface Props {
  text: string;
  onReloadClick: onClick;
}

export default function PasswordText(props: Props) {
  const { text, onReloadClick } = props;
  const ele: JSX.Element[] = [];

  const [messageApi, contextHolder] = message.useMessage();

  const [styleText, setStyleText] = useState(ele);

  function textStyle() {
    const items: JSX.Element[] = [];
    for (let i = 0; i < text.length; i++) {
      items.push(spanStyle(text[i], i));
    }
    setStyleText(items);
  }

  function spanStyle(i: string, id: number) {
    if (reserveChar.number.includes(i)) {
      return (
        <span key={id} style={{ color: '#1677ff' }}>
          {i}
        </span>
      );
    } else if (reserveChar.specialCharacter.includes(i)) {
      return (
        <span key={id} style={{ color: '#d9363e' }}>
          {i}
        </span>
      );
    } else {
      return <span key={id}>{i}</span>;
    }
  }

  function reloadClick() {
    onReloadClick();
  }

  function copyClick() {
    navigator.clipboard.writeText(text).then(
      function () {
        messageApi.info('复制成功！');
      },
      function (err: Error) {
        messageApi.info('复制失败，原因：' + err);
      }
    );
  }

  useEffect(textStyle, [text]);

  return (
    <>
      {contextHolder}
      <div className="flex justify-between w-full break-all p-2 border rounded-lg border-[#cbd5e1] mb-3">
        <span className="w-full">{styleText}</span>
        <span className="flex justify-evenly items-center w-[60px]">
          <ReloadOutlined
            className="hover:text-gray-700 active:text-gray-500"
            onClick={reloadClick}
          />
          <CopyOutlined className="hover:text-gray-700 active:text-gray-500" onClick={copyClick} />
        </span>
      </div>
    </>
  );
}
