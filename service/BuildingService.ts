import BuildingDAO from "../dao/BuildingDAO";

interface IBuildingData {
  owner_id: number,
  name: string,
  longitude: number,
  latitude: number
}

class BuildingService {
  async createBuilding(name: string, user_id: number, latitude: number, longitude: number, description: string, address: string) {
    try {
      return BuildingDAO.createBuilding(name, user_id, latitude, longitude, description, address);
    } catch (err) {
      console.log(err);
    }
  }

  async getBuilding(id: number) {
    return BuildingDAO.getBuilding(id);
  }

  async getBuildingWithinRadius(lat: number, lng: number) {
    return BuildingDAO.getBuildingWithinRadius(lat, lng);
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