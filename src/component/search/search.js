import React from 'react'
import './search.css'
import searchIcon from '../../assets/search.png'


function search() {
    return (
        <div className='search-bar'>
               <h1>get a unlimited stock footage</h1>
            <div className="input-group">
                <input type="text" className="search-box" placeholder="search for your perfect footage"/>
                <button type="submit" className="input-group-text btn-success"><img src={searchIcon} className='search-icon'></img></button>
            </div>
        </div>
    )
}

export default search
