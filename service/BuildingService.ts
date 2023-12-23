import BuildingDAO from "../dao/BuildingDAO";

interface IBuildingData {
  owner_id: number,
  name: string,
  longitude: number,
  latitude: number
}

class BuildingService {
  async createBuilding(buildingData: IBuildingData) {
    const { name, latitude, longitude } = buildingData
    return BuildingDAO.createBuilding(name, latitude, longitude);
  }

  async getBuilding(id: number) {
    return BuildingDAO.getBuilding(id);
  }

  async updateBuilding(buildingData: IBuildingData) {
    const { owner_id, name, latitude, longitude } = buildingData;
    return BuildingDAO.updateBuilding(owner_id, name, latitude, longitude);
  }
  async deleteBuilding(id: number) {
    return BuildingDAO.deleteBuilding(id);
  }
}

export default new BuildingService();