import { Node, mergeAttributes } from '@tiptap/core';

export const FaqAnswer = Node.create({
  name: 'faqAnswer',

  group: 'block',

  content: 'block+',

  defining: true,

  isolating: true,

  parseHTML() {
    return [
      {
        tag: 'div[data-type="faq-answer"]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'div',
      mergeAttributes(HTMLAttributes, {
        'data-type': 'faq-answer',
        class: 'faq-answer px-3 py-2 text-gray-700 text-sm leading-relaxed',
        style: 'display: none;',
      }),
      ['span', { class: 'inline-block bg-green-500 text-white px-2 py-1 rounded text-xs font-bold mr-2' }, 'A'],
      0,
    ];
  },
});
