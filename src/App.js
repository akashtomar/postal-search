import React, { Component } from "react";
import ReactDOM from "react-dom";
const axios = require("axios");

class Result extends Component {
    constructor(){
        super();
    }
    render(){
        return(
            <div className="row">
                <div className="col col-md-10 col-lg-8">
                    <ol>
                        
                    </ol>
                </div>
            </div>
        )
    }

}


class Search extends Component {
    constructor(){
        super();
    }
    handleClick(){
        var s = document.getElementById("searchBar").value
        axios.get("/search/"+s)
        .then(function(response){
            console.log(response.data);
        });
    }
    render(){
        return(
          <div className="card-body row no-gutter align-items-center" >
          <div className="col">
              <input className="form-control form-control-lg form-control-borderless" type="search"
                  placeholder="Search topics or keywords" id="searchBar"/>
          </div>
          <div className="col-auto">
              <button className="btn btn-lg btn-success" onClick={()=>{this.handleClick()}}>Search</button>
          </div>
          <br />
      </div>
        )
      }

}



class App extends Component {
    constructor(){
        super()
        this.state ={
            searchText: "",
            result: []
        }
    }
    
    render(){
      return(
          <div> 
        <Search />
        <Result />
        </div>
      )
    }
}
ReactDOM.render(<App/>, document.getElementById("app"));

export default App;