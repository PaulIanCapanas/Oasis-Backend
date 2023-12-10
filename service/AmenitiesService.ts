import AmenitiesDAO from "../dao/AmenitiesDAO";

interface IAmenitiesData{
    id: number,
    building_id: number,
    features: string,
}

class AmenitiesService {
    async createAmenities(amenitiesData: IAmenitiesData){
        const {building_id, features} = amenitiesData;
        return AmenitiesDAO.createAmenities(building_id, features);
    }

    async getAmenities(building_id: number){
        return AmenitiesDAO.getAmenities(building_id);
    }

    async updateAmenities(amenitiesData: IAmenitiesData){
        const {id, building_id, features} = amenitiesData;
        return AmenitiesDAO.updateAmenities(id, building_id, features);
    }

    async deleteAmenities(id: number){
        return AmenitiesDAO.deleteAmenities(id);
    }
    
}

export default new AmenitiesService();