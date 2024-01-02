const { default: mongoose } = require('mongoose');

const dbConnect = () => {
  try {
    const conn = mongoose.connect(
      process.env.NODE_ENV_MONGODB_CONNECTION_STRING
    );
    console.log('Database Connected Successfully');
  } catch (error) {
    console.log('DAtabase error');
  }
};
module.exports = dbConnect;
