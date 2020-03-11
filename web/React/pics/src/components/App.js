import React from 'react';
import unsplash from './../unsplash';
import SearchBar from './SearchBar';
import Photo from './Photo';
import ImageList from './ImageList';
 

class  App  extends React.Component {
    
    state = {images: [] };

    async onSearchSubmit (term){
        const response = await unsplash.get('/search/photos/', {
            params: { query: term }
        });
       console.log(response);
        this.setState({images : response.data.results });
        //console.log("images:response")
        // console.log('images',this.state.images);
    };


    render() {
    return (
<div className = "ui  container"style={{ marginTop : '10 px'}}>     {/*creates a container */}
        <SearchBar 
        onSubmit ={this.onSearchSubmit.bind(this)}/>
        {/* Found :{this.state.images.length}images */} 
        <ImageList images={this.state.images}/>     
        {/* /> passing the props images down to child,that will be called in the
        <ImageList component/> */}
        </div>
    );
    }
};

export default App;