var flightTableBody = document.querySelector('#flight-container-info')
var flightArray = [];
var eventTableBody = document.querySelector('#event-container-info')
var iataCodes = ["BHM", "DHN", "HSV", "MOB", "MGM", "MRI", "ANC", "ANI", "BET", "CDV", "SCC", "DLG", "FAI", "GST", "HOM", "JNU", "ENA", "KTN", "AKN", "KLW", "ADQ", "OTZ", "OME", "PSG", "KSM", "SIT", "UNK", "DUT", "BRW", "VDZ", "WRG", "YAK", "IFP", "FLG", "GCN", "AZA", "PGA", "PHX", "PRC", "TUS", "YUM", "XNA", "FSM", "LIT", "TXK", "ACV", "BFL", "BUR", "CCR", "FAT", "LGB", "LAX", "MMH", "MRY", "OAK", "ONT", "SNA", "PSP", "RDD", "SMF", "SAN", "SFO", "SJC", "SBP", "SBA", "SMX", "STS", "SCK", "ASE", "COS", "DEN", "DRO", "EGE", "GJT", "GUC", "HDN", "MTJ", "PUB", "BDL", "HVN", "DAB", "FLL", "RSW", "VPS", "GNV", "JAX", "EYW", "MLB", "MIA", "MCO", "ECP", "PNS", "PGD", "SFB", "SRQ", "PIE", "TLH", "TPA", "VRB", "PBI", "ABY", "ATL", "AGS", "BQK", "CSG", "MCN", "SAV", "VLD", "ITO", "HNL", "OGG", "KOA", "MKK", "LNY", "LIH", "BOI", "SUN", "IDA", "LWS", "PIH", "TWF", "BLV", "BMI", "CMI", "MDW", "ORD", "MWA", "MLI", "PIA", "UIN", "RFD", "SPI", "EVV", "FWA", "IND", "SBN", "CID", "DSM", "DBQ", "SUX", "ALO", "GCK", "HYS", "MHK", "SLN", "ICT", "CVG", "LEX", "SDF", "OWB", "PAH", "AEX", "BTR", "LFT", "LCH", "MLU", "MSY", "SHV", "BGR", "PWM", "PQI", "RKD", "BWI", "HGR", "SBY", "BED", "BOS", "HYA", "ACK", "PVC", "MVY", "ORH", "APN", "DTW", "ESC", "FNT", "GRR", "CMX", "IMT", "AZO", "LAN", "MQT", "MKG", "PLN", "MBS", "CIU", "TVC", "BJI", "BRD", "DLH", "HIB", "INL", "MSP", "RST", "STC", "GTR", "GPT", "JAN", "MEI", "TUP", "COU", "JLN", "MCI", "SGF", "STL", "BIL", "BZN", "BTM", "GTF", "HLN", "FCA", "MSO", "SDY", "WYS", "GRI", "LNK", "LBF", "OMA", "BFF", "BLD", "EKO", "LAS", "RNO", "LEB", "MHT", "PSM", "ACY", "EWR", "TTN", "ABQ", "HOB", "ROW", "SAF", "ALB", "BGM", "BUF", "ELM", "ISP", "ITH", "JFK", "LGA", "SWF", "IAG", "OGS", "PBG", "ROC", "SYR", "ART", "HPN", "AVL", "CLT", "USA", "FAY", "GSO", "PGV", "OAJ", "EWN", "RDU", "ILM", "BIS", "DIK", "FAR", "GFK", "JMS", "MOT", "XWA", "CAK", "CLE", "CMH", "LCK", "DAY", "TOL", "LAW", "OKC", "SWO", "TUL", "EUG", "MFR", "OTH", "PDX", "RDM", "ABE", "ERI", "MDT", "LBE", "PHL", "PIT", "SCE", "AVP", "IPT", "BID", "PVD", "WST", "CHS", "CAE", "FLO", "GSP", "HHH", "MYR", "ABR", "PIR", "RAP", "FSD", "ATY", "CHA", "TYS", "MEM", "BNA", "TRI", "ABI", "AMA", "AUS", "BPT", "BRO", "CLL", "CRP", "DAL", "DFW", "ELP", "HRL", "IAH", "HOU", "GRK", "LRD", "GGG", "LBB", "MFE", "MAF", "SJT", "SAT", "TYR", "ACT", "SPS", "CDC", "CNY", "OGD", "PVU", "SLC", "SGU", "VEL", "BTV", "CHO", "LYH", "PHF", "ORF", "RIC", "ROA", "SHD", "DCA", "IAD", "BLI", "ESD", "FRD", "PSC", "PUW", "BFI", "SEA", "GEG", "ALW", "EAT", "YKM", "CRW", "CKB", "HTS", "LWB", "ATW", "EAU", "GRB", "LSE", "MSN", "MKE", "CWA", "RHI", "CPR", "COD", "GCC", "JAC", "LAR", "RIW", "RKS", "SHR", "PPG", "GUM", "SPN", "ROP", "TIQ", "BQN", "NRR", "CPX", "PSE", "SJU", "SIG", "VQS", "STT", "STX"]

