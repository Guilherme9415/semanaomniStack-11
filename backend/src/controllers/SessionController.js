const connection = require('../database/connection');

module.exports = {
  async create( request, reponse){
    const { id } = request.body;

    const ong = await connection('ongs')
    .where('id', id)
    .select('name')
    .first();

  if (!ong){
    return reponse.status(400).json({erro: 'No ONG foud with this ID' });
  }  
  return reponse.json(ong);
  }
}