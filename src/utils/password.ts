interface ReserveChar {
  readonly uppercase: string;
  readonly lowercase: string;
  readonly number: string;
  readonly specialCharacter: string;
}

// reserveChar 备用字符
export const reserveChar: ReserveChar = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  number: '0123456789',
  specialCharacter: '!@#$%^&*',
};

// getRandomNumber 获取随机数字，默认(0-255)
export function getRandomNumber(minNum: number = 0, maxNum: number = 255): number {
  minNum = Math.ceil(minNum);
  maxNum = Math.floor(maxNum);
  if (maxNum > 255) {
    maxNum = 255;
  }
  if (minNum != 0) {
    maxNum = maxNum - minNum;
  }
  let numArray = new Uint8Array(1);
  if (typeof window === 'undefined' || window.crypto == undefined) {
    return Math.random() * maxNum + minNum;
  }
  window.crypto.getRandomValues(numArray);
  let num = numArray[0];
  if (num < maxNum) {
    return num + minNum;
  } else {
    num = (num % maxNum) + minNum;
  }
  return num;
}
