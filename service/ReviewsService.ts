import ReviewsDAO from "../dao/ReviewsDAO";

interface IReviewsData{
    id: number;
    userId: number;
    content: string;
    dateTimePosted: Date;
}

class ReviewsService {
    async createReviews(reviewsData: IReviewsData) {
        const {userId, content, dateTimePosted} = reviewsData;
        return ReviewsDAO.createReviews(userId, content, dateTimePosted);
    }

    async getReviews(reviewsData: IReviewsData) {
        const {userId, content, dateTimePosted} = reviewsData;
        return ReviewsDAO.createReviews(userId, content, dateTimePosted);
    }

    async updateReviews(reviewsData: IReviewsData) {
        const {id, userId, content, dateTimePosted} = reviewsData;
        return ReviewsDAO.updateReviews(id, userId, content, dateTimePosted);
    }

    async deleteReviews(id: number){
        return ReviewsDAO.deleteReviews(id)
    }
}

export default new ReviewsService();