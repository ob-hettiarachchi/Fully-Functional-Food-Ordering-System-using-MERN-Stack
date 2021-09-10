import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/cusOrderModel.js';
import Oborders from '../models/orders.js';
import Oborderlists from '../models/ordersList.js';
import {
  isAuth
} from '../utils.js';

const orderRouter = express.Router();

orderRouter.get(
  '/mine',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    res.send(orders);
  })
);


orderRouter.post(
  '/',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    if (req.body.orderItems.length === 0) {
      res.status(400).send({
        message: 'Cart is empty'
      });
    } else {



      const order = new Order({
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        itemsPrice: req.body.itemsPrice,
        shippingPrice: req.body.shippingPrice,
        taxPrice: req.body.taxPrice,
        totalPrice: req.body.totalPrice,
        user: req.user._id,
      });
      const createdOrder = await order.save();




      


      // OB START -------------------------------------------------------------------------------------------------------------

      const ordersCount = await Oborders.find({}).count();

      if (ordersCount == 0) {

        //orders Table
        var lastId = parseInt(0);
        var newId = lastId + 1;
        var addressArray = req.body.shippingAddress;

        var orderobj = new Oborders({
          orderID: parseInt(newId),
          customerID: req.user._id,
          orderTime: new Date(),
          deliveryDetails: addressArray.fullName + ", " + addressArray.address + ", " + addressArray.city + ", " + addressArray.postalCode + ", " + addressArray.country,
          itemsPrice: parseInt(req.body.itemsPrice),
          deliveryPrice: parseInt(req.body.shippingPrice),
          taxPrice: parseInt(req.body.taxPrice),
          totalPrice: parseInt(req.body.totalPrice),
          paymentMethod: req.body.paymentMethod,
          paymentStatus: false,
          orderStatus: parseInt(1)
        });
        await orderobj.save();

        // orderList Table
        var itemsArrray = req.body.orderItems;
        var itemsArrayLength = itemsArrray.length;

        for (var i = 0; i < itemsArrayLength; i++) {
          var orderobj2 = new Oborderlists({
            orderListID: newId + "-" + parseInt(i + 1) + "-" + new Date().getTime(),
            orderID: parseInt(newId),
            foodName: itemsArrray[i].name,
            foodID: itemsArrray[i].product,
            itemPrice: parseInt(itemsArrray[i].price),
            quantity: parseInt(itemsArrray[i].qty)
          });
          await orderobj2.save();
        }

      } else if (ordersCount >= 1) {

        //orders Table
        const oborders = await Oborders.find({}).sort({
          orderID: -1
        }).limit(1);

        var lastId = parseInt(oborders[0].orderID);
        var newId = lastId + 1;
        var addressArray = req.body.shippingAddress;

        var orderobj = new Oborders({
          orderID: parseInt(newId),
          customerID: req.user._id,
          orderTime: new Date(),
          deliveryDetails: addressArray.fullName + ", " + addressArray.address + ", " + addressArray.city + ", " + addressArray.postalCode + ", " + addressArray.country,
          itemsPrice: parseInt(req.body.itemsPrice),
          deliveryPrice: parseInt(req.body.shippingPrice),
          taxPrice: parseInt(req.body.taxPrice),
          totalPrice: parseInt(req.body.totalPrice),
          paymentMethod: req.body.paymentMethod,
          paymentStatus: false,
          orderStatus: parseInt(1)
        });
        await orderobj.save();

        // orderList Table
        var itemsArrray = req.body.orderItems;
        var itemsArrayLength = itemsArrray.length;

        for (var i = 0; i < itemsArrayLength; i++) {
          var orderobj2 = new Oborderlists({
            orderListID: newId + "-" + parseInt(i + 1) + "-" + new Date().getTime(),
            orderID: parseInt(newId),
            foodName: itemsArrray[i].name,
            foodID: itemsArrray[i].product,
            itemPrice: parseInt(itemsArrray[i].price),
            quantity: parseInt(itemsArrray[i].qty)
          });
          await orderobj2.save();
        }

      }
      // OB END -------------------------------------------------------------------------------------------------------------





              res
                .status(201)
                .send({
                  message: 'New Order Created',
                  order: createdOrder
                });



    }
  })
);

orderRouter.get(
  '/:id',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      res.send(order);
    } else {
      res.status(404).send({
        message: 'Order Not Found'
      });
    }
  })
);

orderRouter.put(
  '/:id/pay',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.email_address,
      };
      const updatedOrder = await order.save();
      res.send({
        message: 'Order Paid',
        order: updatedOrder
      });
    } else {
      res.status(404).send({
        message: 'Order Not Found'
      });
    }
  })
);



export default orderRouter;