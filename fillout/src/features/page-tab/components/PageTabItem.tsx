import { createContext, useMemo, type MouseEvent, type CSSProperties, type KeyboardEvent } from "react";
import type { Page } from "../types";
import { useSortable } from "@dnd-kit/sortable";
import type { DraggableSyntheticListeners } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import PageTabIcon from "./PageTabIcon";
import PageTabItemMoreButton from "./PageTabItemMoreButton";

type PageTabItemProps = {
    page: Page,
    onTabClick(page: Page): void
};

type Context = {
    attributes: Record<string, any>;
    listeners: DraggableSyntheticListeners,
    ref(node: HTMLElement | null): void;
};

const SortableItemContext = createContext<Context>({
    attributes: {},
    listeners: undefined,
    ref() {}
});

const PageTabItem = ({ page, onTabClick }: PageTabItemProps) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        setActivatorNodeRef,
        transform,
        transition
    } = useSortable({ id: page.id });

    const context = useMemo(
        () => ({
            attributes,
            listeners,
            ref: setActivatorNodeRef
        }),
        [attributes, listeners, setActivatorNodeRef]
    );

    const handleTabClick = (): void => {
        onTabClick(page);
    };

    const handleKeyDown = (event: KeyboardEvent): void => {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            onTabClick(page);
        }
    };

    const handleOpenContextMenu = (event: MouseEvent | KeyboardEvent): void => {
        event.preventDefault();
        console.log('handleOpenContextMenu', page);
    };

    const pageStyles: CSSProperties = {
        transform: CSS.Translate.toString(transform),
        transition
    };

    return (
        <SortableItemContext.Provider value={context}>
            <div ref={setNodeRef}
                className={
                    "flex items-center py-1 px-2.5 min-w-fit " +
                    "rounded-lg box-content select-none cursor-pointer border-[0.5px] " +
                    `${page.isActive ? 'bg-white text-[#1a1a1a] border-[#e1e1e1]' : 'bg-[#9DA4B226] text-[#677289] border-[transparent]'} ` +
                    "focus:bg-white focus:text-[#1a1a1a] focus:outline-2 focus:outline-[#2F72E240] focus:border-[#2F72E2] group " +
                    "shadow-[0px_1px_3px_0px_#0000000A,0px_1px_1px_0px_#00000005]"
                }
                style={pageStyles}
                {...attributes}
                {...listeners}
                onClick={handleTabClick}
                onKeyDown={handleKeyDown}
            >
                <PageTabIcon type={page.type} isActive={page.isActive} />
                <div className="whitespace-nowrap">{page.name}</div>
                {page.isActive && (
                    <PageTabItemMoreButton onOpenContextMenu={handleOpenContextMenu} />
                )}
            </div>
        </SortableItemContext.Provider>
    );
};

export default PageTabItem;