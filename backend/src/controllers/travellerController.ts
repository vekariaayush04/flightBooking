import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export const addTraveller = async (req: Request, res: Response): Promise<void> => {
  try {
    const { fullname, mobileNumber, age, address, userId } = req.body;

    const newTraveller = await prisma.traveller.create({
      data: {
        fullname,
        mobileNumber,
        age,
        userId,
        address: {
          create: {
            street: address.street,
            zipcode: address.zipcode,
            state: address.state,
            country: address.country,
          },
        },
      },
    });

    res.status(201).json(newTraveller);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};


export const getTravellers = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.query;
    const travellers = await prisma.traveller.findMany({
      where: { userId: parseInt(userId as string) },
      include: { address: true },
    });
    res.status(200).json(travellers);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
