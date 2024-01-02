const bodyParser = require('body-parser');
const express = require('express');
const dbConnect = require('./config/dbConnect');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const app = express();
require('dotenv').config();
const authRouter = require('./routes/authRoute');
const productRouter = require('./routes/productRoute');
const blogRouter = require('./routes/blogRoute');
const categoryRouter = require('./routes/prodcategoryRoute');
const blogcategoryRouter = require('./routes/blogCatRoute');
const brandRouter = require('./routes/brandRoute');
const colorRouter = require('./routes/colorRoute');
const enqRouter = require('./routes/enqRoute');
const couponRouter = require('./routes/couponRoute');
const uploadRouter = require('./routes/uploadRoute');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const PORT = process.env.NODE_ENV_PORT;

dbConnect();
app.use(morgan('dev'));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.use(
  cors({
    credentials: true,
    origin: [
      'http://localhost:3000',
      'http://localhost:5000',
      'https://ecommerce-staging-backend.vercel.app',
      'https://ecommerce-staging-frontend.vercel.app',
    ],
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api/user', authRouter);
app.use('/api/product', productRouter);
app.use('/api/blog', blogRouter);
app.use('/api/category', categoryRouter);
app.use('/api/blogcategory', blogcategoryRouter);
app.use('/api/brand', brandRouter);
app.use('/api/coupon', couponRouter);
app.use('/api/color', colorRouter);
app.use('/api/enquiry', enqRouter);
app.use('/api/upload', uploadRouter);

app.get('/', async (req, res) => {
  res.send('Server is running ... !!!');
});

app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is running  at PORT ${PORT}`);
});
