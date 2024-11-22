import { Post } from "./post.type"

export interface ApiResponse {
  meta: {
    code: number
  }
  data: Post[]
}