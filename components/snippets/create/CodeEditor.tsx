import { Code } from 'lucide-react';
import { CodeBlock } from '../../CodeBlock/CodeBlock';
import { Input } from '../../ui/Input';

interface CodeEditorProps {
  code: string;
  language: string;
  onChange: (code: string) => void;
  filename:string;
  updateFilename: (filename:string) => void;
}

export const CodeEditor = ({ code, language, onChange, filename="file", updateFilename }: CodeEditorProps) => {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex gap-2 items-center">
          <Code className='h-6 w-6 text-primary-500'/>
          Code
        </h2>
        <Input about='Filename' placeholder='filename' value={filename} onChange={(e)=>{updateFilename(e.target.value)}}/>
      </div>

      <div className="space-y-4">
        <textarea
          value={code}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-64 font-mono text-sm bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:text-white"
          placeholder="Paste or type your code here..."
          required
        />

        {code && (
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Preview
            </h3>
            <CodeBlock
              title='Code Snippet'
              code={code}
              canCopy={false}
              filename={filename}
              language={language || 'plaintext'}
            />
          </div>
        )}
      </div>
    </div>
  );
};