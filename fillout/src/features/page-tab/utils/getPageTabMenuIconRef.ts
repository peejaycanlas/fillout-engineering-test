import type { PageTabMenuIconType } from "../types"

import setFirstPageIcon from '../images/set-first-page.svg';
import renameIcon from '../images/pencil-line.svg';
import copyIcon from '../images/copy.svg';
import duplicateIcon from '../images/duplicate.svg';
import deleteIcon from '../images/delete.svg';

type PageTabMenuIcon = {
    type: PageTabMenuIconType,
    iconRef: string
};

const pageTabMenuIcons: PageTabMenuIcon[] = [
    {
        type: 'setfirstpage',
        iconRef: setFirstPageIcon
    },
    {
        type: 'rename',
        iconRef: renameIcon
    },
    {
        type: 'copy',
        iconRef: copyIcon
    },
    {
        type: 'duplicate',
        iconRef: duplicateIcon
    },
    {
        type: 'delete',
        iconRef: deleteIcon
    }
];

const getPageTabMenuIconRef = (iconType: PageTabMenuIconType): string | undefined => {
    const pageTabMenuIcon: PageTabMenuIcon | undefined = pageTabMenuIcons.find(icon => icon.type === iconType);

    return pageTabMenuIcon?.iconRef;
};

export default getPageTabMenuIconRef;