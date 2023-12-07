import ReservationDAO from "../dao/ReservationDAO";

interface IReservationData {
  id: number,
  user_id: number,
  building_id: number,
  check_in_date: Date,
  check_out_date: Date,
  created_at: Date
}

class ReservationService {
  async createReservation(reservationData: IReservationData) {
    const { user_id, building_id, check_in_date, check_out_date, created_at } = reservationData;
    return ReservationDAO.createReservation(user_id, building_id, check_in_date, check_out_date, created_at);
  }

  async getReservation(id: number) {
    return ReservationDAO.getReservation(id);
  }

  async updateReservation(reservationData: IReservationData) {
    const { id, user_id, building_id, check_in_date, check_out_date, created_at } = reservationData;
    return ReservationDAO.updateReservation(id, user_id, building_id, check_in_date, check_out_date, created_at);
  }

  async deleteReservation(id: number) {
    return ReservationDAO.deleteReservation(id);
  }
}

export default new ReservationService();