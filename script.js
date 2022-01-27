var coinList = ["bitcoin", "ethereum", "binancecoin", "cardano", "solana"];
var coinTicker = ["BTC", "ETH", "BNB", "ADA", "SOL"]
var priceApi = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cbinancecoin%2Ccardano%2Csolana&vs_currencies=usd%2Cbtc%2Caud%2Ceur&include_24hr_change=true"

var dataString = localStorage.getItem("currency");
var tbodyEl = document.getElementById("tbody");

function initialPage() {
    if (dataString) {
        // retrive local storage into a object

        var data = JSON.parse(dataString);
        console.log(data);

        for (i = 0; i < coinList.length; i++) {
            var trCreate = document.createElement('tr')
            tbodyEl.appendChild(trCreate);
            var lastTr = tbodyEl.lastElementChild;

            var rankCreate = document.createElement('td');
            rankCreate.setAttribute('class', 'rank');
            lastTr.appendChild(rankCreate);

            var lastTd = lastTr.lastElementChild;
            lastTd.innerHTML = i + 1 + ".";

            var coinCreate = document.createElement('td');
            coinCreate.setAttribute('class', 'coin');
            lastTr.appendChild(coinCreate);
            var lastTd = lastTr.lastElementChild;
            lastTd.innerHTML = coinTicker[i];

            var priceCreate = document.createElement('td');
            priceCreate.setAttribute('class', 'price');
            lastTr.appendChild(priceCreate);
            var lastTd = lastTr.lastElementChild;
            lastTd.innerHTML = data[coinList[i]].usd.toFixed(2);

            var daychangeCreate = document.createElement('td');
            daychangeCreate.setAttribute('class', 'daychange');
            lastTr.appendChild(daychangeCreate);
            var lastTd = lastTr.lastElementChild;
            lastTd.innerHTML = data[coinList[i]].usd_24h_change.toFixed(1);

            console.log(daychangeCreate.innerHTML);
            if (daychangeCreate.innerHTML > 0) {
                console.log("Green");
                daychangeCreate.setAttribute('class', 'green')

            } else {
                console.log("red");
                daychangeCreate.setAttribute('class', 'red')
            }

        }

    }
}

// timer

// every 30sec timer will refresh fetch and save to local storage
// function fetches and saves data
function priceApiHandler() {
    fetch(priceApi)
        .then(response => response.json())
        .then(function(data) {
            localStorage.setItem('currency', JSON.stringify(data));
        })
}

// function clears data
// function clearStorage() {
//     localStorage.removeItem("currency");
// }

// let time_remain = 20;
// var timer_read = document.querySelector(".sec")

// function timerStart() {
//     timer_count = setInterval(function() {
//         time_remain = time_remain - 1;
//         // stop timer when timer goes to 0
//         if (time_remain <= 0) {
//             tbodyEl.innerHTML = '';

//             var data = JSON.parse(dataString);
//             console.log(data);

//             clearStorage();
//             priceApiHandler();
//             time_remain = 20;

//             initialPage();
//         } else {
//             timer_read.textContent = time_remain;
//         }
//     }, 1000)
// }

initialPage();
// timerStart();

///////////////////////////
// news
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var newsItem = 0;
var newsData;
var news = document.getElementById("news");
var requestUrl =
    " https://content.guardianapis.com/search?&q=bitcoin&order-by=newest&api-key=f76e5cf8-c1e1-4075-aace-195273e6d616";

fetch(requestUrl)
    .then(function(response) {
        if (response.ok) {
            return response.json();
        }
    })
    .then(function(data) {
        console.log(data);

        var link = document.createElement("a");
        var linkHeader = document.createElement("p");
        linkHeader.innerText = data.response.results[newsItem].webTitle;
        link.setAttribute("href", data.response.results[newsItem].webUrl);
        link.appendChild(linkHeader);
        news.appendChild(link);
        newsData = data;
    });

prev.addEventListener("click", function() {
    newsItem -= 1;
    if (newsItem < 0) {
        newsItem = 9;
    }
    setNewsStory();
});

next.addEventListener("click", function() {
    newsItem += 1;

    if (newsItem > 9) {
        newsItem = 0;
    }
    setNewsStory();
});

function setNewsStory() {
    news.children[3].setAttribute(
        "href",
        newsData.response.results[newsItem].webUrl
    );
    news.children[3].children[0].innerText =
        newsData.response.results[newsItem].webTitle;
}
/////////////////////////////////////////
// Fiat Buttons-

var jqsearchHistory = $(".fiat");


$(jqsearchHistory).on("click", ".button-primary", function(event) {

    var jqButton = $(event.target);
    var buttonText = jqButton.val()

    if (dataString) {

        // retrive local storage into a object
        var data = JSON.parse(dataString);
        var tbodyEl = document.getElementById("tbody");

        if (buttonText == "aud") {
            console.log("Yes");
        }

        tbodyEl.innerHTML = "";


        for (i = 0; i < coinList.length; i++) {

            var trCreate = document.createElement('tr')
            tbodyEl.appendChild(trCreate);
            var lastTr = tbodyEl.lastElementChild;

            var rankCreate = document.createElement('td');
            rankCreate.setAttribute('class', 'rank');
            lastTr.appendChild(rankCreate);

            var lastTd = lastTr.lastElementChild;
            lastTd.innerHTML = i + 1 + ".";

            var coinCreate = document.createElement('td');
            coinCreate.setAttribute('class', 'coin');
            lastTr.appendChild(coinCreate);
            var lastTd = lastTr.lastElementChild;
            lastTd.innerHTML = coinTicker[i];

            var priceCreate = document.createElement('td');
            priceCreate.setAttribute('class', 'price');
            lastTr.appendChild(priceCreate);
            var lastTd = lastTr.lastElementChild;
            lastTd.innerHTML = data[coinList[i]][buttonText].toFixed(2);

            var daychangeCreate = document.createElement('td');
            daychangeCreate.setAttribute('class', 'daychange');
            lastTr.appendChild(daychangeCreate);
            var lastTd = lastTr.lastElementChild;
            lastTd.innerHTML = data[coinList[i]][buttonText + "_24h_change"].toFixed(1);
        }
    }


});