'use client';

import React, { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';

/**
 * SimpleEditor
 *
 * Props:
 * - value: string (HTML)
 * - onChange: (html: string) => void
 * - placeholder?: string
 */
export default function SimpleEditor({ value, onChange, placeholder = 'Write your content here...' }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: value || '',
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          'prose max-w-none min-h-[220px] px-4 py-3 focus:outline-none text-gray-900',
      },
    },
    onUpdate({ editor }) {
      if (typeof onChange === 'function') {
        onChange(editor.getHTML());
      }
    },
  });

  // Keep editor content in sync if the "value" prop changes from outside
  useEffect(() => {
    if (!editor) return;
    const current = editor.getHTML();
    if (value != null && value !== current) {
      editor.commands.setContent(value, false);
    }
  }, [value, editor]);

  if (!editor) {
    return (
      <div className="min-h-[220px] px-4 py-3 text-sm text-slate-500">
        Loading editor...
      </div>
    );
  }

  return (
    <div className="border border-gray-200 rounded-xl bg-white overflow-hidden">
      {/* Toolbar */}
      <div className="border-b border-gray-200 bg-gray-50 px-2 py-1 text-xs text-gray-600 flex flex-wrap items-center gap-1">
        {/* Bold / Italic / Strike / Code */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-2 py-1 rounded border text-xs ${
            editor.isActive('bold') ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'
          }`}
        >
          B
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-2 py-1 rounded border text-xs italic ${
            editor.isActive('italic') ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'
          }`}
        >
          I
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`px-2 py-1 rounded border text-xs line-through ${
            editor.isActive('strike') ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'
          }`}
        >
          S
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={`px-2 py-1 rounded border text-xs font-mono ${
            editor.isActive('code') ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'
          }`}
        >
          {'</>'}
        </button>

        <div className="w-px h-5 bg-gray-300 mx-1" />

        {/* Headings */}
        <button
          type="button"
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`px-2 py-1 rounded border text-xs ${
            editor.isActive('paragraph') ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'
          }`}
        >
          P
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`px-2 py-1 rounded border text-xs ${
            editor.isActive('heading', { level: 1 })
              ? 'bg-gray-200'
              : 'bg-white hover:bg-gray-100'
          }`}
        >
          H1
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`px-2 py-1 rounded border text-xs ${
            editor.isActive('heading', { level: 2 })
              ? 'bg-gray-200'
              : 'bg-white hover:bg-gray-100'
          }`}
        >
          H2
        </button>

        <div className="w-px h-5 bg-gray-300 mx-1" />

        {/* Alignment */}
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={`px-2 py-1 rounded border text-xs ${
            editor.isActive({ textAlign: 'left' })
              ? 'bg-gray-200'
              : 'bg-white hover:bg-gray-100'
          }`}
        >
          L
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={`px-2 py-1 rounded border text-xs ${
            editor.isActive({ textAlign: 'center' })
              ? 'bg-gray-200'
              : 'bg-white hover:bg-gray-100'
          }`}
        >
          C
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={`px-2 py-1 rounded border text-xs ${
            editor.isActive({ textAlign: 'right' })
              ? 'bg-gray-200'
              : 'bg-white hover:bg-gray-100'
          }`}
        >
          R
        </button>

        <div className="w-px h-5 bg-gray-300 mx-1" />

        {/* Lists & quote */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-2 py-1 rounded border text-xs ${
            editor.isActive('bulletList') ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'
          }`}
        >
          • List
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`px-2 py-1 rounded border text-xs ${
            editor.isActive('orderedList') ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'
          }`}
        >
          1. List
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`px-2 py-1 rounded border text-xs ${
            editor.isActive('blockquote') ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'
          }`}
        >
          ❝
        </button>

        <div className="w-px h-5 bg-gray-300 mx-1" />

        {/* Undo/redo */}
        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          className="px-2 py-1 rounded border text-xs bg-white hover:bg-gray-100"
        >
          Undo
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          className="px-2 py-1 rounded border text-xs bg-white hover:bg-gray-100"
        >
          Redo
        </button>
      </div>

      {/* Editor content */}
      <div className="relative min-h-[220px]">
        {!value && (
          <div className="absolute inset-x-0 top-0 px-4 py-3 text-xs text-gray-400 pointer-events-none select-none">
            {placeholder}
          </div>
        )}
        <EditorContent editor={editor} className="bg-white" />
      </div>
    </div>
  );
}
