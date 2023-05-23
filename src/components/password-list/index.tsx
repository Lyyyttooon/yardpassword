import { useEffect, useState } from 'react';
import PasswordItems from '../password-items';
import { kindData } from '../password-items';

interface Props {
  listData: Array<kindData>;
}

export default function PasswordList(props: Props) {
  const { listData } = props;
  const ele: JSX.Element[] = [];

  const [passwordItems, setPasswordItems] = useState(ele);

  useEffect(showList, [listData]);

  function showList() {
    const items: JSX.Element[] = [];
    for (let i = 0; i < listData.length; i++) {
      items.push(<PasswordItems kindData={listData[i]}></PasswordItems>);
    }
    setPasswordItems(items);
  }

  return <>{passwordItems}</>;
}
