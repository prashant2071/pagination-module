function paginatedResult(data){
    return (req,res,next)=>{
    const page =parseInt(req.query.page);
    const limit =parseInt(req.query.limit);
    startIndex=(page-1)*limit;
    endIndex = page*limit;
    const results ={}
    if(endIndex<data.length){
    results.next={
        page:page+1,
        limit:limit
    }}

    if(startIndex>0){
    results.previous={
        page:page-1,
        limit:limit
    }}
    results.results= data.slice(startIndex,endIndex);
    res.paginatedResult=results;
    next();

}
}
module.exports={
    paginatedResult
}