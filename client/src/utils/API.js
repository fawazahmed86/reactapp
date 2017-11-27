import axios from "axios";
import Articles from "../Pages/Articles"


export default {
  getArticles: function (data) {

    const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

    const auth = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

    return axios.get(url, {
      params: {
        'q': data.query,
        'begin_date': `${data.startDate}0101`,
        'end_date': `${data.endDate}1231`,
        'api-key': auth,
      }
    })
    .then(function(response) {
      console.log(response);
      return response
    })
    .catch(function(error) {
      console.log(error)
    })

  },

  getSaved: function () {
    axios.get("/api/articles/saved")
      .then(function(res) {
        console.log(res)
      })
  },

  postArticle: function(obj) {
    axios.post("/api/articles/", {
      title: obj.title,
      url: obj.url,
      date: obj.date
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error)
    })
    
  }
};