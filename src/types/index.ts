export interface ResponseType {
  statusCode: number;
  data: any;
  message: string;
  success: boolean;
  path?: string;
}
