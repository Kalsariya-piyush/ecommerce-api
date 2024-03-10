const Razorpay = require('razorpay');
const instance = new Razorpay({
    key_id: 'rzp_test_7ExPl5jpqgY76U',
    key_secret: 'fGtRRLXSXLqTyjH2tTg9vzpy',
});

const checkout = async(req, res) => {
    const option = {
        amount: 50000,
        currency: 'INR',
    };
    const order = await instance.orders.create(option);
    res.json({
        success: true,
        order,
    });
};

const paymentVerification = async(req, res) => {
    const { razorpayOrderId, razorpayPaymentId } = req.body;
    res.json({
        razorpayOrderId,
        razorpayPaymentId,
    });
};

module.exports = {
    checkout,
    paymentVerification,
};