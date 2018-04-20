// let apiURL = `https://api.mercedes-benz.com/configurator/v1/`
// let apiKey = `apikey=0cf84dde-d453-42ac-bcbe-b90ed0e32ae0`
// let URL = apiURL+apiKey
console.log('BENZ>JS SCRIPT')
function findAll(data)
{
  $.each( data, function( i, item ) {
    $('p').append("<br>name: <a id=single href=benz/car-one>"+data[i].name+'<br>'+'<br></a>')
    $('p').append('class: '+data[i].vehicleClass.className+'<br>'+'<br>')
    $('p').append('price: $'+data[i].priceInformation.price+'<br>'+'<br>')
    $('p').append('-----------------------------------'+'<br>')
  })
}



$(getOne=>{
  $("#single").click(()=>{
    $.ajax({
      url: `https://api.mercedes-benz.com/configurator/v1/markets/en_GB/models?bodyId=LIMOUSINE&apikey=0cf84dde-d453-42ac-bcbe-b90ed0e32ae0`,
      method: 'GET',
      success: (data)=>{

      }
    }).done(function( data ) {
      console.log(data)
      $( "p" ).empty();
      findAll(data)})

    })

    })



//------show alls
$(showAllSedans=>{
  $("#allSedansButton").click(()=>{
    $.ajax({
      url: `https://api.mercedes-benz.com/configurator/v1/markets/en_GB/models?bodyId=LIMOUSINE&apikey=0cf84dde-d453-42ac-bcbe-b90ed0e32ae0`,
      method: 'GET',
      success: (data)=>{

      }
    }).done(function( data ) {
      console.log(data)
      $( "p" ).empty();
      findAll(data)})})})


$(showAllConvertables=>{
  $("#allConvertablesButton").click(()=>{
    $.ajax({
      url: `https://api.mercedes-benz.com/configurator/v1/markets/en_GB/models?bodyId=CABRIOLET&apikey=0cf84dde-d453-42ac-bcbe-b90ed0e32ae0`,
      method: 'GET',
      success: (data)=>{

      }
    }).done(function( data ) {
      console.log(data)
      $( "p" ).empty();
      findAll(data)})})})


$(showAllCoupes=>{
  $("#allCoupesButton").click(()=>{
    $.ajax({
      url: `https://api.mercedes-benz.com/configurator/v1/markets/en_GB/models?bodyId=COUPE&apikey=0cf84dde-d453-42ac-bcbe-b90ed0e32ae0`,
      method: 'GET',
      success: (data)=>{

      }
    }).done(function( data ) {
      console.log(data)
      $( "p" ).empty();
      findAll(data)})})})



$(showAllOffroad=>{
  $("#allOffroadButton").click(()=>{
    $.ajax({
      url: `https://api.mercedes-benz.com/configurator/v1/markets/en_GB/models?bodyId=OFFROADER&apikey=0cf84dde-d453-42ac-bcbe-b90ed0e32ae0`,
      method: 'GET',
      success: (data)=>{

      }
    }).done(function( data ) {
      console.log(data)
      $( "p" ).empty();
      findAll(data)})})})






// $(showAll=>{
//   console.log('script loaded')
//   $('#all').click(()=>{
//
//     $.ajax({
//       url: `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/initial?apikey=0cf84dde-d453-42ac-bcbe-b90ed0e32ae0`,
//       method: 'GET',
//       success: (data)=>{
//         console.log(data)
//         $('p').append('marketId: '+data.marketId+'<br>'+'<br>');
//         $('p').append('modelId: '+data.modelId+'<br>'+'<br>');
//         $('p').append('configurationId: '+data.configurationId+'<br>'+'<br>');
//         $('p').append('initiailPrice: '+data.initialPrice.price+'<br>'+'<br>');
//         $('p').append('-----------------Next Car------------------'+'<br>')
//       }
//     }).catch(err=>{
//       console.log(err)
//     })
//   })
// })



//disregard

// $(()=>{
//   console.log('script loaded')
//
//   $('#all').click(()=>{
//     console.log('getting random car')
//     const rand = Math.round(Math.random()*151)+1
//     $.ajax({
//       url: `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models/205066_000/configurations/initial?apikey=0cf84dde-d453-42ac-bcbe-b90ed0e32ae0`,
//       method: 'GET',
//       success: (data)=>{
//         // console.log(data)
//         const car = {
//           marketId: data.marketId,
//           modelId: data.modelId,
//           configurationId: data.configurationId
//         }
//         console.log(car.marketId)
//         console.log(car.modelId)
//         console.log(car.configurationId)
//         sendToDB(car)
//       }
//     })
//   })
//
//   const sendToDB = car =>{
//     console.log(`Saving ${car.name} to DB`)
//     $.ajax({
//       url: '/benz',
//       method: 'POST',
//       data: car
//     }).done(data=>{
//       window.location = `http://localhost:3000/benz`
//     })
//   }
// })


// console.log(data)
// const car = {
//   name: data.marketId,
//   num: data.modelId
// }
// console.log(data.marketId)
// console.log(data.modelId)
// sendToDB(car)

  // const sendToDB = car =>{
  //   $("#tester").text("Hello World");
  //   $.body("<p>'helloo'</p>")
  // }


//   const sendToDB = car =>{
//     console.log(car)
//     $.ajax({
//       url: '/benz',
//       method: 'POST',
//       data: car
//     }).done(data=>{
//       window.location = `http://localhost:3000/benz`
//     })
//   }
// })
