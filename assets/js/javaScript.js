var flightTableBody = document.querySelector('#flight-container-info')
var flightArray = [];

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
	console.log(outboundDate)
	if (outboundDate == "") {
		alert("Please enter in a OutBound Date")
		return
	}
	//grabs return date of form
	var returnDate = $('#returnDate').val()
	console.log(returnDate)
	if (returnDate == "") {
		alert("Please enter in a Return Date")
		return
	}
	//grabs origin of form
	var origin = $('#Origin').val()
	console.log(origin)
	if (origin == "") {
		alert("Please enter in an origin")
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

};

//ON CLICK OF SUBMIT BUTTON
$("#search-btn").on("click", function () {
	searchFlights();

});

var showFlights = function (data) {

	console.log(data.Quotes.length)

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
	console.log(flightArray)
	var randomNumber = Math.floor((Math.random() * flightArray.length) + 0);
	console.log(randomNumber)

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