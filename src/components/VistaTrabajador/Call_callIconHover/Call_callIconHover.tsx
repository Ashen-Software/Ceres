import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Call_callIconHover.module.css';
import { VuesaxBoldCallIcon } from './VuesaxBoldCallIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 128:65 */
export const Call_callIconHover: FC<Props> = memo(function Call_callIconHover(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.vuesaxBoldCall}>
        <VuesaxBoldCallIcon className={classes.icon} />
      </div>
    </div>
  );
});
