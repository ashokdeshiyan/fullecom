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

    filter(){
        //we can pass this.queryStr to query copy as this will pass the refrence to queryCopy and any changes made will also affect the this.queryStr
        // js pass all the object as refrence so we use separade operator

        const queryCopy= {...this.queryStr} // this will give value 



        // remove unnecessary parts from query

        const removeFields = ['keyword',['limit','page']]

        removeFields.forEach(key=> delete queryCopy[key]);

        // filter for the price

        // first change to string

    
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|lt|gte|lte)\b/g, key =>`$${key}`)

        this.query = this.query.find(JSON.parse(queryStr))
        
        return this;

    }
}

module.exports = ApiFeature;