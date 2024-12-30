"use client"
import { FileQuestion, Home } from 'lucide-react';
import Link from 'next/link';


export const NotFound = () => {
  return (
    <div className="   flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-200/30 dark:bg-primary-800/30 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute top-1/4 -right-8 w-32 h-32 bg-primary-300/20 dark:bg-primary-700/20 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-12 left-1/3 w-20 h-20 bg-primary-100/30 dark:bg-primary-900/30 rounded-full blur-lg animate-float"></div>
      </div>

      {/* Main content */}
      <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-8 shadow-lg max-w-md w-full text-center space-y-8">
        <div className="relative group">
          <div className="absolute inset-0 bg-primary-500/10 dark:bg-primary-400/10 rounded-full blur transition-all duration-500 group-hover:blur-xl"></div>
          <div className="relative bg-white dark:bg-gray-800 rounded-full p-6 w-32 h-32 mx-auto">
            <FileQuestion className="w-full h-full text-primary-500 dark:text-primary-400 transition-transform duration-500 group-hover:scale-110" />
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-200">
            4
            <span className="inline-block animate-bounce-subtle">0</span>
            4
          </h1>
          <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Page not found
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            The page you&apos;re looking for seems to have wandered off...
          </p>
        </div>

        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium text-white bg-primary-500 rounded-lg 
                     hover:bg-primary-600 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5
                     dark:bg-primary-600 dark:hover:bg-primary-500"
        >
          <Home className="w-4 h-4" />
          Return Home
        </Link>
      </div>
    </div>
  );
};