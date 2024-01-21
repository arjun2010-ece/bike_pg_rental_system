import './Home.css';
import {Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <main className='main'>
       <div className="head">
         <h1>"Dream Rides & CozyStays:Unleash your journeys with Us!"</h1>
       </div>

       <div className="para">
         <p>"DreamRides & CozyStays" is your all-encompassing solution for an unparalleled travel experience. We bring together the thrill of exploration and the comfort of a home away from home, ensuring that every journey becomes an unforgettable adventure.</p>
       </div>

       <div className="btn">
         <ul>
           <li>
             <button><Link to='./pg'>PG Rental</Link></button>
           </li>

           <li>
              <button><Link to='./bike'>Bike Rental</Link></button>
           </li>



         </ul>
       </div>
      {/* <img src="/man.jpg" alt="image title" width={400}  height={500} /> */}
    </main>
  );
};

export default HomePage;
