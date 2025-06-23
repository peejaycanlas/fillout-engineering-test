export type PageType = 'info' | 'details' | 'ending';

export type Page = {
  id: number,
  index: number,
  name: string,
  type: PageType,
  isActive: boolean
};

export type PageTabMenuIconType = 'setfirstpage' | 'rename' | 'copy' | 'duplicate' | 'delete';