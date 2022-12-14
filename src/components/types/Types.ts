export interface Report {
  report_id: number;
  title: string;
  author: string;
  headline_text: string;
  photo: string;
  main_text: string;
}

export interface SingleComment {
  comment_id: number;
  comment: string;
  date: string;
  report_id: number;
}
