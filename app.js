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
    name: 'Tokyo Store',
    min: 3,
    max: 24,
    avgCookies: 1.2,
    cookiesales:[],

    cookieSales: function cookieSales(){
    var tokyoStoreArticle = document.getElementById('tokyoStore');
    var tokyoStoreUL = document.createElement('ul');
    tokyoStoreUL.textContent = tokyoStore.name;
    tokyoStoreArticle.append(tokyoStoreUL);
    var sum = 0;
       for(var i=0; i < hours.length; i++){
            var avg = Math.floor(getRandomInt(this.min,this.max) * this.avgCookies);
            this.cookiesales.push(avg);

            var newTag = document.createElement('li');
            newTag.textContent = hours[i] + this.cookiesales[i];
            tokyoStoreUL.append(newTag); 
            
            sum = sum + this.cookiesales[i];
        }
        var tokyoAvgLI = document.createElement('li');
        tokyoAvgLI.textContent = `Total ${sum}` + '.';
        tokyoStoreUL.appendChild(tokyoAvgLI);

        return `${hours}, ${this.cookiesales} cookies`;
    }
}
var dubaiStore = {
    name: 'Dubai Store',
    min: 11,
    max: 38,
    avgCookies: 3.7,
    cookiesales:[],
    cookieSales: function cookieSales(){
        var dubaiStoreArticle = document.getElementById('dubaiStore');
        var dubaiStoreUL = document.createElement('ul');
        dubaiStoreUL.textContent = dubaiStore.name;
        dubaiStoreArticle.append(dubaiStoreUL);
        var sum = 0;
       for(var i=0; i < hours.length; i++){
        var avg = Math.floor(getRandomInt(this.min,this.max) * this.avgCookies);
            this.cookiesales.push(avg);

            var newTag = document.createElement('li');
            newTag.textContent = hours[i] + this.cookiesales[i];
            dubaiStoreUL.append(newTag); 

            sum = sum + this.cookiesales[i];
    }
    var dubaiAvgLI = document.createElement('li');
    dubaiAvgLI.textContent = `Total ${sum}` + '.';
    dubaiStoreUL.appendChild(dubaiAvgLI);

    return `${hours}, ${this.cookiesales} cookies`;
        }
}
var parisStore = {
    name: 'Paris Store',
    min: 20,
    max: 38,
    avgCookies: 2.3,
    cookiesales:[],
    cookieSales: function cookieSales(){
       var parisStoreArticle = document.getElementById('parisStore');
       var parisStoreUL = document.createElement('ul');
       parisStoreUL.textContent = parisStore.name;
       parisStoreArticle.append(parisStoreUL);
       var sum = 0;
       for(var i=0; i < hours.length; i++){
       var avg = Math.floor(getRandomInt(this.min,this.max) * this.avgCookies);
            this.cookiesales.push(avg);

            var newTag = document.createElement('li');
            newTag.textContent = hours[i] + this.cookiesales[i];
            parisStoreUL.append(newTag); 

            sum = sum + this.cookiesales[i];
    }
    var parisAvgLI = document.createElement('li');
    parisAvgLI.textContent = `Total ${sum}` + '.';
    parisStoreUL.appendChild(parisAvgLI);
    return `${hours}, ${this.cookiesales} cookies`;
        }
}
var limaStore = {
    name: 'Lima Store',
    min: 2,
    max: 16,
    avgCookies: 4.6,
    cookiesales:[],
    cookieSales: function cookieSales(){
       var limaStoreArticle = document.getElementById('limaStore');
       var limaStoreUL = document.createElement('ul');
       limaStoreUL.textContent = limaStore.name;
       limaStoreArticle.append(limaStoreUL);
       var sum = 0;
       for(var i=0; i < hours.length; i++){
       var avg = Math.floor(getRandomInt(this.min,this.max) * this.avgCookies);
            this.cookiesales.push(avg);

            var newTag = document.createElement('li');
            newTag.textContent = hours[i] + this.cookiesales[i];
            limaStoreUL.append(newTag);

            sum = sum + this.cookiesales[i];       
    }
    var limaAvgLI = document.createElement('li');
    limaAvgLI.textContent = `Total ${sum}` + '.';
    limaStoreUL.appendChild(limaAvgLI);
    return `${hours}, ${this.cookiesales} cookies`;
        }
}

var seattleStoreArticle = document.getElementById('seattleStore');
var seattleStoreUL = document.createElement('ul');
seattleStoreUL.textContent = seattleStore.name;
seattleStoreArticle.append(seattleStoreUL);

seattleStore.cookieSales();

var avgLI = document.createElement('li');
avgLI.textContent = `Total ${seattleStore.calculateTotal()}` + '.';
seattleStoreUL.appendChild(avgLI);

tokyoStore.cookieSales();
dubaiStore.cookieSales();
parisStore.cookieSales();
limaStore.cookieSales();