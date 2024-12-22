import express from 'express';
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'
import {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrder, updateStatus, verifyStripe, verifyRazorpay} from '../controllers/orderController.js'

const orderRouter = express.Router();

// admin features
orderRouter.post('/list', adminAuth ,allOrders)
orderRouter.post('/status', adminAuth ,updateStatus)


// patment features
orderRouter.post('/place', authUser ,placeOrder)
orderRouter.post('/stripe', authUser ,placeOrderStripe)
orderRouter.post('/razorpay', authUser ,placeOrderRazorpay)

// user features
orderRouter.post('/userorders', authUser, userOrder)

// verify payment
orderRouter.post('/verifyStripe',authUser,verifyStripe)
orderRouter.post('/verifyRazorpay',authUser,verifyRazorpay)

export default orderRouter