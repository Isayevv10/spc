import type { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const { from, subject, message, number, uname } = data;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        user: "isaevallahverdi@gmail.com",
        pass: "rltj qjlp qhcy tmny",
      },
    });

    const mailOptions = {
      from,
      to: "elvin.bekirov@spcgroup.az",
      subject,
      html: `<div><p>Name: ${uname}</p>
                  <p>Number: ${number}</p>
                  <p>Message: ${message}</p>
            </div>`,
    };

    const info = await transporter.sendMail(mailOptions);

    // res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    // res.status(500).json({ success: false, error: "Internal Server Error" });
  }

  return NextResponse.json(data);
}
