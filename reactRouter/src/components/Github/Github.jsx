import { useState } from "react"
import { useEffect } from "react"


const Github = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/selftaughtprog')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setData(data);
        })
    }, [])
  return (
    <>
    <div className=' text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers : {data.followers}</div>
    <img src={data.avatar_url} width={200} />
    </>
  )
}

export default Github