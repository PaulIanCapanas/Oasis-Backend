import db from '../../Oasis-Database/db';

class BoarderDAO {
  async createBoarder(address: string) {
    const [id] = await db('Boarder').insert({
      address
    }).returning('id');
    return id;
  }

  async getBoarder(id: number) {
    const boarder = await db('Boarder').where({id}).first();
    return boarder
  }
  //change as needed
  async updateBoarder(address: string) {
    const [updatedBoarder] = await db('Boarder').where({address}).update({
      address
    }).returning('*');
    return updatedBoarder;
  }

  async deleteBoarder(id: number) {
    const [deletedBoarder] = await db('Boarder').where({id}).del().returning('*')
    return deletedBoarder
  }
}

export default new BoarderDAO()