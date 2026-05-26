export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold">
          Profile Settings
        </h1>

        <p className="text-base-content/70 mt-2">
          Update your account information.
        </p>
      </div>

      <div className="card bg-base-100 shadow-md border border-base-300 max-w-2xl">
        <div className="card-body space-y-4">
          <div className="flex flex-col items-center">
            <div className="avatar placeholder">
              <div className="bg-primary text-primary-content rounded-full w-24">
                <span className="text-3xl">
                  N
                </span>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-4">
              Naiyer Nur Fairoz
            </h2>
          </div>

          <div>
            <label className="label">
              <span className="label-text">
                Full Name
              </span>
            </label>

            <input
              type="text"
              value="Naiyer Nur Fairoz"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">
                Email
              </span>
            </label>

            <input
              type="email"
              value="nava@example.com"
              className="input input-bordered w-full"
            />
          </div>

          <button className="btn btn-primary mt-4">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
