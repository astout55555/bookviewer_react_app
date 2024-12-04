import { MouseEvent } from "react";
import { TOCProps } from "../types";

const TOC = ({toc, viewChapter}: TOCProps) => {
  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    const chapterName = event.currentTarget.textContent;
    if (chapterName) {
      viewChapter(chapterName);
    } else {
      console.error('Chapter name missing somehow!');
    }
  }

  return (
    <div className="pure-menu">
      <ul className="pure-menu-list">
        {toc.chapters.map((chapterName: string) => {
          return (
            <li key={chapterName} className="pure-menu-item">
              <a href="#" onClick={handleClick} className="pure-menu-link">
                {chapterName}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TOC;