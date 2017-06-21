
const restorant = {
  name: "Hopdoddy Burger Bar",
  backgroundImageURL: "http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/hopdoddy.png",
  category : "Burgers"
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
    }, 3000)
  })
}
