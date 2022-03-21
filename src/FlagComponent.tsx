import { useState, useContext, useRef, ReactEventHandler, SyntheticEvent } from 'react'
import { IFeature } from './Interfaces'
import { ActionTypes } from './reducers';
import { AiFillCaretDown, AiFillCaretUp  } from "react-icons/ai";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";
interface FlagProps {
  feature:IFeature,
  showChildren?: boolean,
  showItems?: (on: boolean) => void,
  setDisabled?: (diabled:boolean) => void
}

const FlagComponent = ({feature, childFeatures, dispatch}: {feature:IFeature, childFeatures: IFeature[], dispatch:any}) => {
  const [showChildren, setShowChildren] = useState(false);

  const toggleDisabled = (e:any, id: string) => {
    e.preventDefault()
    dispatch({ type: ActionTypes.ToggleDisabled, payload: {id} })
  }

  return (
    <div className="feature">
      <div className="feature-header"  >
          <header>{feature.label}</header>
          <div>
            {feature.select && 
              <select defaultValue={feature.select.value} onChange={(e) => { dispatch({type: ActionTypes.SelectFromDropdown, payload: {id: feature.id, value: e.target.value}})}}>
                {feature.select.list.map((opt, idx) => <option key={idx} value={opt}>{opt}</option>
                )}
              </select>
            }
            <div className='toggle' onClick={(e)=> toggleDisabled(e, feature.id) }>
              { feature.disabled && <BsToggle2Off size='1.4em'/> || <BsToggle2On color='blue' size='1.4em'/>}
            </div>
            
            {(childFeatures.length > 0) && (
              (feature.disabled && <AiFillCaretUp size='1.5em' /> ||
                (
                  showChildren && <AiFillCaretDown size='1.5em' onClick={() => setShowChildren(!showChildren)}/> || 
                  <AiFillCaretUp size='1.5em' onClick={() => setShowChildren(!showChildren)} />)
                )                
            )}
          </div>
      </div>
      {( !feature.disabled && childFeatures && showChildren) && (
        <div className='feature-subitems'>
          {childFeatures.map(f => (<FlagComponent feature={f} childFeatures={[]} dispatch={dispatch}/>))}
        </div>
      )}
    </div>)
}
export default FlagComponent