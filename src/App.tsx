import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import Home from "./components/home/Home";

import { CreateSnippetForm } from "./components/snippets/create/CreateSnippetForm";
import { CreateBlockForm } from "./components/blocks/CreateBlockForm";
import ShowSnippetPage from "./components/snippets/ShowSnippetPage";
import ShowBlockPage from "./components/blocks/ShowBlockPage";
import { ThemeProvider } from "./providers/theme-provider";
import { NotFound } from "./components/NotFound";
import Profile from "./components/profile/Profile";
import Search from "./components/search-page/Search";

function App() {
  return (
    <>
      <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Layout title="Snippet Store" showSearch={true}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/create/snippet" element={<CreateSnippetForm/>}/>
            <Route path="/create/block" element={<CreateBlockForm/>}/>
            <Route path="/snippet/:id" element={<ShowSnippetPage/>}/>
            <Route path="/block/:id" element={<ShowBlockPage/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </Layout>
      </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
