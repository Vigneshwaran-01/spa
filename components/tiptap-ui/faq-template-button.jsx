"use client"

import { Button } from "@/components/tiptap-ui-primitive/button"
import { useTiptapEditor } from "@/hooks/use-tiptap-editor"
import { HelpCircleIcon } from "@/components/tiptap-icons/help-circle-icon"

export function FaqTemplateButton() {
  const { editor } = useTiptapEditor()

  const handleInsertFaqTemplate = () => {
    if (!editor) return
    const question = window.prompt('Enter FAQ question')
    if (question == null || question.trim() === '') return

    const answer = window.prompt('Enter FAQ answer')
    if (answer == null || answer.trim() === '') return

    const createFaqItem = (questionText, answerText, open = true) => ({
      type: 'faqItem',
      // Store question on attrs so the header can display it,
      // and keep the node content for the answer only.
      attrs: { open, question: questionText },
      content: [
        {
          type: 'paragraph',
          content: [{ type: 'text', text: answerText }],
        },
      ],
    })

    const chain = editor.chain().focus()

    // If cursor is already inside an existing FAQ block, insert another item
    if (editor.isActive('faqBlock')) {
      chain
        .insertContent(
          createFaqItem(
            question,
            answer,
            true,
          ),
        )
        .run()
      return
    }

    // Otherwise, insert a new FAQ block with two default items
    chain
      .insertContent({
        type: 'faqBlock',
        content: [
          createFaqItem(
            question,
            answer,
            true,
          ),
        ],
      })
      .run()
  }

  return (
    <Button
      type="button"
      data-style="ghost"
      tooltip="Insert FAQ template with multiple questions"
      onClick={handleInsertFaqTemplate}
    >
      <HelpCircleIcon className="tiptap-button-icon" />
      FAQ Template
    </Button>
  )
}
