'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Store(name, minCust, maxCust, avgCookie) {
  this.storeName = name;
  this.leastCust = minCust;
  this.mostCust = maxCust;
  this.cookiePerCust = avgCookie;
  this.cookieSales = [];
  Store.cookieStores.push(this);
}

Store.cookieStores = [];

Store.prototype.randCust = function () {
  var randomNumber = Math.random() * ((this.mostCust + 1) - this.leastCust) + this.leastCust;
  return randomNumber;
};

Store.prototype.simSales = function () {
  var cookiesPurchased = 0;

  for (var i = 0; i < hours.length; i++) {
    cookiesPurchased = Math.floor(this.cookiePerCust * this.randCust());
    this.cookieSales.push(cookiesPurchased);
  }
  return [this.cookieSales];
};

Store.prototype.render = function () {

  var newStoreLog = document.createElement('tr');
  newStoreLog.textContent = this.storeName;
  body.appendChild(newStoreLog);
  this.randCust();
  this.simSales();
  newStoreLog.id = this.storeName;

  var storeRow = document.getElementById(this.storeName);

  for (var j = 0; j < hours.length; j++) {
    var newCookieEst = document.createElement('td');
    newCookieEst.textContent = this.cookieSales[j];
    storeRow.appendChild(newCookieEst);
  }
};

new Store('Seattle Store', 23, 65, 6.3);
new Store('Tokyo Store', 3, 24, 1.2);
new Store('Dubai Store', 11, 38, 3.7);
new Store('Paris Store', 20, 38, 2.3);
new Store('Lima Store', 2, 16, 4.6);

var elementStoreSales = document.getElementById('table-head');
var head = document.getElementById('table-head');
var body = document.getElementById('table-body');
var foot = document.getElementById('table-foot');

head.appendChild(document.createElement('th'));


var createHeader = function () {
  for (var x = 0; x < hours.length; x++) {
    var whatHour = document.createElement('th');
    whatHour.textContent = hours[x];
    head.appendChild(whatHour);
  }
};

var createFooterTotals = function (hour) {
  var sum = 0;
  for (var m = 0; m < Store.cookieStores.length; m++) {
    sum += Store.cookieStores[m].cookieSales[hour];
  }
  return sum;
};

var makeFooter = function () {
  var footRow = document.createElement('tr');
  footRow.id = 'foot-totals';
  foot.appendChild(footRow);

  var footRowLoc = document.getElementById('foot-totals');

  var totalFoot = document.createElement('td');
  totalFoot.textContent = 'Hourly Total';
  footRowLoc.appendChild(totalFoot);

  for (var p = 0; p < hours.length; p++) {
    var newFoot = document.createElement('td');
    var feeties = createFooterTotals(p);
    newFoot.textContent = feeties;
    footRowLoc.appendChild(newFoot);
  }
};

for (var k = 0; k < Store.cookieStores.length; k++) {
  Store.cookieStores[k].render();
}

createHeader();
makeFooter();

var button = document.getElementById('button');
button.addEventListener('click', function(){
  console.log('button clicked');
});