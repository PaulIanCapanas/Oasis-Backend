import db from '../../Oasis-Database/db';

class UserDAO {
  async createUser(
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    phone_number: string,
    age: number,
  ) {
    const [id] = await db('User').insert({
      first_name,
      last_name,
      email: email,
      password: password,
      phone_number: phone_number,
      age: age
    }).returning('id');
    return id;
  }

  async setUserLocation(latitude: number, longitude: number) {
    const [id] = await db('User').insert({
      latitude,
      longitude
    }).returning('id');
    return id;
  }

  async getUser(id: number) {
    const user = await db('User').where({id}).first();
    return user;
  }

  async getBuildingsWithinUserProximity(lat: number, lng: number) {
    console.log(lat, lng)

    const buildingList = await db('Building')
      .where(
        db.raw(`
        ST_DistanceSphere(
        ST_MakePoint( ${lat} ::double precision, ${lng} ::double precision),
        ST_MakePoint("Building".latitude, "Building".longitude)
      ) <= 1 ::double precision * 1000
      `)
      );
    return buildingList;
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
    ) {
    const [updatedUser] = await db('User').where({id}).update({
      first_name,
      last_name,
      email: email,
      password: password,
      phone_number: phone_number,
      age: age
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

  async getAllUserByEmail(email: string) {
    try {
      const result = await db('User').where({ email });
      return result;
    } catch (error) {
      console.error('Error fetching user by email:', error);
      throw error;
    }
  }
}

export default new UserDAO();