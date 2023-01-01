const express =require('express');
const app = express();
const productData =require('./data/productData.json');

app.get('/products',(req,res) =>{
    const {page,limit} =req.query;
    startIndex=(page-1)*limit;
    endIndex = page*limit;
    const paginateData= productData.slice(startIndex,endIndex);
    res.json(paginateData)
})

app.listen(8080,(err)=>{
    if(err){
        console.log('server connection failed');
    }
    else{
        console.log('server connected successfully');
    }
})