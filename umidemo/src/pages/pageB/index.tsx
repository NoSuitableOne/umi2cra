import styles from './index.less';
import { Checkbox, Switch } from 'antd';
import Translate from '@/utils/translate';

export default function PageB() {
  return (
    <div>
      <h1 className={styles.title}>{Translate('b.pageName')}</h1>
      <Checkbox>{Translate('b.checkbox')}</Checkbox>
      <Switch />
      <p>{Translate('b.content')}</p>
    </div>
  );
}
