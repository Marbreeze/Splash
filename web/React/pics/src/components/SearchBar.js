import React from 'react';


class SearchBar extends React.Component {      //we are creting class because we have to use state
  state={term: ''};

   onClick(event){
       event.preventDefault();
   } 
  onFormSubmit(event) {
      event.preventDefault();
     console.log(this.state.term,"this is my term");
     this.props.onSubmit(this.state.term); //calling method onSubmit from App
  }

    render(){  //render function
        return(
        <div>
            <div className = "ui segment">
                <form  onSubmit={(e) => this.onFormSubmit(e)} className = "ui form"> {/*this creates a searchbar in the browser,callback funct */}
                
                    <div className = "field">
                        <label>Image Search</label>  
                    <input type = "text"
                    // onClick={this.onInputClick} the same as below,arrow means funtion
                    value={this.state.term}  /*rewriting over the user input the same input that would stick*/
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
 

