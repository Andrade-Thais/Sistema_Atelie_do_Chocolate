import functions from "firebase-functions";
import admin from "firebase-admin";
import nodemailer from "nodemailer";

admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "projetointerdisciplinar2.fatec@gmail.com",
    pass: "priv roct vqfp wlin",
  },
});

export const enviarEmail = functions.firestore

    .onCreate(async (snapshot, context) => {
    const data = snapshot.data();

    const emailOptions = {
    from: "projetointerdisciplinar2.fatec@gmail.com",
        to: data.email,
        subject: 'Ateliê do Chocolate',
        text: 'Conteúdo do E-mail',
        };

        await transporter.sendMail(emailOptions);

        console.log('E-mail enviado com sucesso.');
        return null;
    });