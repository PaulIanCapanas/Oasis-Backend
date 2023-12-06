import BuildingOwnerDAO from "../dao/BuildingOwnerDAO";

class BuildingOwnerService {
  async createBuildingOwner(address: string) {
    return BuildingOwnerDAO.createBuildingOwnerDAO(address);
  }
  
  async getBuildingOwner(id: number) {
    return BuildingOwnerDAO.getBuildingOwner(id);
  }

  async updateBuildingOwner(id: number, address: string) {
    return BuildingOwnerDAO.updateBuildingOwner(id, address);
  }

  async deleteBuildingOwner(id: number) {
    return BuildingOwnerDAO.deleteBuildingOwner(id)
  }
}

export default new BuildingOwnerService()