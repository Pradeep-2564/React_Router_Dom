import React, { useEffect, useState } from 'react'
import './About.css'


const About = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(()=> {
    const getData = async () => {
      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const newData = await response.json();
        setData(newData);
      }
      catch{
        setError('Fetching data is Error')
      }
      finally{
        setLoading(false);
      }
    }
    getData();
  },[])

  if(loading) {
    return(
      <p id='load'>Please wait data is loading...</p>
    )
  }
  if(error){
    return(
      <p id='error'> { error } </p>
    )
  }

  return (
    <div>
      <table>
        <caption>Fetching data</caption>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          { data.map((info, id)=>(
            <tr key={id}>
              <td>{ info.id }</td>
              <td>{ info.name }</td>
              <td>{ info.email }</td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  )
}

export default About
