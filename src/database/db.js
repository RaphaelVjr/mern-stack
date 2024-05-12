const mongoose = require('mongoose');
const password = encodeURIComponent("Bakugan@15117689");

const connectDatabase = () => {

    let uri = `mongodb+srv://contatoraphaelvjr:${password}@cluster0.vcu5vxb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    mongoose.connect(uri).then(() => console.log("MongoDB Atlas Connected")).catch((error) => console.log(error));
}

module.exports = connectDatabase;