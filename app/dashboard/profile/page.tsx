import { getCurrentUser } from "@/lib/api";

export default async function ProfilePage() {
  const user = await getCurrentUser();
  const initial = user.name[0]?.toUpperCase() ?? "U";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold">Profile Settings</h1>

        <p className="text-base-content/70 mt-2">
          Update your account information.
        </p>
      </div>

      <div className="card bg-base-100 shadow-md border border-base-300 max-w-2xl">
        <div className="card-body space-y-4">
          <div className="flex flex-col items-center">
            <div className="avatar placeholder">
              <div className="bg-primary text-primary-content rounded-full w-24 flex items-center justify-center">
                <span className="text-3xl">{initial}</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-4">{user.name}</h2>
          </div>

          <div>
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>

            <input
              type="text"
              defaultValue={user.name}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>

            <input
              type="email"
              defaultValue={user.email}
              className="input input-bordered w-full"
            />
          </div>

          <button className="btn btn-primary mt-4">Save Changes</button>
        </div>
      </div>
    </div>
  );
}
