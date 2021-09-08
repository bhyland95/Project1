fetch("https://predicthq.p.rapidapi.com/v1/events/?place.scope=LAX&active.gte=2021-09-07&active.lte=2021-09-14&category=concerts,festivals,performing-arts,sports&sort=rank", {
    "method": "GET",
    "headers": {
        "authorization": "Bearer vjK8YdM4-zWiaUZ5HqhW48f7vsVWdPaeklGDxUQf",
        "x-rapidapi-host": "predicthq.p.rapidapi.com",
        "x-rapidapi-key": "dae9f598fbmsh6d16f4dfa6f12a7p1e4403jsnee920035895e"
    }
})
.then(response => response.json())
.then(data => console.log(data))