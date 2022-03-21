import React, { useReducer, Dispatch, createContext, Reducer } from 'react'
import './App.css';
import FlagsContainer from './FlagsContainer'
import dummyFlags from './dummyFlags'
import { featureFlagReducer, FeatureFlagActions, ActionTypes } from './reducers';
// import { IFeature } from './Interfaces'
import { FlagsDispatch } from './FlagsDispatch'

function App() {
  const [featureFlags, dispatch] = useReducer(featureFlagReducer, 
    dummyFlags.sort((f1, f2) => (f1.label > f2.label) && 1 || -1));
  return (  
    <FlagsDispatch.Provider value={dispatch}>
      <div className="App">
        <header className="App-header" />        
        <div className="App-body">
          <FlagsContainer featureFlags={featureFlags}/>
        </div>
      </div>
    </FlagsDispatch.Provider>
  );
}

export default App;
