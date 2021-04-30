const express = require('express')
const movieRoute = express.Router()

// MOVIE MODEL
const movieModel = require('../models/Movie')

// GET ALL MOVIE
movieRoute.route('/').get((req,res,next)=>{
    movieModel.find((error,data)=>{
        if(error) return next(error)
        else res.json(data)
    })
})

// ADD MOVIE
movieRoute.route('/create').post((req,res,next)=>{
    movieModel.create(req.body,(error,data)=>{
        if(error) return next(error)
        else res.json(data)
    })
})

// LOAD ONE DATA
movieRoute.route('/find/:id').post((req,res,next)=>{
    movieModel.findById(req.params.id,(error,data)=>{
        if(error) return next(error)
        else res.json(data)
    })
})

// UPDATE DATA
movieRoute.route('/update/:id').put((req,res,next)=>{
    movieModel.findByIdAndUpdate(req.params.id,{
        $set : req.body
    }, (error,data)=>{
        if(error) return next(error)
        else res.json(data)
    })

})

movieRoute.route('/del/:id').delete((req,res,next)=>{
    movieModel.findByIdAndDelete(req.params.id,(error,data)=>{
        if(error) return next(error)
        else res.json(data)
    })
})

module.exports = movieRoute 