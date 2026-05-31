"use client";

import { useEffect, useState } from "react";
import { getMails } from "@/lib/api";

type Mail = {
  id: number;
  sender: string;
  subject: string;
  date: string;
  status: string;
  message: string;
  fileUrl: string;
};

export default function MailPage() {
  const [mails, setMails] = useState<Mail[]>([]);
  const [selectedMail, setSelectedMail] = useState<Mail | null>(null);

  useEffect(() => {
    async function loadMails() {
      const mailData = await getMails();
      setMails(mailData);
      setSelectedMail(mailData[0]);
    }

    loadMails();
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">My Mail</h1>

        <p className="text-base-content/70 mt-2">
          Manage and preview your mails.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Mail List */}
        <div className="card bg-base-100 shadow-md border border-base-300">
          <div className="card-body">
            <h2 className="text-2xl font-bold mb-4">Inbox</h2>

            <div className="space-y-4">
              {mails.map((mail) => (
                <button
                  type="button"
                  key={mail.id}
                  onClick={() => setSelectedMail(mail)}
                  className={`w-full text-left p-4 rounded-xl border border-base-300 hover:bg-base-200 transition ${
                    selectedMail?.id === mail.id ? "bg-base-200" : ""
                  }`}
                >
                  <div className="flex justify-between items-center gap-3">
                    <h3 className="font-bold">{mail.sender}</h3>

                    <span
                      className={`badge ${
                        mail.status === "Unread"
                          ? "badge-primary"
                          : "badge-ghost"
                      }`}
                    >
                      {mail.status}
                    </span>
                  </div>

                  <p className="mt-2">{mail.subject}</p>

                  <p className="text-sm opacity-70 mt-2">{mail.date}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mail Preview */}
        <div className="card bg-base-100 shadow-md border border-base-300">
          <div className="card-body">
            <h2 className="text-2xl font-bold">Mail Preview</h2>

            {selectedMail && (
              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-sm opacity-70">Sender</p>

                  <p className="font-semibold">{selectedMail.sender}</p>
                </div>

                <div>
                  <p className="text-sm opacity-70">Subject</p>

                  <p className="font-semibold">{selectedMail.subject}</p>
                </div>

                <div>
                  <p className="text-sm opacity-70">Message</p>

                  <p className="leading-7">{selectedMail.message}</p>
                </div>

                <a
                  href={selectedMail.fileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  View Mail
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