//Initalizes Modals        
$('.modal').modal();

//now you can open modal from code





//Grays out past dates
var today = new Date().toISOString().split('T')[0];
document.querySelector('#outboundDate').setAttribute('min', today);
document.querySelector('#returnDate').setAttribute('min', today);






var searchFlights = function () {
	//empty out flight table where flights are displayed
	$("#flight-container-info").empty();

	//empty out flightArray
	flightArray = [];

	//API Params
	var currency = "USD"
	var language = "en-US"
	var country = "US"
	var destination = 'US'

	//grabs outbound date of form
	var outboundDate = $("#outboundDate").val()

	if (outboundDate == "") {
	
		$('#OutboundBlank').modal('open');
		return
	}
	//grabs return date of form
	var returnDate = $('#returnDate').val()

	if (returnDate == "") {
		$('#ReturnBlank').modal('open');
		return
	}

	if (returnDate < outboundDate) {
		$('#ReturnError').modal('open');
		return
	}
	//grabs origin of form
	var origin = $('#Origin').val()

	if (origin == "") {
		$('#OriginBlank').modal('open');
		return
	}
	//grabs destination of form
	//var destination = $('#Destination').val()
	//console.log(destination)
	//if (destination == "") {
	//	alert("Please enter in a Destination")
	//	return
	//}


	//throws inputs into API 
	//SKYSCANNER API that returns routes from an origin to a destination at a specific date 
	fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/" + country + "/" + currency + "/" + language + "/" + origin + "/" + destination + "/" + outboundDate + "?inboundpartialdate=" + returnDate, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
			"x-rapidapi-key": "dae9f598fbmsh6d16f4dfa6f12a7p1e4403jsnee920035895e"
		}
	})
		.then(response => response.json())
		.then(data => showFlights(data))
		.catch(function () {
			$('#OriginNotFound').modal('open');
		});



};

//ON CLICK OF SUBMIT BUTTON
$("#search-btn").on("click", function () {
	searchFlights();


	// empty out forecast container
	$("#forecast-container").empty();

	//empty out event container
	$('#event-container-info').empty()



});

