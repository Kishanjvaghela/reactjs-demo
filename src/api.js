
const restorant = {
  name: "Hopdoddy Burger Bar",
  backgroundImageURL: "http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/hopdoddy.png",
  category : "Burgers",
  contact: {
    phone: "9723872337",
    formattedPhone: "(972) 387-2337",
    twitter: "hopdoddy"
  },
  location: {
    lat: 32.950787,
    lng: -96.821118,
    formattedAddress: [
        "5100 Belt Line Road, STE 502 (Dallas North Tollway)",
        "Addison, TX 75254",
        "United States"
    ]
  }
};

let array = [];
const totalCount = 50;
for(let i=0;i<totalCount; i++){
  array.push(restorant);
}

export default () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(array)
    }, 10)
  })
}
