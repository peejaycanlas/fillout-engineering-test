import LanguageSelector from './features/language-selector/components/LanguageSelector';
import PageTabs from './features/page-tab/components/PageTabs';
import { useTranslation, withTranslation } from 'react-i18next';

const App = () => {
  const { t } = useTranslation();

  return (
    <>
      <main>
        <div>{t('pagetab.info')}</div>
        <PageTabs />
        <LanguageSelector />
      </main>
    </>
  );
};

export default withTranslation()(App);