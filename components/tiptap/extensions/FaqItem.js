import { Node, mergeAttributes } from '@tiptap/core';

export const FaqItem = Node.create({
  name: 'faqItem',

  group: 'block',

  content: 'faqQuestion faqAnswer',

  defining: true,

  isolating: true,

  parseHTML() {
    return [
      {
        tag: 'div[data-type="faq-item"]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, { 'data-type': 'faq-item', class: 'faq-item border border-gray-200 rounded-lg overflow-hidden mb-3' }), 0];
  },
});
