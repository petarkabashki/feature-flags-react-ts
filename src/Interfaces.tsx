export interface IFeature {
  label: string,
  input?: "text" | "number",
  features?: IFeature[],
  disabled: boolean
}

export interface IFeatureGroup {
  label: string,
  features: IFeature[]
} 
