function Passport() {
	this.locations = [];
	this.locationId = 0;
}

Passport.prototype.addPlaceToPassport = function(place) {
	place.id = this.assignId();
	this.locations.push(place);
};

Passport.prototype.assignId = function() {
	this.locationId += 1;
	return this.locationId;
};

function Place(cityName, timeOfYear, landMarks, notes) {
	this.cityName = cityName;
	this.timeOfYear = timeOfYear;
	this.landMarks = landMarks;
	this.notes = notes;
	this.id;
}

function buildLocationData() {
	var cityName = $('#city-name').val();
	var timeOfYear = $('#time-of-year').val();
	var landMarks = $('#landmark').val();
	var notes = $('#notes').val();

	var currentPlace = new Place(cityName, timeOfYear, landMarks, notes);
	passport.addPlaceToPassport(currentPlace);

	//call clearForm Function

	writeToDom();
}

var writeToDom = function() {
  var printString = [];
  passport.locations.forEach(function(place){
    printString.push(
      '<li id='+place.id+'>' + place.cityName + "<ol class='hide-me' id='hide-me-"+place.id+"' ><li>" + place.timeOfYear + "</li><li>" + place.landMarks + "</li><li>" + place.notes + '</li></ol>' + '</li>'
    )
  });

  console.log(printString.join(""));
  $("#output").html(printString.join(""));
};

//1. write to DOM Function

//2. make clearForm Function
var passport = new Passport();

$(document).ready(function() {
  console.log('JavaScipt is working');
  
  $("#output").on('click', 'li', function(){
    var selector = "#hide-me-"+this.id;
    $(selector).slideToggle();
  })

	//on click function
	$('form').submit(function(event) {
    event.preventDefault();
    buildLocationData();
		console.log('click');
	});
});
