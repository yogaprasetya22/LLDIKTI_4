export const Paragraph = ({ children }) => (
    <p className=" text-gray-800 dark:text-white text-justify">{children}</p>
);

export const SubText = ({ children }) => (
    <span className=" text-gray-600 dark:text-white font-[600] px-1">
        {children}
    </span>
);

export const TitleText = ({ children }) => (
    <span className=" text-gray-600 dark:text-white font-extrabold">
        {children}
    </span>
);
