import TOC from './TOC';

import { MainProps } from "../types";

const Main = ({currentChapter, chapterTitle, toc, viewChapter}: MainProps) => {
  if (!currentChapter || !chapterTitle) {
    return (
      <>
        <div className="header">
          <h1>The Adventures of Sherlock Holmes</h1>
          <h2>by Sir Arthur Doyle</h2>
        </div>
  
        <div className="content">
          <h2 className="content-subhead">Table of Contents</h2>
          <TOC toc={toc} viewChapter={viewChapter} />
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="header">
          <h1>{chapterTitle}</h1>
        </div>

        <div className="content">
          <pre>{currentChapter}</pre>
        </div>
      </>
    );
  }
}

export default Main;