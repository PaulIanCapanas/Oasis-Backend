import db from '../../Oasis-Database/db';

class BuildingDAO {
  async createBuilding(name: string, latitude: number, longitude: number) {
    const [id] = await db('Building').insert({
      name,
      latitude,
      longitude
    }).returning('id');
    return id;
  }
 
  async getBuilding(id: number) {
    const building = await db('Building').where({id});
    return building;
  }
  
  //edit what needs to change upon edit
  async updateBuilding(id: number, name: string, latitude: number, longitude: number) {
    const [updateBuilding] = await db('Building').where({id}).update({
      name,
      latitude,
      longitude
    }).returning('*');
    return updateBuilding;
  }

  async deleteBuilding(id: number) {
    const [deleteBuilding] = await db('Building').where({id}).del().returning('*');
    return deleteBuilding;
  }
}

export default new BuildingDAO();