import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Contracs_Property1Default } from './Contracs_Property1Default/Contracs_Property1Default.js';
import { ContractsSmall_Property1Defaul } from './ContractsSmall_Property1Defaul/ContractsSmall_Property1Defaul.js';
import { Line3Icon } from './Line3Icon.js';
import { Line4Icon } from './Line4Icon.js';
import { Line5Icon } from './Line5Icon.js';
import { NavigationBar } from './NavigationBar/NavigationBar.js';
import { Profile_Property1Default } from './Profile_Property1Default/Profile_Property1Default.js';
import classes from './VistaTrabajador.module.css';

interface Props {
  className?: string;
  hide?: {
    logoSocialzy1?: boolean;
    iconsStates?: boolean;
    iconsStates2?: boolean;
    iconsStates3?: boolean;
    iconsStates4?: boolean;
    iconsStates5?: boolean;
    iconsStates6?: boolean;
    menuMenu?: boolean;
    menuMenu2?: boolean;
    iconsStates7?: boolean;
    iconsStates8?: boolean;
    elementorIconBoxContent?: boolean;
  };
}
/* @figmaId 140:178 */
export const VistaTrabajador: FC<Props> = memo(function VistaTrabajador(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle7}></div>
      <div className={classes.rectangle15}></div>
      <NavigationBar
        className={classes.navigationBar}
        classes={{
          menuMenu: classes.menuMenu,
          menuMenu2: classes.menuMenu2,
          menuMenu3: classes.menuMenu3,
          menuMenu6: classes.menuMenu4,
          menu: classes.menu,
        }}
        hide={{
          logoSocialzy1: true,
          menuMenu: true,
          menuMenu2: true,
          elementorIconBoxContent: true,
        }}
        text={{
          home: <div className={classes.home}>Home</div>,
          home2: <div className={classes.home2}>Contracts</div>,
          home3: <div className={classes.home3}>Historic</div>,
          home4: <div className={classes.home4}>Transactions</div>,
        }}
      />
      <Profile_Property1Default className={classes.profile} classes={{ image2: classes.image2 }} />
      <div className={classes.rectangle4}></div>
      <div className={classes.line4}>
        <Line4Icon className={classes.icon} />
      </div>
      <div className={classes.transactionHistory}>Transaction history</div>
      <div className={classes.lOGO}>LOGO</div>
      <div className={classes.rectangle14}></div>
      <div className={classes.currentContracts}>Current contracts</div>
      <div className={classes.line3}>
        <Line3Icon className={classes.icon2} />
      </div>
      <div className={classes.name}>Name</div>
      <div className={classes.description}>Description</div>
      <div className={classes.date}>Date</div>
      <Contracs_Property1Default
        className={classes.contracs}
        text={{
          since2962024To31122024: <div className={classes.since2962024To31122024}>Since 29/02/2024 to 31/12/2024</div>,
        }}
      />
      <Contracs_Property1Default
        className={classes.contracs2}
        text={{
          cryptoIpsum1: <div className={classes.cryptoIpsum1}>Crypto ipsum - 02</div>,
          since2962024To31122024: <div className={classes.since2962024To311220242}>Since 29/02/2024 to 31/12/2024</div>,
        }}
      />
      <Contracs_Property1Default
        className={classes.contracs3}
        text={{
          cryptoIpsum1: <div className={classes.cryptoIpsum12}>Crypto ipsum - 03</div>,
          since2962024To31122024: <div className={classes.since2962024To311220243}>Since 29/02/2024 to 31/12/2024</div>,
        }}
      />
      <div className={classes.time}>Time</div>
      <div className={classes.type}>Type</div>
      <div className={classes.asset}>Asset</div>
      <div className={classes.amount}>Amount</div>
      <div className={classes.destination}>Destination</div>
      <div className={classes.txID}>TxID</div>
      <div className={classes.rectangle16}></div>
      <div className={classes.line5}>
        <Line5Icon className={classes.icon3} />
      </div>
      <div className={classes.pendingContracts}>Pending contracts</div>
      <div className={classes.name2}>Name</div>
      <div className={classes.date2}>Date</div>
      <div className={classes.description2}>Description</div>
      <ContractsSmall_Property1Defaul className={classes.contractsSmall} />
      <ContractsSmall_Property1Defaul
        className={classes.contractsSmall2}
        text={{
          cryptoIpsum4: <div className={classes.cryptoIpsum4}>Crypto ipsum - 05</div>,
        }}
      />
    </div>
  );
});
