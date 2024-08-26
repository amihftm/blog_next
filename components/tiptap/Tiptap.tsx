'use client'

import { useEditor, EditorContent, BubbleMenu, JSONContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import { useCallback, useEffect, useState } from 'react'
import Link from '@tiptap/extension-link'

const Tiptap = ({onSubmit}: {onSubmit:Function}) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
      }),
      Placeholder.configure({
        placeholder: "اینجا بنویسید...",
        emptyNodeClass: 'first:before:text-gray-400 first:before:content-[attr(data-placeholder)] first:before:pointer-events-none first:before:float-right'
      }),
    ],

    editorProps: {
      attributes: {
        class: "focus:outline-none",
      },
    },
  });

  const [isEditable, setIsEditable] = useState(true)

  useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable)
    }
  }, [isEditable, editor])



  const setLink = useCallback(() => {
    if (!editor) return
    const previousUrl = editor.getAttributes('link').href
    const url = window.prompt('URL', previousUrl)

    // cancelled
    if (url === null) {
      return
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink()
        .run()

      return
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url })
      .run()
  }, [editor])


  if (!editor) {
    return null;
  }

  return (
    <>
      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <div className="bg-[var(--bg)] border-[var(--softTextColor)] border-2 p-2 shadow-md rounded-xl px-2 flex gap-2">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={`p-1 rounded-lg ${
                editor.isActive("bold") && "bg-purple-700"
              } hover:${
                editor.isActive("bold") ? "bg-purple-900" : "bg-[var(--softBg)]"
              }`}
            >
              بولد
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={`p-1 rounded-lg ${
                editor.isActive("italic") && "bg-purple-700"
              } hover:${
                editor.isActive("italic")
                  ? "bg-purple-900"
                  : "bg-[var(--softBg)]"
              }`}
            >
              ایتالیک
            </button>
            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={`p-1 rounded-lg ${
                editor.isActive("strike") && "bg-purple-700"
              } hover:${
                editor.isActive("strike")
                  ? "bg-purple-900"
                  : "bg-[var(--softBg)]"
              }`}
            >
              خط زده
            </button>
            {!editor.isActive("link") ? (
              <button
                onClick={setLink}
                className="p-1 rounded-lg hover:bg-[var(--softBg)]"
              >
                تنظیم لینک
              </button>
            ) : (
              <button
                onClick={() => editor.chain().focus().unsetLink().run()}
                className="p-1 rounded-lg bg-purple-700 hover:bg-purple-900"
              >
                حذف لینک
              </button>
            )}
          </div>
        </BubbleMenu>
      )}
      <EditorContent editor={editor} />
      <button className="px-4 py-2 bg-lime-400 text-black text-xl absolute md:top-5 md:left-20 left-5 top-20 rounded-2xl hover:bg-lime-500" onClick={() => onSubmit(editor.getJSON(), editor.getText())}>
        انتشار
      </button>
    </>
  );
}

export default Tiptap
