type StringOrNull = string | null

export type Position = {
  left: StringOrNull
  right: StringOrNull
  top: StringOrNull
  bottom: StringOrNull
  width?: StringOrNull
}

export type BoundingClientRect = {
  top: string,
  bottom: string,
  left: string,
  right: string,
  width: string,
  height: string
}