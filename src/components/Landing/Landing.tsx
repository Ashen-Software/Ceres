import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { IcBaselineEmailIcon } from './IcBaselineEmailIcon.js';
import { IcBaselineFacebookIcon } from './IcBaselineFacebookIcon.js';
import classes from './Landing.module.css';
import { LoginMetamaskButton_Property1D } from './LoginMetamaskButton_Property1D/LoginMetamaskButton_Property1D.js';
import { LoginRoninButton_Property1Defa } from './LoginRoninButton_Property1Defa/LoginRoninButton_Property1Defa.js';
import { LogosMetamaskIconIcon } from './LogosMetamaskIconIcon.js';
import { MaterialSymbolsInfoOutlineIcon } from './MaterialSymbolsInfoOutlineIcon.js';
import { MdiGithubIcon } from './MdiGithubIcon.js';
import { MdiInstagramIcon } from './MdiInstagramIcon.js';
import { SimpleIconsXIcon } from './SimpleIconsXIcon.js';
import { TokenBrandedRoninIcon } from './TokenBrandedRoninIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 140:169 */
export const Landing: FC<Props> = memo(function Landing(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.rectangle7}></div>
      <div className={classes.rectangle3}></div>
      <div className={classes.rectangle4}></div>
      <div className={classes.rectangle11}></div>
      <div className={classes.bREVEDESCRIPCIONDELPROYECTO}>BREVE DESCRIPCIÓN DEL PROYECTO</div>
      <div className={classes.rectangle12}></div>
      <div className={classes.lOGO}>LOGO</div>
      <LoginRoninButton_Property1Defa
        className={classes.loginRoninButton}
        swap={{
          logosMetamaskIcon: <LogosMetamaskIconIcon className={classes.icon} />,
        }}
      />
      <LoginMetamaskButton_Property1D
        className={classes.loginMetamaskButton}
        swap={{
          tokenBrandedRonin: <TokenBrandedRoninIcon className={classes.icon2} />,
        }}
      />
      <div className={classes.doesnTHaveAnAccountSignUp}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Doesn’t have an account? </span>
          <span className={classes.label2}>Sign up</span>
        </p>
      </div>
      <div className={classes.needHelpContactUs}>
        <p className={classes.labelWrapper2}>
          <span className={classes.label3}>Need help? </span>
          <span className={classes.label4}>Contact us</span>
        </p>
      </div>
      <div className={classes.materialSymbolsInfoOutline}>
        <MaterialSymbolsInfoOutlineIcon className={classes.icon3} />
      </div>
      <div className={classes.byContinuingYouAgreeToOurTerms}>
        <p className={classes.labelWrapper3}>
          <span className={classes.label5}>By continuing, you agree to our </span>
          <span className={classes.label6}>Terms of use</span>
        </p>
      </div>
      <div className={classes.line1}></div>
      <div className={classes.rectangle9}></div>
      <div className={classes.ashenSoftware}>Ashen software</div>
      <div className={classes.icBaselineEmail}>
        <IcBaselineEmailIcon className={classes.icon4} />
      </div>
      <div className={classes.icBaselineFacebook}>
        <IcBaselineFacebookIcon className={classes.icon5} />
      </div>
      <div className={classes.mdiInstagram}>
        <MdiInstagramIcon className={classes.icon6} />
      </div>
      <div className={classes.mdiGithub}>
        <MdiGithubIcon className={classes.icon7} />
      </div>
      <div className={classes.simpleIconsX}>
        <SimpleIconsXIcon className={classes.icon8} />
      </div>
      <div className={classes.line3}></div>
      <div className={classes.aboutUs}>About us</div>
      <div className={classes.cryptoIpsumBitcoinEthereumDoge}>
        Crypto ipsum bitcoin ethereum dogecoin litecoin. Ox revain dai audius ankr terraUSD. Aave WAX flow kava tether
        filecoin.
      </div>
      <div className={classes.line4}></div>
    </div>
  );
});
