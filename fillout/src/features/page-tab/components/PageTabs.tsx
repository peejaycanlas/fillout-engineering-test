import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors, type DragEndEvent, type SensorDescriptor, type SensorOptions } from "@dnd-kit/core";
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
    const sensors: SensorDescriptor<SensorOptions>[] = useSensors(
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
            const activeIndex: number = pages.findIndex(({ id }) => id === event.active.id);
            const overIndex: number = pages.findIndex(({ id }) => id === event.over?.id);

            const newPages: Page[] = arrayMove(pages, activeIndex, overIndex).map((page, index) => {
                return {
                    ...page,
                    index: index
                };
            });

            onUpdatePages(newPages);
        }
    };

    const handleAddPage = (index: number | undefined): void => {
        onAddPage(index);
    };

    return (
        <div className="flex flex-grow overflow-x-auto">
            <DndContext
                sensors={sensors}
                modifiers={[restrictToHorizontalAxis]}
                onDragEnd={handleDragEnd}
            >
                <SortableContext items={pages}>
                    <ul className="flex list-none text-sm">
                        { pages.map((page, index) => {
                            return (
                                <li key={page.id} className="flex min-w-fit">
                                    <PageTabItem page={page} onTabClick={onSetActivePage} />
                                    { index < pages.length - 1 && (
                                        <PageTabSpacer page={page} onAddPage={handleAddPage} />
                                    )}
                                </li>
                            )
                        })}
                        <li className="min-w-fit">
                            <PageTabAddButton onAddPage={handleAddPage} />
                        </li>
                    </ul>
                </SortableContext>
            </DndContext>
        </div>
    );
};

export default PageTabs;