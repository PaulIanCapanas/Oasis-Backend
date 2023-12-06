import db from '../../Oasis-Database/db';

class BuildingOwnerDAO {

  async createBuildingOwnerDAO (address: string) {
    const [id] = await db('BuildingOwner').insert({
      address
    }).returning('id');
    return id;
  }

  async getBuildingOwner(id: number) {
    const buildingOwner = await db('BuildingOwner').where({id}).first();
    return buildingOwner
  }
//change as needed
  async updateBuildingOwner(id: number, address: string) {
    const [updatedBuildingOwner] = await db('BuildingOwner').where({id}).update({
      address
    }).returning('*');
    return updatedBuildingOwner;
  }

  async deleteBuildingOwner(id: number) {
    const [deleteBuildingOwner] = await db('BuildingOwner').where({id}).del().returning('*');
    return deleteBuildingOwner;
  }
}

export default new BuildingOwnerDAO()