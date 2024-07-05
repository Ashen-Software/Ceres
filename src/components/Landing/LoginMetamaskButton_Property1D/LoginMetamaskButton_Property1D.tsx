import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './LoginMetamaskButton_Property1D.module.css';
import { TokenBrandedRoninIcon } from './TokenBrandedRoninIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    tokenBrandedRonin?: ReactNode;
  };
}
/* @figmaId 152:265 */
export const LoginMetamaskButton_Property1D: FC<Props> = memo(function LoginMetamaskButton_Property1D(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle13}></div>
      <div className={classes.loginWithRoninWallet}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Login with </span>
          <span className={classes.label2}>Ronin</span>
          <span className={classes.label3}> wallet</span>
        </p>
      </div>
      <div className={classes.tokenBrandedRonin}>
        {props.swap?.tokenBrandedRonin || <TokenBrandedRoninIcon className={classes.icon} />}
      </div>
    </div>
  );
});
