import React, { Component } from 'react';
import CardList from '../CardList.js';
import SearchBox from '../SearchBox.js';
import { candies } from '../candies.js';

class Search extends Component {    
    constructor() {
        super()
        this.state = {
            candies: candies,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredCandies = this.state.candies.filter(candies =>{
            return candies.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className='tc dib br3 pa3 ma2 bw2 searchBar'>
                <div className="searchboxHeader">
                    <h1 className='f1 searchbar-title'>MUSEUM OF CANDY</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                </div> 
                <CardList candies={filteredCandies} />
            </div>
        );
    }

}

export default Search;