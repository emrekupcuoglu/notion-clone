import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPage as createPageAPI } from "../../services/apiPages";

export function useCreatePage() {
  const queryClient = useQueryClient();
  const {
    mutate: createPage,
    error,
    isPending,
  } = useMutation({
    mutationFn: ({
      iconName,
      name,
      group,
    }: {
      iconName: string;
      name: string;
      group: string;
    }) => createPageAPI({ iconName, name, group }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pages"] });
    },
  });

  return { createPage, error, isPending };
}
