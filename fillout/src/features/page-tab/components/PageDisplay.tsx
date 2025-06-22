import type { Page } from "../types";

type PageDisplayProps = {
    currentPage: Page | undefined;
};

const PageDisplay = ({ currentPage }: PageDisplayProps) => {
    return (
        <section className="flex flex-grow bg-blue-950 text-white rounded-2xl justify-center items-center text-6xl">
          <div>{currentPage?.name}</div>
        </section>
    );
};

export default PageDisplay;