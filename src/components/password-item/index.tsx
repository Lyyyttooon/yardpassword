import { item } from '@/components/password-items';

import { ScheduleOutlined } from '@ant-design/icons';

interface Props {
  item: item;
}

export default function PasswordItem(props: Props) {
  return (
    <div className="flex justify-between w-full px-[3px]">
      <div className="text-center leading-loose">
        <ScheduleOutlined />
        <span className="ml-[3px]">{props.item.name}</span>
      </div>
      <div>
        <span>复制</span>
        <span className="ml-[3px]">更多</span>
      </div>
    </div>
  );
}
