import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../../prisma/client';

export const registerUser = async (name: string, email: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });
};

export const loginUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid email or password');
  }
  const accessToken = jwt.sign({ userId: user.id, email: user.email }, process.env.ACCESS_TOKEN_SECRET as string, { expiresIn: '1h' });
  return accessToken;
};
