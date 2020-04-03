//require('saslprep');
const mongoose = require("mongoose");
require('dotenv').config();

//allow lock collection
// mongoose.plugin(require('mongoose-schema-lock'), {promise: true});
// mongoose.Promise = Promise;





/**
 * Fonction qui permet d'établir une connexion avec la base de données mongoDB
 * @param callback
 */
const Mongo = {

    _debug: true,
    _events: ['connecting','connected','open', 'disconnecting', 'disconnected', 'close','reconnected', 'error', 'fullsetup', 'all', 'reconnectFailed','reconnectTries' ],

    _connexion: null,

    connect: async () => {
        try {
            if (!Mongo._connexion) {
                if (Mongo._debug) {
                    Mongo._events.forEach(e => {
                        mongoose.connection.on(e, () => {
                            console.log('Mongo:Event', e);
                        });
                    });
                }


                let url = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DBNAME}`;
                try {
                    await mongoose.connect(url, {
                        useNewUrlParser: true,
                        useFindAndModify: false,
                        useUnifiedTopology: true,
                        bufferMaxEntries: 0,
                        connectTimeoutMS: 1000,
                        keepAlive: true
                    });
                    Mongo._connexion = true;
                } catch (e) {
                    console.log("Mongo:Error", e);
                    return null;
                }
            }
        } catch (e) {
            console.error('Mongo:Error', e);
        }
    },

    disconnect: async () => {
        if(Mongo._connexion) {
            await mongoose.connection.close();
            Mongo._connexion = null;
        }
    }
};
module.exports = Mongo;