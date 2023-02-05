import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(400).send('HTTP method not available on this route');

  const transporter = nodemailer.createTransport({});
  console.log(req.body)

  res.status(200).json({ name: 'John Doe' })
}
