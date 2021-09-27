var axios = require("axios").default;
const router = require('express').Router();
const fetch = require("node-fetch");


let url = 'https://api.unsplash.com/search/photos?query=RUSSIA&client_id=E9e3c-o0EgA6JGX2h_zDQvc88imG4GBFJ1JmUy3vLGo'


async function getNewImage(){
  const response = await axios.get(url)
  const result = await response
  console.log(result.data.results[1].urls.full);
  //result.data.results.alt_description
  return result
  }


  getNewImage()



// async function getNewImage() {
//   (req, res) => {


  
//   const respone = await fetch(url)
//   const finrespone = response.json()
//   console.log(finrespone);
//   }
// }




// //   return fetch(url)
// //   .then((response) => {
// //     return response.json()
    
// //     console.log('Все ок');	
// //     console.log(response);
// //   })
// //   .then((data) => {
// //     console.log(data);
// //     let allimage = data.results
// //     console.log(allimage);
// //   })

// // }

// getNewImage()
