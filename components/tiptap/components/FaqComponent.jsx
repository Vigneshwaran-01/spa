'use client';

import React from 'react';
import { NodeViewWrapper } from '@tiptap/react';

export const FaqComponent = ({ node, editor, updateAttributes }) => {
  const toggleAnswer = (index) => {
    const faqItems = node.content;
    const updatedItems = faqItems.map((item, i) => {
      if (i === index) {
        const answerNode = item.content.find(child => child.type.name === 'faqAnswer');
        if (answerNode) {
          const isVisible = answerNode.attrs.visible;
          return {
            ...item,
            content: item.content.map(child => {
              if (child.type.name === 'faqAnswer') {
                return {
                  ...child,
                  attrs: { ...child.attrs, visible: !isVisible }
                };
              }
              return child;
            })
          };
        }
      }
      return item;
    });

    // Update the node content
    const newNode = {
      ...node,
      content: updatedItems
    };
    
    // This is a simplified approach - in production you'd want proper state management
    const answerElements = document.querySelectorAll('[data-type="faq-answer"]');
    const clickedAnswer = answerElements[index];
    if (clickedAnswer) {
      clickedAnswer.style.display = clickedAnswer.style.display === 'none' ? 'block' : 'none';
    }
  };

  const addNewFaqItem = () => {
    const { chain } = editor;
    const currentPos = editor.state.selection.from;
    
    chain()
      .insertContentAt(currentPos, {
        type: 'faqItem',
        content: [
          {
            type: 'faqQuestion',
            content: [{ type: 'text', text: 'New Question?' }],
          },
          {
            type: 'faqAnswer',
            content: [{ type: 'paragraph', content: [{ type: 'text', text: 'New answer...' }] }],
          },
        ],
      })
      .run();
  };

  return (
    <NodeViewWrapper className="faq-container">
      <div className="border border-gray-300 rounded-lg bg-white shadow-sm my-4 p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">FAQ Section</h3>
          <button
            onClick={addNewFaqItem}
            className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
          >
            + Add Question
          </button>
        </div>
        
        <div className="space-y-3">
          {node.content?.map((faqItem, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <div
                className="px-3 py-2 font-semibold text-gray-900 bg-gray-50 border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => toggleAnswer(index)}
              >
                <span className="inline-block bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold mr-2">
                  Q
                </span>
                {faqItem.content?.find(child => child.type.name === 'faqQuestion')?.content?.[0]?.text || 'Question'}
              </div>
              <div
                data-type="faq-answer"
                className="px-3 py-2 text-gray-700 text-sm leading-relaxed"
                style={{ display: 'none' }}
              >
                <span className="inline-block bg-green-500 text-white px-2 py-1 rounded text-xs font-bold mr-2">
                  A
                </span>
                {faqItem.content?.find(child => child.type.name === 'faqAnswer')?.content?.map((paragraph, pIndex) => (
                  <div key={pIndex}>
                    {paragraph.content?.map((textNode, tIndex) => (
                      <span key={tIndex}>{textNode.text}</span>
                    ))}
                  </div>
                )) || 'Answer'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </NodeViewWrapper>
  );
};
