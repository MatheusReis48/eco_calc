import { User } from "./user.type"

export interface Post {
  type: string
  filter: string
  created_time: string
  link: string
  images: Images
  caption: Caption
  user_has_liked: boolean
  id: string
  user: User
}

export interface Images {
  low_resolution: ImageObject
  thumbnail: ImageObject
  standard_resolution: ImageObject
}

export interface ImageObject {
  url: string
  width: number
  height: number
}

export interface Caption {
  created_time: string
  text: string
  from: User
  id: string
}
 