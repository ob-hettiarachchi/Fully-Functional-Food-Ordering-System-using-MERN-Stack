import mongoose from 'mongoose';

// ob schema - orders
const oborderSchema = new mongoose.Schema(
  {
    orderID: {type: Number, required: true},
    customerID: {type: String, required: true},
    orderTime: {type: Date, required: true}, 
    deliveryDetails: {type: String, required: true}, 
    itemsPrice: {type: Number}, 
    deliveryPrice: {type: Number}, 
    taxPrice: {type: Number}, 
    totalPrice: {type: Number},
    paymentMethod: {type: String, required: true}, 
    paymentStatus: {type: Boolean, required: true}, 
    orderStatus: {type: Number, required: true}
  },
  {
    timestamps: true,
  }
);
const Oborders = mongoose.model('orders', oborderSchema);
export default Oborders;