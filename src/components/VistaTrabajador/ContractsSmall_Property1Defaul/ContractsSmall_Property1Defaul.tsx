import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ContractsSmall_Property1Defaul.module.css';
import { TablerDotsIcon } from './TablerDotsIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    cryptoIpsum4?: ReactNode;
  };
}
/* @figmaId 183:288 */
export const ContractsSmall_Property1Defaul: FC<Props> = memo(function ContractsSmall_Property1Defaul(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle17}></div>
      {props.text?.cryptoIpsum4 != null ? (
        props.text?.cryptoIpsum4
      ) : (
        <div className={classes.cryptoIpsum4}>Crypto ipsum - 04</div>
      )}
      <div className={classes.cryptoIpsumBitcoinEthereumDoge}>
        Crypto ipsum bitcoin ethereum doge litecoin. Revain audius dai terraUSD.
      </div>
      <div className={classes._2922024}>29/02/2024</div>
      <div className={classes.tablerDots}>
        <TablerDotsIcon className={classes.icon} />
      </div>
    </div>
  );
});
