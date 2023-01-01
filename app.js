const express =require('express');
const app = express();
const productData =require('./data/productData.json');
const userData = require('./data/userData.json')

app.get('/products',(req,res) =>{
    const page =parseInt(req.query.page);
    const limit =parseInt(req.query.limit);
    startIndex=(page-1)*limit;
    endIndex = page*limit;
    const results ={}
    if(endIndex<productData.length)
    results.next={
        page:page+1,
        limit:limit
    }
    if(startIndex>0)
    results.previous={
        page:page-1,
        limit:limit
    }
    results.results= productData.slice(startIndex,endIndex);
    res.json(results)
})

app.listen(8080,(err)=>{
    if(err){
        console.log('server connection failed');
    }
    else{
        console.log('server connected successfully');
    }
})