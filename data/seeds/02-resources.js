
const resources = [
  { resource_name: 'kaynak1',resource_description:"k.aciklama1" },
  { resource_name: 'kaynak2',resource_description:"k.aciklama2" },
]

exports.resources = resources

exports.seed = function (knex) {
  return knex('resources').insert(resources)
}
