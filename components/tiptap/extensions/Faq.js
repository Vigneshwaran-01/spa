import { Node, mergeAttributes } from '@tiptap/core';

export const Faq = Node.create({
  name: 'faq',

  group: 'block',

  content: 'faqItem+',

  defining: true,

  isolating: true,

  parseHTML() {
    return [
      {
        tag: 'div[data-type="faq"]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, { 'data-type': 'faq', class: 'faq-container border border-gray-300 rounded-lg bg-white shadow-sm my-4 p-4' }), 0];
  },

  addCommands() {
    return {
      insertFaq: () => ({ commands }) => {
        return commands.insertContent(`
          <div data-type="faq" class="faq-container border border-gray-300 rounded-lg bg-white shadow-sm my-4 p-4">
            <div data-type="faq-item" class="faq-item border border-gray-200 rounded-lg overflow-hidden mb-3">
              <div data-type="faq-question" class="faq-question px-3 py-2 font-semibold text-gray-900 bg-gray-50 border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='none'?'block':'none'">
                <span class="inline-block bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold mr-2">Q</span>
                What is your question?
              </div>
              <div data-type="faq-answer" class="faq-answer px-3 py-2 text-gray-700 text-sm leading-relaxed" style="display: none;">
                <span class="inline-block bg-green-500 text-white px-2 py-1 rounded text-xs font-bold mr-2">A</span>
                Your answer goes here...
              </div>
            </div>
          </div>
        `);
      },
    };
  },
});
