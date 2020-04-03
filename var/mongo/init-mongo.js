db.createUser(
    {
        user: 'matt',
        pwd: 'fraser',
        roles: [
            {
                role: "readWrite",
                db: "crossfitgame"
            }
        ]
    }
);
db.getSiblingDB('crossfitgame');