import BuildingDAO from "../dao/BuildingDAO";

interface IBuildingData {
  owner_id: number,
  name: string,
  address: string
}

class BuildingService {
  async createBuilding(buildingData: IBuildingData) {
    const { name, address } = buildingData
    return BuildingDAO.createBuilding(name, address);
  }

  async getBuilding(id: number) {
    return BuildingDAO.getBuilding(id);
  }

  async updateBuilding(buildingData: IBuildingData) {
    const { owner_id, name, address } = buildingData
    return BuildingDAO.updateBuilding(owner_id, name, address);
  }
  async deleteBuilding(id: number) {
    return BuildingDAO.deleteBuilding(id);
  }
}

export default new BuildingService();