import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router';

// context
import { SearchContext } from '../assets/context/SearchContext';
import { RouteContext } from '../assets/context/RouteContext';

// icon
import crossIcon from "../assets/icons/iconPics/cross.png"

// components
import Container from "../components/Container";



function SearchBar() {

    const location = useLocation();

    // ---------------------------------- Context ---------------------------------- //
    const { showSearch, setShowSearch, searchContent, setSearchContent } = useContext(SearchContext) || {};
    const routesList = useContext(RouteContext);


    // ---------------------------------- Functions ---------------------------------- //
    const clearSearch = () => {
        setShowSearch(false);
        setSearchContent("");
    }

    useEffect(() => {
        if(routesList) {
            if(location.pathname !== routesList.collection.url) {
                clearSearch();
            }
        }
    }, [location])
    

    return (
        <>
            {
                showSearch 
                ?
                    <Container>
                        <div className='searchBarBox showSmoothly bg-gray-50 text-center' data-testid='searchBar'>
                            <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-0 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
                                <input 
                                    type="search" 
                                    placeholder='Search'  
                                    className='flex-1 outline-none bg-inherit text-sm p-2' 
                                    value={searchContent}
                                    onChange={(searchTyped) => setSearchContent(searchTyped.target.value)}
                                    data-testid='searchInput'
                                />
                            </div>
                            <img 
                                src={crossIcon} 
                                className='inline w-3 cursor-pointer' 
                                onClick={clearSearch}
                            />
                        </div>
                    </Container>
                :
                    ""
            }
        </>
    )
}

export default SearchBar