var showFlights = function (data) {



	for (var i = 0; i < data.Quotes.length; i++) {

		for (let x = 0; x < data.Places.length; x++) {
			// Grabs Origin Airport
			if (data.Places[x].PlaceId === data.Quotes[i].OutboundLeg.OriginId) {
				var originAirport = data.Places[x].IataCode;
				var originCity = data.Places[x].CityName;
			}

			// Grabs Destination Airport
			if (data.Places[x].PlaceId === data.Quotes[i].OutboundLeg.DestinationId) {
				var destinationAirport = data.Places[x].IataCode;
				var destinationCity = data.Places[x].CityName;

			}
		}

		var price = data.Quotes[i].MinPrice

		for (let y = 0; y < data.Carriers.length; y++) {
			// Grabs Airline Carrier
			if (data.Carriers[y].CarrierId === data.Quotes[i].OutboundLeg.CarrierIds[0]) {
				var airlineCarrier = data.Carriers[y].Name;
			}

		}

		//pushes flight options into an array
		flightArray.push({ "OriginCity": originCity, "OriginAirport": originAirport, "DestinationCity": destinationCity, "DestinationAirport": destinationAirport, "Price": price, "CarrierName": airlineCarrier });
	}



	//generates random number between 0 and number of flight options

	var randomNumber = Math.floor((Math.random() * flightArray.length) + 0);


	var flightContainer = document.createElement("tr");
	flightContainer.setAttribute('class', 'hoverable');

	//creates origin flight info and adds to flight container
	var flightOrigin = document.createElement("td");
	flightOrigin.textContent = flightArray[randomNumber].OriginCity + " (" + flightArray[randomNumber].OriginAirport + ")"
	flightContainer.append(flightOrigin);

	//creates destination flight info and adds to flight container
	var flightDestination = document.createElement("td");
	flightDestination.textContent = flightArray[randomNumber].DestinationCity + " (" + flightArray[randomNumber].DestinationAirport + ")"
	flightContainer.append(flightDestination);

	//creates departure time and adds to flight container
	var departureTime = document.createElement("td");
	departureTime.textContent = $("#outboundDate").val()
	flightContainer.append(departureTime);

	//creates carrier name and adds to flight container
	var carrierName = document.createElement("td");
	carrierName.textContent = flightArray[randomNumber].CarrierName
	flightContainer.append(carrierName);

	//creates price and adds to flight container
	var flightPrice = document.createElement("td");
	flightPrice.textContent = '$' + flightArray[randomNumber].Price + '.00'
	flightContainer.append(flightPrice);

	//RETURN FLIGHT
	//RETURN FLIGHT
	//RETURN FLIGHT

	//API Params for return flight
	var currency = "USD"
	var language = "en-US"
	var country = "US"
	var destination = flightArray[randomNumber].OriginAirport
	var origin = flightArray[randomNumber].DestinationAirport
	var outboundDate = $('#returnDate').val()

	//throws inputs into API 
	//FINDS RETURN FLIGHT 
	fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/" + country + "/" + currency + "/" + language + "/" + origin + "/" + destination + "/" + outboundDate, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
			"x-rapidapi-key": "dae9f598fbmsh6d16f4dfa6f12a7p1e4403jsnee920035895e"
		}
	})
		.then(response => response.json())
		.then(data => returnFlight(data, flightContainer))
}


//FUNCTION FOR REUTRN FLIGHT
var returnFlight = function (data, flightContainer) {
	//if no return flight, reiterate searching for a new flight
	if (data.Quotes.length === 0) {
		searchFlights();
	} else {


		console.log(data)
		//appends flight to destination to table
		var flightInfo = flightContainer;
		flightTableBody.append(flightContainer)

		for (let x = 0; x < data.Places.length; x++) {
			// Grabs Origin Airport
			if (data.Places[x].PlaceId === data.Quotes[0].OutboundLeg.OriginId) {
				var originAirport = data.Places[x].IataCode;
				var originCity = data.Places[x].CityName;
			}

			// Grabs Destination Airport
			if (data.Places[x].PlaceId === data.Quotes[0].OutboundLeg.DestinationId) {
				var destinationAirport = data.Places[x].IataCode;
				var destinationCity = data.Places[x].CityName;

			}
		}

		var price = data.Quotes[0].MinPrice


		for (let y = 0; y < data.Carriers.length; y++) {
			// Grabs Airline Carrier
			if (data.Carriers[y].CarrierId === data.Quotes[0].OutboundLeg.CarrierIds[0]) {
				var airlineCarrier = data.Carriers[y].Name;
			}
		}
		var outboundDate = $("#outboundDate").val()
		var returnDate = $('#returnDate').val()


		//PREDITHQ API
		eventsAPI(originAirport, outboundDate, returnDate)


		//FIND WEATHER FOR DESTINATION CITY
		fetchWeatherData(originCity)

		var returnFlightContainer = document.createElement("tr");
		returnFlightContainer.setAttribute('class', 'hoverable');

		//creates origin flight info and adds to flight container
		var flightOrigin = document.createElement("td");
		flightOrigin.textContent = originCity + " (" + originAirport + ")"
		returnFlightContainer.append(flightOrigin);

		//creates destination flight info and adds to flight container
		var flightDestination = document.createElement("td");
		flightDestination.textContent = destinationCity + " (" + destinationAirport + ")"
		returnFlightContainer.append(flightDestination);

		//creates departure time and adds to flight container
		var departureTime = document.createElement("td");
		departureTime.textContent = $('#returnDate').val()
		returnFlightContainer.append(departureTime);

		//creates carrier name and adds to flight container
		var carrierName = document.createElement("td");
		carrierName.textContent = airlineCarrier
		returnFlightContainer.append(carrierName);

		//creates price and adds to flight container
		var flightPrice = document.createElement("td");
		flightPrice.textContent = '$' + price + '.00'
		returnFlightContainer.append(flightPrice);


		flightTableBody.append(returnFlightContainer)
	}

}





// ----- Five day forecast of destination section using saved city name, execute a 5-day forecast get request from open weather api ------


