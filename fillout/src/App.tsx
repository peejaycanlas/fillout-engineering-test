import LanguageSelector from './features/language-selector/components/LanguageSelector';
import PageDisplay from './features/page-tab/components/PageDisplay';
import PageTabs from './features/page-tab/components/PageTabs';
import { useTranslation, withTranslation } from 'react-i18next';
import type { Page } from './features/page-tab/types';
import { useState } from 'react';
import { appendNewPage, findActivePage, getPageData, insertNewPage, toggleActivePage } from './utils/page-manager';

const App = () => {
  const { t } = useTranslation();

  const [pages, setPages] = useState<Page[]>(getPageData);

  let currentPage = findActivePage(pages);

  const handleActivePageSet = (activePage : Page): void => {
    const newPages = toggleActivePage(activePage, pages);

    currentPage = activePage;
    setPages(newPages);
  };

  const addPage = (index : number | undefined): void => {
    let newPages: Page[] = [];

    if (typeof index === 'undefined') {
      newPages = appendNewPage(pages, t);
    } else {
      newPages = insertNewPage(index, pages, t);
    }

    setPages(newPages);
  };

  return (
    <>
      <main className="flex flex-col h-screen bg-[#F9FAFB] p-4 gap-4">
        <PageDisplay currentPage={currentPage} />
        <section className="flex gap-4">
          <PageTabs pages={pages} onUpdatePages={setPages} onSetActivePage={handleActivePageSet} onAddPage={addPage} />
          <LanguageSelector />
        </section>
      </main>
    </>
  );
};

export default withTranslation()(App);