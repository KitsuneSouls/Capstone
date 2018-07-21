const axios = require('axios')

const instance = axios.create({
    baseURL: 'http://localhost:5000/',
    timeout: 1000
  });


instance.get('/dataPatientStatus', {
    params: {
        patId: 1113
    }
}).then((res)=>{
    console.log(res.data)
    this.patient = res.data;
}).catch((err)=>{
    console.error(err)
})

// instance.post('/data', {
//     patId: 20,
//     fname: 'Umar',
//     lname: 'Seyal',
//     woundSize: 1.9,
//     woundLocation: 'FRONT'
// }).then((res)=>{
//     console.log(res.data)
// }).catch((err)=>{
//     console.error(err)
// })

// instance.post('/data', {
//     fname: 'Umar',
//     lname: 'Seyal',
//     woundSize: 1.2,
//     woundLocation: 'FRONT'
// }).then((res)=>{
//     console.log(res.data)
// }).catch((err)=>{
//     console.error(err)
// })


// instance.get('/data', {
//     params: {
//         fname: 'Umar'
//     }
// }).then((res)=>{
//     console.log(res.data)
// }).catch((err)=>{
//     console.error(err)
// })