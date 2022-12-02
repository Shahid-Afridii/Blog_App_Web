import React from 'react'
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import { Link } from 'react-router-dom'
import Menu from '../Components/Menu'
const SinglePost = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://media.istockphoto.com/id/1198931639/photo/writing-a-blog-blogger-influencer-reading-text-on-screen.jpg?s=612x612&w=0&k=20&c=4FJ_fzzZYqBoGG-RY8fcohpaOKKwnnI-ik58cPy6t-g=" alt="" />
        <div className="user">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1VTcdzIfHrD1mnqlyyYKPHFSOvDM4YCOVIA&usqp=CAU" alt="" />
          <div className="info">
            <span>Shahid Afridi</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
            <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos optio ipsa similique molestiae est, eveniet nulla voluptatum aut illum officiis sint. Provident, autem cupiditate adipisci sint cumque numquam vero fugit?
          Maiores quos provident nisi expedita, accusamus perferendis, quas praesentium, obcaecati?
         
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos optio ipsa similique molestiae est, eveniet nulla voluptatum aut illum officiis sint. Provident, autem cupiditate adipisci sint cumque numquam vero fugit?
          Maiores quos provident nisi expedita, accusamus perferendis, quas praesentium, obcaecati?
         
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos optio ipsa similique molestiae est, eveniet nulla voluptatum aut illum officiis sint. Provident, autem cupiditate adipisci sint cumque numquam vero fugit?
          Maiores quos provident nisi expedita, accusamus perferendis, quas praesentium, obcaecati?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos optio ipsa similique molestiae est, eveniet nulla voluptatum aut illum officiis sint. Provident, autem cupiditate adipisci sint cumque numquam vero fugit?
          Maiores quos provident nisi expedita, accusamus perferendis, quas praesentium, obcaecati?
        </p>
        <br />
        <br />
      </div>
      <Menu/>
    </div>
  )
}

export default SinglePost
