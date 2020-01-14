'use strict';

var hours = ['6am:','7am:','8am:','9am:','10am','11am:','12pm:','1pm','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'];

function getRandomInt(min, max) {
    min = Math.ceil(min - 1);
    max = Math.floor(max + 1);
    return Math.floor(Math.random() * (max - min)) + min;
  }

var seattleStore = {
    name: 'Seattle Store',
    min: 23,
    max: 65,
    avgCookies: 6.3,
    cookiesales:[],

    cookieSales: function cookieSales(){
    var hours = ['6am: ','7am: ','8am: ','9am: ','10am ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '];
       for(var i=0; i < hours.length; i++){
        var avg = Math.floor(getRandomInt(this.min,this.max) * this.avgCookies);
        this.cookiesales.push(avg);
        var newTag = document.createElement('li');
        newTag.textContent = hours[i] + this.cookiesales[i];
        seattleStoreUL.append(newTag);
            }
    return `${hours}, ${this.cookiesales} cookies`;
        },
    calculateTotal: function sumTotal(){
        var sum = 0;
        for(var i=0; i< this.cookiesales.length; i++){
            sum = sum + this.cookiesales[i];
        }
        return sum;
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
    return `${this.cookiesales} cookies at ${hours[i]}:00.`;
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
    return `${this.cookiesales} cookies at ${hours[i]}:00.`;
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
    return `${this.cookiesales} cookies at ${hours[i]}:00.`;
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
    return `${this.cookiesales} cookies at ${hours[i]}:00.`;
        }
}


var seattleStoreArticle = document.getElementById('seattleStore');

var seattleStoreUL = document.createElement('ul');
seattleStoreUL.textContent = seattleStore.name;
seattleStoreArticle.append(seattleStoreUL);

seattleStore.cookieSales();

var avgLI = document.createElement('li');
avgLI.textContent = `${seattleStore.calculateTotal()}` + '.';
seattleStoreUL.appendChild(avgLI);