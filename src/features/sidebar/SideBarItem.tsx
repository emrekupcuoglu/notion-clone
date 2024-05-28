import { IoDocumentTextOutline } from "react-icons/io5";
import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

interface SideBarItemProps {
  // pageName: string;
  children: React.ReactNode | string;
  icon?: keyof typeof iconMap | React.ReactElement;
  pageId: number;
}

export interface IconMap {
  page: JSX.Element;
}

const iconMap = {
  page: <IoDocumentTextOutline />,
} as const;

function SideBarItem({ children, icon = "page", pageId }: SideBarItemProps) {
  return (
    <Link to={`/${pageId}`}>
      <div className="mb-2" onClick={() => true}>
        <p className="ml-2 flex items-center justify-start gap-1 font-semibold">
          <span>
            <MdChevronRight />
          </span>
          <span className="pr-0.5">
            {typeof icon === "string" ? iconMap[icon] : icon}
          </span>
          <span className="text-sm">{children}</span>
        </p>
      </div>
    </Link>
  );
}

export default SideBarItem;
