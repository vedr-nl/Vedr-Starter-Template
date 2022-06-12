import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, email, message } = req.body;

  // Configure mailserver
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  // Configure mailbody
  try {
    const emailResponse = await transporter.sendMail({
      from: email,
      to: `${process.env.MAIL_USERNAME}`,
      subject: `Contactformulier: ${process.env.SITE_NAAM} van ${name}`,
      html: `<p>Je hebt een nieuwe inzending op je contactformulier</p>
            <p><strong>Naam: </strong>${name}</p>
            <p><strong>E-mail: </strong>${email}</p>
            <p><strong>Bericht: </strong>${message}</p>`,
    });
    res.status(200).json(req.body);
  } catch (error) {
    console.log(error);
  }
};
