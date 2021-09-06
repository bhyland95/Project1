var flightTableBody = document.querySelector('#flight-container-info')

//ON CLICK OF SUBMIT BUTTON
$("#search-btn").on("click", function () {

	//empty out flight table where flights are displayed
	$("#flight-container-info").empty();

	var currency = "USD"
	var language = "en-US"
	var country = "US"
	//grabs outbound date
	var outboundDate = $("#outboundDate").val()
	console.log(outboundDate)
	if (outboundDate == "") {
		alert("Please enter in a OutBound Date")
		return
	}
	//grabs return date
	var returnDate = $('#returnDate').val()
	console.log(returnDate)
	if (returnDate == "") {
		alert("Please enter in a Return Date")
		return
	}
	//grabs origin
	var origin = $('#Origin').val()
	console.log(origin)
	if (origin == "") {
		alert("Please enter in an origin")
		return
	}
	//grabs destination
	var destination = $('#Destination').val()
	console.log(destination)
	if (destination == "") {
		alert("Please enter in a Destination")
		return
	}


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

		var flightContainer = document.createElement("tr");
		flightContainer.setAttribute('class', 'hoverable');

		//creates origin flight info and adds to flight container
		var flightOrigin = document.createElement("td");
		flightOrigin.textContent = originCity + " (" + originAirport + ")"
		flightContainer.append(flightOrigin);

		//creates destination flight info and adds to flight container
		var flightDestination = document.createElement("td");
		flightDestination.textContent = destinationCity + " (" + destinationAirport + ")"
		flightContainer.append(flightDestination);

		//creates departure time and adds to flight container
		var departureTime = document.createElement("td");
		departureTime.textContent = "9:00AM"
		flightContainer.append(departureTime);

		//creates carrier name and adds to flight container
		var carrierName = document.createElement("td");
		carrierName.textContent = airlineCarrier
		flightContainer.append(carrierName);

		//creates carrier name and adds to flight container
		var flightPrice = document.createElement("td");
		flightPrice.textContent = '$' + price + '.00'
		flightContainer.append(flightPrice);


		//appends flight info into table
		flightTableBody.append(flightContainer)


		
	}
}