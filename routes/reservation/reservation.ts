import express from 'express';
import ReservationController from '../../controller/ReservationController';

export const reservationRouter = express.Router();

reservationRouter.get('/get-reservation', ReservationController.getReservation);
reservationRouter.post('/create-reservation', ReservationController.createReservation);
reservationRouter.put('/update-reservation', ReservationController.updateReservation);
reservationRouter.delete('/delete-reservation', ReservationController.deleteReservation);