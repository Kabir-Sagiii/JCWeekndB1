import { useReducer } from "react";

var initialData = {
  name: {
    first: "Kabir",
    last: "Sagar",
  },
  address: {
    office: {
      city: "Delhi",
    },
    home: {
      city: "Mumbai",
    },
  },
  email: "Kabir@gmail.com",
};
const fnReducer = (statedata, action) => {
  switch (action.type) {
    case "NAME":
      statedata = {
        ...statedata,
        name: action.payload,
      };
      break;

    case "CITY":
      statedata = {
        ...statedata,
        address: {
          ...statedata.address,
          home: {
            city: action.payload,
          },
        },
      };
      break;
    case "DEFAULTV":
      statedata = action.payload;
      break;
  }
  return statedata;
};

function UseReducer(props) {
  const [state, dispatch] = useReducer(fnReducer, initialData);

  const updateName = () => {
    dispatch({
      type: "NAME",
      payload: {
        first: "Zoya",
        last: "Khan",
      },
    });
  };

  const initialValue = () => {
    dispatch({
      type: "DEFAULTV",
      payload: initialData,
    });
  };

  const updateCity = () => {
    dispatch({
      type: "CITY",
      payload: "London",
    });
  };

  return (
    <div style={{ padding: "100px" }}>
      <h2>useReducer Concept</h2>
      <dl>
        <dt>
          <b>NAME</b>
        </dt>
        <dd>
          {state.name.first} {state.name.last}
        </dd>
        <dt>
          <b>City</b>
        </dt>
        <dd>{state.address.home.city}</dd>
        <dt>
          <b>Email</b>
        </dt>
        <dd>{state.email}</dd>
      </dl>
      <button onClick={updateName}>Update Name</button>&nbsp;&nbsp;&nbsp;
      <button onClick={updateCity}>Update City</button>&nbsp;&nbsp;&nbsp;
      <button>Update Email</button>&nbsp;&nbsp;&nbsp;
      <button onClick={initialValue}>Initial Value</button>
    </div>
  );
}

export default UseReducer;
