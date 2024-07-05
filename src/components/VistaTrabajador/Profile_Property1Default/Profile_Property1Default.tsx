import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Profile_Property1Default.module.css';

interface Props {
  className?: string;
  classes?: {
    image2?: string;
    root?: string;
  };
}
/* @figmaId 168:344 */
export const Profile_Property1Default: FC<Props> = memo(function Profile_Property1Default(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.image2 || ''} ${classes.image2}`}></div>
    </div>
  );
});
