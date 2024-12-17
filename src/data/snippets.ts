import type { Snippet } from '../types/snippet';

export const snippets: Snippet[] = [
  {
    id: 1,
    title: 'React useEffect Cleanup',
    language: 'typescript',
    type: 'snippet',
    upvotes: 42,
    createdAt: new Date('2023-10-01'),
    code: `useEffect(() => {
  const subscription = someAPI.subscribe();
  
  // Cleanup function
  return () => {
    subscription.unsubscribe();
  };
}, []);`,
    filename: 'useEffect.ts'
  },
  {
    id: 2,
    title: 'React Component Collection',
    language: 'react',
    type: 'block',
    upvotes: 85,
    createdAt: new Date('2023-09-30'),
    snippetCount: 5,
    snippets: [
      {
        id: 21,
        title: 'Button Component',
        language: 'typescript',
        type: 'snippet',
        upvotes: 32,
        downvotes:21,
        createdAt: new Date('2023-09-30'),
        code: `export const Button = ({ children, ...props }) => (
  <button 
    className="px-4 py-2 bg-blue-500 text-white rounded"
    {...props}
  >
    {children}
  </button>
);`,
        filename: 'Button.tsx'
      },
      {
        id: 22,
        title: 'Input Component',
        language: 'typescript',
        type: 'snippet',
        
        upvotes: 28,
        createdAt: new Date('2023-09-30'),
        code: `export const Input = ({ label, ...props }) => (
  <label className="block">
    <span className="text-gray-700">{label}</span>
    <input 
      className="mt-1 block w-full rounded-md border-gray-300"
      {...props}
    />
  </label>
);`,
        filename: 'Input.tsx'
      }
    ]
  }
];