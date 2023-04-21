interface ReserveChar {
  readonly [uppercase: string]: string;
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

interface generateConfig {
  readonly [uppercase: string]: boolean;
  readonly lowercase: boolean;
  readonly number: boolean;
  readonly specialCharacter: boolean;
}

// defaultConfig 默认配置
export const defaultConfig: generateConfig = {
  uppercase: true,
  lowercase: true,
  number: true,
  specialCharacter: false,
};

// getRandomNumber 获取随机数字，默认(0-255)
export function getRandomNumber(minNum: number = 0, maxNum: number = 255): number {
  // 规范化最大最小范围
  minNum = Math.ceil(minNum);
  maxNum = Math.floor(maxNum);
  if (maxNum > 255) {
    maxNum = 255;
  }
  if (minNum < 0) {
    minNum = 0;
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
  }
  return (num % maxNum) + minNum;
}

// generatePassword 生成密码
export function generatePassword(textLength: number = 16, curConfig: generateConfig) {
  let selectArray = [];
  for (let i in curConfig) {
    if (!curConfig[i]) {
      continue;
    }
    selectArray.push(i);
  }
  let password = getRandomText(textLength, selectArray);

  // 检查生成的密码是否符合规定
  for (let i = 0; i < selectArray.length; i++) {
    let reserveText = reserveChar[selectArray[i]];
    let hasChar = false;
    for (let x = 0; x < password.length; x++) {
      if (reserveText.indexOf(password[x])) {
        hasChar = true;
        continue;
      }
    }
    if (!hasChar) {
      password = generatePassword(textLength, curConfig);
    }
  }
  return password;
}

// getRandomText 获取随机字符
export function getRandomText(textLength: number = 16, selectArray: Array<string>) {
  let text = '';
  for (let i = 0; i < textLength; i++) {
    let num = getRandomNumber(0, selectArray.length);
    let textArray = reserveChar[selectArray[num]];
    text = text + textArray[getRandomNumber(0, textArray.length)];
  }
  return text;
}
