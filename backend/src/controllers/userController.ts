import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { LoginUserRequestBody, RegisterUserRequestBody } from '../types';

const prisma = new PrismaClient();

export const registerUser = async (req: Request, res: Response) => {
  const { email, username, password, mobileNumber, dob } : RegisterUserRequestBody = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
        mobileNumber,
        dob: new Date(dob), 
      },
    });

    res.status(201).json({
      message: 'User registered successfully',
      user,
    });
  } catch (error) {
    res.status(400).json({ error: 'User registration failed', details: error });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } : LoginUserRequestBody= req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
      expiresIn: '7d',
    });

    res.json({
      message: 'Login successful',
      token,
    });
  } catch (error) {
    res.status(500).json({ error: 'Login failed', details: error });
  }
};
