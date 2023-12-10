import db from '../../Oasis-Database/db'

class AmenitiesDAO{
    async createAmenities(
        building_id: number,
        features: string
    ) {
    const [id] = await db('Amenities').insert({
        building_id,
        features
    }).returning('id');
    return id;
    }

    async getAmenities(id: number) {
        const amenities = await db('Amenities').where({id}).first();
        return amenities;
    }
//changes as needed

    async updateAmenities(
        id: number,
        building_id: number,
        features: string
    ) {
        const [updateAmenities] = await db('Amenities').where({id}).update({
            id,
            building_id,
            features
        }). returning('*');
        return updateAmenities;
    }

    async deleteAmenities(id: number){
        const [deleteAmenities] = await db('Amenities').where({id}).del().returning('*');
        return deleteAmenities;
    }
}

export default new AmenitiesDAO();