import styles from './index.less';
import { useSelector, useDispatch } from 'umi';
import Translate from '@/utils/translate';

export default function PageC() {
  const dispatch = useDispatch();

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
