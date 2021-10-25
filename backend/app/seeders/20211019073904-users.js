module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Pedro Perez',
        email: 'pperez@gmail.com',
        country: 'Venezuela',
        address: 'Av. del Libertador 420',
      },
      {
        name: 'Juan Lopez',
        email: 'juan@lopez.com',
        country: 'Argentina',
        address: 'Libertador 589 Argentina',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  },
};
