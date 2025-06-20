import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors, type DragEndEvent } from "@dnd-kit/core";
import type { Page } from "../types";
import PageTabItem from "./PageTabItem";
import { arrayMove, SortableContext, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import PageTabSpacer from "./PageTabSpacer";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";

import PageTabAddButton from "./PageTabAddButton";

type PageTypeProps = {
    pages: Page[],
    onUpdatePages(pages: Page[]): void,
    onSetActivePage(page: Page): void,
    onAddPage(id: number | undefined): void
};

const PageTabs = ({ pages, onUpdatePages, onSetActivePage, onAddPage }: PageTypeProps) => {
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 0.01
            }
        }),
        useSensor(TouchSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    );

    const handleDragEnd = (event: DragEndEvent): void => {
        if (event.over && event.active.id !== event.over?.id) {
            const activeIndex = pages.findIndex(({ id }) => id === event.active.id);
            const overIndex = pages.findIndex(({ id }) => id === event.over?.id);

            onUpdatePages(arrayMove(pages, activeIndex, overIndex));
        }
    };

    const handleAddPage = (id: number | undefined): void => {
        onAddPage(id);
    };

    return (
        <section className="flex flex-grow">
            <DndContext
                sensors={sensors}
                modifiers={[restrictToHorizontalAxis]}
                onDragEnd={handleDragEnd}
            >
                <SortableContext items={pages}>
                    <ul className="flex list-none text-sm">
                        { pages.map((page, index) => {
                            return (
                                <li key={page.id} className="flex">
                                    <PageTabItem page={page} onTabClick={onSetActivePage} />
                                    { index < pages.length - 1 && (
                                        <PageTabSpacer id={page.id} onAddPage={handleAddPage} />
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                </SortableContext>
            </DndContext>
            <PageTabAddButton onAddPage={handleAddPage} />
        </section>
    );
};

export default PageTabs;