import { useTranslation, type UseTranslationResponse } from "react-i18next";
import addNewButtonIcon from '../images/add.svg';

type PageTabAddButtonProps = {
    onAddPage(index: number | undefined): void
};

const PageTabAddButton = ({ onAddPage }: PageTabAddButtonProps) => {
    const { t }: UseTranslationResponse<"translation", undefined> = useTranslation();

    return (
        <div className="
            relative min-w-fit
            before:absolute before:top-[calc(50%-0.75px)] before:left-0 before:h-[1.5px] before:w-5 before:overflow-hidden
            before:bg-[url('/dashes.png')] before:bg-repeat-x
            "
            data-no-dnd="true"
        >
            <button className="
                flex items-center cursor-pointer
                h-[32px] py-1 px-2.5 ml-5 box-border min-w-fit text-sm
                bg-white rounded-lg border-[1.5px] border-[#e1e1e1]
                focus:outline-2 focus:outline-[#2F72E240] focus:border-[#2F72E2]
                shadow-[0px_1px_3px_0px_#0000000A,0px_1px_1px_0px_#00000005]
                "
                onClick={() => onAddPage(undefined)}
            >
                <img src={addNewButtonIcon} className="inline-block mr-2" />
                <span className="shrink-0 min-w-fit">{t('pagetab.addpage')}</span>
            </button>
        </div>
    );
};

export default PageTabAddButton;