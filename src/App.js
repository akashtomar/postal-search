import React, { Component } from "react";
import ReactDOM from "react-dom";
const API = require("../api");

class ListItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(<li>{this.props.value}</li>);
    }
    
}



class Result extends Component {
    constructor(props){
        super(props);
    }

    render(){
        console.log("result component");
        const rs = this.props.resultSet;
        const ListItems = rs.map(function(el, i){
            return <ListItem key={i} value={el["Officename ( BO/SO/HO)"]+"  "+el.score} />           
        });
        return(
            <div className="row">
                <div className="col col-md-10 col-lg-8">
                    <ul>
                        {ListItems}
                    </ul>
                </div>
            </div>
        );
    }

}


class Search extends Component {
    constructor(){
        super();
    }
    
    render(){
        return(
          <div className="card-body row no-gutter align-items-center" >
          <div className="col">
              <input className="form-control form-control-lg form-control-borderless" type="search"
                  placeholder="Search topics or keywords" id="searchBar"/>
          </div>
          <div className="col-auto">
              <button className="btn btn-lg btn-success" onClick={()=>{this.props.handleSearch()}}>Search</button>
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
            result: []
        }
    }
    handleSearch(){
        console.log("handle search reporting");
        var s = document.getElementById("searchBar").value;
        API.get("search/"+s)
        .then((response)=>{
            console.log(response.data);
            this.setState({
                result: response.data
            })
        })
        .catch((err)=>{
            console.log(err);
        });
        
    }
    
    render(){
      return(
          <div> 
        <Search handleSearch= {this.handleSearch.bind(this)}/>
        <Result resultSet={this.state.result} />
        </div>
      )
    }
}
ReactDOM.render(<App/>, document.getElementById("app"));

export default App;