import classes from './styles.module.scss';
import ButtonBlack from '../Buttons/ButtonBlack/ButtonBlack';
import { useTranslation } from "react-i18next";


function Subscribe ({white, black}) {

  const {t} = useTranslation();

    return (
        <div>
            {black && <div className={classes.subscribe_part}>
                <div className={classes.subscribe_header}>
                    {t("subscribe_text_sec")}
                </div>
                <div className={classes.subscribe_privacy}>
                    <span>{t("subscribe_policy")}</span>
                    <span>
                        <a href='#'>{t("privacy_policy")}</a>
                    </span>
                </div>
                <div className={classes.subscribe_form_part}>
                    <form>
                        <input type="email" placeholder={t("write_email")} />
                        <ButtonBlack text={t("subscribe")}/>    
                    </form>
                </div>
            </div>}
            {white && <div className={classes.subscribe_part_white}>
                <div className={classes.subscribe_header_sec}>
                    {t("subscribe_text_sec")}
                </div>
                <div className={classes.subscribe_right}>
                    <div className={classes.subscribe_form_part_sec}>
                        <form>
                            <input type="email" placeholder={t("write_email")} />
                            <ButtonBlack text={t("subscribe")}/>    
                        </form>
                    </div>
                    <div className={classes.subscribe_privacy_sec}>
                        <div>{t("subscribe_text")}</div>
                        <div>
                            <a>{t("privacy_policy")}</a>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    );
  }
  export default Subscribe