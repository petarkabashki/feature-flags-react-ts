import React, { useContext, useEffect, useReducer } from 'react';
import { IFeature } from './Interfaces'
import FlagComponent from './FlagComponent'

import { FlagsDispatch } from './FlagsDispatch'

const FlagsContainer = ({ featureFlags }: {featureFlags: IFeature[]}) => {
  const dispatch = useContext(FlagsDispatch);
  const featureGroups = Array.from((new Set<string>(featureFlags.map(f => f.groupLabel))).values()).sort()

  return <section className="feature-flags">
    { featureGroups.map((featureGroup, idx) => (
      <div key={`${featureGroup}/${idx}`} className="feature-group">
        <h3>{featureGroup}</h3>
        <div className="feature-group-body">
          { //Top level flags for the group
            featureFlags.filter(f => (f.groupLabel == featureGroup && f.parent == undefined))
              .map((feature, idf) => (
                <FlagComponent key={`${feature.label}/${idf}`} 
                  feature={feature} 
                  childFeatures={featureFlags.filter(f => f.parent == feature.id)}
                  dispatch={dispatch}/>
              ))
          }
        </div>
      </div>
    ))}
  </section>
}
export default FlagsContainer
