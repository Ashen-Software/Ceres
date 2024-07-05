import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Call_callIconHover } from '../Call_callIconHover/Call_callIconHover.js';
import { MenuMenu_StatesDefault } from '../MenuMenu_StatesDefault/MenuMenu_StatesDefault.js';
import classes from './NavigationBar.module.css';

interface Props {
  className?: string;
  classes?: {
    menuMenu?: string;
    menuMenu2?: string;
    menuMenu3?: string;
    menuMenu6?: string;
    menu?: string;
    root?: string;
  };
  hide?: {
    iconsStates?: boolean;
    iconsStates2?: boolean;
    iconsStates3?: boolean;
    iconsStates4?: boolean;
    iconsStates5?: boolean;
    iconsStates6?: boolean;
    iconsStates7?: boolean;
    iconsStates8?: boolean;
    iconsStates9?: boolean;
    iconsStates10?: boolean;
    logoSocialzy1?: boolean;
    menuMenu?: boolean;
    menuMenu2?: boolean;
    elementorIconBoxContent?: boolean;
  };
  text?: {
    home?: ReactNode;
    home2?: ReactNode;
    home3?: ReactNode;
    home4?: ReactNode;
  };
}
/* @figmaId 128:12 */
export const NavigationBar: FC<Props> = memo(function NavigationBar(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.logoSocialzy1 && <div className={classes.logoSocialzy1}></div>}
      <div className={`${props.classes?.menu || ''} ${classes.menu}`}>
        <MenuMenu_StatesDefault
          className={`${props.classes?.menuMenu || ''} ${classes.menuMenu}`}
          hide={{
            iconsStates: true,
            iconsStates2: true,
          }}
          text={{
            home: props.text?.home,
          }}
        />
        <MenuMenu_StatesDefault
          className={`${props.classes?.menuMenu2 || ''} ${classes.menuMenu2}`}
          hide={{
            iconsStates: true,
            iconsStates2: true,
          }}
          text={{
            home: props.text?.home2 || <div className={classes.home}>Services</div>,
          }}
        />
        <MenuMenu_StatesDefault
          className={`${props.classes?.menuMenu3 || ''} ${classes.menuMenu3}`}
          hide={{
            iconsStates: true,
            iconsStates2: true,
          }}
          text={{
            home: props.text?.home3 || <div className={classes.home2}>Projects</div>,
          }}
        />
        {!props.hide?.menuMenu && (
          <MenuMenu_StatesDefault
            className={classes.menuMenu4}
            hide={{
              iconsStates: true,
            }}
            text={{
              home: <div className={classes.home3}>Pages</div>,
            }}
          />
        )}
        {!props.hide?.menuMenu2 && (
          <MenuMenu_StatesDefault
            className={classes.menuMenu5}
            hide={{
              iconsStates: true,
            }}
            text={{
              home: <div className={classes.home4}>Blog</div>,
            }}
          />
        )}
        <MenuMenu_StatesDefault
          className={`${props.classes?.menuMenu6 || ''} ${classes.menuMenu6}`}
          hide={{
            iconsStates: true,
            iconsStates2: true,
          }}
          text={{
            home: props.text?.home4 || <div className={classes.home5}>Contact</div>,
          }}
        />
      </div>
      {!props.hide?.elementorIconBoxContent && (
        <div className={classes.elementorIconBoxContent}>
          <Call_callIconHover />
          <div className={classes._918800652059}>+91 8800652059</div>
        </div>
      )}
    </div>
  );
});
