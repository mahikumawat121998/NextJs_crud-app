import React, { useState, useEffect } from "react";
import {
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Button,
  Alert,
  AlertProps,
   
} from "react-bootstrap";
import BorderColorIcon from "@material-ui/icons/BorderColor";
// import ModeIcon from '@mui/icons-material/Mode';
// import BorderColorIcon from '@mui/icons-material/BorderColor';

//  Here we are fetching data from localStorage

const Todo = () => {
  // const getLocalItmes = () => {
  //   let list = localStorage.getItem("lists");
  //   console.log("lists",list);

  //   if (list) {
  //     return JSON.parse(localStorage.getItem("lists"));
  //   } else {
  //     return [];
  //   }
  // };
  // console.log("lists",  getLocalItmes())

  const [togleSubmit, settogleSubmit] = useState(true);
  const [inputData, setInputData] = useState("");

  const [Item, setItem] = useState([]);
  const [isEditable, setisEditable] = useState();
  // const AllInputData = {
  //   id: new Date().getTime().toLocaleString(),
  //   name: inputData,
  // };

  const addItem = (e) => {
    e.preventDefault;

    if (!inputData) {
       return(
        alert("fill up the input section")
       )
    } else if (inputData && !togleSubmit) {
      setItem(
        Item.map((elem) => {
          if (elem.id === isEditable) {
            return { ...elem, name: inputData };
          }
          return elem;
        })
      );
      settogleSubmit(true)
    } else {
      const AllInputData = {
        id: new Date().getTime().toLocaleString(),
        name: inputData,
      };
      setItem([...Item, AllInputData]);
      setInputData("");
      
    }
    // const AllInputData = { id: new Date().getTime().toLocaleString(), name:inputData};
    // console.log(Item);
    // console.log("Mahilex", AllInputData);
  };

  const deleteItem = (index) => {
    // console.log("My Id", id);
    const UpdatedData = Item.filter((elem) => {
      return index !== elem.id;
    });
    setItem(UpdatedData);
  };

  const editItem = (index) => {
    const editableItem = Item.find((elem) => {
      return elem.id === index;
    });
    setInputData(editableItem.name);
    setisEditable(index);
    settogleSubmit(false);
  };

  const RemoveAllData = () => {
    setItem([]);
  };
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(Item));
  }, [Item]);

  return (
    <div>
      <div className="container">
        <div className="row" style={{ marginTop: "60px" }}>
          <div class="col-sm-12">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Your Data</Form.Label>
                <div style={{ display: "flex", position: "relative" }}>
                  <Form.Control
                    type="text"
                    placeholder=" Write something"
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                  />
                </div>
                <Form.Text className="text-muted">Enter your Data</Form.Text>
              </Form.Group>
              {togleSubmit ? (
                <Button variant="primary" type="button" onClick={addItem}>
                  Submit
                </Button>
              ) : (
                <Button variant="primary" type="button" onClick={addItem}>
                  Edit Item
                </Button>
              )}

              <Button
                style={{ marginLeft: "6px" }}
                variant="danger"
                type="button"
                onClick={RemoveAllData}
              >
                Remove All Data
              </Button>
            </Form>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Number</th>
                <th scope="col">User Data</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {Item.map((Value, Index) => {
                console.log("Value , Index", Value, Index);

                return (
                  <tr key={Value.id}>
                    <th scope="row">{Index + 1}</th>
                    <td>{Value.name}</td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => editItem(Value.id)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteItem(Value.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Todo;
