const express = require('express');
const {
    createUser,
    loginUserCtrl,
    getallUser,
    getaUser,
    deleteaUser,
    updatedUser,
    blockUser,
    unblockUser,
    handleRefreshToken,
    logout,
    updatePassword,
    forgotPasswordToken,
    resetPassword,
    loginAdmin,
    getWishlist,
    saveAddress,
    userCart,
    getUserCart,
    emptyCart,
    applyCoupon,
    createOrder,
    getOrders,
    updateOrderStatus,
    getAllOrders,
    getCurrentUser,
    removeProductFromCart,
    createNewOrder,
    getMyOrders,
    getMonthWiseOrderIncome,
    getYearlyTotalOrders,
    removeOrder,
    getSingleOrders,
    updateOrder,
} = require('../controller/userCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const { checkout, paymentVerification } = require('../controller/paymentCtrl');
const router = express.Router();
router.post('/register', createUser);
router.post('/forgot-password-token', forgotPasswordToken);

router.put('/reset-password/:token', resetPassword);

router.put('/password', authMiddleware, updatePassword);
router.post('/login', loginUserCtrl);
router.post('/admin-login', loginAdmin);
router.post('/cart', authMiddleware, userCart);
router.post('/order/checkout', checkout);
router.post('/order/paymentVerification', authMiddleware, paymentVerification);
// router.post('/cart/applycoupon', authMiddleware, applyCoupon);
// router.post('/cart/cash-order', authMiddleware, createOrder);
router.post('/cart/create-order', authMiddleware, createNewOrder);
router.get('/all-users', getallUser);
router.get('/getmyorders', authMiddleware, getMyOrders);
router.get('/getallorders', authMiddleware, isAdmin, getAllOrders);
router.get('/getaOrders/:id', authMiddleware, isAdmin, getSingleOrders);
router.put('/updateOrder/:id', authMiddleware, isAdmin, updateOrder);
router.post('/getorderbyuser/:id', authMiddleware, isAdmin, getAllOrders);
router.post(
    '/getMonthWiseOrderIncome',
    authMiddleware,
    getMonthWiseOrderIncome
);
router.post('/getYearlyTotalOrders', authMiddleware, getYearlyTotalOrders);
router.post('/removeOrder', authMiddleware, removeOrder);
router.get('/refresh', handleRefreshToken);
router.get('/logout', logout);
router.get('/wishlist', authMiddleware, getWishlist);
router.get('/cart', authMiddleware, getUserCart);
router.get('/me', authMiddleware, getCurrentUser);
router.get('/:id', authMiddleware, isAdmin, getaUser);
router.delete('/empty-cart', authMiddleware, emptyCart);
router.delete('/remove-order/:orderId', authMiddleware, removeOrder);
router.delete(
    '/delete-product-cart/:cartItemId',
    authMiddleware,
    removeProductFromCart
);
router.delete('/:id', deleteaUser);
// router.put(
//   '/order/update-order/:id',
//   authMiddleware,
//   isAdmin,
//   updateOrderStatus
// );
router.put('/edit-user', authMiddleware, updatedUser);
router.put('/save-address', authMiddleware, saveAddress);
router.put('/block-user/:id', authMiddleware, isAdmin, blockUser);
router.put('/unblock-user/:id', authMiddleware, isAdmin, unblockUser);

module.exports = router;