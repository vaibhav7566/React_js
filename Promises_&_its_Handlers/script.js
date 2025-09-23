let college = new Promise((resolve, reject) => {
let mood = false;
if(mood){
   return resolve("Jana padega");
}
return reject("Bhadme jaye!");
});

// college
// .then((res) => {
//     console.log(res);
// })
// .catch((error) => {
//     console.log(error);
// });

async function mooddepends() {
    try{
        let result = await college
        console.log(result);
    } catch(error){
        console.log(error);
    }
}

mooddepends();