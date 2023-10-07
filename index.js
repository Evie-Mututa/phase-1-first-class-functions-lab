// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"]

function returnFirstTwoDrivers(drivers){
 return drivers.slice(0,2)
}
    
function returnLastTwoDrivers(drivers){
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//creating fare multiplier
// const quadrapleFare = function createFareMultiplier(integer){
//     return function(fare){
//         return fare * integer
//     }
// }

const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };

const fareDoubler= createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers,func){
    return func (drivers);
}

  


    

