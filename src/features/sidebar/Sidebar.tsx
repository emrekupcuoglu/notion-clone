import Spinner from "../../ui/Spinner";
import PrivateGroup from "./PrivateGroup";
import SidebarHeader from "./SidebarHeader";
import { usePages } from "./usePages";

function Sidebar() {
  const { pages, isPending } = usePages();

  if (isPending) return <Spinner />;
  if (pages === undefined) return null;
  const privatePages = pages.filter((page) => page.group === "private");

  return (
    <div className="row-span-full flex flex-col bg-[rgb(247,247,245)] text-[#19171199]">
      <SidebarHeader />
      <div className="overflow-y-scroll">
        <PrivateGroup pages={privatePages} />
      </div>
    </div>
  );
}

export default Sidebar;
