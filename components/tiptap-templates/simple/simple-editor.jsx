"use client"

import { useEffect, useRef, useState } from "react"
import { EditorContent, EditorContext, useEditor } from "@tiptap/react"

// --- Tiptap Core Extensions ---
import { StarterKit } from "@tiptap/starter-kit"
import { TaskItem, TaskList } from "@tiptap/extension-list"
import { TextAlign } from "@tiptap/extension-text-align"
import { Typography } from "@tiptap/extension-typography"
import { Highlight } from "@tiptap/extension-highlight"
import { Subscript } from "@tiptap/extension-subscript"
import { Superscript } from "@tiptap/extension-superscript"
import { Selection } from "@tiptap/extensions"

// --- Table Extensions ---
import { Table } from "@tiptap/extension-table"
import { TableRow } from "@tiptap/extension-table-row"
import { TableHeader } from "@tiptap/extension-table-header"
import { TableCell } from "@tiptap/extension-table-cell"

// --- Custom Image Extensions ---
import { ResizableImage } from "@/components/tiptap-node/resizable-image/resizable-image-extension"

// --- UI Primitives ---
import { Button } from "@/components/tiptap-ui-primitive/button"
import { Spacer } from "@/components/tiptap-ui-primitive/spacer"
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
} from "@/components/tiptap-ui-primitive/toolbar"

// --- Tiptap Node ---
import { ImageUploadNode } from "@/components/tiptap-node/image-upload-node/image-upload-node-extension"
import { HorizontalRule } from "@/components/tiptap-node/horizontal-rule-node/horizontal-rule-node-extension"
import { FaqBlock } from "@/components/tiptap-node/faq-block/faq-block-extension"
import { FaqItem } from "@/components/tiptap-node/faq-block/faq-item-extension"

// --- Tiptap UI ---
import { HeadingDropdownMenu } from "@/components/tiptap-ui/heading-dropdown-menu"
import { ImageUploadButton } from "@/components/tiptap-ui/image-upload-button"
import { ListDropdownMenu } from "@/components/tiptap-ui/list-dropdown-menu"
import { BlockquoteButton } from "@/components/tiptap-ui/blockquote-button"
import { CodeBlockButton } from "@/components/tiptap-ui/code-block-button"
import {
  ColorHighlightPopover,
  ColorHighlightPopoverContent,
  ColorHighlightPopoverButton,
} from "@/components/tiptap-ui/color-highlight-popover"
import {
  LinkPopover,
  LinkContent,
  LinkButton,
} from "@/components/tiptap-ui/link-popover"
import { MarkButton } from "@/components/tiptap-ui/mark-button"
import { TextAlignButton } from "@/components/tiptap-ui/text-align-button"
import { UndoRedoButton } from "@/components/tiptap-ui/undo-redo-button"
import { FaqTemplateButton } from "@/components/tiptap-ui/faq-template-button"

// --- Icons ---
import { ArrowLeftIcon } from "@/components/tiptap-icons/arrow-left-icon"
import { HighlighterIcon } from "@/components/tiptap-icons/highlighter-icon"
import { LinkIcon } from "@/components/tiptap-icons/link-icon"

// --- Hooks ---
import { useIsBreakpoint } from "@/hooks/use-is-breakpoint"
import { useWindowSize } from "@/hooks/use-window-size"
import { useCursorVisibility } from "@/hooks/use-cursor-visibility"

// --- Components ---
import { ThemeToggle } from "@/components/tiptap-templates/simple/theme-toggle"

// --- Lib ---
import { handleImageUpload, MAX_FILE_SIZE } from "@/lib/tiptap-utils"

// Styles for the simple editor are imported globally in _app.jsx

import content from "@/components/tiptap-templates/simple/data/content.json"

