'use strict';

var hours =['6am','7am','8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm','4pm', '5pm', '6pm', '7pm', '8pm'];

var pikeAnd1st = {

  locationName: '1st and Pike',

  minCustomersPerHour: 23,

  maxCustomersPerHour: 65,

  avgCookiesSoldPerHour: 6.5,

  arrCookiesSold: [],

  avgCutomersPerHour: function() {
    return Math.floor(Math.random() * (pikeAnd1st.maxCustomersPerHour - pikeAnd1st.minCustomersPerHour + 1)) + pikeAnd1st.minCustomersPerHour;
  },

  avgCookiesSoldPerAvgCustomers : function() {

    for (var i= 0; i < hours.length; i++) {
      var cookiesSold = pikeAnd1st.avgCookiesSoldPerHour * pikeAnd1st.avgCutomersPerHour();
      pikeAnd1st.arrCookiesSold.push(parseInt(cookiesSold));
    }

    console.log('elements inside average cookies sold array:' + pikeAnd1st.arrCookiesSold.length);
    return pikeAnd1st.arrCookiesSold;
  },

  totalCookiesSold : function() {

    var sumOfTotalCookiesSold = 0;
    for (var count= 0; count < pikeAnd1st.arrCookiesSold.length; count++) {
      sumOfTotalCookiesSold = sumOfTotalCookiesSold + pikeAnd1st.arrCookiesSold[count];
    }
    console.log('sum of total cookies sold:' + sumOfTotalCookiesSold);
    return sumOfTotalCookiesSold;
  },

  finalList : function() {
    console.log(`location : ${pikeAnd1st.locationName}`);
    var listOfCookies = [];
    pikeAnd1st.avgCookiesSoldPerAvgCustomers();

    for (var i= 0; i <= hours.length; i++) {
      if (i===hours.length){
        listOfCookies.push('Total: ' + pikeAnd1st.totalCookiesSold() + ' Cookies');
      } else {
        listOfCookies.push(hours[i] + ' : ' + pikeAnd1st.arrCookiesSold[i] + ' Cookies');
      }
    }
    console.log('check length of final cookies sold array' + listOfCookies.length);
    return listOfCookies;
  }

};

var seaTacAirport = {

  locationName: 'SeaTac Airport',
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  avgCookiesSoldPerHour: 1.2,
  arrCookiesSold: [],

  avgCutomersPerHour: function() {
    return Math.floor(Math.random() * (seaTacAirport.maxCustomersPerHour - seaTacAirport.minCustomersPerHour + 1)) + seaTacAirport.minCustomersPerHour;
  },

  avgCookiesSoldPerAvgCustomers : function() {

    for (var i= 0; i < hours.length; i++) {
      var cookiesSold = seaTacAirport.avgCookiesSoldPerHour * seaTacAirport.avgCutomersPerHour();

      seaTacAirport.arrCookiesSold.push(parseInt(cookiesSold));
    }
    console.log('elements inside average cookies sold array:' + seaTacAirport.arrCookiesSold.length);
    return seaTacAirport.arrCookiesSold;

  },

  totalCookiesSold : function() {
    var sumOfTotalCookiesSold = 0;
    for (var count= 0; count < seaTacAirport.arrCookiesSold.length; count++) {
      sumOfTotalCookiesSold = sumOfTotalCookiesSold + seaTacAirport.arrCookiesSold[count];
    }
    console.log('sum of total cookies sold:' + sumOfTotalCookiesSold);
    return sumOfTotalCookiesSold;
  },

  finalList : function() {
    console.log(`location : ${seaTacAirport.locationName}`);
    var listOfCookies = [];
    seaTacAirport.avgCookiesSoldPerAvgCustomers();

    for (var i= 0; i <= hours.length; i++) {
      if (i===hours.length){
        listOfCookies.push('Total: ' + seaTacAirport.totalCookiesSold() + ' Cookies');
      } else {
        listOfCookies.push(hours[i] + ' : ' + seaTacAirport.arrCookiesSold[i] + ' Cookies');
      }
    }
    console.log('check length of final cookies sold array' + listOfCookies.length);
    return listOfCookies;
  }

};

var seattleCenter = {

  locationName: 'Seattle Center',
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  avgCookiesSoldPerHour: 3.7,
  arrCookiesSold: [],

  avgCutomersPerHour: function() {
    return Math.floor(Math.random() * (pikeAnd1st.maxCustomersPerHour - pikeAnd1st.minCustomersPerHour + 1)) + pikeAnd1st.minCustomersPerHour;
  },

  avgCookiesSoldPerAvgCustomers : function() {

    for (var i= 0; i < hours.length; i++) {
      var cookiesSold = seattleCenter.avgCookiesSoldPerHour * seattleCenter.avgCutomersPerHour();

      seattleCenter.arrCookiesSold.push(parseInt(cookiesSold));
    }
    console.log('elements inside average cookies sold array:' + seattleCenter.arrCookiesSold.length);
    return seattleCenter.arrCookiesSold;

  },

  totalCookiesSold : function() {

    var sumOfTotalCookiesSold = 0;
    for (var count= 0; count < seattleCenter.arrCookiesSold.length; count++) {
      sumOfTotalCookiesSold = sumOfTotalCookiesSold + seattleCenter.arrCookiesSold[count];
    }
    console.log('sum of total cookies sold:' + sumOfTotalCookiesSold);
    return sumOfTotalCookiesSold;
  },

  finalList : function() {
    console.log(`location : ${seattleCenter.locationName}`);
    var listOfCookies = [];
    seattleCenter.avgCookiesSoldPerAvgCustomers();
    console.log('array of cookiessold:' + seattleCenter.arrCookiesSold.length);

    for (var i= 0; i <= hours.length; i++) {
      if (i===hours.length){
        listOfCookies.push('Total: ' + seattleCenter.totalCookiesSold() + ' Cookies');
      } else {
        listOfCookies.push(hours[i] + ' : ' + seattleCenter.arrCookiesSold[i] + ' Cookies');
      }
    }
    console.log('check length of final cookies sold array' + listOfCookies.length);
    return listOfCookies;
  }

};

