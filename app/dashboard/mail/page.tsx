import { mails } from "@/data/mails";

export default function MailPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">My Mail</h1>

        <p className="text-base-content/70 mt-2">
          Manage and preview your mails.
        </p>
      </div>

      {/* Mail Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Mail List */}
        <div className="card bg-base-100 shadow-md border border-base-300">
          <div className="card-body">
            <h2 className="text-2xl font-bold mb-4">Inbox</h2>

            <div className="space-y-4">
              {mails.map((mail) => (
                <div
                  key={mail.id}
                  className="p-4 rounded-xl border border-base-300 hover:bg-base-200 transition cursor-pointer"
                >
                  <div className="flex justify-between items-center">
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
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mail Preview */}
        <div className="card bg-base-100 shadow-md border border-base-300">
          <div className="card-body">
            <h2 className="text-2xl font-bold">Mail Preview</h2>

            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm opacity-70">Sender</p>

                <p className="font-semibold">Amazon</p>
              </div>

              <div>
                <p className="text-sm opacity-70">Subject</p>

                <p className="font-semibold">Your package has arrived</p>
              </div>

              <div>
                <p className="text-sm opacity-70">Message</p>

                <p className="leading-7">
                  Hello user, your package has been delivered successfully to
                  your registered mailbox address.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
