import type { MouseEvent } from "react";

import settingsIcon from '../images/settings.svg';
import { useTranslation } from "react-i18next";

type PageTabItemMoreButtonProps = {
    onOpenContextMenu(event: MouseEvent): void
};

const PageTabItemMoreButton = ({ onOpenContextMenu }: PageTabItemMoreButtonProps) => {
    const { t } = useTranslation();

    return (
        <button className="flex items-center ml-2" onContextMenu={onOpenContextMenu}>
            <img src={settingsIcon} className="inline-block" />
            <span className="sr-only">{t('settings.title')}</span>
        </button>
    );
};

export default PageTabItemMoreButton;