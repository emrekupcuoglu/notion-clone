import { IoSearch, IoSettingsOutline } from "react-icons/io5";
import SideBarItem from "./SideBarItem";
import { GoHome } from "react-icons/go";
import { RiInbox2Line } from "react-icons/ri";
import { FaCirclePlus } from "react-icons/fa6";
import AddPage from "./AddPage";

function SidebarHeader() {
  return (
    <div className="border-b pt-3 ">
      <SideBarItem noChevron={true} icon={<IoSearch />}>
        Search
      </SideBarItem>
      <SideBarItem noChevron={true} icon={<GoHome />}>
        Home
      </SideBarItem>
      <SideBarItem noChevron={true} icon={<RiInbox2Line />}>
        Inbox
      </SideBarItem>
      <SideBarItem noChevron={true} icon={<IoSettingsOutline />}>
        Settings & members
      </SideBarItem>
      <AddPage>
        <SideBarItem noChevron={true} icon={<FaCirclePlus />}>
          New Page
        </SideBarItem>
      </AddPage>
    </div>
  );
}

export default SidebarHeader;
