
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
