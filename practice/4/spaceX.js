const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

// retrieve only the first result
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));
