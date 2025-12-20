"use client"
import { useRef, useState, useCallback, useEffect } from "react"
import { NodeViewWrapper, NodeViewContent } from "@tiptap/react"

export const ResizableImageNode = ({ node, editor, getPos, updateAttributes }) => {
  const [isResizing, setIsResizing] = useState(false)
  const [resizeDirection, setResizeDirection] = useState('')
  const [startPos, setStartPos] = useState({ x: 0, y: 0 })
  const [startSize, setStartSize] = useState({ width: 0, height: 0 })
  const imageRef = useRef(null)
  const containerRef = useRef(null)

  const currentAlign = node.attrs.align || 'left'

  const handleMouseDown = useCallback((e, direction) => {
    e.preventDefault()
    e.stopPropagation()
    
    setIsResizing(true)
    setResizeDirection(direction)
    setStartPos({ x: e.clientX, y: e.clientY })
    
    const img = imageRef.current
    if (img) {
      const rect = img.getBoundingClientRect()
      setStartSize({ 
        width: rect.width, 
        height: rect.height 
      })
    }
  }, [])

  const handleMouseMove = useCallback((e) => {
    if (!isResizing || !imageRef.current) return

    const deltaX = e.clientX - startPos.x
    const deltaY = e.clientY - startPos.y
    let newWidth = startSize.width
    let newHeight = startSize.height

    // Handle different resize directions
    if (resizeDirection.includes('right')) {
      newWidth = Math.max(50, startSize.width + deltaX)
    }
    if (resizeDirection.includes('left')) {
      newWidth = Math.max(50, startSize.width - deltaX)
    }
    if (resizeDirection.includes('bottom')) {
      newHeight = Math.max(50, startSize.height + deltaY)
    }
    if (resizeDirection.includes('top')) {
      newHeight = Math.max(50, startSize.height - deltaY)
    }

    // Maintain aspect ratio if shift is not pressed
    if (!e.shiftKey) {
      const aspectRatio = startSize.width / startSize.height
      if (resizeDirection.includes('right') || resizeDirection.includes('left')) {
        newHeight = newWidth / aspectRatio
      } else {
        newWidth = newHeight * aspectRatio
      }
    }

    updateAttributes({
      width: `${newWidth}px`,
      height: `${newHeight}px`
    })
  }, [isResizing, resizeDirection, startPos, startSize, updateAttributes])

  const handleMouseUp = useCallback(() => {
    setIsResizing(false)
    setResizeDirection('')
  }, [])

  // Properly manage event listeners
  useEffect(() => {
    if (isResizing) {
      const handleGlobalMouseMove = (e) => handleMouseMove(e)
      const handleGlobalMouseUp = () => handleMouseUp()

      document.addEventListener('mousemove', handleGlobalMouseMove)
      document.addEventListener('mouseup', handleGlobalMouseUp)

      return () => {
        document.removeEventListener('mousemove', handleGlobalMouseMove)
        document.removeEventListener('mouseup', handleGlobalMouseUp)
      }
    }
  }, [isResizing, handleMouseMove, handleMouseUp])

  const handleDoubleClick = useCallback(() => {
    // Reset to original size on double click
    updateAttributes({
      width: null,
      height: null
    })
  }, [updateAttributes])

  const handleKeyDown = useCallback((e) => {
    // Delete image on backspace or delete key
    if ((e.key === 'Backspace' || e.key === 'Delete') && editor.isActive('resizableImage')) {
      const pos = getPos()
      editor.chain().focus().deleteRange({ from: pos, to: pos + node.nodeSize }).run()
    }
  }, [editor, getPos, node.nodeSize])

  return (
    <NodeViewWrapper 
      className="resizable-image-wrapper" 
      data-drag-handle
      onKeyDown={handleKeyDown}
    >
      <div 
        ref={containerRef}
        className="resizable-image-container"
        style={{ 
          display: 'block',
          position: 'relative',
          lineHeight: 0,
          maxWidth: '100%',
          textAlign: currentAlign || 'left'
        }}
      >
        <img
          ref={imageRef}
          src={node.attrs.src}
          alt={node.attrs.alt}
          title={node.attrs.title}
          width={node.attrs.width}
          height={node.attrs.height}
          style={{
            width: node.attrs.width || 'auto',
            height: node.attrs.height || 'auto',
            maxWidth: '100%',
            display: 'block',
            cursor: isResizing ? 'nwse-resize' : 'default'
          }}
          onDoubleClick={handleDoubleClick}
          draggable={false}
        />
        
        {/* Resize handles */}
        {!isResizing && (
          <>
            {/* Corner handles */}
            <div
              className="resize-handle resize-handle-nw"
              style={{
                position: 'absolute',
                top: '-4px',
                left: '-4px',
                width: '8px',
                height: '8px',
                backgroundColor: '#3b82f6',
                border: '1px solid white',
                borderRadius: '50%',
                cursor: 'nw-resize',
                opacity: 0,
                transition: 'opacity 0.2s'
              }}
              onMouseDown={(e) => handleMouseDown(e, 'top-left')}
            />
            <div
              className="resize-handle resize-handle-ne"
              style={{
                position: 'absolute',
                top: '-4px',
                right: '-4px',
                width: '8px',
                height: '8px',
                backgroundColor: '#3b82f6',
                border: '1px solid white',
                borderRadius: '50%',
                cursor: 'ne-resize',
                opacity: 0,
                transition: 'opacity 0.2s'
              }}
              onMouseDown={(e) => handleMouseDown(e, 'top-right')}
            />
            <div
              className="resize-handle resize-handle-sw"
              style={{
                position: 'absolute',
                bottom: '-4px',
                left: '-4px',
                width: '8px',
                height: '8px',
                backgroundColor: '#3b82f6',
                border: '1px solid white',
                borderRadius: '50%',
                cursor: 'sw-resize',
                opacity: 0,
                transition: 'opacity 0.2s'
              }}
              onMouseDown={(e) => handleMouseDown(e, 'bottom-left')}
            />
            <div
              className="resize-handle resize-handle-se"
              style={{
                position: 'absolute',
                bottom: '-4px',
                right: '-4px',
                width: '8px',
                height: '8px',
                backgroundColor: '#3b82f6',
                border: '1px solid white',
                borderRadius: '50%',
                cursor: 'se-resize',
                opacity: 0,
                transition: 'opacity 0.2s'
              }}
              onMouseDown={(e) => handleMouseDown(e, 'bottom-right')}
            />
            
            {/* Edge handles */}
            <div
              className="resize-handle resize-handle-n"
              style={{
                position: 'absolute',
                top: '-4px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '8px',
                height: '8px',
                backgroundColor: '#3b82f6',
                border: '1px solid white',
                borderRadius: '50%',
                cursor: 'n-resize',
                opacity: 0,
                transition: 'opacity 0.2s'
              }}
              onMouseDown={(e) => handleMouseDown(e, 'top')}
            />
            <div
              className="resize-handle resize-handle-s"
              style={{
                position: 'absolute',
                bottom: '-4px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '8px',
                height: '8px',
                backgroundColor: '#3b82f6',
                border: '1px solid white',
                borderRadius: '50%',
                cursor: 's-resize',
                opacity: 0,
                transition: 'opacity 0.2s'
              }}
              onMouseDown={(e) => handleMouseDown(e, 'bottom')}
            />
            <div
              className="resize-handle resize-handle-w"
              style={{
                position: 'absolute',
                top: '50%',
                left: '-4px',
                transform: 'translateY(-50%)',
                width: '8px',
                height: '8px',
                backgroundColor: '#3b82f6',
                border: '1px solid white',
                borderRadius: '50%',
                cursor: 'w-resize',
                opacity: 0,
                transition: 'opacity 0.2s'
              }}
              onMouseDown={(e) => handleMouseDown(e, 'left')}
            />
            <div
              className="resize-handle resize-handle-e"
              style={{
                position: 'absolute',
                top: '50%',
                right: '-4px',
                transform: 'translateY(-50%)',
                width: '8px',
                height: '8px',
                backgroundColor: '#3b82f6',
                border: '1px solid white',
                borderRadius: '50%',
                cursor: 'e-resize',
                opacity: 0,
                transition: 'opacity 0.2s'
              }}
              onMouseDown={(e) => handleMouseDown(e, 'right')}
            />
          </>
        )}
      </div>
      
      <style jsx>{`
        .resizable-image-wrapper:hover .resize-handle,
        .resizable-image-wrapper.ProseMirror-selectednode .resize-handle {
          opacity: 1 !important;
        }
        
        .resizable-image-wrapper .resize-handle:hover {
          background-color: #2563eb !important;
          transform: scale(1.2);
        }
        
        .resize-handle-nw:hover {
          transform: scale(1.2) !important;
        }
        .resize-handle-ne:hover {
          transform: scale(1.2) !important;
        }
        .resize-handle-sw:hover {
          transform: scale(1.2) !important;
        }
        .resize-handle-se:hover {
          transform: scale(1.2) !important;
        }
        .resize-handle-n:hover {
          transform: translateX(-50%) scale(1.2) !important;
        }
        .resize-handle-s:hover {
          transform: translateX(-50%) scale(1.2) !important;
        }
        .resize-handle-w:hover {
          transform: translateY(-50%) scale(1.2) !important;
        }
        .resize-handle-e:hover {
          transform: translateY(-50%) scale(1.2) !important;
        }
      `}</style>
    </NodeViewWrapper>
  )
}
