import MailBrowser from "@/components/dashboard/MailBrowser";
import { getMails } from "@/lib/api";

export default async function MailPage() {
  const mails = await getMails();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">My Mail</h1>

        <p className="text-base-content/70 mt-2">
          Manage and preview your mails.
        </p>
      </div>

      <MailBrowser mails={mails} />
    </div>
  );
}
