import { item } from '@/components/password-items';

interface Props {
  item: item;
}

export default function PasswordItem(props: Props) {
  return <div>{props.item.name}</div>;
}
