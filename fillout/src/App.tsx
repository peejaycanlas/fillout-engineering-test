import LanguageSelector from './features/language-selector/components/LanguageSelector';
import PageDisplay from './features/page-tab/components/PageDisplay';
import PageTabs from './features/page-tab/components/PageTabs';
import { withTranslation } from 'react-i18next';

const App = () => {
  return (
    <>
      <main className="flex flex-col h-screen bg-[#F9FAFB] p-4 gap-4">
        <PageDisplay />
        <section className="flex gap-4">
          <PageTabs />
          <LanguageSelector />
        </section>        
      </main>
    </>
  );
};

export default withTranslation()(App);