"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;
  const recipientEmail = "sean.myles.gray+test@gmail.com"; // Replace with your email address

  try {
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: [recipientEmail],
      subject: subject,
      replyTo: email,
      text: `Message from: ${email}\n\n${message}`,
    });
    console.log("data", data);
    if (error) {
      return { error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.log("error", error);
    return { error: "Failed to send email" };
  }
}
