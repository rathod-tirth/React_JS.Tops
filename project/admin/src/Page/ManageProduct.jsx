import React, { useEffect, useState } from "react";
import axios from "axios";

function ManageProduct() {
  useEffect(() => { fetch() }, []);
  const [data, setData] = useState([]);

  const fetch = async () => {
    const res = await axios.get("http://localhost:3000/product");
    // console.log(res.data);
    setData(res.data);
  }

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:3000/user/${id}`);
    fetch();
    alert("Delete Success");
  }
  return (
    <div>
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-head-line">Stock Table</h1>
            </div>
          </div>
          {/* /. ROW  */}
          <div className="row">
            <div className="col-md-12">
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Type</th>
                          <th>Flavour</th>
                          <th>Weight</th>
                          <th>Price</th>
                          <th>Stock</th>
                          <th>Edit/Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          data.map((product) => {
                            const { id, type, flavour, weight, price, stock } = product;
                            return (
                              <tr key={id}>
                                <td>{id}</td>
                                <td>{type}</td>
                                <td>{flavour}</td>
                                <td>{weight}</td>
                                <td>{price}</td>
                                <td>{stock}</td>
                                <td>
                                  <button type="submit" className="btn btn-success">
                                    Edit
                                  </button>
                                  <button type="submit" className="btn btn-danger" onClick={() => deleteData(id)}>
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            );
                          })
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /. PAGE INNER  */}
      </div>
    </div>
  );
}

export default ManageProduct;
