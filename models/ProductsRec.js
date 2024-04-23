import mongoose from 'mongoose';

const { Schema } = mongoose;

const productSchema = new Schema({
  catlogname: {
    type: String,
    required: true,
    unique: true,
  },
  products:[{
    model: {
      type: String,
  },
  mrp: {
      type: Number,
  },
  unitPrice: {
      type: Number
  },
  articleNo: {
      type: String
  },
  }]
});


const Products = mongoose.model('Products', productSchema);

export default Products;
