$(()=>{
  console.log('script loaded')

  $('button').click(()=>{
    console.log('getting random pokemon')
    const rand = Math.round(Math.random()*151)+1
    $.ajax({
      url: `https://pokeapi.co/api/v2/pokemon/${rand}`,
      method: 'GET',
      success: (data)=>{
        console.log(data)
        const pokemon = {
          name: data.name,
          num: data.id,
          exp: data.base_experience,
          height: data.height,
          weight: data.weight,
          type: data.types[0].type.name
        }
        sendToDB(pokemon)
      }
    })
  })

  const sendToDB = pokemon =>{
    console.log(`Saving ${pokemon.name} to DB`)
    $.ajax({
      url: '/pokemon',
      method: 'POST',
      data: pokemon
    }).done(data=>{
      window.location = `http://localhost:3000/pokemon/${data.id}`
    })
  }


})
