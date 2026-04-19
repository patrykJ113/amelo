import {Image} from '@typings/image';

export interface Listing {
  id: string
  title: string
  description: string
  price: number
  category_id: string
  category_name: string
  images: Image[]
}

export type ListingListItem = Pick<Listing, 'id' | 'title' | 'price'> & { image: null | Image }

export type GetAllListingsResponse = ListingListItem[]

export type ListingRequestBody = Pick<Listing, 'title' | 'description' | 'price' | 'category_id'>
