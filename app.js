'use strict';

var hours = [6,7,8,9,10,11,12,13,14,15,16,17,18,19];

function getRandomInt(min, max) {
    min = Math.ceil(min - 1);
    max = Math.floor(max + 1);
    return Math.floor(Math.random() * (max - min)) + min;
  }

var seattleStore = {
    min: 23,
    max: 65,
    avgCookies: 6.3,
    cookiesales:[],
    cookieSales: function cookieSales(){
       for(var i=0; i < hours.length; i++){
        var avg = Math.floor(getRandomInt(this.min,this.max) * this.avgCookies);

            this.cookiesales.push(avg);
            
    }
    return this.cookiesales + ' cookies at ' + hours[i] + ':00.';
        }
}
var tokyoStore = {
    min: 3,
    max: 24,
    avgCookies: 1.2,
    cookiesales:[],
    cookieSales: function cookieSales(){
       for(var i=0; i < hours.length; i++){
       var avg = Math.floor(getRandomInt(this.min,this.max) * this.avgCookies);
            this.cookiesales.push(avg);
            
    }
    return this.cookiesales + ' cookies at ' + hours[i] + ':00.';
        }
}
var dubaiStore = {
    min: 11,
    max: 38,
    avgCookies: 3.7,
    cookiesales:[],
    cookieSales: function cookieSales(){
       for(var i=0; i < hours.length; i++){
        var avg = Math.floor(getRandomInt(this.min,this.max) * this.avgCookies);
            this.cookiesales.push(avg);
            
    }
    return this.cookiesales + ' cookies at ' + hours[i] + ':00.';
        }
}
var parisStore = {
    min: 20,
    max: 38,
    avgCookies: 2.3,
    cookiesales:[],
    cookieSales: function cookieSales(){
       for(var i=0; i < hours.length; i++){
       var avg = Math.floor(getRandomInt(this.min,this.max) * this.avgCookies);
            this.cookiesales.push(avg);
            
    }
    return this.cookiesales + ' cookies at ' + hours[i] + ':00.';
        }
}
var limaStore = {
    min: 2,
    max: 16,
    avgCookies: 4.6,
    cookiesales:[],
    cookieSales: function cookieSales(){
       for(var i=0; i < hours.length; i++){
       var avg = Math.floor(getRandomInt(this.min,this.max) * this.avgCookies);
            this.cookiesales.push(avg);
            
    }
    return this.cookiesales;
        }
}
//var allStores=[seattleStore.cookieSales(), tokyoStore.cookieSales(), dubaiStore.cookieSales(), parisStore.cookieSales(), limaStore,cookieSales()];
console.log(seattleStore.cookieSales());
