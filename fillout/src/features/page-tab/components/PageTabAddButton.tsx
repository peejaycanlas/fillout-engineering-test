import { useTranslation } from "react-i18next";
import addNewButtonIcon from '../images/add.svg';

import '../styles/PageTabAddButton.css';

type PageTabAddButtonProps = {
    onAddPage(id: number | undefined): void
};

const PageTabAddButton = ({ onAddPage }: PageTabAddButtonProps) => {
    const { t } = useTranslation();

    const addButtonClasses = "page-tab__add-new-btn flex items-center cursor-pointer " +
                             "h-[32px] py-1 px-2.5 ml-6 box-border " +
                             "bg-white rounded-lg border-[1.5px] border-[#e1e1e1] " +
                             "focus:outline-2 focus:outline-[#2F72E240] focus:border-[#2F72E2]";

    return (
        <div className="page-tab__add-new-btn__container">
            <button className={addButtonClasses} onClick={() => onAddPage(undefined)}>
                <img src={addNewButtonIcon} className="inline-block mr-2" />
                <span className="shrink-0">{t('pagetab.addpage')}</span>
            </button>
        </div>
    );
};

export default PageTabAddButton;