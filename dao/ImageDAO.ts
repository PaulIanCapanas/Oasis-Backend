import { Knex } from 'knex';

class ImageDAO {
  private knex: Knex;

  constructor(knex: Knex) {
    this.knex = knex;
  }

  async saveImage(filename: string): Promise<number> {
    const [id] = await this.knex('images').insert({ filename });
    return id as number;
  }
}

export default ImageDAO;