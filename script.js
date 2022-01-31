var coinList = ["bitcoin", "ethereum", "binancecoin", "cardano", "solana"];
var coinTicker = ["BTC", "ETH", "BNB", "ADA", "SOL"];
var priceApi =
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cbinancecoin%2Ccardano%2Csolana&vs_currencies=usd%2Cbtc%2Caud%2Ceur&include_24hr_change=true";


var tbodyEl = document.getElementById("tbody");


// function clears data
function clearStorage() {
    localStorage.removeItem("currency");
}

// unction fetches and save data
function priceApiHandler() {

    clearStorage();
    console.log(localStorage.getItem("currency"));

    fetch(priceApi)
        .then((response) => response.json())
        .then(function(data) {
            localStorage.setItem("currency", JSON.stringify(data));
        });
}

///////////////////////////
// Function initial the page-
function initialPage() {
    let dataString = localStorage.getItem("currency")
    priceApiHandler();

    if (dataString) {
        // retrive local storage into a object
        var data = JSON.parse(dataString);
        // Data for double check if its up to date
        console.log(data);
        // Price Chart Structure Build
        for (i = 0; i < coinList.length; i++) {
            var trCreate = document.createElement("tr");
            tbodyEl.appendChild(trCreate);
            var lastTr = tbodyEl.lastElementChild;

            var rankCreate = document.createElement("td");
            rankCreate.setAttribute("class", "rank");
            lastTr.appendChild(rankCreate);

            var lastTd = lastTr.lastElementChild;
            lastTd.innerHTML = i + 1 + ".";

            var coinCreate = document.createElement("td");
            coinCreate.setAttribute("class", "coin");
            lastTr.appendChild(coinCreate);
            // create a anchor to coin-scope box
            var coinAnchor = document.createElement("a");
            coinAnchor.setAttribute("href", "#coin-widget");
            coinCreate.appendChild(coinAnchor);
            coinAnchor.innerHTML = coinTicker[i];

            var priceCreate = document.createElement("td");
            priceCreate.setAttribute("class", "price");
            lastTr.appendChild(priceCreate);
            var lastTd = lastTr.lastElementChild;
            lastTd.innerHTML = data[coinList[i]].usd.toFixed(2);

            var daychangeCreate = document.createElement("td");
            daychangeCreate.setAttribute("class", "daychange");
            lastTr.appendChild(daychangeCreate);
            var lastTd = lastTr.lastElementChild;
            lastTd.innerHTML = data[coinList[i]].usd_24h_change.toFixed(1);
            var percentCreate = document.createElement("span");
            percentCreate.innerHTML = "%";

            // Responsive Color 
            if (daychangeCreate.innerHTML > 0) {
                daychangeCreate.setAttribute("class", "green");
            } else {
                daychangeCreate.setAttribute("class", "red");
            }
            daychangeCreate.append(percentCreate);
        }
    }
}

initialPage();

///////////////////////////
// News-
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var newsLink = document.getElementById("newsLink");
var newsTitle = document.getElementById("newsTitle");

var newsItem = 0;
var newsData;
var news = document.getElementById("news");
var requestUrl =
    " https://content.guardianapis.com/search?&q=bitcoin&order-by=newest&api-key=f76e5cf8-c1e1-4075-aace-195273e6d616";

function setNewsStory() {
    newsLink.setAttribute("href", newsData.response.results[newsItem].webUrl);
    newsTitle.innerText = newsData.response.results[newsItem].webTitle;
}

fetch(requestUrl)
    .then(function(response) {
        if (response.ok) {
            return response.json();
        }
    })
    .then(function(data) {
        console.log(data);
        newsData = data;

        newsTitle.innerText = newsData.response.results[newsItem].webTitle;
        newsLink.setAttribute("href", newsData.response.results[newsItem].webUrl);
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



/////////////////////////////////////////
// Fiat Buttons- Read corresponding data from local storage and store
var jqFiat = $(".fiat");

$(jqFiat).on("click", ".button-primary", function(event) {
    var jqButton = $(event.target);
    var buttonText = jqButton.val();
    let dataString = localStorage.getItem("currency")


    if (dataString) {

        var data = JSON.parse(dataString);
        var tbodyEl = document.getElementById("tbody");
        // Check which Button is clicked 
        console.log(buttonText);

        tbodyEl.innerHTML = "";

        for (i = 0; i < coinList.length; i++) {
            var trCreate = document.createElement("tr");
            tbodyEl.appendChild(trCreate);
            var lastTr = tbodyEl.lastElementChild;

            var rankCreate = document.createElement("td");
            rankCreate.setAttribute("class", "rank");
            lastTr.appendChild(rankCreate);

            var lastTd = lastTr.lastElementChild;
            lastTd.innerHTML = i + 1 + ".";

            var coinCreate = document.createElement("td");
            coinCreate.setAttribute("class", "coin");
            lastTr.appendChild(coinCreate);
            // create a anchor to coin-scope box
            var coinAnchor = document.createElement("a");
            coinAnchor.setAttribute("href", "#coin-widget");
            coinCreate.appendChild(coinAnchor);
            coinAnchor.innerHTML = coinTicker[i];

            var priceCreate = document.createElement("td");
            priceCreate.setAttribute("class", "price");
            lastTr.appendChild(priceCreate);
            var lastTd = lastTr.lastElementChild;
            lastTd.innerHTML = data[coinList[i]][buttonText].toFixed(2);

            var daychangeCreate = document.createElement("td");
            daychangeCreate.setAttribute("class", "daychange");
            lastTr.appendChild(daychangeCreate);
            var lastTd = lastTr.lastElementChild;
            lastTd.innerHTML =
                data[coinList[i]][buttonText + "_24h_change"].toFixed(1);
            var percentCreate = document.createElement("span");
            percentCreate.innerHTML = "%";

            if (daychangeCreate.innerHTML > 0) {
                daychangeCreate.setAttribute("class", "green");
            } else {
                daychangeCreate.setAttribute("class", "red");
            }
            daychangeCreate.append(percentCreate);
        }
    }
});

/////////////////////////////////////////
// timer
// every 30sec timer will refresh fetch and save to local storage


let timeRemain = 20;
var timerRead = document.querySelector(".sec")

function timerStart() {

    timerCount = setInterval(function() {
        timeRemain = timeRemain - 1;
        // Restart timer when timer goes to 0
        if (timeRemain < 0) {

            tbodyEl.innerHTML = '';
            initialPage();
            timeRemain = 20;

        } else {
            timerRead.textContent = timeRemain;
        }
    }, 1000)
}

timerStart();

/////////////////////////////////////////
// Event that provides details of the coins when clicks
var jqCoin = $(".u-full-width");

$(jqCoin).on("click", ".coin", function(event) {

    var jqButton = $(event.target);
    var buttonText = jqButton.text();
    let dataString = localStorage.getItem("currency")

    if (dataString) {
        for (i = 0; i < coinTicker.length; i++) {
            if (buttonText == coinTicker[i]) {

                $("#coin-widget").attr("coin-id", coinList[i]);
            }
        }
    }
})