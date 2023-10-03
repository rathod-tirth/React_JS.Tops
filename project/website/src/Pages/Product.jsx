import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Product() {
   useEffect(() => { fetch() }, []);
   const [value, setValue] = useState([]);
   const fetch = async () => {
      try {
         const res = await axios.get(`http://localhost:3000/product`);
         setValue(res.data);
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <>
         <div className="container-fluid about py-5">
            <div className="container">
               <div className="section-title position-relative text-center mx-auto mb-5 pb-3" style={{ maxWidth: 600 }}>
                  <h2 className="text-primary font-secondary">Menu &amp; Pricing</h2>
                  <h1 className="display-4 text-uppercase">Explore Our Cakes</h1>
               </div>
               <div className="tab-class text-center">
                  <div className="tab-content">
                     <div className="tab-pane fade show p-0 active">
                        <div className="row g-3">
                           {value.map((val) => {
                              const { id, type, flavour, weight, price } = val;
                              return (
                                 <div className="col-lg-6" key={id}>
                                    <div className="d-flex h-100">
                                       <div className="flex-shrink-0">
                                          <img className="img-fluid" src="img/cake-1.jpg" alt="img" style={{ width: 150, height: 85 }} />
                                          <h4 className="bg-dark text-primary p-2 m-0">₹{price}</h4>
                                       </div>
                                       <div className="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4 w-50">
                                          <h5 className="text-uppercase">{type}</h5>
                                          <span>{flavour}</span>
                                          <span>{weight}</span>
                                       </div>
                                    </div>
                                 </div>
                              );
                           })}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
export default Product