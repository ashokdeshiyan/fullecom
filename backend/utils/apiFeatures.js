class ApiFeature {
    constructor(query, queryStr){
        this.query =query;
        this.queryStr = queryStr;
    }
    //search feature

    search(){
        const keyword= this.queryStr.keyword ? {
            // as we will search name of the product so
            name:{
                $regex: this.queryStr.keyword,
                $options: "i"
            }
        }
        :{}

        this.query = this.query.find({...keyword});
        return this;
    }
}

module.exports = ApiFeature;