import express from 'express'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'
import { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus, verifyStripe, verifyRazorpay } from '../controllers/orderController.js'


const orderRouter = express.Router()

// Admin Feautures
orderRouter.post('/list',adminAuth ,allOrders)
orderRouter.post('/status',adminAuth ,updateStatus)

// Payment Feautures
orderRouter.post('/place',authUser ,placeOrder)
orderRouter.post('/stripe',authUser ,placeOrderStripe)
orderRouter.post('/razorpay',authUser ,placeOrderRazorpay)

// User Feauture
orderRouter.post('/userorders',authUser, userOrders)

//Verify Payment
orderRouter.post('/verifyStripe',authUser,verifyStripe)
orderRouter.post('/verifyRazorpay',authUser,verifyRazorpay)

export default orderRouter