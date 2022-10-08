import React from 'react';
import { useIntl } from 'umi';

export default function Translate (name: string) {
  const { formatMessage } = useIntl();

  return <>{formatMessage({id: name})}</>;
};
