import { createContext, useMemo, type MouseEvent, type CSSProperties, type KeyboardEvent, type Context, useState, useEffect, type TouchEvent } from "react";
import type { Page } from "../types";
import { useSortable } from "@dnd-kit/sortable";
import type { DraggableSyntheticListeners } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import PageTabIcon from "./PageTabIcon";
import PageTabItemMoreButton from "./PageTabItemMoreButton";
import PageTabContextMenu from "./PageTabContextMenu";

type PageTabItemProps = {
    page: Page,
    onTabClick(page: Page): void
};

type DnDContext = {
    attributes: Record<string, any>;
    listeners: DraggableSyntheticListeners,
    ref(node: HTMLElement | null): void;
};

const SortableItemContext: Context<DnDContext> = createContext<DnDContext>({
    attributes: {},
    listeners: undefined,
    ref() {}
});

const PageTabItem = ({ page, onTabClick }: PageTabItemProps) => {
    const [ menuVisible, setMenuVisible ] = useState<boolean>(false);

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

    useEffect(() => {
        setMenuVisible(false);
    }, [page]);

    const handleTabClick = (): void => {
        onTabClick(page);
    };

    const handleKeyDown = (event: KeyboardEvent): void => {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            onTabClick(page);
        }
    };

    const handleOpenContextMenu = (event: MouseEvent | KeyboardEvent | TouchEvent): void => {
        event.preventDefault();
        setMenuVisible(true);
    };

    const handleCloseContextMenu = (): void => {
        setMenuVisible(false);
    };

    const handleContextMenuClick = (menuItem: string): void => {
        alert(`Context menu item for Page "${page.name}" clicked: ${menuItem}`);
        setMenuVisible(false);
    };

    const pageStyles: CSSProperties = {
        transform: CSS.Translate.toString(transform),
        transition
    };

    return (
        <SortableItemContext.Provider value={context}>
            <div ref={setNodeRef}
                className={
                    "relative flex items-center py-1 px-2.5 min-w-fit " +
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
                    <>
                        <PageTabItemMoreButton onOpenContextMenu={handleOpenContextMenu} />
                        <PageTabContextMenu isVisible={menuVisible} onMenuClick={handleContextMenuClick} onCloseMenu={handleCloseContextMenu} />
                    </>
                )}
            </div>
        </SortableItemContext.Provider>
    );
};

export default PageTabItem;