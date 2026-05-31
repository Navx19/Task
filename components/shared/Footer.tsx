export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center">
        <p className="text-sm text-gray-500">
          For support, contact us at{" "}
          <a
            href="mailto:support@mailbox.com"
            className="text-blue-500 hover:underline"
          >
            support@mailbox.com
          </a>
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-6 text-center">
        <p>&copy; 2026 MailBox. All rights reserved.</p>
      </div>
    </footer>
  );
}
