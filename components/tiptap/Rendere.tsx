"use client";

import {
  useEditor,
  EditorContent,
  generateHTML,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useMemo, useState } from "react";
import Link from "@tiptap/extension-link";

const Tiptap = ({ json }: { json: any }) => {
  let output
  if(typeof window !== "undefined") {
    output = useMemo(() => {
      return generateHTML(json, [StarterKit, Link]);
    }, [json]);
  }

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link,
    ],
    content: output,
    editorProps: {
      attributes: {
        class: "focus:outline-none",
      },
    },
    editable: false,
  });
  if (typeof window !== "undefined") {
    return <EditorContent editor={editor} className="focus:outline-none" />;
  }
  return <EditorContent editor={null}/>;
};

export default Tiptap;
