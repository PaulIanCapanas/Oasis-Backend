import db from '../../Oasis-Database/db'

class ReviewsDAO{
    async createReviews(
        user_id: number,
        content: string,
        date_time_posted: Date
    ) {
    const [id] = await db('').insert({
        user_id,
        content,
        date_time_posted
    }).returning('id');
    return id;
    }

    async getReviews(id: number) {
        const reviews = await db('Reviews').where({id}).first();
        return reviews;
    }
// changes as needed

    async updateReviews(
        id: number,
        user_id: number,
        content: string,
        date_time_posted: Date
    ) {
        const [updatedReviews] = await db('Reviews').where({id}).update({
            user_id,
            content,
            date_time_posted
        }).returning('*');
        return updatedReviews;
    }

    async deleteReviews(id: number){
        const [deletedReviews] = await db('Reviews').where({id}).del().returning('*');
        return deletedReviews;
    }
}

export default new ReviewsDAO();