import React, { useEffect, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Table } from '@tiptap/extension-table';
import { TableRow } from '@tiptap/extension-table-row';
import { TableCell } from '@tiptap/extension-table-cell';
import { TableHeader } from '@tiptap/extension-table-header';
import { Link } from '@tiptap/extension-link';
import { Image } from '@tiptap/extension-image';
import ImageResize from 'tiptap-extension-resize-image';
import { HorizontalRule } from '@tiptap/extension-horizontal-rule';
import { TextAlign } from '@tiptap/extension-text-align';
import { CodeBlockLowlight } from '@tiptap/extension-code-block-lowlight';
import { createLowlight } from 'lowlight';
import javascript from 'highlight.js/lib/languages/javascript';

/**
 * StableTiptapEditor
 *
 * Props:
 * - value: string (HTML)
 * - onChange: (html: string) => void
 * - placeholder?: string
 */
export default function StableTiptapEditor({ value, onChange, placeholder = 'Write your content here...' }) {
  const [showLinkDialog, setShowLinkDialog] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [linkText, setLinkText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageWidth, setImageWidth] = useState('');
  const [imageHeight, setImageHeight] = useState('');
  const [showButtonDialog, setShowButtonDialog] = useState(false);
  const [buttonText, setButtonText] = useState('');
  const [buttonUrl, setButtonUrl] = useState('');
  const [buttonStyle, setButtonStyle] = useState('primary');
  const [linkStyle, setLinkStyle] = useState('default');
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const lowlight = createLowlight();
lowlight.register('javascript', javascript);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      Link.configure({
        openOnClick: false,
      }),
      Image.configure({
        allowBase64: true,
        HTMLAttributes: {
          class: 'editor-image',
        },
      }),
      ImageResize.configure({
        allowBase64: true,
        defaultWidth: '300px',
        defaultHeight: 'auto',
      }),
      HorizontalRule,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: value || '',
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          'prose max-w-none min-h-[200px] px-4 py-3 focus:outline-none tiptap-editor',
      },
    },
    onUpdate({ editor }) {
      if (typeof onChange === 'function') {
        onChange(editor.getHTML());
      }
    },
  });

  const addLink = () => {
    if (linkUrl) {
      editor.chain().focus().setLink({ href: linkUrl }).run();
      setShowLinkDialog(false);
      setLinkUrl('');
      setLinkText('');
    }
  };

  const addImage = () => {
    if (imageUrl) {
      const imageAttrs = { src: imageUrl };
      if (imageWidth) imageAttrs.width = imageWidth;
      if (imageHeight) imageAttrs.height = imageHeight;
      editor.chain().focus().setImage(imageAttrs).run();
      setImageUrl('');
      setImageWidth('');
      setImageHeight('');
    }
  };

  const addButton = () => {
    if (buttonText && buttonUrl) {
      const styleClasses = {
        primary: 'bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 inline-block',
        secondary: 'bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 inline-block',
        success: 'bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 inline-block',
        danger: 'bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 inline-block',
        outline: 'border-2 border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-50 inline-block'
      };
      
      const buttonHtml = `<a href="${buttonUrl}" class="${styleClasses[buttonStyle]}" style="text-decoration: none; display: inline-block;">${buttonText}</a>`;
      editor.chain().focus().insertContent(buttonHtml).run();
      setShowButtonDialog(false);
      setButtonText('');
      setButtonUrl('');
      setButtonStyle('primary');
    }
  };

  const insertTable = () => {
    editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
  };

  const addFaq = () => {
    const faqHtml = `
      <div style="margin: 1.5rem 0;">
        <div style="margin-bottom: 1rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden; background: white;">
          <div style="font-weight: 600; color: #111827; padding: 0.75rem 1rem; cursor: pointer; background: #f9fafb; border-bottom: 1px solid #e5e7eb; transition: all 0.2s ease; display: flex; justify-content: space-between; align-items: center;" 
               onmouseover="this.style.background='#f3f4f6'" 
               onmouseout="this.style.background='#f9fafb'"
               onclick="
                 var answer = this.nextElementSibling;
                 var icon = this.querySelector('.dropdown-icon');
                 if (answer.style.display === 'none' || answer.style.display === '') {
                   answer.style.display = 'block';
                   answer.style.maxHeight = '500px';
                   answer.style.opacity = '1';
                   icon.style.transform = 'rotate(180deg)';
                 } else {
                   answer.style.display = 'none';
                   answer.style.maxHeight = '0';
                   answer.style.opacity = '0';
                   icon.style.transform = 'rotate(0deg)';
                 }
               ">
            <div style="flex: 1;">
              <strong>Q:</strong> What is your question?
            </div>
            <span class="dropdown-icon" style="font-size: 1rem; color: #6b7280; transition: transform 0.2s ease; display: inline-block; margin-left: 0.5rem; flex-shrink: 0;">▼</span>
          </div>
          <div style="color: #374151; line-height: 1.6; padding: 0.75rem 1rem; display: none; max-height: 0; opacity: 0; transition: all 0.3s ease; overflow: hidden;">
            <strong>A:</strong> Your answer goes here...
          </div>
        </div>
      </div>
    `;
    editor.chain().focus().insertContent(faqHtml).run();
  };

  // Keep editor content in sync if "value" prop changes from outside
  useEffect(() => {
    if (!editor) return;
    const current = editor.getHTML();
    if (value != null && value !== current) {
      editor.commands.setContent(value, false);
    }
  }, [value, editor]);

  useEffect(() => {
    return () => {
      if (editor) {
        editor.destroy();
      }
    };
  }, [editor]);

  if (!editor) {
    return (
      <div className="min-h-[200px] px-4 py-3 text-sm text-slate-500">
        Loading editor...
      </div>
    );
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        .tiptap-editor table {
          border-collapse: collapse;
          width: 100%;
          margin: 1rem 0;
          border: 2px solid #374151 !important;
        }
        .tiptap-editor table td,
        .tiptap-editor table th {
          border: 1px solid #374151 !important;
          padding: 0.5rem;
          text-align: left;
        }
        .tiptap-editor table th {
          background-color: #f9fafb;
          font-weight: 600;
        }
        .tiptap-editor table tr:nth-child(even) {
          background-color: #f9fafb;
        }
        .tiptap-editor table tr:hover {
          background-color: #f3f4f6;
        }
        .preview-content {
          padding: 2rem;
          min-height: 400px;
        }
        .preview-content table {
          border-collapse: collapse;
          width: 100%;
          margin: 1rem 0;
          border: 2px solid #374151 !important;
        }
        .preview-content table td,
        .preview-content table th {
          border: 1px solid #374151 !important;
          padding: 0.5rem;
          text-align: left;
        }
        .preview-content table th {
          background-color: #f9fafb;
          font-weight: 600;
        }
        .preview-content table tr:nth-child(even) {
          background-color: #f9fafb;
        }
        .preview-content table tr:hover {
          background-color: #f3f4f6;
        }
        `
      }} />
      <div className="w-full border-t border-gray-200 bg-white">
      <div className="border-b border-gray-200 bg-gray-50 px-2 py-1 text-xs text-gray-500 flex items-center justify-between">
        <span>Rich text editor</span>
        <button
          type="button"
          onClick={() => setIsPreviewMode(!isPreviewMode)}
          className={`px-2 py-1 text-xs border rounded ${
            isPreviewMode ? 'bg-blue-500 text-white' : 'bg-white hover:bg-gray-50'
          }`}
        >
          {isPreviewMode ? 'Edit' : 'Preview'}
        </button>
      </div>
      {isPreviewMode ? (
        <div className="preview-content">
          <div dangerouslySetInnerHTML={{ __html: editor.getHTML() }} />
        </div>
      ) : (
        <div className="border-b border-gray-200 bg-white p-2 flex gap-1 flex-wrap">
          {/* Text Formatting */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`px-2 py-1 text-xs border rounded ${editor.isActive('bold') ? 'bg-gray-200' : 'bg-white hover:bg-gray-50'}`}
          >
            Bold
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`px-2 py-1 text-xs border rounded ${editor.isActive('italic') ? 'bg-gray-200' : 'bg-white hover:bg-gray-50'}`}
          >
            Italic
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={`px-2 py-1 text-xs border rounded ${editor.isActive('strike') ? 'bg-gray-200' : 'bg-white hover:bg-gray-50'}`}
          >
            Strike
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleCode().run()}
            className={`px-2 py-1 text-xs border rounded ${editor.isActive('code') ? 'bg-gray-200' : 'bg-white hover:bg-gray-50'}`}
          >
            Code
          </button>
          
          <div className="w-px bg-gray-300 mx-1" />
          
          {/* Headings */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={`px-2 py-1 text-xs border rounded ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-200' : 'bg-white hover:bg-gray-50'}`}
          >
            H1
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={`px-2 py-1 text-xs border rounded ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-200' : 'bg-white hover:bg-gray-50'}`}
          >
            H2
          </button>
          
          <div className="w-px bg-gray-300 mx-1" />
          
          {/* Text Alignment */}
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            className={`px-2 py-1 text-xs border rounded ${editor.isActive({ textAlign: 'left' }) ? 'bg-gray-200' : 'bg-white hover:bg-gray-50'}`}
          >
            Left
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            className={`px-2 py-1 text-xs border rounded ${editor.isActive({ textAlign: 'center' }) ? 'bg-gray-200' : 'bg-white hover:bg-gray-50'}`}
          >
            Center
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            className={`px-2 py-1 text-xs border rounded ${editor.isActive({ textAlign: 'right' }) ? 'bg-gray-200' : 'bg-white hover:bg-gray-50'}`}
          >
            Right
          </button>
          
          <div className="w-px bg-gray-300 mx-1" />
          
          {/* Lists */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`px-2 py-1 text-xs border rounded ${editor.isActive('bulletList') ? 'bg-gray-200' : 'bg-white hover:bg-gray-50'}`}
          >
            Bullet List
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`px-2 py-1 text-xs border rounded ${editor.isActive('orderedList') ? 'bg-gray-200' : 'bg-white hover:bg-gray-50'}`}
          >
            Numbered List
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={`px-2 py-1 text-xs border rounded ${editor.isActive('blockquote') ? 'bg-gray-200' : 'bg-white hover:bg-gray-50'}`}
          >
            Quote
          </button>
          
          <div className="w-px bg-gray-300 mx-1" />
          
          {/* Insert Elements */}
          <button
            type="button"
            onClick={() => setShowLinkDialog(true)}
            className="px-2 py-1 text-xs border rounded bg-white hover:bg-gray-50"
          >
            Link
          </button>
          <button
            type="button"
            onClick={() => setShowButtonDialog(true)}
            className="px-2 py-1 text-xs border rounded bg-purple-500 text-white hover:bg-purple-600"
          >
            Button
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={`px-2 py-1 text-xs border rounded ${editor.isActive('codeBlock') ? 'bg-gray-200' : 'bg-white hover:bg-gray-50'}`}
          >
            Code Block
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            className="px-2 py-1 text-xs border rounded bg-white hover:bg-gray-50"
          >
            Divider
          </button>
          <button
            type="button"
            onClick={insertTable}
            className="px-2 py-1 text-xs border rounded bg-white hover:bg-gray-50"
          >
            Insert Table
          </button>
          <button
            type="button"
            onClick={addFaq}
            className="px-2 py-1 text-xs border rounded bg-orange-500 text-white hover:bg-orange-600"
          >
            FAQ
          </button>
          <div className="w-px bg-gray-300 mx-1" />
          {/* Table Editing */}
          <button
            type="button"
            onClick={() => editor.chain().focus().addColumnBefore().run()}
            disabled={!editor.can().addColumnBefore()}
            className="px-2 py-1 text-xs border rounded bg-white hover:bg-gray-50 disabled:opacity-50"
          >
            +Col Before
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().addColumnAfter().run()}
            disabled={!editor.can().addColumnAfter()}
            className="px-2 py-1 text-xs border rounded bg-white hover:bg-gray-50 disabled:opacity-50"
          >
            +Col After
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().deleteColumn().run()}
            disabled={!editor.can().deleteColumn()}
            className="px-2 py-1 text-xs border rounded bg-white hover:bg-gray-50 disabled:opacity-50"
          >
            -Col
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().addRowBefore().run()}
            disabled={!editor.can().addRowBefore()}
            className="px-2 py-1 text-xs border rounded bg-white hover:bg-gray-50 disabled:opacity-50"
          >
            +Row Before
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().addRowAfter().run()}
            disabled={!editor.can().addRowAfter()}
            className="px-2 py-1 text-xs border rounded bg-white hover:bg-gray-50 disabled:opacity-50"
          >
            +Row After
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().deleteRow().run()}
            disabled={!editor.can().deleteRow()}
            className="px-2 py-1 text-xs border rounded bg-white hover:bg-gray-50 disabled:opacity-50"
          >
            -Row
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().deleteTable().run()}
            disabled={!editor.can().deleteTable()}
            className="px-2 py-1 text-xs border rounded bg-red-500 text-white hover:bg-red-600 disabled:opacity-50"
          >
            Delete Table
          </button>
          
          
          
       
        
    
        
   
        
        
      
     

      
       
  </div>   
      )} 
    
            
      {/* Link Dialog */}
      {showLinkDialog && (
        <div className="border-b border-gray-200 bg-gray-50 p-3 flex gap-2 items-center">
          <input
            type="text"
            placeholder="Enter URL"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            className="flex-1 px-2 py-1 text-xs border rounded"
          />
          <button
            type="button"
            onClick={addLink}
            className="px-2 py-1 text-xs border rounded bg-blue-500 text-white hover:bg-blue-600"
          >
            Add Link
          </button>
          <button
            type="button"
            onClick={() => setShowLinkDialog(false)}
            className="px-2 py-1 text-xs border rounded bg-gray-300 hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      )}
      
      {/* Image Input */}
      <div className="border-b border-gray-200 bg-gray-50 p-2">
        <div className="flex gap-2 items-center mb-2">
          <input
            type="text"
            placeholder="Enter image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="flex-1 px-2 py-1 text-xs border rounded"
          />
        </div>
        <div className="flex gap-2 items-center mb-2">
          <input
            type="text"
            placeholder="Width (e.g., 300px, 50%)"
            value={imageWidth}
            onChange={(e) => setImageWidth(e.target.value)}
            className="flex-1 px-2 py-1 text-xs border rounded"
          />
          <input
            type="text"
            placeholder="Height (e.g., 200px, auto)"
            value={imageHeight}
            onChange={(e) => setImageHeight(e.target.value)}
            className="flex-1 px-2 py-1 text-xs border rounded"
          />
        </div>
        <button
          type="button"
          onClick={addImage}
          className="px-2 py-1 text-xs border rounded bg-green-500 text-white hover:bg-green-600"
        >
          Add Image
        </button>
      </div>
      
      {/* Button Dialog */}
      {showButtonDialog && (
        <div className="border-b border-gray-200 bg-gray-50 p-3">
          <div className="flex gap-2 items-center mb-2">
            <input
              type="text"
              placeholder="Button text"
              value={buttonText}
              onChange={(e) => setButtonText(e.target.value)}
              className="flex-1 px-2 py-1 text-xs border rounded"
            />
          </div>
          <div className="flex gap-2 items-center mb-2">
            <input
              type="text"
              placeholder="Button URL"
              value={buttonUrl}
              onChange={(e) => setButtonUrl(e.target.value)}
              className="flex-1 px-2 py-1 text-xs border rounded"
            />
          </div>
          <div className="flex gap-2 items-center mb-2">
            <label className="text-xs">Style:</label>
            <select
              value={buttonStyle}
              onChange={(e) => setButtonStyle(e.target.value)}
              className="flex-1 px-2 py-1 text-xs border rounded"
            >
              <option value="primary">Primary (Blue)</option>
              <option value="secondary">Secondary (Gray)</option>
              <option value="success">Success (Green)</option>
              <option value="danger">Danger (Red)</option>
              <option value="outline">Outline</option>
            </select>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={addButton}
              className="px-2 py-1 text-xs border rounded bg-purple-500 text-white hover:bg-purple-600"
            >
              Add Button
            </button>
            <button
              type="button"
              onClick={() => setShowButtonDialog(false)}
              className="px-2 py-1 text-xs border rounded bg-gray-300 hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      
            
      <div className="min-h-[200px]">
        {!value && (
          <div className="px-4 pt-3 text-xs text-gray-400 select-none pointer-events-none">
            {placeholder}
          </div>
        )}
        <EditorContent editor={editor} />
      </div>
      </div>
    </>
  );

}
