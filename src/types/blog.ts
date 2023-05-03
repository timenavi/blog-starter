export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  author: string;
  date: string; // ISO formatted date string (e.g., "2023-05-03T10:20:30Z")
  summary: string;
  content: string;
}
