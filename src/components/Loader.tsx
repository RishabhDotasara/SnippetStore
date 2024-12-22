import { CodeIcon } from "./icons/CodeIcon";

export default function Loader({text}: {text: string}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-t-4 border-blue-500 rounded-full animate-spin"></div>
        <div className="absolute inset-3">
          <CodeIcon className="w-10 h-10 text-gray-400" />
        </div>
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-lg">
        {text}..
      </p>
    </div>
  );
}
