import Spinner from "../../ui/Spinner";
import { useCreatePage } from "./useCreatePage";

interface AddPageProps {
  children: React.ReactNode | string;
}
function AddPage({ children }: AddPageProps) {
  const { createPage, isPending } = useCreatePage();

  function onClick() {
    createPage({ name: "New Page", iconName: "page", group: "private" });
  }

  return (
    <button onClick={onClick}>
      {isPending ? <Spinner className="ml-4" /> : children}
    </button>
  );
}

export default AddPage;
