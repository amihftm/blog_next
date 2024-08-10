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
  const [isClient, setIsClient] = useState(false)
  useEffect(()=> {setIsClient(true)},[])

  const output = useMemo(() => {
    return generateHTML(json, [StarterKit, Link]);
  }, [json]);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link,
      // Link.configure({
      //   autolink: true,
      //   defaultProtocol: "https",
      // }),
    ],
    content: output,
    editorProps: {
      attributes: {
        class: "focus:outline-none",
      },
    },
    editable: false,
  });
  if (typeof window == "undefined") {
    return <EditorContent editor={null}/>;
  }
  return <EditorContent editor={editor} className="focus:outline-none" />;
};

export default Tiptap;