const MainToolbarContent = ({
  editor,
  onHighlighterClick,
  onLinkClick,
  isMobile
}) => {
  const handleInsertImageFromUrl = () => {
    if (!editor) return

    const src = window.prompt("Enter image URL")
    if (!src) return

    const alt = window.prompt("Enter alt text (optional)") || ""

    editor
      .chain()
      .focus()
      .insertContent({
        type: "resizableImage",
        attrs: { src, alt, title: alt }
      })
      .run()
  }

  const handleResizeImage = (size) => {
    if (!editor) return

    let maxWidth = "100%"
    if (size === "small") maxWidth = "25%"
    if (size === "medium") maxWidth = "50%"

    editor
      .chain()
      .focus()
      .updateAttributes("resizableImage", {
        width: maxWidth,
        height: "auto"
      })
      .run()
  }

  const handleAlignImage = (align) => {
    if (!editor) return

    editor
      .chain()
      .focus()
      .updateAttributes("resizableImage", { align })
      .run()
  }

  const handleInsertTable = () => {
    if (!editor) return
    
    // Insert a simple HTML table with empty cells
    const tableHTML = `
      <table>
        <tbody>
          <tr>
            <td><p></p></td>
            <td><p></p></td>
            <td><p></p></td>
          </tr>
          <tr>
            <td><p></p></td>
            <td><p></p></td>
            <td><p></p></td>
          </tr>
          <tr>
            <td><p></p></td>
            <td><p></p></td>
            <td><p></p></td>
          </tr>
        </tbody>
      </table>
    `
    
    editor
      .chain()
      .focus()
      .insertContent(tableHTML.trim())
      .run()
  }

  const handleAddColumn = () => {
    if (!editor) return
    editor.chain().focus().addColumnAfter().run()
  }

  const handleDeleteColumn = () => {
    if (!editor) return
    editor.chain().focus().deleteColumn().run()
  }

  const handleAddRow = () => {
    if (!editor) return
    editor.chain().focus().addRowAfter().run()
  }

  const handleDeleteRow = () => {
    if (!editor) return
    editor.chain().focus().deleteRow().run()
  }

  const handleDeleteTable = () => {
    if (!editor) return
    editor.chain().focus().deleteTable().run()
  }

  const toggleHeaderColumn = () => {
    if (!editor) return
    editor.chain().focus().toggleHeaderColumn().run()
  }

  const toggleHeaderRow = () => {
    if (!editor) return
    editor.chain().focus().toggleHeaderRow().run()
  }

  const toggleHeaderCell = () => {
    if (!editor) return
    editor.chain().focus().toggleHeaderCell().run()
  }

  return (
    <>
      <Spacer />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', maxWidth: '100%' }}>
        <UndoRedoButton action="undo" />
        <UndoRedoButton action="redo" />
        <div style={{ width: '1px', height: '24px', backgroundColor: '#e5e7eb', margin: '0 0.5rem' }}></div>
        <HeadingDropdownMenu levels={[1, 2, 3, 4]} portal={isMobile} />
        <ListDropdownMenu types={["bulletList", "orderedList", "taskList"]} portal={isMobile} />
        <BlockquoteButton />
        <CodeBlockButton />
        <div style={{ width: '1px', height: '24px', backgroundColor: '#e5e7eb', margin: '0 0.5rem' }}></div>
        <MarkButton type="bold" />
        <MarkButton type="italic" />
        <MarkButton type="strike" />
        <MarkButton type="code" />
        <MarkButton type="underline" />
        {!isMobile ? (
          <ColorHighlightPopover />
        ) : (
          <ColorHighlightPopoverButton onClick={onHighlighterClick} />
        )}
        {!isMobile ? <LinkPopover /> : <LinkButton onClick={onLinkClick} />}
        <div style={{ width: '1px', height: '24px', backgroundColor: '#e5e7eb', margin: '0 0.5rem' }}></div>
        <MarkButton type="superscript" />
        <MarkButton type="subscript" />
        <div style={{ width: '1px', height: '24px', backgroundColor: '#e5e7eb', margin: '0 0.5rem' }}></div>
        <TextAlignButton align="left" />
        <TextAlignButton align="center" />
        <TextAlignButton align="right" />
        <TextAlignButton align="justify" />
        <div style={{ width: '1px', height: '24px', backgroundColor: '#e5e7eb', margin: '0 0.5rem' }}></div>
        <ImageUploadButton text="Add" />
        <Button
          type="button"
          data-style="ghost"
          tooltip="Insert image by URL with alt text"
          onClick={handleInsertImageFromUrl}>
          Image URL
        </Button>
        <Button
          type="button"
          data-style="ghost"
          tooltip="Small image width"
          onClick={() => handleResizeImage("small")}>
          S
        </Button>
        <Button
          type="button"
          data-style="ghost"
          tooltip="Medium image width"
          onClick={() => handleResizeImage("medium")}>
          M
        </Button>
        <Button
          type="button"
          data-style="ghost"
          tooltip="Full image width"
          onClick={() => handleResizeImage("full")}>
          L
        </Button>
        <div style={{ width: '1px', height: '24px', backgroundColor: '#e5e7eb', margin: '0 0.5rem' }}></div>
        <Button
          type="button"
          data-style="ghost"
          tooltip="Insert table"
          onClick={handleInsertTable}>
          Table
        </Button>
        <Button
          type="button"
          data-style="ghost"
          tooltip="Add column after"
          onClick={handleAddColumn}>
          +Col
        </Button>
        <Button
          type="button"
          data-style="ghost"
          tooltip="Delete column"
          onClick={handleDeleteColumn}>
          -Col
        </Button>
        <Button
          type="button"
          data-style="ghost"
          tooltip="Add row after"
          onClick={handleAddRow}>
          +Row
        </Button>
        <Button
          type="button"
          data-style="ghost"
          tooltip="Delete row"
          onClick={handleDeleteRow}>
          -Row
        </Button>
        <Button
          type="button"
          data-style="ghost"
          tooltip="Delete table"
          onClick={handleDeleteTable}>
          Del Table
        </Button>
        <Button
          type="button"
          data-style="ghost"
          tooltip="Toggle header column"
          onClick={toggleHeaderColumn}>
          H Col
        </Button>
        <Button
          type="button"
          data-style="ghost"
          tooltip="Toggle header row"
          onClick={toggleHeaderRow}>
          H Row
        </Button>
        <Button
          type="button"
          data-style="ghost"
          tooltip="Toggle header cell"
          onClick={toggleHeaderCell}>
          H Cell
        </Button>
        <div style={{ width: '1px', height: '24px', backgroundColor: '#e5e7eb', margin: '0 0.5rem' }}></div>
        <FaqTemplateButton />
        {isMobile && <div style={{ width: '1px', height: '24px', backgroundColor: '#e5e7eb', margin: '0 0.5rem' }}></div>}
        <ThemeToggle />
      </div>
    </>
  );
}

