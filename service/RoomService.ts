import RoomDAO from "../dao/RoomDAO";

interface IRoomData{
    id: number,
    building_id: number,
    reservation_id: number,
    room_description: string,
    type: string,
    status: string
}

class RoomService {
    async createRoom(roomData: IRoomData) {
        const {building_id, reservation_id, room_description, type, status} = roomData;
        return RoomDAO.createRoom(building_id, reservation_id, room_description, type, status);
    }

    async getRoom(roomData: IRoomData) {
        const {building_id, reservation_id, room_description, type, status} = roomData;
        return RoomDAO.createRoom(building_id, reservation_id, room_description, type, status);
    }

    async updateRoom(roomData: IRoomData){
        const {id, building_id, reservation_id, room_description, type, status} = roomData;
        return RoomDAO.updateRoom(id, building_id, reservation_id, room_description, type, status);
    }

    async deleteRoom(id: number){
        return RoomDAO.deleteRoom(id);
    }
}

export default new RoomService();