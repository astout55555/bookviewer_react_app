import './app.css';

import { useState, useEffect } from 'react'
import bookviewerService from './services/bookviewer';

import {
  TableOfContents,
  CurrentChapter,
  ChapterTitle,
} from './types';

import TOC from './components/TOC';
import Main from './components/Main';

function App() {
  const [toc, setToc] = useState<TableOfContents>();
  const [currentChapter, setCurrentChapter] = useState<CurrentChapter>(null);
  const [chapterTitle, setChapterTitle] = useState<ChapterTitle>(null);

  useEffect(() => {
    async function getAndSetTOC() {
      try {
        const tableOfContents = await bookviewerService.getTOC();
        setToc(tableOfContents);
      } catch (error) {
        console.error(error);
      }
    }

    getAndSetTOC();
  }, []);

  if (!toc) {
    return null;
  }

  async function viewChapter(chapterName: string) {
    try {
      const chapterContents = await bookviewerService.getChapter(chapterName);
      setCurrentChapter(chapterContents);
      setChapterTitle(chapterName);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div id="layout">
      <a href="#menu" id="menuLink" className="menu-link">
          <span></span>
      </a>

      <div id="menu">
          <div className="pure-menu">
              <a className="pure-menu-heading" href="/">Table of Contents</a>
              <TOC toc={toc} viewChapter={viewChapter} />
          </div>
      </div>

      <div id="main">
        <Main toc={toc} viewChapter={viewChapter}
          currentChapter={currentChapter} chapterTitle={chapterTitle} />
      </div>
    </div>
  )
}

export default App
