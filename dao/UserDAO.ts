import db from '../../Oasis-Database/db';

class UserDAO {
  async createUser(
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    phone_number: string,
    age: number,
    user_type: string
  ) {
    const [id] = await db('User').insert({
      first_name,
      last_name,
      email: email,
      password: password,
      phone_number: phone_number,
      age: age,
      user_type: user_type,
    }).returning('id');
    return id;
  }
  async getUser(id: number) {
    const user = await db('User').where({id}).first();
    return user;
  }
//change as needed
  async updateUser(
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    phone_number: string,
    age: number,
    user_type: string
    ) {
    const [updatedUser] = await db('User').where({id}).update({
      first_name,
      last_name,
      email: email,
      password: password,
      phone_number: phone_number,
      age: age,
      user_type: user_type,
    }).returning('*');
    return updatedUser;
  }

  async deleteUser(id: number) {
    const [deletedUser] = await db('User').where({id}).del().returning('*');
    return deletedUser;
  }

  async getUserByEmail(email: string) {
    try {
      const result = await db('User').where({ email }).first();
      return result;
    } catch (error) {
      console.error('Error fetching user by email:', error);
      throw error;
    }
  }
}

export default new UserDAO();