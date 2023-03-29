// // const tesseract = require("node-tesseract-ocr")

// // const config = {
// //   lang: "eng",
// //   oem: 1,
// //   psm: 6,
// //   tessedit_char_whitelist: "0123456789",
// // }

// // const urls= [

// // 'https://static.vecteezy.com/system/resources/previews/005/879/467/original/abstract-numbers-colorful-linear-set-modern-numeric-lines-with-new-pop-art-colors-font-number-template-set-thin-line-clean-style-to-design-vector.jpg',
// //   'https://i.ibb.co/jTKYQqP/Captcha-United.png'

// // ];


// // for(let i=0; i<urls.length; i++){

// //   tesseract.recognize(urls[i], config)
// //   .then((text) => {
// //     console.log("Result:", text)
// //   })
// //   .catch((error) => {
// //     console.log(error.message)
// //   })

// // }



// const tesseract = require("node-tesseract-ocr");
// const axios = require("axios");

// const config = {
//   lang: "eng",
//   oem: 1,
//   psm: 3,
//   // tessedit_char_whitelist: "0123456789",
// };

// const urls = [
//   "https://i.ibb.co/R4BB4DW/Captcha-Bajaj.jpg",
//   "https://i.ibb.co/jTKYQqP/Captcha-United.png",
// ];

// Promise.all(
//   urls.map((url) => {
//     return axios
//       .get(url, {
//         responseType: "arraybuffer",
//       })
//       .then((response) => {
//         return tesseract.recognize(response.data, config);
//       })
//       .catch((error) => {
//         console.log(error.message);
//         return null;
//       });
//   })
// )
//   .then((results) => {
//     console.log("Results:", results);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

const tesseract = require("node-tesseract-ocr")

const config = {
  lang: "eng",
  oem: 1,
  psm: 3,
}

const urls= [
  'https://i.ibb.co/jTKYQqP/Captcha-United.png',
  'https://i.ibb.co/R4BB4DW/Captcha-Bajaj.jpg'
];

for (let i = 0; i < urls.length; i++) {
  tesseract.recognize(urls[i], config)
    .then((text) => {
      console.log(`Result for image ${i + 1}:`, text)
    })
    .catch((error) => {
      console.log(`Error for image ${i + 1}:`, error.message)
    })
}