// makes array from local storage 
var searchCityName = JSON.parse(localStorage.getItem('City Name')) || [];
var forecastEl = $('#forecast-container')
var forecastTitle = $('#forecast-title')

var apiKey = "f3c6f7687f7f43a162f3912305630533"


/* filters array for unique values
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

var unique = searchCityName.filter(onlyUnique);
*/

/* when 'Search' button is clicked
$("#search-btn").on("click", function () {

	// empty out flight table where flights are displayed 
	$("#forecast-container").empty();

	// grabs cityName from destination form
	var cityName = "New York"
	// console.log(cityName);
	if (cityName == "") {
		alert("Please enter in a Destination")
		return
	}

	// sends fetch to openweather map
	fetchWeatherData(cityName)
	//console.log(cityName)
});*/

var fetchWeatherData = function (cityName) {
	// sends fetch to openweather map
	fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=${apiKey}`)
		.then(function (response) {
			if (response.ok) {
				response.json().then(function (data) {

					//Five day forecast
					FiveDayForecast(data)
				});

				// saves search into array

				searchCityName.push(cityName)



				// pushes array into localstorage 
				saveSearch();

			}
		})
}

// saves searches into local storage
var saveSearch = function () {
	localStorage.setItem('City Name', JSON.stringify(searchCityName));
}

// display five day forecast
var FiveDayForecast = function (weather) {


	for (i = 5; i < weather.list.length; i = i + 8) {
		var forecastCard = document.createElement('div')
		forecastCard.setAttribute('class', 'card col-md-2 border forecastCard')

		//Gets date for each day
		var forecastDate = document.createElement('h6')
		forecastDate.textContent = moment.unix(weather.list[i].dt).format("MMM D, YYYY");
		forecastCard.append(forecastDate)

		//Gets Image for each day
		var forecastImage = document.createElement('img')
		forecastImage.setAttribute('src', `https://openweathermap.org/img/wn/${weather.list[i].weather[0].icon}@2x.png`)
		forecastCard.append(forecastImage)

		//Gets Temp for each day
		var forecastTemp = document.createElement('p')
		forecastTemp.textContent = 'Temp: ' + weather.list[i].main.temp + '°F'
		forecastCard.append(forecastTemp)

		//Gets Wind for each day
		var forecastWind = document.createElement('p')
		forecastWind.textContent = 'Wind: ' + weather.list[i].wind.speed + 'MPH';
		forecastCard.append(forecastWind)

		//Gets Humidity for each day
		var forecastHumidity = document.createElement('p')
		forecastHumidity.textContent = 'Humidity: ' + weather.list[i].main.humidity + '%'
		forecastCard.append(forecastHumidity)

		//Appends Forecast Card to Forecast Container
		forecastEl.append(forecastCard)
	}

}


//Function to populate events close to the destination airport
var eventsAPI = function (Iata, Start, End) {
	console.log(Iata)
	console.log(Start)
	console.log(End)

	fetch("https://predicthq.p.rapidapi.com/v1/events/?place.scope=" + Iata + "&active.gte=" + Start + "&active.lte=" + End + "&category=concerts,festivals,performing-arts,sports&sort=rank", {
		"method": "GET",
		"headers": {
			"authorization": "Bearer vjK8YdM4-zWiaUZ5HqhW48f7vsVWdPaeklGDxUQf",
			"x-rapidapi-host": "predicthq.p.rapidapi.com",
			"x-rapidapi-key": "dae9f598fbmsh6d16f4dfa6f12a7p1e4403jsnee920035895e"
		}
	})
		.then(response => response.json())
		.then(data => findEvents(data))
}

var findEvents = function (data) {
	console.log(data)


	for (var i = 0; i < data.results.length; i++) {

		var eventContainer = document.createElement("tr");
		eventContainer.setAttribute('class', 'hoverable');

		//creates eventName and adds to event row
		var eventName = document.createElement("td");
		eventName.textContent = data.results[i].title
		eventContainer.append(eventName);

		//creates eventName and adds to event row
		var eventType = document.createElement("td");
		eventType.textContent = data.results[i].category
		eventContainer.append(eventType);

		//creates eventName and adds to event row
		var eventStart = document.createElement("td");
		eventStart.textContent = data.results[i].start.slice(0, 10);
		eventContainer.append(eventStart);


		//adds event row to table
		eventTableBody.append(eventContainer)
	}
}







