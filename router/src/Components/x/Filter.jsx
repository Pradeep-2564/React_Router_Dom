import React, { useEffect, useState } from 'react'

const Filter = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [search, setSearch] = useState('');

    useEffect(()=>{
        const getData = async () => {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const newData = await response.json();
                setData(newData);
            }
            catch{
                setError('Fetch data fail');
            }
            finally{
                setLoading(false);
            }
        }
        getData();
    },[]);

    if(loading){
        return <p>Please wait data is loading..</p>
    }
    if(error){
        return <p> {error} </p>
    }

    const filtered = data.filter((data)=> data.name.toLowerCase().inclide(data.toLowerCase()));

  return (
    <div>
      <input type="text" placeholder='Search data' value={search} onChange={(e)=> setSearch(e.target.value)}/>
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {filtered.map((user, id)=>(
                <tr key={id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Filter
