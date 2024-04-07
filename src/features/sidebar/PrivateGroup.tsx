import { Database } from "../../types/supabase";
import SideBarItem, { IconMap } from "./SideBarItem";

interface PrivateGroupProps {
  pages: Database["public"]["Tables"]["pages"]["Row"][];
}
function PrivateGroup({ pages }: PrivateGroupProps) {
  return (
    <div>
      <h3 className=" mb-4 ml-3 mt-2 text-sm">Private</h3>
      {pages.map((pageData) => {
        return (
          <SideBarItem
            icon={pageData.iconName as keyof IconMap}
            key={pageData.id}
          >
            {pageData.name}
          </SideBarItem>
        );
      })}
    </div>
  );
}

export default PrivateGroup;
