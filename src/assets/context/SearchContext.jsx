import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchContextProvider = (props) => {

    const [searchContent, setSearchContent] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    const value = {
        showSearch,
        setShowSearch,
        searchContent,
        setSearchContent
    }

    return (
        <SearchContext.Provider value={value}>
            { props.children }
        </SearchContext.Provider>
    )
}


export default SearchContextProvider;