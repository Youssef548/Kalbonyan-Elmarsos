// Set up filters default object

const filters = {
    searchText: '',
    hideCompleted: false,
}

const getFilters = () => filters

// setFilters
// Arguments: updates object with optional searchText or hideCompleted
// Return value: none


const setFilters = ({ searchText, hideCompleted }) => {
    if (typeof searchText === "string") {
        filters.searchText = searchText
    }

    if (typeof hideCompleted === 'boolean') {
        filters.hideCompleted = hideCompleted
    }


}


// Make sure to set up the exports

export {
    getFilters,
    setFilters
}