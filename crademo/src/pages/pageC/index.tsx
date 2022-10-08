import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Translate from '@/utils/translate';
import styles from './style.less';

export default function PageC() {

  const cProps = useSelector(state => state.c);

  return (
    <div>
      <h1 className={styles.title}>{Translate('c.pageName')}</h1>
      <p>
        {Translate('c.content')}
        <span>cValue: {cProps.value}</span>
      </p>
    </div>
  );
}
