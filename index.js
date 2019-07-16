
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