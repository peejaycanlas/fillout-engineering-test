import type { TFunction } from "i18next";
import type { Page } from "../../features/page-tab/types"

let newPageTabCounter = 0;

export const getPageData = () : Page[] => {
    return [
        {
            id: 0,
            name: 'Info',
            type: 'info',
            isActive: true
        },
        {
            id: 1,
            name: 'Details',
            type: 'details',
            isActive: false
        },
        {
            id: 2,
            name: 'Other',
            type: 'details',
            isActive: false
        },
        {
            id: 3,
            name: 'Ending',
            type: 'ending',
            isActive: false
        }
    ];
};

const getNextPageTabCounter = (): number => {
    return ++newPageTabCounter;
};

export const findActivePage = (pages: Page[]): Page | undefined => {
    return pages.find(page => page.isActive);
};

export const toggleActivePage = (activePage: Page, pages: Page[]): Page[] => {
    return pages.map(page => {
      page.isActive = (page.id === activePage.id);
      return page;
    });
};

export const insertNewPage = (newId: number, pages: Page[], t: TFunction<"translation", undefined>): Page[] => {
    console.log('addPage', newId);

    return pages;
};

export const appendNewPage = (pages: Page[], t: TFunction<"translation", undefined>): Page[] => {
    const newPages = pages.map(page => {
        page.isActive = false;
        return page;
    });

    newPages.push({
        id: pages.length,
        name: t('pagetab.newpage') + getNextPageTabCounter(),
        type: 'details',
        isActive: true
    });

    return newPages;
};