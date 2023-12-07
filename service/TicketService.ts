import TicketDAO from '../dao/TicketDAO';

interface ITicketData {
  id: number,
  room_id: number,
  boarder_id: number,
}

class TicketService {
  async createTicket(ticketData: ITicketData) {
    const { room_id, boarder_id } = ticketData;
    return TicketDAO.createTicket(room_id, boarder_id);
  }

  async getTicket(id: number) {
    return TicketDAO.getTicket(id);
  }

  async updateTicket(ticketData: ITicketData) {
    const { id, room_id, boarder_id } = ticketData;
    return TicketDAO.updateTicket(id, room_id, boarder_id);
  }

  async deleteTicket(id: number) {
    return TicketDAO.deleteTicket(id);
  }
}

export default new TicketService();