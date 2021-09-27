var axios = require("axios").default;
const router = require('express').Router();
const fetch = require("node-fetch");
var options = {
  method: 'GET',
  //url: 'https://date.nager.at/api/v3/publicholidays/2021/UA',
  url: 'https://date.nager.at/api/v2/AvailableCountries'
};

axios.request(options).then(response =>  {	
}).catch(function (error) {
	console.error(error);
});

async function funcTr(){
const response = await axios.get('https://date.nager.at/api/v2/AvailableCountries')
const result = await response.data
return result
}


router.route('/')
.get(async (req, res) => {
  let allCountries = await funcTr()
  res.render('index', {allCountries})
})
.post(async (req, res) => {
const holyresponse = await axios.get(`https://date.nager.at/api/v3/publicholidays/2021/${req.body.country_id}`)
const holyResult = await holyresponse.data
console.log(holyResult);
const newCountryResponse = await axios.get('https://date.nager.at/api/v2/AvailableCountries')
const yourCountry = newCountryResponse.data
let finalCountry =''
for (let i = 0; i < yourCountry.length; i++) {
  if(yourCountry[i].key === req.body.country_id){
    finalCountry = yourCountry[i].value
  }
}
//Сделать поиск по final country
//console.log('=====>', finalCountry);
const finalImg =  await getNewImage(finalCountry)
res.render('indexHoly', {holyResult, finalImg})


})



async function getNewImage(country){
  let url = `https://api.unsplash.com/search/photos?query=${country}&client_id=E9e3c-o0EgA6JGX2h_zDQvc88imG4GBFJ1JmUy3vLGo`
  const response = await axios.get(url)
  const result = await response
  oneImg = result.data.results//[1].urls.full
  //result.data.results.alt_description
  return oneImg
  }


//   src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDR8P72HMX3zllKeeZt8X89dJWMEu0LSX8&callback=myMap" async defer>

//   function myMap() {
//     var mapCanvas = document.getElementById("map");
//     var mapOptions = {
//         center: new google.maps.LatLng(51.5, -0.2),
//         zoom: 10
//     };
//     var map = new google.maps.Map(mapCanvas, mapOptions);
// }
 




module.exports = router;
