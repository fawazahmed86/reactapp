import React, { Component } from "react";
import API from "../../utils/API";
import Results from "../../components/Results";

class Articles extends Component {

  state = {
    articles: [],
    articlesSubmitted: false,
    query: "",
    startDate: "",
    endDate: ""
  };

  componentWillUpdate() {
    console.log(this.state.articles);
  }
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    
  };

  handleFormSubmit = event => {
  event.preventDefault();
  if ((this.state.query) && (this.state.startDate) &&(this.state.endDate)){
    API.getArticles({
      query: this.state.query,
      startDate: this.state.startDate,
      endDate: this.state.endDate
    })
      .then(res => {
        this.setState({articles:res.data.response.docs})
        this.setState({articlesSubmitted: true})
      })
      .catch(err => console.log(err));
  }
};


  render () {
    return (
      <div className="container">
        <div className="jumbotron text-center info">
          <div className="">
            <h1>New York Times Scraper</h1>
            <p>NY Times edition</p>
            </div>
        </div>

        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title"><strong>Search Panel</strong></h3>
          </div>
          <div className="panel-body">
            <form>
              <div className="form-group">
                <label htmlFor="query">Query</label>
                  <input
                  type= "text"
                  value={this.state.query}
                  onChange={this.handleInputChange}
                  name="query"
                  className="form-control"
                  id="query"
                  placeholder="Search here"
                />
                {/*<input type="text" className="form-control" id="search" placeholder="Search here" />*/}
              </div>
              <div className="form-group">
                <label for="startDate">Start date (YYYY) </label>
                <input
                  type= "number"
                  value={this.state.startDate}
                  onChange={this.handleInputChange}
                  name="startDate"
                  className="form-control"
                  id="startDate"
                  placeholder="Enter start date"
                />
              </div>
              <div className="form-group">
                <label for="endDate">End date (YYYY) </label>
                <input
                  type= "number"
                  value={this.state.endDate}
                  onChange={this.handleInputChange}
                  name="endDate"
                  className="form-control"
                  id="endDate"
                  placeholder="Enter end date"
                />

              </div>
              <button type="submit" className="btn btn-default" onClick={this.handleFormSubmit}>Submit</button>
            </form>
          </div>
        </div>
        
        {this.state.articlesSubmitted ? <Results results = {this.state.articles} /> : <div> Not submitted </div>
        }
        
      </div>


    );
  }
}


export default Articles;