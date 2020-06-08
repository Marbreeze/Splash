import React from 'react';


class SearchBar extends React.Component {      

   onClick(event){
       event.preventDefault();
   } 
  onFormSubmit(event) {
      event.preventDefault();
     console.log(this.state.term,"this is my term");
     this.props.onSubmit(this.state.term); 
  }

    render(){  //render function
        return(
        <div>
            <div className = "ui segment">
                <form  onSubmit={(e) => this.onFormSubmit(e)} className = "ui form"> {/*this creates a searchbar in the browser,callback funct */}
                
                    <div className = "field">
                        <label>Image Search</label>  
                    <input type = "text"
                    value={this.state.term}  /*rewriting over the user input
                    onChange={ e => this.setState({term:  e.target.value})}/> {/*what kind of input in the sb*/}
                    </div>                              {/*calling the funct  with the event and taking its val */}
                </form>
                <button onClick = {e =>console.log(e, 'event')}>Click me</button>
            </div>              
        </div>
        );
    }
}


export default SearchBar;
 

