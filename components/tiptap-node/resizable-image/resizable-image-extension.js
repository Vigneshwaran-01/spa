import { mergeAttributes, Node } from "@tiptap/react"
import { ReactNodeViewRenderer } from "@tiptap/react"
import { ResizableImageNode } from "@/components/tiptap-node/resizable-image/resizable-image-node"

export const ResizableImage = Node.create({
  name: "resizableImage",

  group: "block",

  draggable: true,

  selectable: true,

  atom: true,

  addOptions() {
    return {
      HTMLAttributes: {},
    }
  },

  addAttributes() {
    return {
      src: {
        default: null,
      },
      alt: {
        default: null,
      },
      title: {
        default: null,
      },
      width: {
        default: null,
        parseHTML: element => element.getAttribute('width'),
        renderHTML: attributes => {
          if (!attributes.width) {
            return {}
          }
          return { width: attributes.width }
        },
      },
      height: {
        default: null,
        parseHTML: element => element.getAttribute('height'),
        renderHTML: attributes => {
          if (!attributes.height) {
            return {}
          }
          return { height: attributes.height }
        },
      },
      align: {
        default: 'left',
        parseHTML: element => {
          const textAlign = element.style.textAlign || element.parentElement?.style.textAlign
          return textAlign || 'left'
        },
        renderHTML: attributes => {
          return {
            style: `text-align: ${attributes.align || 'left'}; display: block;`
          }
        },
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'img[src]',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    const { align, ...attributes } = HTMLAttributes
    const style = align ? `text-align: ${align}; display: block;` : 'display: block;'
    return ['div', { style }, ['img', mergeAttributes(attributes)]]
  },

  addCommands() {
    return {
      setResizableImage: (options) => ({ commands }) => {
        return commands.insertContent({
          type: this.name,
          attrs: options,
        })
      },
    }
  },

  addNodeView() {
    return ReactNodeViewRenderer(ResizableImageNode)
  },
})

export default ResizableImage
