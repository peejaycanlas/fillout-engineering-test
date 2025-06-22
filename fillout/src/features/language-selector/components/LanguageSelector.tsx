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

    return (
        <div className="
            flex gap-2 text-sm
            [&_button]:flex [&_button]:gap-2 [&_button]:items-center
            [&_button]:h-[32px] [&_button]:py-1 [&_button]:px-2.5
            [&_button]:cursor-pointer [&_button]:box-border
            [&_button]:rounded-lg [&_button]:border-[1.5px] [&_button]:bg-white [&_button]:text-[#1a1a1a] [&_button]:border-[#e1e1e1]
            [&_button]:focus:outline-2 [&_button]:focus:outline-[#2F72E240] [&_button]:focus:border-[#2F72E2]
            [&_button]:shadow-[0px_1px_3px_0px_#0000000A,0px_1px_1px_0px_#00000005]
            [&_img]:min-w-[23px] [&_img]:h-3 [&_img]:shadow-md
            [&_span]:hidden [&_span]:sm:inline-block
        ">
            <button onClick={() => changeLanguage('en')}>
                <img src={usFlag} />
                <span>{t('languageselector.us')}</span>
            </button>
            <button onClick={() => changeLanguage('jp')}>
                <img src={jpFlag} />
                <span>{t('languageselector.jp')}</span>
            </button>
        </div>
    );
};

export default LanguageSelector;