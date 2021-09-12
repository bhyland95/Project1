var flightTableBody = document.querySelector('#flight-container-info')
var flightArray = [];
var eventTableBody = document.querySelector('#event-container-info')

//Initalizes Modals        
$('.modal').modal();

//AutoComplete Airport Form
$(document).ready(function () {
	$('input.autocomplete').autocomplete({
		data: {	"BHM": null, "DHN": null, "HSV": null, "MOB": null, "MGM": null, "MRI": null, "ANC": null, "ANI": null, "BET": null, "CDV": null, "SCC": null, "DLG": null, "FAI": null, "GST": null, "HOM": null, "JNU": null, "ENA": null, "KTN": null, "AKN": null, "KLW": null, "ADQ": null, "OTZ": null, "OME": null, "PSG": null, "KSM": null, "SIT": null, "UNK": null, "DUT": null, "BRW": null, "VDZ": null, "WRG": null, "YAK": null, "IFP": null, "FLG": null, "GCN": null, "AZA": null, "PGA": null, "PHX": null, "PRC": null, "TUS": null, "YUM": null, "XNA": null, "FSM": null, "LIT": null, "TXK": null, "ACV": null, "BFL": null, "BUR": null, "CCR": null, "FAT": null, "LGB": null, "LAX": null, "MMH": null, "MRY": null, "OAK": null, "ONT": null, "SNA": null, "PSP": null, "RDD": null, "SMF": null, "SAN": null, "SFO": null, "SJC": null, "SBP": null, "SBA": null, "SMX": null, "STS": null, "SCK": null, "ASE": null, "COS": null, "DEN": null, "DRO": null, "EGE": null, "GJT": null, "GUC": null, "HDN": null, "MTJ": null, "PUB": null, "BDL": null, "HVN": null, "DAB": null, "FLL": null, "RSW": null, "VPS": null, "GNV": null, "JAX": null, "EYW": null, "MLB": null, "MIA": null, "MCO": null, "ECP": null, "PNS": null, "PGD": null, "SFB": null, "SRQ": null, "PIE": null, "TLH": null, "TPA": null, "VRB": null, "PBI": null, "ABY": null, "ATL": null, "AGS": null, "BQK": null, "CSG": null, "MCN": null, "SAV": null, "VLD": null, "ITO": null, "HNL": null, "OGG": null, "KOA": null, "MKK": null, "LNY": null, "LIH": null, "BOI": null, "SUN": null, "IDA": null, "LWS": null, "PIH": null, "TWF": null, "BLV": null, "BMI": null, "CMI": null, "MDW": null, "ORD": null, "MWA": null, "MLI": null, "PIA": null, "UIN": null, "RFD": null, "SPI": null, "EVV": null, "FWA": null, "IND": null, "SBN": null, "CID": null, "DSM": null, "DBQ": null, "SUX": null, "ALO": null, "GCK": null, "HYS": null, "MHK": null, "SLN": null, "ICT": null, "CVG": null, "LEX": null, "SDF": null, "OWB": null, "PAH": null, "AEX": null, "BTR": null, "LFT": null, "LCH": null, "MLU": null, "MSY": null, "SHV": null, "BGR": null, "PWM": null, "PQI": null, "RKD": null, "BWI": null, "HGR": null, "SBY": null, "BED": null, "BOS": null, "HYA": null, "ACK": null, "PVC": null, "MVY": null, "ORH": null, "APN": null, "DTW": null, "ESC": null, "FNT": null, "GRR": null, "CMX": null, "IMT": null, "AZO": null, "LAN": null, "MQT": null, "MKG": null, "PLN": null, "MBS": null, "CIU": null, "TVC": null, "BJI": null, "BRD": null, "DLH": null, "HIB": null, "INL": null, "MSP": null, "RST": null, "STC": null, "GTR": null, "GPT": null, "JAN": null, "MEI": null, "TUP": null, "COU": null, "JLN": null, "MCI": null, "SGF": null, "STL": null, "BIL": null, "BZN": null, "BTM": null, "GTF": null, "HLN": null, "FCA": null, "MSO": null, "SDY": null, "WYS": null, "GRI": null, "LNK": null, "LBF": null, "OMA": null, "BFF": null, "BLD": null, "EKO": null, "LAS": null, "RNO": null, "LEB": null, "MHT": null, "PSM": null, "ACY": null, "EWR": null, "TTN": null, "ABQ": null, "HOB": null, "ROW": null, "SAF": null, "ALB": null, "BGM": null, "BUF": null, "ELM": null, "ISP": null, "ITH": null, "JFK": null, "LGA": null, "SWF": null, "IAG": null, "OGS": null, "PBG": null, "ROC": null, "SYR": null, "ART": null, "HPN": null, "AVL": null, "CLT": null, "USA": null, "FAY": null, "GSO": null, "PGV": null, "OAJ": null, "EWN": null, "RDU": null, "ILM": null, "BIS": null, "DIK": null, "FAR": null, "GFK": null, "JMS": null, "MOT": null, "XWA": null, "CAK": null, "CLE": null, "CMH": null, "LCK": null, "DAY": null, "TOL": null, "LAW": null, "OKC": null, "SWO": null, "TUL": null, "EUG": null, "MFR": null, "OTH": null, "PDX": null, "RDM": null, "ABE": null, "ERI": null, "MDT": null, "LBE": null, "PHL": null, "PIT": null, "SCE": null, "AVP": null, "IPT": null, "BID": null, "PVD": null, "WST": null, "CHS": null, "CAE": null, "FLO": null, "GSP": null, "HHH": null, "MYR": null, "ABR": null, "PIR": null, "RAP": null, "FSD": null, "ATY": null, "CHA": null, "TYS": null, "MEM": null, "BNA": null, "TRI": null, "ABI": null, "AMA": null, "AUS": null, "BPT": null, "BRO": null, "CLL": null, "CRP": null, "DAL": null, "DFW": null, "ELP": null, "HRL": null, "IAH": null, "HOU": null, "GRK": null, "LRD": null, "GGG": null, "LBB": null, "MFE": null, "MAF": null, "SJT": null, "SAT": null, "TYR": null, "ACT": null, "SPS": null, "CDC": null, "CNY": null, "OGD": null, "PVU": null, "SLC": null, "SGU": null, "VEL": null, "BTV": null, "CHO": null, "LYH": null, "PHF": null, "ORF": null, "RIC": null, "ROA": null, "SHD": null, "DCA": null, "IAD": null, "BLI": null, "ESD": null, "FRD": null, "PSC": null, "PUW": null, "BFI": null, "SEA": null, "GEG": null, "ALW": null, "EAT": null, "YKM": null, "CRW": null, "CKB": null, "HTS": null, "LWB": null, "ATW": null, "EAU": null, "GRB": null, "LSE": null, "MSN": null, "MKE": null, "CWA": null, "RHI": null, "CPR": null, "COD": null, "GCC": null, "JAC": null, "LAR": null, "RIW": null, "RKS": null, "SHR": null, "PPG": null, "GUM": null, "SPN": null, "ROP": null, "TIQ": null, "BQN": null, "NRR": null, "CPX": null, "PSE": null, "SJU": null, "SIG": null, "VQS": null, "STT": null, "STX": null
 },
	});
});




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
//var forecastTitle = $('#forecast-title')

