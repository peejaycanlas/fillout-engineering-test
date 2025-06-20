export type PageType = 'info' | 'details' | 'ending';

export type Page = {
  id: number,
  name: string,
  type: PageType,
  isActive: boolean
};
