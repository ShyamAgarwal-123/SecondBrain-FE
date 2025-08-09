export interface ResponseType {
  statusCode: number;
  data: any;
  message: string;
  success: boolean;
  path?: string;
}
export interface TagType {
  _id: string;
  name: string;
  createdAt: string;
}
export interface ContentType {
  _id: string;
  title: string;
  link: string;
  type: "document" | "tweet" | "youtube" | "link";
  userID: string;
  tags: TagType[];
  createdAt: string;
}
