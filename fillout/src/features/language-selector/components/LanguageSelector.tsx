import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
    const { t } = useTranslation();

    const changeLanguage = (lang: string): void => {
        i18next.changeLanguage(lang).then(() => {
            i18next.options.lng = lang;
        });
    };

    return (
        <div>
            <button onClick={() => changeLanguage('en')}>{t('languageselector.us')}</button>
            <button onClick={() => changeLanguage('jp')}>{t('languageselector.jp')}</button>
        </div>
    );
};

export default LanguageSelector;