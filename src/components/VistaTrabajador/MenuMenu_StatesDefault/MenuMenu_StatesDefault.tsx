import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconsStates_StatesDefault } from '../IconsStates_StatesDefault/IconsStates_StatesDefault.js';
import classes from './MenuMenu_StatesDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    iconsStates?: boolean;
    iconsStates2?: boolean;
  };
  text?: {
    home?: ReactNode;
  };
}
/* @figmaId 128:30 */
export const MenuMenu_StatesDefault: FC<Props> = memo(function MenuMenu_StatesDefault(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.iconsStates && <IconsStates_StatesDefault />}
      {props.text?.home != null ? props.text?.home : <div className={classes.home}>Home</div>}
      {!props.hide?.iconsStates2 && <IconsStates_StatesDefault />}
    </div>
  );
});
