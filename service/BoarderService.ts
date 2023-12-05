import BoarderDAO from "../dao/BoarderDAO";

class BoarderService {
  async createBoarder(address: string) {
    return BoarderDAO.createBoarder(address);
  }

  async getBoarder(id: number) {
    return BoarderDAO.getBoarder(id);
  }

  async updateBoarder(address: string) {
    return BoarderDAO.updateBoarder(address);
  }

  async deleteBoarder(id: number) {
    return BoarderDAO.deleteBoarder(id)
  }

}

export default new BoarderService()