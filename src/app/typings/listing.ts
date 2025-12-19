import {CategoryType} from '@typings/category';
import {Picture} from '@typings/picture';

export interface Listing {
  id: string
  title: string
  description: string
  price: number
  category_id: string
  category_name: CategoryType,
  picture_file_name: string
  pictures: Picture[]
}

export type ListingListItem = Pick<Listing, 'id' | 'title' | 'price'> & { picture: null | Picture }

export type GetAllListingsResponse = ListingListItem[]

export type ListingRequestBody = Pick<Listing, 'title' | 'description' | 'price' | 'category_id'>
