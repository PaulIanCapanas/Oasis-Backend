import BuildingOwnerDAO from "../dao/BuildingOwnerDAO";

interface IBuildingOwnerData {
  id: number,
  address: string
}

class BuildingOwnerService {
  async createBuildingOwner(address: string) {
    return BuildingOwnerDAO.createBuildingOwnerDAO(address);
  }
  
  async getBuildingOwner(id: number) {
    return BuildingOwnerDAO.getBuildingOwner(id);
  }

  async updateBuildingOwner(buildingOwnerData: IBuildingOwnerData) {
    const { id, address } = buildingOwnerData;
    return BuildingOwnerDAO.updateBuildingOwner(id, address);
  }

  async deleteBuildingOwner(id: number) {
    return BuildingOwnerDAO.deleteBuildingOwner(id)
  }
}

export default new BuildingOwnerService()