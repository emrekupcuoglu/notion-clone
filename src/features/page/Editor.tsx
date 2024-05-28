import "@blocknote/react/style.css";
import "@blocknote/core/fonts/inter.css";

import { PartialBlock } from "@blocknote/core";
import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";

import { useUpdatePage } from "./useUpdatePage";

function Editor({
  content,
  pageID,
}: {
  content: PartialBlock[];
  pageID: number;
}) {
  const { updatePage } = useUpdatePage();

  const testContent = [
    {
      id: "4982baed-e677-4908-9bff-3728085c53a4",
      type: "paragraph",
      props: {
        textColor: "default",
        textAlignment: "left",
        backgroundColor: "default",
      },
      content: [
        {
          text: "Selam dostum",
          type: "text",
          styles: {},
        },
      ],
      children: [],
    },
    {
      id: "f048843c-f2ad-4e3e-9195-43ba2d280340",
      type: "paragraph",
      props: {
        textColor: "default",
        textAlignment: "left",
        backgroundColor: "default",
      },
      content: [],
      children: [],
    },
  ];

  console.log("content", content);
  const editor = useCreateBlockNote({
    initialContent: content,
  });

  return (
    <BlockNoteView
      onChange={() => updatePage({ id: pageID, content: editor.document })}
      editor={editor}
    />
  );
}

export default Editor;
