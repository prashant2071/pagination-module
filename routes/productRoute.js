const router =require('express').Router();
const productData =require('../data/productData.json');
const {paginatedResult} =require('../paginatedResult')


router.route('/')
.get(paginatedResult(productData), (req,res) =>{
    // const page =parseInt(req.query.page);
    // const limit =parseInt(req.query.limit);
    // startIndex=(page-1)*limit;
    // endIndex = page*limit;
    // const results ={}
    // if(endIndex<productData.length){
    // results.next={
    //     page:page+1,
    //     limit:limit
    // }}

    // if(startIndex>0){
    // results.previous={
    //     page:page-1,
    //     limit:limit
    // }}
    // results.results= productData.slice(startIndex,endIndex);


    res.json(res.paginatedResult)
})
module.exports=router