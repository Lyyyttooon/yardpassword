import { useEffect, useState } from 'react';
import { reserveChar } from '@/utils/password';

interface Props {
  text: string;
}

export default function PasswordText(props: Props) {
  const { text } = props;
  const ele: JSX.Element[] = [];

  const [styleText, setStyleText] = useState(ele);

  function textStyle() {
    const items: JSX.Element[] = [];
    for (let i = 0; i < text.length; i++) {
      items.push(spanStyle(text[i]));
    }
    setStyleText(items);
  }

  function spanStyle(i: string) {
    if (reserveChar.number.includes(i)) {
      return <span style={{ color: '#00e0e0' }}>{i}</span>;
    } else {
      return <span>{i}</span>;
    }
  }

  useEffect(textStyle, [text]);

  return <span>{styleText}</span>;
}
