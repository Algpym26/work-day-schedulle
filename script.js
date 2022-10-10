var currentDay = $('#currentDay')
currentDay.text(moment().format('dddd MMMM Do YYYY'))
var hour = moment().hour()
for (let i = 9; i < 18; i++) {
  if (hour === i) {
    $('#' + i).addClass('present')
  }
  if (hour > i) {
    $('#' + i).addClass('past')
  }
  if (hour< i){
    $("#" +i).addClass('future')
  }
}
