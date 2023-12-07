import db from '../../Oasis-Database/db';

class ReservationDAO {
  async createReservation(
    user_id: number,
    building_id: number,
    check_in_date: Date,
    check_out_date: Date,
    created_at: Date
    ) {
    const [id] = await db('Reservation').insert({
      user_id,
      building_id,
      check_in_date,
      check_out_date,
      created_at
    }).returning('id');
  }

  async getReservation(id: number) {
    const reservation = await db('Reservation').where({id}).first();
    return reservation;
  }

  async updateReservation(
    id: number,
    user_id: number,
    building_id: number,
    check_in_date: Date,
    check_out_date: Date,
    created_at: Date
    ) {
    const [updatedReservation] = await db('Reservation').where({id}).update({
      user_id,
      building_id,
      check_in_date,
      check_out_date,
      created_at
    }).returning('*');
    return updatedReservation;
  }

  async deleteReservation(id: number) {
    const [deletedReservation] = await db('Reservation').where({id}).del().returning('*');
    return deletedReservation;
  }
}

export default new ReservationDAO();