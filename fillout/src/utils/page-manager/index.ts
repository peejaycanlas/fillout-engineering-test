import type { TFunction } from "i18next";
import type { Page } from "../../features/page-tab/types"

let newPageTabCounter = 0;

export const getPageData = () : Page[] => {
    return [
        {
            id: 0,
            index: 0,
            name: 'Info',
            type: 'info',
            isActive: true
        },
        {
            id: 1,
            index: 1,
            name: 'Details',
            type: 'details',
            isActive: false
        },
        {
            id: 2,
            index: 2,
            name: 'Other',
            type: 'details',
            isActive: false
        },
        {
            id: 3,
            index: 3,
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

const resetActivePage = (pages: Page[]): Page[] => {
    return pages.map(page => {
        page.isActive = false;
        return page;
    });
};

const createNewPage = (index: number | undefined, pageLength: number, t: TFunction<"translation", undefined>): Page => {
    return {
        id: pageLength,
        index: typeof index === 'undefined' ? pageLength : index,
        name: t('pagetab.newpage') + getNextPageTabCounter(),
        type: 'details',
        isActive: true
    };
};

export const insertNewPage = (newIndex: number, pages: Page[], t: TFunction<"translation", undefined>): Page[] => {
    const newPages = resetActivePage(pages);

    newPages.splice(newIndex + 1, 0, createNewPage(newIndex + 1, pages.length, t));
    return newPages;
};

export const appendNewPage = (pages: Page[], t: TFunction<"translation", undefined>): Page[] => {
    const newPages = resetActivePage(pages);

    newPages.push(createNewPage(undefined, pages.length, t));
    return newPages;
};