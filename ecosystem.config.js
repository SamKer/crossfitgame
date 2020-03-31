module.exports = {
    apps : [{
        name: "crossfitgame",
        script: "./server.js",
        watch: "server.js",
        ignore_watch : ["node_modules", "var"],
        env: {
            NODE_ENV: "development",
            SERVER_PORT: 3000
        },
        env_production: {
            NODE_ENV: "production",
            SERVER_PORT: 80
        }
    }]
};