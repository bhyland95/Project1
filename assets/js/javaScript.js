//ON CLICK OF SUBMIT BUTTON
$("#search-btn").on("click", function () {
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
fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/" + country + "/"+ currency +"/" +language + "/" + origin + "/" + destination + "/" + outboundDate + "?inboundpartialdate=" + returnDate ,{
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		"x-rapidapi-key": "dae9f598fbmsh6d16f4dfa6f12a7p1e4403jsnee920035895e"
	}
})
.then(response => response.json())
.then(data => console.log(data));

});