import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { usersAction } from "../Redux/myaction";
import { useDispatch, useSelector } from "react-redux";

function List(props) {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const usersdata = useSelector((storedata) => {
    return storedata.myReducer.users;
  });

  useEffect(() => {
    if (usersdata.length === 0) {
      getData();
    } else {
      setData(usersdata);
    }
  }, []);

  var style = {
    padding: "40px",
  };
  var table = {
    width: "90%",
    margin: "50px auto",
    boxShadow: "0 0 30px green",
    padding: "50px",
  };

  const getData = () => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((userData) => {
        console.log(userData.results);
        setData(userData.results);
        usersAction(userData.results, dispatch);
      });
  };

  const storeData = () => {
    sessionStorage.setItem("name", "Kabir");
  };

  const deleteData = () => {
    sessionStorage.removeItem("name");
  };

  return (
    <div style={style}>
      <h2>User Details</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, magnam
        pariatur quas est sit beatae obcaecati, sunt nostrum asperiores placeat
        repudiandae nam fugit reiciendis culpa quo molestiae ut porro maxime
        dolorum eum? Tenetur deleniti iste magni omnis iure! Voluptate velit
        repellat itaque dolores quasi nemo vitae numquam odit? Officiis
        cupiditate dolorum iusto autem labore facere eaque repellat
        necessitatibus, hic accusamus! Qui, voluptatibus facilis, dolores cum ab
        accusantium alias deserunt quaerat voluptate veritatis nemo, omnis harum
        cupiditate. Aperiam autem impedit corporis? Animi vel, harum delectus ab
        corrupti possimus neque asperiores temporibus natus quos deserunt nam
        sequi assumenda, odio hic, blanditiis repellat!
      </p>
      <button onClick={getData}>Show Data</button>&nbsp;&nbsp;
      <button
        onClick={() => {
          setData([]);
        }}
      >
        Hide Data
      </button>
      <button onClick={storeData}>Store Data in Session Storage</button>
      <button onClick={deleteData}>Delete Data in Session Storage</button>
      {data.length > 0 ? (
        <table style={table}>
          <tr>
            <th>IMAGE</th>
            <th>NAME</th>
            <th>GENDER</th>
            <th>EMAIL</th>
            <th>Action</th>
          </tr>

          {data.map((ele, index) => {
            return (
              <tr align="center" key={index + 100}>
                <td>
                  <img src={ele.picture.medium} width="70" height="70" />
                </td>
                <td>{ele.name.first}</td>
                <td>{ele.gender}</td>
                <td>{ele.email}</td>
                <td>
                  <Link to="/details">
                    <button>Details</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </table>
      ) : (
        <div>
          <h2 style={{ color: "red", marginTop: "50px", textAlign: "center" }}>
            No Data
          </h2>
        </div>
      )}
    </div>
  );
}

export default List;
