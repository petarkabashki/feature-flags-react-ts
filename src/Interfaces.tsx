export interface ISelect {
  list: number[],
  value: number
}
export interface IFeature {
  id: string,
  groupLabel: string,
  label: string,
  parent?: string,
  select? : ISelect,
  disabled: boolean
}

