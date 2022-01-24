var coinList = ["bitcoin", "ethereum", "binancecoin", "cardano", "solana"];
var priceBlock = $(".coins-price-percentage");



function initialPage() {

    var priceApi = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cbinancecoin%2Ccardano%2Csolana&vs_currencies=usd%2Cbtc%2Caud%2Ceur&include_24hr_change=true"
    var dataString = localStorage.getItem("currency");

    if (dataString) {
        // retrive local storage into a object
        var data = JSON.parse(dataString);
        var tbodyEl = $("tbody");
        var rankCreate = $("<td>").attr("class", "rank");
        var coinCreate = $("<td>").attr("class", "coin");
        var priceCreate = $("<td>").attr("class", "price");
        var daychangeCreate = $("<td>").attr("class", "daychange");

        console.log(coinList.length);
        for (i = 0; i < coinList.length; i++) {

            var trCreate = $("<tr>")
            tbodyEl.append(trCreate);

            tbodyEl.children(0).append(rankCreate);
            tbodyEl.children(0).children(0).text(i + 1 + ".")

            console.log(rankCreate);
        }
    }
}

var rowCreate = $("<div>").attr("class", "row");
var rankCreate = $("<div>").attr("class", "rank");
var coinCreate = $("<div>").attr("class", "coin");
var priceCreate = $("<div>").attr("class", "price");
var daychangeCreate = $("<div>").attr("class", "daychange");

// for (i = 0; i < coinList.length; i++) {

//     priceBlock.append(rowCreate);

//     var rankText = $("<span>").text(i + 1 + ".");
//     var coinText = $("<span>").text(coinList[i]);
//     var priceText = $("<span>").text(data[coinList[i]].usd);
//     var changeText = $("<span>").text(data[coinList[i]].usd_24h_change.toFixed(1));

//     // target corresponding row
//     var lastRow = $(".row").eq(i + 1)

//     // creat corresponding colume
//     lastRow.append(rankCreate);
//     var lastRank = $(".rank").eq(i + 1)
//     lastRank.append(rankText);

//     lastRow.append(coinCreate);
//     var lastcoin = $(".coin").eq(i + 1)
//     lastcoin.append(coinText);

//     lastRow.append(priceCreate);
//     var lastprice = $(".price").eq(i + 1)
//     lastprice.append(priceText);

//     lastRow.append(daychangeCreate);
//     var lastdaychange = $(".daychange").eq(i + 1)
//     lastdaychange.append(changeText);
// }


// } else {
//     fetch(priceApi)
//         .then(function(response) {
//                 if (response.ok) {
//                     response.json().then(function(data) {
//                             localStorage.setItem("currency", JSON.stringify(data));






initialPage();


// var rankText = $("<span>").text(1 + ".");
// rowTarget.children(0).append(rankText);



// 
//     

//     console.log(rowTarget);
//     var rankText = $("<span>").text(i + 1 + ".");
//     var coinText = $("<span>").text(coinList[i]);
//     var priceText = $("<span>").text(data[coinList[i]].usd);
//     var changeText = $("<span>").text(data[coinList[i]].usd_24h_change.toFixed(1));
//     
//     
//     
// rowTarget.append(coinCol);
// rowTarget.append(priceCol);
// rowTarget.append(daychangeCol);

// 
// rowTarget.children(1).append(coinText);
// rowTarget.children(2).append(priceText);
// rowTarget.children(3).append(changeText);}






// // Fetch api 
// function initialPageeee() {
//     var priceApi = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cbinancecoin%2Ccardano%2Csolana&vs_currencies=usd%2Cbtc%2Caud%2Ceur&include_24hr_change=true"


//     if (dataString) {
//         var data = JSON.parse(dataString);
//         // target
//         // coins-price row structure 
//         var row = $("<div>").attr("class", "row");
//         var rankCol = $("<div>").attr("class", "rank");
//         var coinCol = $("<div>").attr("class", "coin");
//         var priceCol = $("<div>").attr("class", "price");
//         var daychangeCol = $("<div>").attr("class", "daychange");

//         for (i = 0; i < coinList.length; i++) {
//             var rowTarget = $(priceBlock).children(i + 1);

//             var rankText = $("<span>").text(i + 1 + ".");
//             var coinText = $("<span>").text(coinList[i]);
//             var priceText = $("<span>").text(data[coinList[i]].usd);
//             var changeText = $("<span>").text(data[coinList[i]].usd_24h_change.toFixed(1));


// rowTarget.append(rankCol);
// rowTarget.append(coinCol);
// rowTarget.append(priceCol);
// rowTarget.append(daychangeCol);

// rowTarget.children(0).append(rankText);
// rowTarget.children(1).append(coinText);
// rowTarget.children(2).append(priceText);
// rowTarget.children(3).append(changeText);

//         }
//     } else {
//         fetch(priceApi)
//             .then(function(response) {
//                     if (response.ok) {
//                         response.json().then(function(data) {

//                                 localStorage.setItem("currency", JSON.stringify(data));

// for (i = 0; i < coinList.length; i++) {
//     rowTarget.append(rankCol);
//     rowTarget.append(coinCol);
//     rowTarget.append(priceCol);
//     rowTarget.append(daychangeCol);

//     rowTarget.children(0).append(rankText);
//     rowTarget.children(1).append(coinText);
//     rowTarget.children(2).append(priceText);
//     rowTarget.children(3).append(changeText);



//                         rowTarget.append(rankCol);
//                         rowTarget.children(0).append(rankText);

//                         // display corresponding data
//                         for (i = 0; i < coinList.length; i++) {





// // add row block
// priceBlock.append(row);
// // add ranking number
// var rankCol = $("<div>").attr("class", "rank");
// var rankText = $("<span>").text(i + 1 + ".");
// row.append(rankCol);
// rankEl.append(rankText);
// // add coins 
// var coinCol = $("<div>").attr("class", "coin");
// var coinText = $("<span>").text(coinList[i]);
// row.append(coinCol);
// coinEl.append(coinText);
// // add price
// var priceCol = $("<div>").attr("class", "price");
// var priceText = $("<span>").text(data[coinList[i]].usd);
// row.append(priceCol);
// priceEl.append(priceText);
// // add daily change
// var daychangeCol = $("<div>").attr("class", "daychange");
// var changeText = $("<span>").text(data[coinList[i]].usd_24h_change.toFixed(2));
// row.append(daychangeCol);
// daychangeEl.append(changeText);

//     }
// })
// }
// })