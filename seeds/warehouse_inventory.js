/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
// exports.seed = async function(knex) {
//   // Deletes ALL existing entries
//   await knex('table_name').del()
//   await knex('table_name').insert([
//     {id: 1, colName: 'rowValue1'},
//     {id: 2, colName: 'rowValue2'},
//     {id: 3, colName: 'rowValue3'}
//   ]);
// };

// import seed data files, arrays of objects
const inventoryData = require('../seed_data/inventory');
const warehouseData = require('../seed_data/warehouse');

exports.seed = function (knex) {
  return knex('warehouse')
    .del()
    .then(function () {
      return knex('warehouse').insert(warehouseData);
    })
    .then(() => {
      return knex('inventory').del();
    })
    .then(() => {
      return knex('inventory').insert(inventoryData);
    });
};