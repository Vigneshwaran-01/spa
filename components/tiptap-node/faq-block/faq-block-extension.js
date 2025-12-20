import { Node } from "@tiptap/core"

export const FaqBlock = Node.create({
  name: "faqBlock",
  group: "block",
  content: "faqItem+",
  draggable: true,
  isolating: true,

  parseHTML() {
    return [
      {
        tag: 'div[data-type="faq-block"]',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', { ...HTMLAttributes, 'data-type': 'faq-block', class: 'faq-block' }, 0]
  },
})
