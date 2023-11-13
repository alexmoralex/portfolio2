import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const { EMAIL_SERVICE, EMAIL_USERNAME, EMAIL_PASSWORD, EMAIL_TO } = process.env;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(400).send("HTTP method not available on this route");

  const {
    email = EMAIL_USERNAME,
    name = "",
    subject = "",
    message = "",
  } = req.body;

  const transporter = nodemailer.createTransport({
    service: EMAIL_SERVICE,
    auth: {
      user: EMAIL_USERNAME,
      pass: EMAIL_PASSWORD,
    },
  });

  const options = {
    from: `"${name}" <${EMAIL_USERNAME}>`,
    to: EMAIL_TO,
    subject: "Portfolio Contact Form",
    text: `${name} ${email} - ${subject} - ${message}`,
    html: `<p>${name} <a href="mailto:${email}">${email}</a></p><p><b>${subject}</b></p><p>${message}</p>`,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(options, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });

  res.status(200).json({ info: "sent" });
}
