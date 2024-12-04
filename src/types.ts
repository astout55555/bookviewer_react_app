export type ViewChapter = (arg0: string) => Promise<void>;

export type CurrentChapter = string | null;

export type ChapterTitle = string | null;

export interface TableOfContents {
  book: string,
  chapters: string[],
}

export interface TOCProps {
  toc: TableOfContents,
  viewChapter: ViewChapter,
}

export interface MainProps extends TOCProps {
  currentChapter: CurrentChapter,
  chapterTitle: ChapterTitle,
}
