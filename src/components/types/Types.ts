export interface Report {
  report_id: number;
  title: string;
  author: string;
  text: string;
  photo: string;
}

export interface SingleComment {
  comment_id: number;
  comment: string;
  date: string;
  report_id: number;
}