const MobileToolbarContent = ({
  type,
  onBack
}) => (
  <>
    <ToolbarGroup>
      <Button data-style="ghost" onClick={onBack}>
        <ArrowLeftIcon className="tiptap-button-icon" />
        {type === "highlighter" ? (
          <HighlighterIcon className="tiptap-button-icon" />
        ) : (
          <LinkIcon className="tiptap-button-icon" />
        )}
      </Button>
    </ToolbarGroup>

    <ToolbarSeparator />

    {type === "highlighter" ? (
      <ColorHighlightPopoverContent />
    ) : (
      <LinkContent />
    )}
  </>
)

export function SimpleEditor({ value, onChange }) {
  const isMobile = useIsBreakpoint()
  const { height } = useWindowSize()
  const [mobileView, setMobileView] = useState("main")
  const toolbarRef = useRef(null)

  const editor = useEditor({
    immediatelyRender: false,
    editorProps: {
      attributes: {
        autocomplete: "off",
        autocorrect: "off",
        autocapitalize: "off",
        "aria-label": "Main content area, start typing to enter text.",
        class: "simple-editor",
      },
    },
    extensions: [
      StarterKit.configure({
        horizontalRule: false,
        link: {
          openOnClick: false,
          enableClickSelection: true,
        },
      }),
      HorizontalRule,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      TaskList,
      TaskItem.configure({ nested: true }),
      Highlight.configure({ multicolor: true }),
      ResizableImage,
      Table.configure({
        resizable: true,
        allowTableNodeSelection: true
      }),
      TableRow,
      TableHeader,
      TableCell,
      Typography,
      Superscript,
      Subscript,
      Selection,
      ImageUploadNode.configure({
        accept: "image/*",
        maxSize: MAX_FILE_SIZE,
        limit: 3,
        upload: handleImageUpload,
        onError: (error) => console.error("Upload failed:", error),
      }),
      FaqBlock,
      FaqItem,
    ],
    // If a value is provided from outside, use that as the initial content.
    // Otherwise fall back to the demo content from the template.
    content: value != null && value !== "" ? value : content,
    onUpdate({ editor }) {
      if (typeof onChange === "function") {
        onChange(editor.getHTML());
      }
    },
  })

  // Keep the editor content in sync if the parent changes `value`.
  useEffect(() => {
    if (!editor) return
    if (value == null) return
    const current = editor.getHTML()
    if (value !== current) {
      editor.commands.setContent(value, false)
    }
  }, [value, editor])

  const rect = useCursorVisibility({
    editor,
    overlayHeight: toolbarRef.current?.getBoundingClientRect().height ?? 0,
  })

  useEffect(() => {
    if (!isMobile && mobileView !== "main") {
      setMobileView("main")
    }
  }, [isMobile, mobileView])

  return (
    <div className="simple-editor-wrapper">
      <EditorContext.Provider value={{ editor }}>
        <Toolbar
          ref={toolbarRef}
          style={{
            ...(isMobile
              ? {
                  bottom: `calc(100% - ${height - rect.y}px)`,
                }
              : {}),
          }}>
          {mobileView === "main" ? (
            <MainToolbarContent
              editor={editor}
              onHighlighterClick={() => setMobileView("highlighter")}
              onLinkClick={() => setMobileView("link")}
              isMobile={isMobile} />
          ) : (
            <MobileToolbarContent
              type={mobileView === "highlighter" ? "highlighter" : "link"}
              onBack={() => setMobileView("main")} />
          )}
        </Toolbar>

        <EditorContent editor={editor} role="presentation" className="simple-editor-content" />
      </EditorContext.Provider>
    </div>
  );
}
