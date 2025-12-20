import { Node } from "@tiptap/core"
import { ReactNodeViewRenderer } from "@tiptap/react"
import FaqItemView from "./faq-item-view"

export const FaqItem = Node.create({
  name: "faqItem",
  group: "block",
  content: "paragraph+",
  isolating: true,
  draggable: true,

  parseHTML() {
    return [
      {
        tag: 'div[data-type="faq-item"]',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', { 'data-type': 'faq-item', class: 'faq-item' }, 0]
  },

  addAttributes() {
    return {
      open: {
        default: true,
        parseHTML: element => element.getAttribute('data-open') === 'true',
        renderHTML: attributes => {
          if (!attributes.open) {
            return {}
          }
          return {
            'data-open': attributes.open,
          }
        },
      },
      question: {
        default: '',
        parseHTML: element => element.getAttribute('data-question') || '',
        renderHTML: attributes => {
          if (!attributes.question) {
            return {}
          }
          return {
            'data-question': attributes.question,
          }
        },
      },
    }
  },

  addNodeView() {
    return ReactNodeViewRenderer(FaqItemView)
  },
})
