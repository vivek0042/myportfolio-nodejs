const express=require("express");
const mongoose=require("mongoose");
// const { boolean } = require("webidl-conversions");

const studentchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
    },
    // check:{
    //     type:boolean,
    //     required:true,
    // }
})

const data = new mongoose.model("data",studentchema);
module.exports=data;