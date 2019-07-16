
class Driver {
  constructor (name,startDate) {
    this.name      = name;
    this.startDate      = new Date(startDate); // there is 
  }
  yearsExperienceFromBeginningOf(year) {
    let dt = year - this.startDate.getFullYear();
    return dt;
  }
  
}