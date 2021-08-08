import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchItem: '',
  }

  onChangeItems = event => {
    this.setState({searchItem: event.target.value})
  }

  render() {
    const {searchItem} = this.state
    const {initialDestinationsList} = this.props
    const searchResults = initialDestinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchItem.toLowerCase()),
    )

    return (
      <div className="destination_app_bg_container">
        <div className="destination_app_container">
          <h1 className="main-heading">Destination Search</h1>
          <div className="search-container">
            <input
              type="search"
              className="search-box"
              placeholder="Search"
              value={searchItem}
              onChange={this.onChangeItems}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="search-items-container">
            {searchResults.map(eachItem => (
              <DestinationItem key={eachItem.id} destinationItem={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
