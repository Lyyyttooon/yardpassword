import { reserveChar, getRandomNumber } from '@/utils/password';
import { useEffect } from 'react';

export default function PasswordGenerator() {
  console.log(getRandomNumber(0, 8));

  // function passwordGenerat() {}

  useEffect(() => {
    console.log('执行useEffect');
    // console.log(getRandomNumber(0, 8));
  });

  return (
    <div>
      <h1>Hello, This is password generator</h1>
    </div>
  );
}
