const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedMusic = require('./musicData');
const seedPlaylist = require('./playlistData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  console.log('\n----- USER SEEDED -----\n');

  await seedPlaylist();
  console.log('\n----- PLAYLIST SEEDED -----\n');

  await seedMusic();
  console.log('\n----- MUSIC SEEDED -----\n');

  process.exit(0);
};

seedAll();