import React, { Component } from "react";
import API from "../../utils/API";

  class Results extends Component {
      state = {
        articles: []
      }

  componentWillMount() {
    this.setState({articles:this.props.results})
    console.log(this.state.articles);
  }

  saveArticle(event) {
    const find = event.target.attributes
    let title = find.getNamedItem("data-headline").value
    let url = find.getNamedItem("data-url").value
    let date = find.getNamedItem("data-date").value
    console.log(title)
    console.log(url)
    console.log(date)

    const obj = {
      "title": title,
      "url": url,
      "date": date
    }

    API.postArticle(obj);

   }


   render() {
    return (
      
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">Results</h3>
        </div>
        <div>
          {this.state.articles.map((value, i) => (
        <div className="panel-body" key={i}>
          <div className="articleCard">
            <div className="articleTitle">
              <p>{value.headline.main}</p>
            </div>
            <div className="articleDate">
              <p>{value.pub_date}</p>
            </div>
              <button 
              type="button" 
              className="btn btn-info saveArticle" 
              data-headline={value.headline.main}
              data-date={value.pub_date}
              data-url={value.web_url}
              onClick={this.saveArticle} >Save Article</button>
              
              <a href={value.web_url} 
              className="btn btn-info viewArticle" 
              target="_blank" 
              role="button">View Article</a>
              </div>  
            </div>
      ))}
          </div>
        </div>
      
     );
    }
  }


    

export default Results;