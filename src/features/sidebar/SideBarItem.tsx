import { IoDocumentTextOutline } from "react-icons/io5";
import { MdChevronRight } from "react-icons/md";

interface SideBarItemProps {
  // pageName: string;
  children: React.ReactNode | string;
  icon?: keyof typeof iconMap | React.ReactElement;
  noChevron?: boolean;
}

export interface IconMap {
  page: JSX.Element;
}

const iconMap = {
  page: <IoDocumentTextOutline />,
} as const;

function SideBarItem({
  children,
  icon = "page",
  noChevron = false,
}: SideBarItemProps) {
  return (
    <div className="mb-2">
      <p className="ml-2 flex items-center justify-start gap-1 font-semibold ">
        {!noChevron && (
          <>
            <span>
              <MdChevronRight />
            </span>
            <span className="pr-0.5">
              {typeof icon === "string" ? iconMap[icon] : icon}
            </span>
          </>
        )}
        {noChevron && (
          <span className="ml-2 pr-2">
            {typeof icon === "string" ? iconMap[icon] : icon}
          </span>
        )}
        <span className="text-sm">{children}</span>
      </p>
    </div>
  );
}

export default SideBarItem;
