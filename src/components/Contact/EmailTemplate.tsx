import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
  subject?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  phoneNumber,
  message,
  subject,
}) => (
  <div className="flex w-full items-center justify-center">
    <div className="mx-auto w-full max-w-[500px] rounded-sm bg-gray-50 ">
      <h1 className="text-lg !text-[#ea4054]">El_Maher 😀💻</h1>
      <br />
      <h2>Message from {fullName}.</h2>

      <hr />
      {subject && (
        <>
          <h2>Subject:</h2>
          <p>{subject}</p>
        </>
      )}
      <p>Message:</p>
      <p>{message}</p>
      <hr />
      <h2>Sender Info:</h2>
      <p>
        <strong>Full Name:</strong> {fullName}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Phone Number:</strong> {phoneNumber}
      </p>
    </div>
  </div>
);
