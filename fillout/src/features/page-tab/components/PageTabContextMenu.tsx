import { useRef } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { useTranslation, type UseTranslationResponse } from "react-i18next";
import getPageTabMenuIconRef from "../utils/getPageTabMenuIconRef";

type PageTabContextMenuProps = {
    isVisible: boolean,
    onMenuClick: (menuItem: string) => void,
    onCloseMenu: () => void
};

const PageTabContextMenu = ({ isVisible, onMenuClick, onCloseMenu }: PageTabContextMenuProps) => {
    const { t }: UseTranslationResponse<"translation", undefined> = useTranslation();

    const menuRef = useRef(null);

    const handleMenuClick = (menuItem: string): void => {
        onMenuClick(menuItem);
    };

    const handleOutsideClick = (): void => {
        onCloseMenu();
    };

    useOutsideClick(menuRef, handleOutsideClick);

    return isVisible && (
        <div className="
            fixed bottom-[50px] min-w-fit overflow-hidden
            bg-white border-[0.5px] border-[#e1e1e1] rounded-xl
            shadow-[0px_1px_3px_0px_#0000000A,0px_1px_1px_0px_#00000005]
            "
            ref={menuRef}
        >
            <div className="p-3 bg-[#fafbfc] font-['BL_Melody_Regular','Inter',sans-serif] text-base border-b-[0.5px] border-[#e1e1e1]">
                {t('settings.title')}
            </div>
            <ul className="
                list-none flex flex-col gap-3.5 pt-3 px-3 pb-3.5 w-[240px] leading-4
                [&_button]:flex [&_button]:gap-1.5 [&_button]:w-full [&_button]:cursor-pointer
                [&_img]:size-4
            ">
                <li>
                    <button onClick={() => handleMenuClick('setfirstpage') }>
                        <img src={getPageTabMenuIconRef('setfirstpage')} />
                        <span>{t('settings.setFirstPage')}</span>
                    </button>
                </li>
                <li>
                    <button onClick={() => handleMenuClick('rename') }>
                        <img src={getPageTabMenuIconRef('rename')} />
                        <span>{t('settings.rename')}</span>
                    </button>
                </li>
                <li>
                    <button onClick={() => handleMenuClick('copy') }>
                        <img src={getPageTabMenuIconRef('copy')} />
                        <span>{t('settings.copy')}</span>
                    </button>
                </li>
                <li>
                    <button onClick={() => handleMenuClick('duplicate') }>
                        <img src={getPageTabMenuIconRef('duplicate')} />
                        <span>{t('settings.duplicate')}</span>
                    </button>
                </li>
                <li className="border-b border-[#e1e1e1]"></li>
                <li className="text-[#ef494f]">
                    <button onClick={() => handleMenuClick('delete') }>
                        <img src={getPageTabMenuIconRef('delete')} />
                        <span>{t('settings.delete')}</span>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default PageTabContextMenu;