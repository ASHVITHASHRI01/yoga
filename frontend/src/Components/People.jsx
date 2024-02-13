import './People.css'
import logoo from '../pics/logoo.png'
import ppl from '../pics/ppl.jpg'
const People = () => {
  return (
    <div className="back-container">
    <div className="people-container">
    <header>
      <div className="logo">
        <img src={logoo}></img>
      </div>
      

      <nav>
        <div className='home-book'> 
        <div className="dropdown">
            <button id="menuButton" className="dropbtn">Menu</button>
            <div className="dropdown-content">
            <a href="http://localhost:5173/dash">Home</a>
                <a href=" http://localhost:5173/academy">Academy</a>
                <a href=" http://localhost:5173/courses">Courses</a>
                <a href="http://localhost:5173/">LogOut</a>
            </div>
          </div>
         </div>
      </nav>
    </header>
    <div className='pbg'>
  <img src={ppl}></img>
</div>
<div className="container1">
          Container 1
        </div>
        <div className="container2">
          Container 2
        </div>
    </div>
    </div>
  )
}

export default People
