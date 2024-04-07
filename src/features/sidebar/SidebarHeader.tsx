import { IoSearch, IoSettingsOutline } from "react-icons/io5";
import SidebarHeaderItem from "./SidebarHeaderItem";
import { GoHome } from "react-icons/go";
import { RiInbox2Line } from "react-icons/ri";
import { FaCirclePlus } from "react-icons/fa6";
import AddPage from "./AddPage";

function SidebarHeader() {
  return (
    <div className="border-b pt-3 ">
      <SidebarHeaderItem icon={<IoSearch />}>Search</SidebarHeaderItem>
      <SidebarHeaderItem icon={<GoHome />}>Home</SidebarHeaderItem>
      <SidebarHeaderItem icon={<RiInbox2Line />}>Inbox</SidebarHeaderItem>
      <SidebarHeaderItem icon={<IoSettingsOutline />}>
        Settings & members
      </SidebarHeaderItem>
      <AddPage>
        <SidebarHeaderItem icon={<FaCirclePlus />}>New Page</SidebarHeaderItem>
      </AddPage>
    </div>
  );
}

export default SidebarHeader;
