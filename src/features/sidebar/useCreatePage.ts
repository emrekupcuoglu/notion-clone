import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPage as createPageAPI } from "../../services/apiPages";
import { Block } from "@blocknote/core";

interface CreatePageAPIInterface {
  iconName: string;
  name: string;
  group: string;
  content: Block[];
}
export function useCreatePage() {
  const queryClient = useQueryClient();
  const {
    mutate: createPage,
    error,
    isPending,
  } = useMutation({
    mutationFn: ({ iconName, name, group, content }: CreatePageAPIInterface) =>
      createPageAPI({ iconName, name, group, content }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pages"] });
    },
  });

  return { createPage, error, isPending };
}
