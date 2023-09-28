import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function ManageProduct() {
  useEffect(() => { fetch() }, []);
  const [data, setData] = useState([]);

  const [value, setValue] = useState({
    "id": "",
    "type": "",
    "flavour": "",
    "weight": "",
    "price": "",
    "stock": ""
  });

  const { id, type, flavour, weight, price, stock } = value;

  const fetch = async () => {
    const res = await axios.get("http://localhost:3000/product");
    setData(res.data);
  }

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:3000/user/${id}`);
    toast.success("Product Deleted");
    fetch();
  }

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleEdit = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/product/${id}`);
      const data = res.data;
      console.log(data);
      setValue(data);

    } catch (error) {
      console.log(error);
    }
  };

  const validation = () => {
    let result = true;
    if (type === "") {
      toast.error('Type is required !');
      result = false;
    }
    if (flavour === "") {
      toast.error('flavour is required !');
      result = false;
    }
    if (weight === "") {
      toast.error('Weight is required !');
      result = false;
    }
    if (price === "") {
      toast.error('Price is required !');
      result = false;
    }
    if (stock === "") {
      toast.error('Stock is required !');
      result = false;
    }
    return result;
  };

  const handleSave = async () => {
    try {
      if (validation()) {
        const res = await axios.patch(`http://localhost:3000/product/${id}`, value);
        if (res.status === 200) {
          toast.success("Product Updated");
          fetch();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                                  <button type="submit" className="btn btn-success" data-toggle="modal" data-target="#myModal" onClick={() => { handleEdit(id) }}>
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
                    <div className="modal" id="myModal">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          {/* Modal Header */}
                          <div className="modal-header">
                            <h2 className="modal-title text-primary">Edit</h2>
                          </div>
                          {/* Modal body */}
                          <div class="modal-body">
                            <form action="/action_page.php">
                              <div className="form-group">
                                <label htmlFor="type">Type</label>
                                <input type="text" className="form-control" onChange={handleChange} name="type" value={type} />
                              </div>
                              <div className="form-group">
                                <label htmlFor="text">Flavour</label>
                                <input type="text" className="form-control" onChange={handleChange} name="flavour" value={flavour} />
                              </div>
                              <div className="form-group">
                                <label htmlFor="text">Weight</label>
                                <input type="text" className="form-control" onChange={handleChange} name="weight" value={weight} />
                              </div>
                              <div className="form-group">
                                <label htmlFor="text">Price</label>
                                <input type="text" className="form-control" onChange={handleChange} name="price" value={price} />
                              </div>
                              <div className="form-group">
                                <label htmlFor="text">Stock</label>
                                <input type="text" className="form-control" onChange={handleChange} name="stock" value={stock} />
                              </div>
                              <button type="submit" className="btn btn-primary" data-dismiss="modal" onClick={handleSave}>Save</button>
                            </form>
                          </div>
                          {/* Modal footer */}
                          <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
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
