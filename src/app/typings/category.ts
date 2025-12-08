export type CategoryType = 'AUDI' |
  'BMW' |
  'MERCEDES' |
  'PORSCHE' |
  'VOLKSWAGEN' |
  'OPEL' |
  'FORD' |
  'MINI' |
  'SMART' |
  'SKODA'

export interface Category {
  id: string
  name: CategoryType
}

export interface CategoryRequestBody {
  name: CategoryType
}
