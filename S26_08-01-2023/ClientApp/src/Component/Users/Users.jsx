import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom'

function Users(props) {
    const [users,setUsers] = useState([])


      useEffect(()=>{
         getData()
      },[])
      
      const getData = ()=>{
           fetch("http://localhost:5001/users/userdata")
           .then((res)=>res.json()).then((data)=>{
            console.log(data)
            setUsers(data.results)
           }).catch((err)=>{
            alert("Erro while getting the data")
            console.log(err)
           })
      }




      const deleteData = (id)=>{
          fetch(`http://localhost:5001/users/delete/${id}`,{
            method:'DELETE',
           
          }).then((res)=> res.json())
          .then((data)=>{
            alert("Deleted Record Successfully")
            getData()
          }).catch(()=>{
            alert("Failed to delete User")
          })
      }



    return (
        <div style={{padding:"50px"}}>
              <h2>Users Informations</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Earum obcaecati illo labore necessitatibus suscipit error 
                quam blanditiis iste, dicta maxime aperiam laborum architecto dolores doloribus!
                 Vero illo explicabo commodi, atque consectetur officiis expedita. Optio tenetur debitis quae harum recusandae sequi error earum quisquam saepe, perferendis distinctio est eius. Eligendi officia doloremque quidem laboriosam, repudiandae minima rerum dolore non ullam? Explicabo nemo, repellendus necessitatibus eveniet, officia dolor dolore animi, suscipit earum illo et ipsam iste debitis! Placeat laboriosam nostrum, dolorum in sunt dolore officia quisquam fuga culpa consequuntur saepe veniam aliquid rerum necessitatibus beatae minus iure quo? Itaque ea cum cumque praesentium eius? Adipisci officiis voluptatem quos neque numquam quod autem nobis voluptatum tempora aperiam delectus molestiae illo debitis repellendus eaque amet cumque temporibus, aspernatur assumenda! Libero, nostrum. Accusantium corporis repellendus illo molestias possimus laboriosam molestiae, animi fugiat culpa. Quasi, tempore sapiente quaerat consectetur ab iusto delectus nam adipisci laudantium, omnis velit officiis! Delectus itaque vero maiores officia. Cum distinctio labore exercitationem quo voluptatibus odit suscipit deserunt porro maxime facere, doloribus natus reiciendis? Earum necessitatibus blanditiis cumque, impedit ad sint atque odio? Et, ipsa mollitia, sunt adipisci dolorum nemo quisquam, debitis fugiat sapiente harum numquam saepe voluptates cum recusandae libero aliquam?</p>
              {/* <button onClick={latestData}>Users</button> */}
           {
              users.length > 0 ? <table cellPadding={10} style={{width:"80%",margin:"50px auto",boxShadow:"0 0 10px green",padding:"20px"}}>
                <thead style={{backgroundColor:"black",color:"white"}} >
                    <tr>
                        
                        <th>NAME</th>
                        <th>GENDER</th>
                        <th>EMAIL</th>
                        <th>CITY</th>
                        <th colSpan={3}>ACTIONS</th>
                    </tr>
                </thead>

                <tbody align="center">
                       {
                        users.map((ele,index)=>{
                            return <tr>
                                 
                                 <td>
                                    {ele.name}
                                 </td>
                                 <td>
                                    {ele.gender}
                                 </td>
                                  <td>
                                    {
                                        ele.email
                                    }
                                 </td>
                                  <td>
                                    {
                                        ele.city
                                    }
                                 </td>
                                 <td>
                                  <Link to={`/userdetails/${ele._id}`}><button>Details</button></Link>
                                 </td>
                                 <td>
                                    <Link to={`/updateuser/${ele._id}`}><button>Edit</button></Link>
                                 </td>
                                 <td>
                                    <button onClick={()=>{deleteData(ele._id)}}>Delete</button>
                                 </td>
                            </tr>
                        })
                       }
                </tbody>
              </table>   : <div style={{marginTop:"100px",textAlign:"center",color:"red"}}> <h1>No Data</h1> </div>

           }

        </div>
    );
}

export default Users;