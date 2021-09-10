import mongoose from 'mongoose';

// ob schema - order list
const oborderListSchema = new mongoose.Schema(
  {
    orderListID: {type: String, required: true},
    orderID: {type: Number, required: true},
    foodName: {type: String, required: true},
    foodID: {type: String, required: true}, 
    itemPrice: {type: Number, required: true},
    quantity: {type: Number, required: true},
  },
  {
    timestamps: true,
  }
);
const Oborderlists = mongoose.model('orderlists', oborderListSchema);
export default Oborderlists;