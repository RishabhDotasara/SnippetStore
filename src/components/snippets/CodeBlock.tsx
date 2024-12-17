import React, { useEffect, useRef, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-python';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import { toast } from 'react-hot-toast';

interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
  canCopy?: boolean;
}

export const CodeBlock = ({ code, language, filename, canCopy=true }: CodeBlockProps) => {
  const codeRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy code');
    }
  };

  return (
    <div className="rounded-lg overflow-hidden bg-[#1e1e1e] w-full">
      <div className="px-4 py-2 bg-[#2d2d2d] border-b border-gray-700 flex justify-between items-center">
        {filename && (
          <span className="text-sm text-gray-400">{filename}</span>
        )}
        {canCopy && <button
          onClick={handleCopy}
          className="px-3 py-1 text-sm text-gray-400 hover:text-white bg-[#363636] rounded transition-colors flex items-center gap-2"
        >
          {copied ? (
            <>
              <CheckIcon className="w-4 h-4" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <CopyIcon className="w-4 h-4" />
              <span>Copy</span>
            </>
          )}
        </button>}
      </div>
      <div className="overflow-x-auto w-full">
        <pre className="line-numbers m-0 w-full">
          <code ref={codeRef} className={`language-${language} w-full`}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

const CopyIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);