var capitolHill = {

  locationName: 'Capitol Hill',
  minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  avgCookiesSoldPerHour: 2.3,
  arrCookiesSold: [],

  avgCutomersPerHour: function() {
    return Math.floor(Math.random() * (capitolHill.maxCustomersPerHour - capitolHill.minCustomersPerHour + 1)) + capitolHill.minCustomersPerHour;
  },

  avgCookiesSoldPerAvgCustomers : function() {

    for (var i= 0; i < hours.length; i++) {
      var cookiesSold = capitolHill.avgCookiesSoldPerHour * capitolHill.avgCutomersPerHour();

      capitolHill.arrCookiesSold.push(parseInt(cookiesSold));
    }
    console.log('elements inside average cookies sold array:' + capitolHill.arrCookiesSold.length);
    return capitolHill.arrCookiesSold;
  },

  totalCookiesSold : function() {

    var sumOfTotalCookiesSold = 0;
    for (var count= 0; count < capitolHill.arrCookiesSold.length; count++) {
      sumOfTotalCookiesSold = sumOfTotalCookiesSold + capitolHill.arrCookiesSold[count];
    }
    console.log('sum of total cookies sold:' + sumOfTotalCookiesSold);
    return sumOfTotalCookiesSold;
  },

  finalList : function() {
    console.log(`location : ${capitolHill.locationName}`);
    var listOfCookies = [];
    capitolHill.avgCookiesSoldPerAvgCustomers();
    console.log('array of cookiessold:' + capitolHill.arrCookiesSold.length);

    for (var i= 0; i <= hours.length; i++) {
      if (i===hours.length){
        listOfCookies.push('Total: ' + capitolHill.totalCookiesSold() + ' Cookies');
      } else {
        listOfCookies.push(hours[i] + ' : ' + capitolHill.arrCookiesSold[i] + ' Cookies');
      }
    }
    console.log('check length of final cookies sold array' + listOfCookies.length);
    return listOfCookies;
  }

};

var alki = {

  locationName: 'Alki',
  minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  avgCookiesSoldPerHour: 4.6,
  arrCookiesSold: [],

  avgCutomersPerHour: function() {
    return Math.floor(Math.random() * (alki.maxCustomersPerHour - alki.minCustomersPerHour + 1)) + alki.minCustomersPerHour;
  },

  avgCookiesSoldPerAvgCustomers : function() {
    for (var i= 0; i < hours.length; i++) {
      var cookiesSold = alki.avgCookiesSoldPerHour * alki.avgCutomersPerHour();

      alki.arrCookiesSold.push(parseInt(cookiesSold));
    }

    console.log('elements inside average cookies sold array:' + alki.arrCookiesSold.length);
    return alki.arrCookiesSold;
  },

  totalCookiesSold : function() {

    var sumOfTotalCookiesSold = 0;
    for (var count= 0; count < alki.arrCookiesSold.length; count++) {
      sumOfTotalCookiesSold = sumOfTotalCookiesSold + alki.arrCookiesSold[count];
    }
    console.log('sum of total cookies sold:' + sumOfTotalCookiesSold);
    return sumOfTotalCookiesSold;
  },

  finalList : function() {
    console.log(`location : ${alki.locationName}`);
    var listOfCookies = [];
    alki.avgCookiesSoldPerAvgCustomers();
    console.log('array of cookiessold:' + alki.arrCookiesSold.length);

    for (var i= 0; i <= hours.length; i++) {
      if (i===hours.length){
        listOfCookies.push('Total: ' + alki.totalCookiesSold() + ' Cookies');
      } else {
        listOfCookies.push(hours[i] + ' : ' + alki.arrCookiesSold[i] + ' Cookies');
      }
    }
    console.log('check length of final cookies sold array' + listOfCookies.length);
    return listOfCookies;
  }

};


function createList(locationObj) {

  var ul = document.createElement('ul');
  document.getElementById('header').appendChild(ul);
  ul.innerHTML = locationObj.locationName;

  var finalSales = locationObj.finalList();
  for (var i = 0; i <= hours.length; i++) {
  // 1. Create new element
    var liEl = document.createElement('li');
    // 2. Give the element some content
    liEl.textContent = finalSales[i];
    // 3. Append the new element to its parent in the DOM
    ul.appendChild(liEl);
  }
}

createList(pikeAnd1st);
createList(seaTacAirport);
createList(seattleCenter);
createList(capitolHill);
createList(alki);


