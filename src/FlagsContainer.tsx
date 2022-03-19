import { IFeature, IFeatureGroup } from './Interfaces'
import FlagComponent from './FlagComponent'

interface IComponentProps {
  flags: Array<IFeatureGroup>
}

const FlagsContainer = ({ flags }: IComponentProps ) => {
  return <section className="feature-flags">
    { flags.map(featureGroup => (
      <div className="feature-group">
        <h3>{featureGroup.label}</h3>
        <div className="feature-group-body">
          {featureGroup.features.map(feature => (
              <FlagComponent feature={feature}/>
          ))}
        </div>
      </div>
    ))}
  </section>
}
export default FlagsContainer