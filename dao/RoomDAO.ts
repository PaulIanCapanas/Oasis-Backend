import db from '../../Oasis-Database/db'

class RoomDAO{
    async createRoom(
        building_id: number,
        reservation_id: number,
        room_description: string,
        type: string,
        status: string    
    ) {
    const [id] = await db('User').insert({
        building_id,
        reservation_id,
        room_description,
        type,
        status
    }).returning('id');
    return id;
    }

    async getRoom(id: number) {
        const user = await db('User').where({id}).first();
        return user;
    }
//changes as needed

    async updateRoom(
        id: number, 
        building_id: number,
        reservation_id: number,
        room_description: string,
        type: string,
        status: string,
    ) {
        const [updatedRoom] = await db('Room').where({id}).update({
            id, 
            building_id,
            reservation_id,
            room_description,
            type,
            status,
        }).returning('*');
        return updatedRoom;
    }
    
    async deleteRoom(id: number) {
        const [deletedRoom] = await db('User').where({id}).del().returning('*');
        return deletedRoom;
    }
}

export default new RoomDAO();