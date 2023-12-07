import db from '../../Oasis-Database/db';

class TicketDAO {
  async createTicket(room_id: number, boarder_id: number) {
    const [id] = await db('Ticket').insert({
      room_id,
      boarder_id,
    }).returning('id')
    return id;
  }

  async getTicket(id: number) {
    const ticket = await db('Ticket').where({id}).first();
    return ticket;
  }

  async updateTicket(id: number, room_id: number, boarder_id: number) {
    const [updatedTicket] = await db('Ticket').where({id}).update({
      room_id,
      boarder_id
    }).returning('*')
    return updatedTicket;
  }

  async deleteTicket(id: number) {
    const [deletedTicket] = await db('Ticket').where({id}).del().returning('*');
    return deletedTicket;
  }
}

export default new TicketDAO();