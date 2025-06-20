import type { PageType } from "../types";
import getPageTypeIconRef from "../utils/getPageTypeIconRef";

type PageTabIconProps = {
    type: PageType,
    isActive: boolean
};

const PageTabIcon = ({ type, isActive }: PageTabIconProps) => {
    const activeIconClasses = "mr-1.5 " +
                              `${isActive ? 'inline-block' : 'hidden'} ` +
                              "group-focus:inline-block";

    const defaultIconClasses = "mr-1.5 " +
                               `${isActive ? 'hidden' : 'inline-block'} ` +
                               "group-focus:hidden";

    return (
        <>
            <img className={activeIconClasses} src={getPageTypeIconRef(type, true)} />
            <img className={defaultIconClasses} src={getPageTypeIconRef(type, false)} />
        </>
    );
};

export default PageTabIcon;