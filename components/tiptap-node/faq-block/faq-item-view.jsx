"use client"

import { useState, useMemo } from "react"
import { NodeViewWrapper, NodeViewContent } from "@tiptap/react"
import { ChevronDownIcon } from "@/components/tiptap-icons/chevron-down-icon"

export const FaqItemView = ({ node, updateAttributes }) => {
  const [isOpen, setIsOpen] = useState(
    node.attrs.open === undefined ? true : node.attrs.open,
  )

  const toggleOpen = () => {
    const next = !isOpen
    setIsOpen(next)
    updateAttributes({ open: next })
  }

  // Read-only question label from node attributes
  const questionPreview = useMemo(() => {
    return node?.attrs?.question || "FAQ question"
  }, [node])

  return (
    <NodeViewWrapper className="faq-item-wrapper">
      <div
        className={`faq-item border border-gray-200 rounded-md ${
          isOpen ? "bg-gray-50" : "bg-white"
        }`}
        data-open={isOpen}
      >
        {/* Question header (preview only, clickable) */}
        <button
          type="button"
          contentEditable={false}
          onClick={toggleOpen}
          className="flex w-full items-center justify-between px-3 py-2 text-left"
        >
          <div className="text-sm font-medium text-gray-900">
            {questionPreview}
          </div>
          <span className="ml-2 flex h-6 w-6 items-center justify-center rounded-full hover:bg-gray-200">
            <ChevronDownIcon
              className={`h-4 w-4 text-gray-600 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </span>
        </button>

        {/* Editable content (question + answer paragraphs) */}
        <div
          className="faq-answer-panel border-t border-gray-200"
          style={{ display: isOpen ? "block" : "none" }}
        >
          <div className="overflow-hidden px-3 pb-2 text-sm text-gray-600">
            <NodeViewContent as="div" className="faq-answer-content" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .faq-item-wrapper {
          margin-bottom: 0.25rem;
        }

        .faq-answer-content :global(p) {
          margin: 0.25rem 0 0;
        }
      `}</style>
    </NodeViewWrapper>
  )
}

export default FaqItemView
