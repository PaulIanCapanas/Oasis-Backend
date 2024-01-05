import db from '../../Oasis-Database/db';

class BuildingDAO {
  async createBuilding(name: string, user_id: number, latitude: number, longitude: number) {
    const [id] = await db('Building').insert({
      name,
      user_id,
      latitude,
      longitude
    }).returning('id');
    return id;
  }
 
  async getBuilding(id: number) {
    const building = await db('Building').where({id});
    return building;
  }

  async getBuildingWithinRadius(id: number) {
    
    const building = await db('Building').where({id}).first();

    console.log(building)

    const buildingList = await db('Building')
      .where(
        db.raw(`
        ST_DistanceSphere(
        ST_MakePoint( ${building.latitude} ::double precision, ${building.longitude} ::double precision),
        ST_MakePoint("Building".latitude, "Building".longitude)
      ) <= 1 ::double precision * 1000
      `)
      );
    return buildingList;
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