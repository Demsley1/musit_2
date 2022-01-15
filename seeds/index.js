const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedPlaylist = require('./playlistData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPlaylist();

  await seedUser();

  process.exit(0);
};

seedAll();