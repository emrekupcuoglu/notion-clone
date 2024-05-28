import { useMutation } from "@tanstack/react-query";
import { updatePage as updatePageAPI } from "../../services/apiPages";
import { Block } from "@blocknote/core";

export function useUpdatePage() {
  const {
    mutate: updatePage,
    isPending,
    error,
  } = useMutation({
    mutationFn: ({ id, content }: { id: number; content: Block[] }) =>
      updatePageAPI(id, content),
  });
  return { updatePage, isPending, error };
}
