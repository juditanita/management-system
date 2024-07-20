import mongoose from "mongoose";

const connectionUrl = process.env.MONGODB_URI;

if (!connectionUrl) throw new Error("MONGO_URL is not defined.");

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null };
}

export const dbConnect = async () => {
  if (cached.conn) return cached.conn;

  cached.conn = await mongoose.connect(connectionUrl);

  return cached.conn;
};