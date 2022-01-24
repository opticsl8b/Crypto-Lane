// getNews(); //load last cities weather on refreshing page

// function getNews() {
// get news

// var articleTitle = document.getElementById("latestArticle");
// var newsLink = document.getElementById("newsLink");
var news = document.getElementById("news");
var requestUrl =
  " https://content.guardianapis.com/search?&q=bitcoin&order-by=newest&api-key=f76e5cf8-c1e1-4075-aace-195273e6d616";

fetch(requestUrl)
  .then(function (response) {
    if (response.ok) {
      return response.json();
      //   } else {
      //     throw new Error(); //
    }
  })
  .then(function (data) {
    console.log(data);
    // articleTitle.innerText = data.response.results[0].webTitle;
    // newsLink.setAttribute("href", data.response.results[0].webUrl);

    for (let i = 0; i < 5; i++) {
      var link = document.createElement("a");
      var linkHeader = document.createElement("h2");
      linkHeader.innerText = data.response.results[i].webTitle;
      link.setAttribute("href", data.response.results[i].webUrl);
      link.appendChild(linkHeader);
      news.appendChild(link);
    }
  });
// .catch(function (error) {
//   console.log(error);
// });

//Browser XMLHttpRequest, built in the browser and require more code.

// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === XMLHttpRequest.DONE) {
//     console.log("XMLHttpRequest Response \n-------------");
//     console.log(xhr.response);
//   }
// };

// xhr.open("GET", requestUrl);
// xhr.send();
