// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props

    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLocaleLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="main-heading">Destination Search</h1>
          <div className="search-container">
            <input
              type="search"
              placeholder="Search"
              className="searchInputEl"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-logo"
            />
          </div>
        </div>
        <ul className="list-container">
          {searchResults.map(eachItem => (
            <DestinationItem
              initialDestinationItem={eachItem}
              key={eachItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
