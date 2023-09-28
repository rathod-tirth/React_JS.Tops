import React, { useEffect, useState } from "react";
import axios from "axios"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Profile() {
   useEffect(() => { fetch() }, [])

   const redirect = useNavigate();

   const [userValue, setUserValue] = useState({
      id: "",
      name: "",
      email: "",
      password: "",
      phone: ""
   });

   const fetch = async () => {
      try {
         const res = await axios.get(`http://localhost:3000/user/${localStorage.getItem("userId")}`);
         const data = res.data;
         setUserValue(data);
      } catch (error) {
         console.log(error);
      }
   };

   const { name, email, password, phone } = userValue;

   const [isEdit, setIsEdit] = useState(false);

   const [formValue, setFormValue] = useState({});

   const handleChange = (e) => {
      setFormValue({ ...formValue, [e.target.name]: e.target.value });
   };

   const validation = () => {
      let result = true;
      if (formValue.name === "") {
         toast.error('Name is required !');
         result = false;
      }
      if (formValue.email === "") {
         toast.error('Email is required !');
         result = false;
      }
      if (formValue.password === "") {
         toast.error('Password is required !');
         result = false;
      }
      if (formValue.phone === "") {
         toast.error('Mobile is required !');
         result = false;
      }
      return result;
   };

   const handleSave = async (e) => {
      try {
         e.preventDefault();
         if (validation()) {
            const res = await axios.patch(`http://localhost:3000/user/${localStorage.getItem("userId")}`, formValue);
            if (res.status === 200) {
               setFormValue({});
               setIsEdit(false);
               fetch();
               toast.success("Edit Saved");
            }
         }
      } catch (error) {
         console.log(error);
      }
   };

   const handleEdit = (e) => {
      e.preventDefault();
      setIsEdit(true);
   }

   const handleLogOut = (e) => {
      e.preventDefault();
      localStorage.removeItem("userId");
      toast.success("Logged Out");
      redirect("/");
   }

   return (
      <>
         <section className="pt-3 pb-5 mt-0 d-flex bg-dark">
            <div className="container-fluid">
               <div className="row justify-content-center align-items-center d-flex-row text-center h-100">
                  <div className="col-6">
                     <div className="card border border-dark">
                        <div className="card-body mx-auto">
                           <h4 className="card-title mt-3 mb-3 text-center">Profile</h4>
                           <form method="post">
                              <div className="form-group input-group mb-3">
                                 <div className="input-group-prepend">
                                    <span className="input-group-text p-3">
                                       <i className="fa fa-user" />
                                    </span>
                                 </div>
                                 {isEdit ? (
                                    <input name='name' className="form-control" placeholder="Name" type="text" onChange={(e) => handleChange(e)} />
                                 ) : (
                                    <input name='name' className="form-control" placeholder="Name" type="text" value={name} disabled />
                                 )}
                              </div>
                              <div className="form-group input-group mb-3">
                                 <div className="input-group-prepend">
                                    <span className="input-group-text p-3">
                                       <i className="fa fa-envelope" />
                                    </span>
                                 </div>
                                 {isEdit ? (
                                    <input name='email' className="form-control" placeholder="Email" type="email" onChange={(e) => handleChange(e)} />
                                 ) : (
                                    <input name='email' className="form-control" placeholder="Email address" type="email" value={email} disabled />
                                 )}
                              </div>
                              <div className="form-group input-group mb-3">
                                 <div className="input-group-prepend">
                                    <span className="input-group-text p-3">
                                       <i className="fa fa-lock" />
                                    </span>
                                 </div>
                                 {isEdit ? (
                                    <input name="password" className="form-control" placeholder="Password" type="password" onChange={(e) => handleChange(e)} />
                                 ) : (
                                    <input name="password" className="form-control" placeholder="Create password" type="password" value={password} disabled />
                                 )}
                              </div>
                              <div className="form-group input-group mb-3">
                                 <div className="input-group-prepend">
                                    <span className="input-group-text p-3">
                                       <i className="fa fa-mobile" />
                                    </span>
                                 </div>
                                 {isEdit ? (
                                    <input name="phone" className="form-control" placeholder="Phone" type="number" onChange={(e) => handleChange(e)} />
                                 ) : (
                                    <input name="phone" className="form-control" placeholder="Mobile" type="number" value={phone} disabled />
                                 )}
                              </div>
                              <div className="form-group mb-3">
                                 {isEdit ? (
                                    <button className="btn btn-primary btn-block" onClick={(e) => handleSave(e)}>
                                       Save
                                    </button>
                                 ) : (
                                    <button className="btn btn-primary btn-block" onClick={(e) => handleEdit(e)}>
                                       Edit
                                    </button>
                                 )}
                                 <button className="btn btn-primary btn-block ms-3" onClick={(e) => handleLogOut(e)}>
                                    Logout
                                 </button>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}
export default Profile;
