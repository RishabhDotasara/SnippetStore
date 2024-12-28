import React from 'react';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
import { Toaster } from 'react-hot-toast';

interface Props {
  title: string;
  showSearch?: boolean;
  children: React.ReactNode;
}

const Layout = ({ title, showSearch = true, children }: Props) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
   
      <Header showSearch={showSearch} />
      <Toaster 
        position='top-center'
        gutter={8}

      />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
