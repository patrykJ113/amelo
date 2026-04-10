export interface Category {
  id: string
  name: string
  primary_id: string | null
}

export interface CategoryRequestBody {
  name: string
}
