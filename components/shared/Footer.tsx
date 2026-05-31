export default function Footer() {
  return (
    <footer className="border-t mt-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold">MailBox</h2>

            <p className="text-sm text-base-content/70 mt-4">
              Support:
              <a
                href="mailto:support@mailbox.com"
                className="text-primary hover:underline"
              >
                support@mailbox.com
              </a>
            </p>
          </div>

          <div className="min-w-48">
            <h3 className="font-semibold mb-3">Resources</h3>

            <div className="flex flex-col gap-2 text-sm text-base-content/70">
              <a href="/how-it-works" className="hover:text-primary">
                How It Works
              </a>

              <a href="/terms" className="hover:text-primary">
                Terms
              </a>

              <a href="/privacy-policy" className="hover:text-primary">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-base-300 mt-8 pt-6 text-sm text-base-content/60">
          <p>&copy; 2026 MailBox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
