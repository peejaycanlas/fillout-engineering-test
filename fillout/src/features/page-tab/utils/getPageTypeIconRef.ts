import type { PageType } from "../types"

import detailsIcon from '../images/file-default.svg';
import detailsIconActive from '../images/file.svg';
import endingIcon from '../images/check-default.svg';
import endingIconActive from '../images/check.svg';
import infoIcon from '../images/info-default.svg';
import infoIconActive from '../images/info.svg';

type PageTypeIcon = {
    type: PageType,
    default: string,
    active: string
};

const pageTypeIcons: PageTypeIcon[] = [
    {
        type: 'details',
        default: detailsIcon,
        active: detailsIconActive
    },
    {
        type: 'ending',
        default: endingIcon,
        active: endingIconActive
    },
    {
        type: 'info',
        default: infoIcon,
        active: infoIconActive
    }
];


const getPageTypeIconRef = (type: PageType, isActive: boolean): string | undefined => {
    const pageTypeIcon: PageTypeIcon | undefined = pageTypeIcons.find(icon => icon.type === type);

    return (isActive ? pageTypeIcon?.active : pageTypeIcon?.default);
};

export default getPageTypeIconRef;