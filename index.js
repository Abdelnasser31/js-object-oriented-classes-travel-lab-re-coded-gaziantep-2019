
class Driver {
  

    
  constructor (name,startDate) {
    this.name      = name;
    this.startDate      = new Date(startDate); 
  }
  yearsExperienceFromBeginningOf(year) {
    let dt = year - this.startDate.getFullYear();
    return dt;
  }
  
}
class Route {
  constructor(beginingLocation, endingLocation) {
    this.beginingLocation = beginingLocation;
    this.endingLocation   = endingLocation;
  }
  blocksTravelled () {
    return (this.endingLocation.vertical  - this.beginingLocation.vertical) + eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginingLocation.horizontal);
  }
}