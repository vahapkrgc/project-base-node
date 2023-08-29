const mongoose = require("mongoose");
const config = require("../config");

let instance = null;
class Database {

    constructor() {
        if (!instance) {
            this.mongoConnection = null;
            instance = this;
        }

        return instance;
    }

    async connect(option) {
        try {
            console.log("Connecting...");
            let db = await mongoose.connect(config.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });

            this.mongoConnection = db;
            console.log("DB Connected.");
        } catch (err) {
            console.error(err);
            process.exit(1);
        }
        
    }

}

module.exports = Database;