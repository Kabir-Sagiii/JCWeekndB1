import { useState } from "react";

function List(props) {
  const [data, setData] = useState([]);

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
      });
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
      {data.length > 0 ? (
        <table style={table}>
          <tr>
            <th>IMAGE</th>
            <th>NAME</th>
            <th>GENDER</th>
            <th>EMAIL</th>
          </tr>

          {data.map((ele) => {
            return (
              <tr align="center">
                <td>
                  <img src={ele.picture.medium} width="70" height="70" />
                </td>
                <td>{ele.name.first}</td>
                <td>{ele.gender}</td>
                <td>{ele.email}</td>
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
