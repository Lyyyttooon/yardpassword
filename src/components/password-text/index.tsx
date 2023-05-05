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

  useEffect(textStyle, [text]);

  return <span>{styleText}</span>;
}
