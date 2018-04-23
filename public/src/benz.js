console.log('BENZ>JS SCRIPT')
function findAll(data)
{
  $( "#mainp" ).empty();
  $.each( data, function( i, item ) {
    $('#mainp').append(`<div class="card"> <div class="card-header">`+ data[i].vehicleClass.className+ `</div>
    <div class="card-body"> <h5 class="card-title">`+ data[i].name + `</h5><p class="card-text">`+
    `</p><a href="#" class="btn btn-primary">$`+ data[i].priceInformation.price+`</a></div></div>`)
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
      findAll(data)})})})
