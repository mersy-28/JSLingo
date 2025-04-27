import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'javascript' }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
      <pre className="text-sm">
        <code className={`language-${language}`}>
          {code.trim()}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;