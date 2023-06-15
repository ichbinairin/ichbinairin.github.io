import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa3'>
            <input
                className='pa3 w-50 br3 bn b--navy bg-washed-blue'
                type='search'
                placeholder='search candies'
                onChange = {searchChange}
            />
        </div>
    );
} 

export default SearchBox;