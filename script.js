var coinList = ["bitcoin", "ethereum", "binancecoin", "cardano", "solana"];
var priceBlock = $(".coins-price-percentage");
console.log(priceBlock);
console.log(coinList[0]);

// create coin list
function createPrice() {
    // -row structure
    // <div class="row">
    //         <div class="rank"><span>1.</span></div>
    //         <div class="coin"><span>bitcoin</span></div>
    //         <div class="price"><span>99999</span></div>
    //         <div class="24hr"><span>10%</span></div>
    //     </div>

    var row = $("<div>").attr("class", "row");
    var rankCol = $("<div>").attr("class", "rank");
    // var rankSpan=$("<span>").text(coins.rank+".")
    var coinCol = $("<div>").attr("class", "coin");
    var priceCol = $("<div>").attr("class", "price");
    var daychangeCol = $("<div>").attr("class", "daychange");

    // create divs
    priceBlock.append(row);
    row.append(rankCol);
    row.append(coinCol);
    row.append(priceCol);
    row.append(daychangeCol);

    getcoinPrice()
}

// Fetch api 
function getcoinPrice() {
    var priceApi = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cbinancecoin%2Ccardano%2Csolana&vs_currencies=usd%2Cbtc%2Caud%2Ceur&include_24hr_change=true"
    fetch(priceApi)
        .then(function(response) {
            if (response.ok) {
                response.json()
                    .then(function(data) {

                        // data save locally ?

                        // target created divs
                        var rankEl = $(".rank");
                        var coinEl = $(".coin");
                        var priceEl = $(".price");
                        var daychangeEl = $(".daychange");

                        console.log(data);
                        console.log(data.cardano.usd);

                        // display corresponding data
                        for (i = 0; i < coinList.length; i++) {

                            // add ranking number
                            var rankText = $("<span>").text(i + 1 + ".");
                            rankEl.append(rankText);
                            // add coins 
                            var coinText = $("<span>").text(coinList[i]);
                            coinEl.append(coinText);
                            // add price
                            var priceText = $("<span>").text(data[coinList[i]].usd);
                            priceEl.append(priceText);
                            // add daily change
                            var changeText = $("<span>").text(data[coinList[i]].usd_24h_change);
                            daychangeEl.append(changeText);

                        }
                    })
            }
        })
}



createPrice();