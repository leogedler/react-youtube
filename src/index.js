import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';
import SearchBar from './componets/search_bar';
import VideoList from './componets/video_list';
import VideoDetail from './componets/video_detail';

const API_KEY = 'AIzaSyCgG6titLIo55t544kPJgPnSAWo7V1W3wA';


class App extends Component{
    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
         };

         this.videoSearch('surfboards');
    };

    videoSearch(term){
        YTsearch({ key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
            selectedVideo: videos[0]
            });
        }); 
    };

    render() {

        // Wait 300ms to call videoSearch using lodash
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return(
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    };
}


// Render elements to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));