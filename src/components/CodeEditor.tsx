import React, { useRef, useEffect } from 'react';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  language?: string;
  placeholder?: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  value,
  onChange,
  language = 'javascript',
  placeholder = 'Type your code here...'
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Basic syntax highlighting with CSS classes only
  // In a real app, you'd use a proper code editor library like Monaco or CodeMirror
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  // Adjust textarea height based on content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  // Handle tab key to insert spaces instead of changing focus
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const textarea = textareaRef.current;
      if (!textarea) return;
      
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      
      // Insert 2 spaces for indentation
      const newValue = value.substring(0, start) + '  ' + value.substring(end);
      onChange(newValue);
      
      // Move cursor position after the inserted spaces
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 2;
      }, 0);
    }
  };

  return (
    <div className="relative rounded-md border border-gray-300 bg-gray-50 overflow-hidden">
      <div className="absolute top-0 right-0 px-2 py-1 text-xs text-gray-500 bg-gray-100 rounded-bl-md">
        {language}
      </div>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="w-full p-4 pt-8 font-mono text-sm text-gray-800 bg-transparent resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        rows={Math.max(5, value.split('\n').length)}
        spellCheck={false}
      />
    </div>
  );
};

export default CodeEditor;