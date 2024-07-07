import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { FlightData } from '../types';

const prisma = new PrismaClient();

export const addFlight = async (req: Request, res: Response): Promise<void> => {
  try {
    const { flightNumber, flightName, price, arrival, arrivalTime, departure, departureTime, time, distance, availableSeats }: FlightData = req.body;

    const newFlight = await prisma.flight.create({
      data: {
        flightNumber,
        flightName,
        price,
        arrival,
        arrivalTime: new Date(`${arrivalTime}T00:00:00Z`), 
        departure,
        departureTime: new Date(`${departureTime}T00:00:00Z`), 
        time: new Date(`${time}T00:00:00Z`), 
        distance,
        availableSeats,
      },
    });

    res.status(201).json({
      message: 'flight added successfully',
      newFlight
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getFlights = async (req: Request, res: Response): Promise<void> => {
  try {
    const flights = await prisma.flight.findMany();
    res.status(200).json(flights);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
