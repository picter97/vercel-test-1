const router = require('express').Router()
const League = require('../models/league')


router.get('/', async (req, res)=>{
  try {
    const league = await League.find()
    res.json(league)

  }catch(error){
    console.log(error)
    res.status(400).json({'message': 'error creating resource'})
  }
})

router.post('/', async (req, res) =>{
  try{
    const league = await new League(req.body).save()
    res.json(league)
  }catch (error) {
    console.log(error)
    res.status(400).json({'message': 'error creating resource'})

  }
})


module.exports = router