var apiKey = "f3c6f7687f7f43a162f3912305630533"


var fetchWeatherData = function (originCity) {
	// sends fetch to openweather map
	fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${originCity}&units=imperial&appid=${apiKey}`)
		.then(function (response) {
			if (response.ok) {
				response.json().then(function (data) {

					//Five day forecast
					FiveDayForecast(data)
				});

				// saves search into array

				searchCityName.push(originCity)
				console.log(originCity);


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
		var forecastCard = document.querySelector("#forecast-container")
		forecastCard.setAttribute('class', 's12 m2')
		

		//Gets date for each day
		var forecastDate = document.createElement('h6')
		forecastDate.textContent = moment.unix(weather.list[i].dt).format("MMM D, YYYY");
		forecastCard.append(forecastDate)

		//Gets Image for each day
		var forecastImage = document.createElement('img')
		forecastImage.setAttribute('src', `https://openweathermap.org/img/wn/${weather.list[i].weather[0].icon}@2x.png`)
		forecastImage.setAttribute('class', 'forecastImage')
		forecastCard.append(forecastImage)

		//Gets Temp for each day
		var forecastTemp = document.createElement('p')
		forecastTemp.textContent = 'Temp: ' + weather.list[i].main.temp + '°F'
		forecastTemp.setAttribute('class', 'forecastTemp')
		forecastCard.append(forecastTemp)

		//Gets Wind for each day
		//var forecastWind = document.createElement('p')
		//forecastWind.textContent = 'Wind: ' + weather.list[i].wind.speed + 'MPH';
		//forecastCard.append(forecastWind)

		//Gets Humidity for each day
		//var forecastHumidity = document.createElement('p')
		//forecastHumidity.textContent = 'Humidity: ' + weather.list[i].main.humidity + '%'
		//forecastCard.append(forecastHumidity)

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







