const mongoose = require("mongoose");
const Listing = require("../models/listing");
const initData = require("./data");

require("dotenv").config();

const dbUrl = process.env.ATLASDB_URL;

async function main() {
  await mongoose.connect(dbUrl);
}

main()
  .then(() => {
    console.log("connected to DB");
    initDB();
  })
  .catch(err => console.log(err));

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
  process.exit();
};