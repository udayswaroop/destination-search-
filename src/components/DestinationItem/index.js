// Write your code here

import './index.css'

const DestinationItem = props => {
  const {initialDestinationItem} = props
  const {name, imgUrl} = initialDestinationItem

  return (
    <li className="img-container">
      <img src={imgUrl} alt={name} className="imageEl" />
      <p className="destinationName">{name}</p>
    </li>
  )
}

export default DestinationItem
