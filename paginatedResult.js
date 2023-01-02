function paginatedResult(data){
    return async (req,res,next)=>{
    const page =parseInt(req.query.page);
    const limit =parseInt(req.query.limit);
    startIndex=(page-1)*limit;
    endIndex = page*limit;
    const results ={}
    // if(endIndex<data.length){
    // results.next={
    //     page:page+1,
    //     limit:limit
    // }}
    if(endIndex< await data.count()){
        results.next={
            page:page+1,
            limit:limit
        }}

    if(startIndex>0){
    results.previous={
        page:page-1,
        limit:limit
    }}
    // results.results= data.slice(startIndex,endIndex);
    try{
    results.results =await data.find().limit(limit).skip(startIndex)
    res.paginatedResult=results;
    next();
    }
    catch(err){
        res.status(500).json({
            error:err.message
        })
    }

}
}
module.exports={
    paginatedResult
}