var date = "2021-09-10"
var currency = "USD"
var language = "en-US"
var country = "US"
var origin = "US"
var destination = "US"


//SKYSCANNER API that returns routes from an origin to a destination at a specific date 
fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/" + country + "/"+ currency +"/" +language + "/" + origin + "/" + destination + "/" + date,{
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		"x-rapidapi-key": "dae9f598fbmsh6d16f4dfa6f12a7p1e4403jsnee920035895e"
	}
})
.then(response => response.json())
.then(data => console.log(data));
