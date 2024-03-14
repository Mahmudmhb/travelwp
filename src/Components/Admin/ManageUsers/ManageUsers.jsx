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
    <div>
      <h1>this is manage users</h1>

      <Heading heading={"All users"}></Heading>
      <div className="w-5/6 mx-auto my-10 text-center">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Sl no:</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, indx) => (
                <tr key={user._id}>
                  <th>{indx + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "Admin" || user.role === "Tour Guide" ? (
                      <>{user.role}</>
                    ) : (
                      <>
                        <button
                          onClick={() => MakeAdmin(user._id)}
                          className="btn"
                        >
                          Make Admin
                        </button>
                        <button onClick={() => MakeGuide(user)} className="btn">
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
    </div>
  );
};

export default ManageUsers;
