import {Component} from 'react'

import './index.css'

class DestinationItem extends Component {
  render() {
    const {destinationItem} = this.props
    const {imgUrl, name} = destinationItem
    return (
      <li className="searchItem">
        <img src={imgUrl} alt={name} className="image" />
        <p className="name">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
