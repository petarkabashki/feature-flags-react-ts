import { useState } from 'react'
import { IFeature, IFeatureGroup } from './Interfaces'
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";


interface FlagProps {
  feature:IFeature,
  showChildren?: boolean,
  showItems?: (on: boolean) => void,
  setDisabled?: (diabled:boolean) => void
}


const Flag =  ({feature, showChildren=true, showItems, setDisabled}: FlagProps) => {
  return (
    <div className="feature-header">
        <header>{feature.label}</header>
        <div>
          <label className="switch">
            <input type="checkbox" defaultChecked={!feature.disabled} onChange={(e)=>(setDisabled && setDisabled(!feature.disabled)) } />
            <span className="slider round"></span>
          </label>
          {(feature.features && showItems && !feature.disabled) && (
            (showChildren && <AiFillCaretDown onClick={() => showItems(false)}/> || 
              <AiFillCaretUp onClick={() => showItems(true)} />)
          )}
        </div>
    </div>
  )
}

const FlagComponent = ({feature}: {feature: IFeature}) => {
  const [showChildren, setShowChildren] = useState(false);
  const [disabled, setDisabled] = useState(feature.disabled);

  const changeDisabled = (on:boolean) => {
    feature.disabled = on;
    setDisabled(on);
    if(!on) {
      setShowChildren(false)
    } else {
      setShowChildren(true)
    }
  }

  return (
    <div className="feature">
      <Flag feature={feature} showChildren={showChildren} 
        showItems={(on) => setShowChildren(on)}
        setDisabled={(disabled) => changeDisabled(disabled)}
      />
      {( !disabled && feature.features && showChildren) && (
        <div className='feature-subitems'>
          {feature.features.map(f => (<Flag feature={f}/>))}
        </div>
      )}
    </div>)
}
export default FlagComponent