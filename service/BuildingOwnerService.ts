import BuildingOwnerDAO from "../dao/BuildingOwnerDAO";

class BuildingOwnerService {
  async createBuildingOwner(address: string) {
    return BuildingOwnerDAO.createBuildingOwnerDAO(address);
  }
  
  async getBuildingOwner(id: number) {
    return BuildingOwnerDAO.getBuildingOwner(id);
  }

  async updateBuildingOwner(address: string) {
    return BuildingOwnerDAO.updateBuildingOwner(address);
  }

  async deleteBuildingOwner(id: number) {
    return BuildingOwnerDAO.deleteBuildingOwner(id)
  }
}

export default new BuildingOwnerService()