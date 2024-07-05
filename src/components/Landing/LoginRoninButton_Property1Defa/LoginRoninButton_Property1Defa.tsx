import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './LoginRoninButton_Property1Defa.module.css';
import { LogosMetamaskIconIcon } from './LogosMetamaskIconIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    logosMetamaskIcon?: ReactNode;
  };
}
/* @figmaId 146:214 */
export const LoginRoninButton_Property1Defa: FC<Props> = memo(function LoginRoninButton_Property1Defa(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle12}></div>
      <div className={classes.logosMetamaskIcon}>
        {props.swap?.logosMetamaskIcon || <LogosMetamaskIconIcon className={classes.icon} />}
      </div>
      <div className={classes.loginWithMetaMaskWallet}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Login with </span>
          <span className={classes.label2}>MetaMask</span>
          <span className={classes.label3}> wallet</span>
        </p>
      </div>
    </div>
  );
});
