"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { sendEmail } from "../actions/send-email";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-gray-50 p-4 border border-black rounded w-full md:w-2/5"
      type="submit"
      disabled={pending}
    >
      {pending ? "Sending..." : "Send Message"}
    </button>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<{ success?: boolean; error?: string }>(
    {}
  );

  async function handleSubmit(formData: FormData) {
    const result = await sendEmail(formData);
    setStatus(result);
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="">
        <form action={handleSubmit} className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              className="bg-gray-50 p-4 rounded-sm"
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="What's this about?"
              className="bg-gray-50 p-4 rounded-sm"
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message..."
              className="min-h-[100px] bg-gray-50 p-4 rounded-sm"
              required
            />
          </div>
          <SubmitButton />

          {status.error && (
            <div>
              <AlertCircle className="h-4 w-4" />
              <p>{status.error}</p>
            </div>
          )}

          {status.success && (
            <div className="bg-green-50 text-green-700 border-green-200">
              <CheckCircle2 className="h-4 w-4 text-green-700" />
              <p>Message sent successfully!</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
