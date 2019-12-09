import mongoose from "mongoose";

// mongoose.connection.on('error', () => {
//   throw Error('Fail to connect mongodb server')
// });
// mongoose.connection.once('open', function() {
//   console.log('Connected to mongodb server');
// });

// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
// mongoose.set('useFindAndModify', false);

// mongoose.set('debug', true)
// mongoose.set('debug', function (collection, method, query, doc [, options]) {
//     console.log(/* your log format */);
//  });

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(result => {
    console.log(`Succss to connect DB ${process.env.MONGODB_URL} / pid: ${process.pid}`);
  })
  .catch(err => {
    console.log(`Fail to connect DB / pid: ${process.pid}`, err);
  });
