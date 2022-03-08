import nodemailer from "nodemailer";
import { config } from "dotenv";

config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.email,
    pass: process.env.pass,
  },
});

export const sendMail = async ({ emailTo, name }) => {
  let mailOptions = {
    from: process.env.email,
    to: emailTo,
    subject: `Congratulations ${name}!!`,
    context: {
      name: "Adarsh",
      company: "Fusion Store",
    },
  };

  transporter.sendMail(
    {
      ...mailOptions,
      html: `<div><h2>You've purchased item successfully</h2><br/><p> 
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
       ever since the 1500s, when an unknown printer took a galley of type
       and scrambled it to make a type specimen book. It has survived not only five centuries,
       but also the leap into electronic typesetting, remaining essentially unchanged.
       It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p> 
       <img src='cid:onboarding_image' height="100" width="100" alt=''/> </div>`,
      attachments: [
        {
          filename: "git-cheat-sheet.pdf",
          path: `./assets/git-cheat-sheet-education.pdf`,
        },
        {
          filename: "onboarding_image.jpg",
          path: `./assets/onboarding_image.jpg`,
          cid: "onboarding_image",
        },
      ],
    },
    (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log("mail sent");
        console.log(info);
      }
    }
  );
};
