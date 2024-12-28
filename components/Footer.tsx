
export const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 dark:bg-black  py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} SnippetStore. All rights reserved.
        </p>
        <div className="mt-2 flex gap-4 text-sm text-gray-500">
          <a href="#" className="hover:text-primary-600">About</a>
          <a href="#" className="hover:text-primary-600">Terms</a>
          <a href="#" className="hover:text-primary-600">Privacy</a>
          <a href="#" className="hover:text-primary-600">Contact</a>
        </div>
      </div>
    </footer>
  );
};