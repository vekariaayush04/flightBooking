import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const bookFlight = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, flightId, status, paymentStatus, totalPrice } = req.body;


    const user = await prisma.user.findUnique({ where: { id: userId } });
    const flight = await prisma.flight.findUnique({ where: { flightId: flightId } });

    if (!user) {
      res.status(400).json({ error: 'User not found' });
      return;
    }

    if (!flight) {
      res.status(400).json({ error: 'Flight not found' });
      return;
    }


    if (flight.availableSeats <= 0) {
      res.status(400).json({ error: 'No available seats for this flight' });
      return;
    }


    const booking = await prisma.booking.create({
      data: {
        userId,
        flightId,
        status: status || 'booked',
        paymentStatus: paymentStatus || 'pending',
        totalPrice: totalPrice || flight.price, 
      },
    });

    
    await prisma.flight.update({
      where: { flightId: flightId },
      data: { availableSeats: flight.availableSeats - 1 },
    });

    

    res.status(201).json(booking);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};


export const getBookings = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.query;

    if (!userId) {
      res.status(400).json({ error: 'User ID is required' });
      return;
    }

    const bookings = await prisma.booking.findMany({
      where: { userId: parseInt(userId as string) },
      include: { flight: true }, 
    });

    res.status(200).json(bookings);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
