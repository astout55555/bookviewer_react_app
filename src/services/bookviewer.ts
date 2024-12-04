import axios from 'axios';
import { TableOfContents } from '../types';

const PORT = '3000';
const baseURL = `http://localhost:${PORT}`;

async function getTOC() {
  const response = await axios.get<TableOfContents>(`${baseURL}/api/toc`);
  const tableOfContents = await response.data;
  return tableOfContents;
}

async function getChapter(formattedChapterName: string) {
  const response = await axios.get<string>(`${baseURL}/api/${formattedChapterName}`);
  const chapterContents = await response.data;
  return chapterContents;
}

export default {
  getTOC,
  getChapter,
}