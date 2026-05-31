export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold">Contact Us</h1>

        <p className="mt-4 opacity-70">
          Have any questions? Reach out anytime.
        </p>
      </div>

      <div className="card bg-base-100 shadow-xl border border-base-300">
        <div className="card-body space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
          />

          <textarea
            className="textarea textarea-bordered h-40"
            placeholder="Your Message"
          ></textarea>

          <button className="btn btn-primary">Send Message</button>
        </div>
      </div>
    </div>
  );
}
