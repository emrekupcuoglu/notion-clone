import { useMutation } from "@tanstack/react-query";
import { updatePage as updatePageAPI } from "../../services/apiPages";
import { Block } from "@blocknote/core";

export function useUpdatePage() {
  const {
    mutate: updatePage,
    isPending,
    error,
  } = useMutation({
    mutationFn: ({ pageId, content }: { pageId: number; content: Block[] }) =>
      updatePageAPI(pageId, content),
  });

  return { updatePage, isPending, error };
}
