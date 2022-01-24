var news = document.getElementById("news");
var requestUrl =
  " https://content.guardianapis.com/search?&q=bitcoin&order-by=newest&api-key=f76e5cf8-c1e1-4075-aace-195273e6d616";

fetch(requestUrl)
  .then(function (response) {
    if (response.ok) {
      return response.json();
    }
  })
  .then(function (data) {
    console.log(data);

    for (let i = 0; i < 5; i++) {
      var link = document.createElement("a");
      var linkHeader = document.createElement("h2");
      linkHeader.innerText = data.response.results[i].webTitle;
      link.setAttribute("href", data.response.results[i].webUrl);
      link.appendChild(linkHeader);
      news.appendChild(link);
    }
  });
