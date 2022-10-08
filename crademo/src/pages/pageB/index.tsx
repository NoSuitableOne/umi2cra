import React from 'react';
import { Checkbox, DatePicker, Switch } from 'antd';
import moment from 'moment';
import Translate from '@/utils/translate';
import styles from './style.less';

export default function PageB() {
  return (
    <div>
      <h1 className={styles.title}>{Translate('b.pageName')}</h1>
      <Checkbox>{Translate('b.checkbox')}</Checkbox>
      <DatePicker defaultValue={moment()} />
      <Switch />
      <p>{Translate('b.content')}</p>
    </div>
  );
}
