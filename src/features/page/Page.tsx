import { PartialBlock } from "@blocknote/core";
import { usePage } from "../sidebar/usePage";
import Editor from "./Editor";
import Spinner from "../../ui/Spinner";
function Page() {
  const { page, error: getPageError, isPending: isGettingPage } = usePage();

  if (isGettingPage) return <Spinner />;

  if (getPageError) return <div>Error: {getPageError?.message}</div>;

  if (!page) return <div>Page not found</div>;

  return <Editor content={page?.content as PartialBlock[]} pageID={page.id} />;
  // return <div>Page</div>;
}

export default Page;
