const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://rahulkishore425:kishore_1995@myfirstdatabasecluster0.ad5cz.mongodb.net/Validator?retryWrites=true&w=majority"
  );
};
