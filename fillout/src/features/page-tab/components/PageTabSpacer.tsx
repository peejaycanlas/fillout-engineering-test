import { useTranslation } from "react-i18next";
import "../styles/PageTabSpacer.css";

type PageTypeSpacerProps = {
    id: number,
    onAddPage(id: number | undefined): void;
}

const PageTabSpacer = ({ id, onAddPage }: PageTypeSpacerProps) => {
    const { t } = useTranslation();

    const handleAddPage = (): void => {
        onAddPage(id);
    };

    const addButtonClasses: string = "invisible w-0 opacity-0 " +
                                     "group-hover:w-4 group-hover:visible group-hover:opacity-100";

    return (
        <div className="page-tab__spacer px-2.5 hover:px-5 group">
            <button className={addButtonClasses} onClick={handleAddPage}><span className="sr-only">{t('pagetab.addpage')}</span></button>
        </div>
    );
};

export default PageTabSpacer;