import UserDAO from '../dao/UserDAO';

interface IPersonData {
  id: number,
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_number: string;
  age: number;
  user_type: string;
}

class UserService {
  async createUser(personData: IPersonData) {
    const { first_name, last_name, email, password, phone_number, age, user_type } = personData;
    return UserDAO.createUser(first_name, last_name, email, password, phone_number, age, user_type);
  }

  async getUser(id: number) {
    return UserDAO.getUser(id);
  }

  async updateUser(personData: IPersonData) {
    const { id, first_name, last_name, email, password, phone_number, age, user_type } = personData;
    return UserDAO.updateUser(id, first_name, last_name, email, password, phone_number, age, user_type);
  }

  async deleteUser(id: number) {
    return UserDAO.deleteUser(id);
  }
}

export default new UserService();