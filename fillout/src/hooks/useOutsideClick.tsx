import { useEffect, type RefObject } from "react";

const useOutsideClick = (
    ref: RefObject<HTMLElement | null>,
    callback: () => void
): void => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
        if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        }
    }, [ref]);
};

export default useOutsideClick;