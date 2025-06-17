import { useTranslation } from "react-i18next";

const PageDisplay = () => {
    const { t } = useTranslation();

    return (
        <section className="flex flex-grow bg-blue-950 text-white rounded-2xl justify-center items-center text-6xl">
          <div>{t('pagetab.info')}</div>
        </section>
    );
};

export default PageDisplay;