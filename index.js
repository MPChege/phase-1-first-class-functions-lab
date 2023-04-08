// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  // This line is repeated three times, causing a SyntaxError. It should be removed.
  
  function createFareMultiplier(int) {
    return function(fare) {
      return fare * int;
    };
  }
  // This function is defined twice, causing a SyntaxError. The duplicate should be removed.
  
  function fareDoubler(fare) {
    return createFareMultiplier(2)(fare);
  }
  
  function fareTripler(fare) {
    return createFareMultiplier(3)(fare);
  }
  
  function selectDifferentDrivers(drivers, fn) {
    return fn(drivers);
  }
  // This function appears to be correct.
  
  // The following two lines of code reference undefined variables `drivers`. 
  // The array of drivers should be defined before being passed to these functions.
  // For the purpose of this example, we'll define it as an empty array.
  const drivers = [];
  
  selectDifferentDrivers(drivers, returnFirstTwoDrivers);
  selectDifferentDrivers(drivers, returnLastTwoDrivers);
  