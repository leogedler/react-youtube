import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './componets/search_bar';

const API_KEY = 'AIzaSyCgG6titLIo55t544kPJgPnSAWo7V1W3wA';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}


// Render elements to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));