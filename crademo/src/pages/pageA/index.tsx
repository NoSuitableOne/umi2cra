import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, Spin } from 'antd';
import Translate from '@/utils/translate';
import styles from './style.less';

export default function PageA() {
  const dispatch = useDispatch();

  const { a: aProps, all: allProps } = useSelector(state => state);

  const [ str, setStr ] = useState<string>('');

  function setV() {
    console.log(process.env.API);
    dispatch({
      type: 'a/setM',
      payload: str,
    });
    setStr('');
  }

  return (
    <div>
      <Spin spinning={!!allProps.loading}>
        <h1 className={styles.title}>Page A</h1>
        <Input onChange={e => setStr(e.target.value)} value={str} />
        <Button type={'primary'} onClick={setV}>{Translate('a.btn')}</Button>
        <p>{Translate('a.content')}: {aProps.m}</p>
      </Spin>
    </div>
  );
}
