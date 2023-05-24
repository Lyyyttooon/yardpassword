import { useEffect, useState } from 'react';

interface item {
  name: string;
  website: string;
  password: string;
  desc: string;
}

export interface kindData {
  name: string;
  items: Array<item>;
}

interface Props {
  kindData: kindData;
}

export default function PasswordItems(props: Props) {
  const ele: JSX.Element[] = [];

  const { kindData } = props;
  const [listEle, setListEle] = useState(ele);

  useEffect(dataList, [kindData]);

  function dataList() {
    if (!kindData.items) return;

    const items: JSX.Element[] = [];

    for (let i = 0; i < kindData.items.length; i++) {
      items.push(<div>{kindData.items[i].name}</div>);
    }
    setListEle(items);
  }

  return <div>{listEle}</div>;
}
