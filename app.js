import getData from './data'

getData(3).then((data)=> console.log(data) ).catch((e)=> console.log(e) );