import './list.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Datatable from '../../components/datatable/Datatable'
import axios from 'axios'
import { useState,useEffect } from 'react'
function List() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/users" )
      setUsers(res.data)
    }
    fetchPosts()
  }, [])
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar />
        <Datatable/>
      </div>
    </div>
  )
}

export default List