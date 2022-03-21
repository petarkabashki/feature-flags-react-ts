import { IFeature } from './Interfaces'

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      }
};

export enum ActionTypes {
  ToggleDisabled = 'TOGGLE_DISABLED',
  SelectFromDropdown = 'SELECT_FROM_DROPDOWN',
}

type FeatureFlagPayload = {
  [ActionTypes.ToggleDisabled] : { id: string };
  [ActionTypes.SelectFromDropdown] : { id: string, value: number };
}

export type FeatureFlagActions = ActionMap<FeatureFlagPayload>[keyof ActionMap<FeatureFlagPayload>];

const sortFeatures = (f1: IFeature, f2:IFeature) => (f1.label > f2.label) && 1 || -1
export const featureFlagReducer = (state: IFeature[], action: FeatureFlagActions) => {
  const flag = state.find(f => (f.id == action.payload.id))!
  switch (action.type) {
    case ActionTypes.ToggleDisabled:
      const newState = [
        ...(state.filter(f => (f.id != action.payload.id))),
        {...flag, disabled: !(flag.disabled)}
      ]
      return newState.sort(sortFeatures)

    case ActionTypes.SelectFromDropdown:
      console.log('action', action)
      return [
        ...(state.filter(f => (f.id != action.payload.id))),
      {...flag, select: {...flag.select!, value: action.payload.value},}
      ].sort(sortFeatures)
    default:
      return state;
  }
}
