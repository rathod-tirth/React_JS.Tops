function Login() {
   return (
      <div>
         <div className="w3-container w3-padding-32" id="contact">
            <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Login</h3>
            <form target="_blank">
               <input className="w3-input w3-border" type="text" placeholder="Name" required name="Name" />
               <input className="w3-input w3-section w3-border" type="email" placeholder="Email" required name="Email" />
               <input className="w3-input w3-section w3-border" type="password" placeholder="Password" required name="password" />
               <input className="w3-input w3-section w3-border" type="number" placeholder="Mobile" required name="mobile" />
               <button className="w3-button w3-black w3-section" type="submit">
                  <i className="fa fa-paper-plane" /> LOGIN
               </button>
            </form>
         </div>
      </div>
   )
}
export default Login