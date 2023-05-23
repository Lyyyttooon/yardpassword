import { useEffect, useState } from 'react';
import PasswordItem from '../password-items';

interface Props {
  listData: Array<object>;
}

export default function PasswordList(props: Props) {
  const { listData } = props;
  const ele: JSX.Element[] = [];

  const [passwordItems, setPasswordItems] = useState(ele);

  useEffect(showList, [listData]);

  function showList() {
    const items: JSX.Element[] = [];
    for (let i = 0; i < listData.length; i++) {
      items.push(<PasswordItem></PasswordItem>);
    }
    setPasswordItems(items);
  }

  return <>{passwordItems}</>;
}
