import type { KeyboardEvent, MouseEvent } from "react";

import settingsIcon from '../images/settings.svg';
import { useTranslation } from "react-i18next";

type PageTabItemMoreButtonProps = {
    onOpenContextMenu(event: MouseEvent | KeyboardEvent): void
};

const PageTabItemMoreButton = ({ onOpenContextMenu }: PageTabItemMoreButtonProps) => {
    const { t } = useTranslation();

    const handleKeyDown = (event: KeyboardEvent): void => {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            onOpenContextMenu(event);
        }
    };

    return (
        <button className="
            flex items-center ml-2 border-[0.5px] border-transparent box-border min-w-[17px]
            focus:outline-2 focus:outline-[#2F72E240] focus:border-[#2F72E2]
            "
            onContextMenu={onOpenContextMenu}
            onKeyDown={handleKeyDown}
        >
            <img src={settingsIcon} className="inline-block" />
            <span className="sr-only">{t('settings.title')}</span>
        </button>
    );
};

export default PageTabItemMoreButton;