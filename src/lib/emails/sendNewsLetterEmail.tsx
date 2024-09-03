import { NewsLetter } from "@/types";
import { transporter } from "./transporter";

export const sendNewsLetterEmail = async ({ email }: NewsLetter) => {
  try {
    const info = await transporter.sendMail({
      from: email,
      to: process.env.APP_EMAIL,
      subject: "News Letter",
      text: "New user subscribed to thedigitalcoaching",
      // html: "<b>Hello world?</b>",
    });
    return { messageId: info?.messageId };
  } catch (error) {
    throw new Error(error);
  }
};
