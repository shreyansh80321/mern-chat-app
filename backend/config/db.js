const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    console.log("Attempting to connect to MongoDB...".yellow);
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      writeConcern: {
        w: "majority",
      },
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`.red.bold);
    console.error("Full error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
