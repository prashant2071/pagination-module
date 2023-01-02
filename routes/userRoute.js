const router = require('express').Router()

const userData = require('../data/userData.json');
const {paginatedResult} =require('../paginatedResult');
const users = require('../users');



router.route('/')
.get(paginatedResult(users) ,(req,res) =>{
    // const page =parseInt(req.query.page);
    // const limit =parseInt(req.query.limit);
    // startIndex=(page-1)*limit;
    // endIndex = page*limit;
    // const results ={}
    // if(endIndex<userData.length){
    // results.next={
    //     page:page+1,
    //     limit:limit
    // }}

    // if(startIndex>0){
    // results.previous={
    //     page:page-1,
    //     limit:limit
    // }}
    // results.results= userData.slice(startIndex,endIndex);
    res.json(res.paginatedResult);
})
module.exports=router