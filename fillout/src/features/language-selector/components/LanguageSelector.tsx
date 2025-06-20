import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import usFlag from '../images/flag-us.svg';
import jpFlag from '../images/flag-jp.svg';

const LanguageSelector = () => {
    const { t } = useTranslation();

    const changeLanguage = (lang: string): void => {
        i18next.changeLanguage(lang).then(() => {
            i18next.options.lng = lang;
        });
    };

    const flagClasses: string = "flex gap-2 items-center " +
                                "h-[32px] py-1 px-2.5 " +
                                "cursor-pointer box-border shadow-sm " +
                                "rounded-lg border-[1.5px] bg-white text-[#1a1a1a] border-[#e1e1e1] " +
                                "focus:outline-2 focus:outline-[#2F72E240] focus:border-[#2F72E2]";

    return (
        <div className="flex gap-2 text-sm">
            <button className={flagClasses} onClick={() => changeLanguage('en')}>
                <img src={usFlag} className="inline-block h-3 shadow-md" />
                <span>{t('languageselector.us')}</span>
            </button>
            <button className={flagClasses} onClick={() => changeLanguage('jp')}>
                <img src={jpFlag} className="inline-block h-3 shadow-md" />
                <span>{t('languageselector.jp')}</span>
            </button>
        </div>
    );
};

export default LanguageSelector;