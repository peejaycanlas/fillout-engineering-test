import type { PageType } from "../types";
import getPageTypeIconRef from "../utils/getPageTypeIconRef";

type PageTabIconProps = {
    type: PageType,
    isActive: boolean
};

const PageTabIcon = ({ type, isActive }: PageTabIconProps) => {
    return (
        <>
            <img className={
                "mr-1.5 " +
                `${isActive ? 'inline-block' : 'hidden'} ` +
                "group-focus:inline-block"
                }
                src={getPageTypeIconRef(type, true)}
            />
            <img className={
                "mr-1.5 " +
                `${isActive ? 'hidden' : 'inline-block'} ` +
                "group-focus:hidden"
                }
                src={getPageTypeIconRef(type, false)}
            />
        </>
    );
};

export default PageTabIcon;