import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Contracs_Property1Default.module.css';
import { TablerDotsIcon } from './TablerDotsIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    since2962024To31122024?: ReactNode;
    cryptoIpsum1?: ReactNode;
  };
}
/* @figmaId 175:293 */
export const Contracs_Property1Default: FC<Props> = memo(function Contracs_Property1Default(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle15}></div>
      <div className={classes.cryptoIpsumBitcoinEthereumDoge}>
        Crypto ipsum bitcoin ethereum dogecoin litecoin. Ox revain dai audius ankr terraUSD. Aave WAX flow kava tether
        filecoin.
      </div>
      {props.text?.cryptoIpsum1 != null ? (
        props.text?.cryptoIpsum1
      ) : (
        <div className={classes.cryptoIpsum1}>Crypto ipsum - 01</div>
      )}
      {props.text?.since2962024To31122024 != null ? (
        props.text?.since2962024To31122024
      ) : (
        <div className={classes.since2962024To31122024}>Since 29/06/2024 to 31/12/2024</div>
      )}
      <div className={classes.tablerDots}>
        <TablerDotsIcon className={classes.icon} />
      </div>
    </div>
  );
});
