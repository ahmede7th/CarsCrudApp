console.log('BENZ>JS SCRIPT')
function findAll(data)
{
  $('p').append('name')
  $.each( data, function( i, item ) {
    $('p').append("<br>name: <a id=single href=benz/car-one>"+data[i].name+'<br>'+'<br></a>')
    $('p').append('class: '+data[i].vehicleClass.className+'<br>'+'<br>')
    $('p').append('price: $'+data[i].priceInformation.price+'<br>'+'<br>')
    $('p').append('-----------------------------------'+'<br>')

  })
}

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
