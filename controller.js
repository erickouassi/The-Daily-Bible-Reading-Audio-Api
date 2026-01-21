//const data = require("./data");
// Change the year ..._audio_20XX
const data = require("./data_daily_reading_audio_2026");
//const data = require("./data_temp");

// Logic behind the functionalities
var serverTime = "America/New_York";  // America/New_York /

// current datetime string inAmerica/New_York timezone
let local_datetime_str = new Date().toLocaleString("en-US", { timeZone: serverTime });

// create new Date object
//let date_local = new Date(local_datetime_str);
let d = new Date(local_datetime_str);

// Months
let allMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let monthTxt = allMonths[d.getMonth()];  // May

// year as (YYYY) format
let year = d.getFullYear();

// month as (MM) format
//let month = ("0" + (d.getMonth() + 1)).slice(-2);
let month =  d.getMonth() + 1;

// date as (DD) format
//let date = ("0" + d.getDate()).slice(-2);
let date = d.getDate();

// date time in YYYY-MM-DD format
//let date_time = year + "-" + month + "-" + date;
let today = month + "/" + date + "/" + year; // "11/13/2022"
console.log(today);

class Controller {
  // getting all data
  async getAllData() {
    // return all data
    return new Promise((resolve, _) => resolve(data));
  }
//
  // getting today data
  async getTodayData() {
    return new Promise((resolve, reject) => {
      // get the data
	  let todayData = data.filter(function(todayIn) {
    return todayIn.audioDate == today; });
   // console.log(todayData);
//
      if (todayData) {
        // return the data
        resolve(todayData);
      } else {
        // return an error
        reject(`Today object not found `);
      }
    });
  }
  // add below
  // add above
}
module.exports = Controller;
