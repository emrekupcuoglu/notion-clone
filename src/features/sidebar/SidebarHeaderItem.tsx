interface SidebarHeaderItemProps {
  children: React.ReactNode;
  icon: React.ReactElement;
}
function SidebarHeaderItem({ children, icon }: SidebarHeaderItemProps) {
  return (
    <div className="mb-2" onClick={() => true}>
      <p className="ml-2 flex items-center justify-start gap-1 font-semibold ">
        <span className="ml-2 pr-2">{icon}</span>

        <span className="text-sm">{children}</span>
      </p>
    </div>
  );
}

export default SidebarHeaderItem;
