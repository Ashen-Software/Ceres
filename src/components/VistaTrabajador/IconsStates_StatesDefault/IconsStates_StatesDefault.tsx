import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconsStates_StatesDefault.module.css';
import { VuesaxLinearArrowDownIcon } from './VuesaxLinearArrowDownIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 128:48 */
export const IconsStates_StatesDefault: FC<Props> = memo(function IconsStates_StatesDefault(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.vuesaxLinearArrowDown}>
        <VuesaxLinearArrowDownIcon className={classes.icon} />
      </div>
    </div>
  );
});
