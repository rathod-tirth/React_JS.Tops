import React, { useEffect, useState } from 'react'
import axios from "axios"
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom'

function EditUser() {
   const redirect = useNavigate();

   useEffect(() => { fetch() }, []);

   const { id } = useParams();

   const [formValue, setFormValue] = useState({
      id: "",
      name: "",
      email: "",
      password: "",
      phone: ""
   });

   const { name, email, password, phone } = formValue;

   const fetch = async () => {
      const res = await axios.get(`http://localhost:3000/user/${id}`);
      setFormValue(res.data);
   }

   const validation = () => {
      let result = true;
      if (name === "") {
         toast.error('Name is required !');
         result = false;
      }
      if (email === "") {
         toast.error('Email is required !');
         result = false;
      }
      if (password === "") {
         toast.error('Password is required !');
         result = false;
      }
      if (phone === "") {
         toast.error('Phone is required !');
         result = false;
      }
      return result;
   };

   const changeValue = (e) => {
      setFormValue({ ...formValue, [e.target.name]: e.target.value });
   };

   const submitValue = async (e) => {
      try {
         e.preventDefault();
         if (validation()) {
            const res = await axios.patch(`http://localhost:3000/user/${id}`, formValue);
            if (res.status === 200) {
               setFormValue({});
               toast.success("Edit Saved");
               redirect("/manageUser");
            }
         }
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <div>
         <div id='wrapper'>
            <div id="page-wrapper">
               <div id="page-inner">
                  <div className="row">
                     <div className="col-md-12">
                        <h1 className="page-head-line">Edit User</h1>
                     </div>
                  </div>
                  {/* /. ROW  */}
                  <div className="row">
                     <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="panel panel-info">
                           <div className="panel-heading">
                              Edit User
                           </div>
                           <div className="panel-body">
                              <form>
                                 <div className="form-group">
                                    <label>Name</label>
                                    <input className="form-control" type="text" name='name' value={name} onChange={changeValue} />
                                 </div>
                                 <div className="form-group">
                                    <label>Email</label>
                                    <input className="form-control" type="email" name='email' value={email} onChange={changeValue} />
                                 </div>
                                 <div className="form-group">
                                    <label>Password</label>
                                    <input className="form-control" type="password" name='password' value={password} onChange={changeValue} />
                                 </div>
                                 <div className="form-group">
                                    <label>Phone</label>
                                    <input className="form-control" type="nubmer" name='phone' value={phone} onChange={changeValue} />
                                 </div>
                                 <button type="submit" className="btn btn-info" onClick={submitValue} >Save</button>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               {/* /. PAGE INNER  */}
            </div>
         </div>
      </div>
   )
}
export default EditUser