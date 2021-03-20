import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    const connect_db = await mongoose.connect(
      "mongodb://localhost:27017/usersApp",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );
    console.log(`MongoDB Connected: ${connect_db.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1); // exit with falliar
  }
};
