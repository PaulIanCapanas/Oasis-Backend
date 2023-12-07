import BoarderDAO from "../dao/BoarderDAO";

interface IBoarderData {
  id: number,
  address: string
}

class BoarderService {
  async createBoarder(address: string) {
    return BoarderDAO.createBoarder(address);
  }

  async getBoarder(id: number) {
    return BoarderDAO.getBoarder(id);
  }

  async updateBoarder(boarderData: IBoarderData) {
    const { id, address } = boarderData;
    return BoarderDAO.updateBoarder(id, address);
  }

  async deleteBoarder(id: number) {
    return BoarderDAO.deleteBoarder(id)
  }
}

export default new BoarderService()