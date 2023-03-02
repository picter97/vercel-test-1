const axios = require('axios')

const BASE_URL = 'https://pokeapi.co/api/v2'

const getPokemonById = async (req, res) => {
  try{
    const { id } = req.params
    const url = `${BASE_URL}/pokemon/${id}`
    const { data } = await axios.get(url)
    res.json(data)
    res.json(id)
  }catch (error){
    console.log(error)
    res.status(400).json({'message': 'error creating resource'})

  }
  
}

module.exports = {
  getPokemonById
}