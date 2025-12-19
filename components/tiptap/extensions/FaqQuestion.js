import { Node, mergeAttributes } from '@tiptap/core';

export const FaqQuestion = Node.create({
  name: 'faqQuestion',

  group: 'block',

  content: 'inline*',

  defining: true,

  isolating: true,

  parseHTML() {
    return [
      {
        tag: 'div[data-type="faq-question"]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'div',
      mergeAttributes(HTMLAttributes, {
        'data-type': 'faq-question',
        class: 'faq-question px-3 py-2 font-semibold text-gray-900 bg-gray-50 border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors',
        onclick: 'this.nextElementSibling.style.display=this.nextElementSibling.style.display===\'none\'?\'block\':\'none\'',
      }),
      ['span', { class: 'inline-block bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold mr-2' }, 'Q'],
      0,
    ];
  },
});
