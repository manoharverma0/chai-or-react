import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router';
function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState([]);

  // useEffect(()=>{
  //   fetch('https://api.github.com/users/hiteshchoudhary').then(response => response.json()).then(data => { setData(data) })
  // },[])
  return (
    <div className='text-3xl text-white bg-gray-600 m-4 p-4 text-center'>
      GitHub Followers : {data.followers} 
      {console.log(data)}
      <img width={300} src={data.avatar_url} alt="user image" />
    </div>
  )
 }

export default Github;
export const githubInfo = async () => {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json();
};