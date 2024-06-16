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
        arrivalTime: new Date(arrivalTime), 
        departure,
        departureTime: new Date(departureTime), 
        time: new Date(time), 
        distance,
        availableSeats,
      },
    });
    res.status(201).json(newFlight);
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
