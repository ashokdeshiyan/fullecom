const Product = require('../models/productModel')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middleware/catchAsyncError')
const ApiFeature = require('../utils/apiFeatures')



// create a product  -- only admin access
exports.createProduct = catchAsyncError(async(req,res,next)=>{
    const product = await Product.create(req.body)
    res.status(201).json({
        success:true,
        product
    })
})


// get all the products
exports.getAllProducts = catchAsyncError(async(req, res)=>{

//filtering and search and pagination 
// now need to do pagination

    const apiFeatures = new ApiFeature(Product.find(), req.query).search().filter()

    const products = await apiFeatures.query;


    res.status(200).json({
        success:true,
        products

    })

})


// get product details

exports.getProductDetails = catchAsyncError(async(req,res, next)=>{
    const product = await Product.findById(req.params.id)

    if(!product){
        return next(new ErrorHandler("Product Not Found ", 404))
    }
    res.status(500).json({
        success:true,
        product
    })

})

// update product -- Admin route

exports.updateProduct = catchAsyncError( async(req,res, next)=>{
    let product = await Product.findById(req.params.id)

    if(!product){
        return next(new ErrorHandler("Product not found",404))
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body,{new:true, 
    runValidators:true, useFindAndModify: false})

    res.status(200).json({
        success: true,
        product
    })
})

//detete product

exports.deleteProduct = catchAsyncError(async(req,res,next)=>{
    const product = await Product.findById(req.params.id)

    if(!product){
        return next(new ErrorHandler("Product Not Found ", 404))
    }

    await product.deleteOne();

    res.status(200).json({
        success: true,
        message: "product deleted successfully"
    })
})
