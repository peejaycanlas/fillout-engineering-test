import { useTranslation, type UseTranslationResponse } from "react-i18next";
import type { Page } from "../types";

type PageTypeSpacerProps = {
    page: Page,
    onAddPage(id: number | undefined): void;
}

const PageTabSpacer = ({ page, onAddPage }: PageTypeSpacerProps) => {
    const { t }: UseTranslationResponse<"translation", undefined> = useTranslation();

    const handleAddPage = (): void => {
        onAddPage(page.index);
    };

    return (
        <div className="
            relative px-2.5 min-w-fit group
            transition-[padding_100ms_ease-in-out]
            hover:px-5
            after:absolute after:left-0 after:top-[calc(50%-0.75px)] after:h-[1.5px] after:w-full after:overflow-hidden
            after:bg-[url('src/features/page-tab/images/dashes.png')] after:bg-repeat-x
        ">
            <button className="
                invisible size-0 opacity-0 z-10 cursor-pointer -translate-1/2
                absolute top-[50%] left-[50%]
                border-[0.5px] border-[#e1e1e1] bg-white rounded-full
                group-hover:visible group-hover:size-4 group-hover:opacity-100
                transition-[size_250ms_ease-in-out,opacity_250ms_ease-in-out,rotate_250ms_ease-in-out]
                after:absolute after:top-[50%] after:left-[50%] after:transform-[translate(-50%,-50%)] after:size-2
                after:bg-[url('src/features/page-tab/images/add-small.svg')] after:bg-no-repeat
                "
                onClick={handleAddPage}
                title={t('pagetab.addpage')}
            >
                <span className="sr-only">{t('pagetab.addpage')}</span>
            </button>
        </div>
    );
};

export default PageTabSpacer;