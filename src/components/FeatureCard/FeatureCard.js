import "./FeatureCard.css"
import { theme } from "../../data/data"

function FeatureCard( {title , img}) {
  return (
    <div className='feature-card' style={{backgroundColor: theme.primaryColor}}>
        <img src={img} alt={title} className='feature-img'/>
        <p className='feature-title' style={{color: theme.text}}>{title}</p>
        <button className="btn">View Details</button>
    </div>
  )
}

export default FeatureCard
