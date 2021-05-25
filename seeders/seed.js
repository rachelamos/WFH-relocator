const sequelize = require("../config/connection");
const seedUser = require("./seed-user");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  process.exit(0);
};

seedAll();
