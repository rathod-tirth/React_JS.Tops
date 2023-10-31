import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteData, fetchUser } from "../userReducer";
import { toast } from "react-toastify";

function User() {
   const dispatch = useDispatch();

   const { allUser } = useSelector(state => state.user);

   useEffect(() => {
      dispatch(fetchUser("http://localhost:3000/user"));
   }, [allUser])

   const handleDelete = (id) => {
      dispatch(deleteData(`http://localhost:3000/user/${id}`));
      toast.success("Data Deleted!!");
   }

   return (
      <div className="m-5 pt-5">
         <table className="table table-bordered table-hover">
            <thead className="thead-dark">
               <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Mobile</th>
                  <th>Action</th>
               </tr>
            </thead>
            <tbody>
               {
                  allUser.map((val) => {
                     return (
                        <tr key={val.id}>
                           <td>{val.id}</td>
                           <td>{val.name}</td>
                           <td>{val.email}</td>
                           <td>{val.password}</td>
                           <td>{val.mobile}</td>
                           <td>
                              <button className="btn btn-success m-1">Edit</button>
                              <button className="btn btn-danger m-1" onClick={() => { handleDelete(val.id) }}>Delete</button>
                           </td>
                        </tr>
                     );
                  })
               }
            </tbody>
         </table>
      </div>
   )
}
export default User