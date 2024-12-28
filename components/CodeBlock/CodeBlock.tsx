import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Prism from 'prismjs';

import { CodeHeader } from './CodeHeader';
import { CopyButton } from './CopyButton';

import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-python';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import { cn } from '../../utils/styles';

interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
  canCopy?: boolean;
  title: string;
}

export function CodeBlock({
  code,
  language,
  filename,
  title,
  canCopy = true,
}: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);
  const [expandable, setExpandable] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
    setExpandable(code.length > 100);
  }, [code]);

  return (
    <div className="w-full rounded-lg border dark:border-gray-600  bg-background shadow-sm overflow-hidden dark:text-white">
      <CodeHeader title={title} filename={filename} />
      
      <div className="relative bg-zinc-950">
        <div className="absolute right-4 top-4 z-10">
          {canCopy && <CopyButton code={code} />}
        </div>

        <div
          className={cn(
            "relative transition-all duration-300 ease-in-out",
            expanded ? "h-fit" : "max-h-[200px]",
            !expanded && "overflow-hidden"
          )}
        >
          <pre className="m-0 p-4 ">
            <code ref={codeRef} className={`language-${language} text-sm`}>
              {code}
            </code>
          </pre>
        </div>

        {expandable && (
          <div
            className={cn(
              "absolute bottom-0 left-0 right-0 text-white",
              "flex items-end justify-center",
              expanded ? "h-12 bg-zinc-950" : "h-24 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent"
            )}
          >
            <button
              onClick={() => setExpanded(!expanded)}
              className="mb-2 inline-flex items-center gap-1.5 rounded-full 
                px-4 py-1.5 text-sm font-medium
                bg-primary/10 text-primary-foreground
                hover:bg-primary/20 transition-colors duration-200"
            >
              {expanded ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  <span>Show Less</span>
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  <span>Show More</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}