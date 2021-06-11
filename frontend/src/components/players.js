import React , {useState,useEffect} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './css/players.css'; 
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { listPlayers } from '../actions/playerActions';


function Players(props){
  
  const playerList = useSelector(state=>state.playerList);
  const {players , loading , error} = playerList;
  const dispatch = useDispatch();
  useEffect(()=>{
   
    dispatch(listPlayers());
    return ()=>{
      //
    };
  },[] )
  var w = window.innerWidth;
   return loading ? <div>Loading</div> :
   error ? <div>{error}</div> :
   <div class='container-fluid'>  
    
    <div className="row title" style={{marginBottom: "20px"}} >        
    <h3 className="info" >Our First team squad</h3>   
</div>  

  <OwlCarousel items={w < 510 ? 2 : 3}
    className="owl-theme"  
    loop  
    nav  
    autoplay={true}
    >
    {players.map((player)=>(
       <div className="item">
       <figure>
         <img className="img" src={player.src}/>
         <figcaption className="caption">{player.name}</figcaption>
       </figure>
     </div>
    ))}
    </OwlCarousel>
    </div>  
  
}
export default Players;

/*const [items, setItems] = useState(3);
  <div><figure><img className='img' src='https://th.bing.com/th/id/OIP.G8SyHD3nnVbN0aAaWZJjhwHaEy?pid=ImgDet&rs=1' alt="Trulli" />
    <figcaption className="caption">Leonel Messi</figcaption>
    </figure> </div> 
     


     <div><figure><img className='img' src='https://th.bing.com/th/id/Rbbd058dba02db18ef7e6e1d3dc285d42?rik=cgmnmioxNsvvKQ&pid=ImgRaw' alt="Trulli" />
    <figcaption className="caption">Riqui Puig</figcaption>
    </figure> </div> 
    <div><figure><img className='img' src='https://th.bing.com/th/id/OIP.8F5OTwchPWvX3QthJimfiwHaEK?pid=ImgDet&rs=1' alt="Trulli" />
    <figcaption className="caption">Gerard Pique</figcaption>
    </figure> </div> 
    <div><figure><img className='img' src='https://img.okezone.com/content/2021/06/01/46/2418257/intip-perkenalan-sergio-aguero-sebagai-pemain-barcelona-di-camp-nou-kM4FFO2iLn.JPG' alt="Trulli" />
    <figcaption className="caption">Sergio Aguero</figcaption>
    </figure> </div> 
    <div><figure><img className='img' src='https://th.bing.com/th/id/Rc65d2830a613386fa2589ed5abd9bf91?rik=LfRB7jcrpKEaxA&pid=ImgRaw' alt="Trulli" />
    <figcaption className="caption">Ousmane Dembele</figcaption>
    </figure> </div> 
    <div><figure><img className='img' src='https://th.bing.com/th/id/R7413a8b9d7669cb101080ecf4e6a9e42?rik=7q8UunzYgGhxRw&pid=ImgRaw' alt="Trulli" />
    <figcaption className="caption">Pedri</figcaption>
    </figure> </div> 
    <div><figure><img className='img' src='https://th.bing.com/th/id/OIP.1SYpkErlphWYg0lZgnJr0AHaE8?pid=ImgDet&rs=1' alt="Trulli" />
    <figcaption className="caption">Sergio Busquets</figcaption>
    </figure> </div> 
    <div><figure><img className='img' src='https://th.bing.com/th/id/OIP.G8SyHD3nnVbN0aAaWZJjhwHaEy?pid=ImgDet&rs=1' alt="Trulli" />
    <figcaption className="caption">Lionel Messi</figcaption>
    </figure> </div> 
    <div><figure><img className='img' src='https://th.bing.com/th/id/OIP.G8SyHD3nnVbN0aAaWZJjhwHaEy?pid=ImgDet&rs=1' alt="Trulli" />
    <figcaption className="caption">Lionel Messi</figcaption>
    </figure> </div> 
    <div><figure><img className='img' src='https://th.bing.com/th/id/OIP.G8SyHD3nnVbN0aAaWZJjhwHaEy?pid=ImgDet&rs=1' alt="Trulli" />
    <figcaption className="caption">Lionel Messi</figcaption>
    </figure> </div> 
    <div><figure><img className='img' src='https://th.bing.com/th/id/OIP.G8SyHD3nnVbN0aAaWZJjhwHaEy?pid=ImgDet&rs=1' alt="Trulli" />
    <figcaption className="caption">Lionel Messi</figcaption>
    </figure> </div> 
*/
/*import React from 'react';
import { Button, UncontrolledCarousel } from 'reactstrap';
import './players.css';


function Players(){
    const items = [
        {
          src : 'images/ucl.jpg',
          altText: 'Slide 1',
          caption: 'Slide 1',
          header: 'Slide 1 Header',
          key: '1'
        },
        {
            src : 'images/laliga.jpg',
          altText: 'Slide 2',
          caption: 'Slide 2',
          header: 'Slide 2 Header',
          key: '2'
        },
        {
          src : 'images/ucl.jpg',
          altText: 'Slide 3',
          caption: 'Slide 3',
          header: 'Slide 3 Header',
          key: '3'
        }
      ];      
    return (
    <div className="players">
      <h1>Here is our First Team</h1>
        <UncontrolledCarousel items={items}/>
    </div>
    )
}
    
*/

/*
important code
  
const [players1 ,setPlayers] = useState([]);
useEffect(()=>{
  const fetchData1 = async ()=>{
    const { data } =  await axios.get('/api/players');
    setPlayers(data);
  }
  fetchData1();
  return ()=>{
    //
  };
} ,[])
  var w = window.innerWidth;


  return ( 
  <div class='container-fluid'>  
    <div className='container-fluid' >      
     <div className="row title" style={{marginBottom: "20px"}} >        
     <h3 className="info" >Our First team squad</h3>  
     </div>  
 </div>  
 <div className='container-fluid' >            
  <OwlCarousel 
    items={w < 510 ? 2 : 3}
    className="owl-theme"  
    loop  
    nav  
    margin={15} > 
    {players1.map((player)=>(
      <div>
        <figure>
          <img className="img" src={player.src} /> 
          <figcaption className="caption">{player.name}</figcaption>  
        </figure>
      </div>
    ))}
</OwlCarousel>  
</div>  

</div>  
  )


*/

/* here we go again
  <OwlCarousel 
    items={w < 510 ? 2 : 3}
    className="owl-theme"  
    loop  
    nav  
    margin={15} > 

    </OwlCarousel> 


   
*/