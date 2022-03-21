import React, { Dispatch, createContext } from 'react'
import { featureFlagReducer, FeatureFlagActions, ActionTypes } from './reducers';
import { IFeature } from './Interfaces'

// type dispatchType = Dispatch<FeatureFlagActions>

export const FlagsDispatch = createContext<Dispatch<FeatureFlagActions>>(()=>null)
