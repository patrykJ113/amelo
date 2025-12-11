import {CategoryType} from '@typings/category';

export interface Listing {
  id: string
  title: string
  description: string
  price: number
  category_id: string
  category_name: CategoryType,
  picture_file_name: string
}

export type ListingRequestBody = Pick<Listing, 'title' | 'description' | 'price' | 'category_id'>
