import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div>
            <input
                className='mb4 pa3 ba b--green bg-light-blue'
                type='search'
                placeholder='search robots...'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;