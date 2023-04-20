import { getRandomNumber, getRandomText } from '@/utils/password';
import { Button } from 'antd';
import { useEffect, useState } from 'react';

export default function PasswordGenerator() {
  const [passwordText, setPasswordText] = useState('password');

  function flushClick() {
    console.log(getRandomNumber(0, 8));
    setPasswordText('new-password');
  }

  useEffect(() => {
    console.log('执行useEffect');
    console.log(getRandomText(16, ['uppercase', 'lowercase', 'number', 'specialCharacter']));
  });

  return (
    <div>
      <h1>{passwordText}</h1>
      <Button onClick={flushClick}>刷新</Button>
    </div>
  );
}
