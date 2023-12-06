import db from '../../Oasis-Database/db';

class BuildingDAO {
  async createBuilding(name: string, address: string) {
    const [id] = await db('Building').insert({
      name,
      address
    }).returning('id');
    return id;
  }
 
  async getBuilding(id: number) {
    const building = await db('Building').where({id});
    return building;
  }
  
  //edit what needs to change upon edit
  async updateBuilding(id: number, name: string, address: string) {
    const [updateBuilding] = await db('Building').where({id}).update({
      name,
      address
    }).returning('*');
    return updateBuilding;
  }

  async deleteBuilding(id: number) {
    const [deleteBuilding] = await db('Building').where({id}).del().returning('*');
    return deleteBuilding
  }
}

export default new BuildingDAO()