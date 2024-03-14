import useSecureAxios from "../../../UseProvider/UseSecureAxios/useSecureAxios";
import Heading from "../../../Sheard/Heading/Heading";
import useQueryUser from "../../../UseProvider/useQuery/useQuery";

const ManageUsers = () => {
  const [users, refetch] = useQueryUser();
  const axiosSecure = useSecureAxios();

  const MakeAdmin = async (id) => {
    // console.log(user);
    const role = { status: "Admin" };
    const res = await axiosSecure.put(`/users/${id}`, role);
    // console.log(res.data);
    if (res.data.modifiedCount > 0) {
      refetch();
    }
  };
  const MakeGuide = async (user) => {
    console.log(user);
    const role = { status: "Tour Guide" };
    const res = await axiosSecure.put(`/users/${user._id}`, role);
    // console.log(res.data);
    if (res.data.modifiedCount > 0) {
      refetch();
    }
  };

  return (
    <div className="w-5/6">
      <Heading heading={"All users"}></Heading>

      <div className="overflow-x-auto w-full">
        <table className="table">
          {/* head */}
          <thead className="text-2xl border-b-2 border-[#ffb300]">
            <tr className="text-center">
              <th>Sl no:</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, indx) => (
              <tr key={user._id} className="text-center">
                <th>{indx + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="text-center flex gap-4 justify-center">
                  {user.role === "Admin" || user.role === "Tour Guide" ? (
                    <>{user.role}</>
                  ) : (
                    <>
                      <button
                        onClick={() => MakeAdmin(user._id)}
                        className="btn btn-primary"
                      >
                        Make Admin
                      </button>
                      <button
                        onClick={() => MakeGuide(user)}
                        className="btn btn-success"
                      >
                        {" "}
                        Make Guide
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
