 
import abhayImg from './../abhayImg.jpg';
export function Basic() {
    return (
      <>

      <nav>
        <div className="navleft item"><a href="/">Abhay Kuamr Singh</a></div> 
        <div className="navright item">

            <div className="home navlinks"><a href="home">home</a> </div>
            <div className="about navlinks"><a href="about">about</a> </div>
            <div className="Projects navlinks"><a href="Projects">Projects</a> </div>
            <div className="Insta navlinks"><a href="Insta">Insta</a> </div>
            <div className="Facebook navlinks"><a href="Facebook">Facebook</a> </div>
            <div className="Youtube navlinks"><a href="Youtube">Youtube</a> </div>
        </div>

      </nav>
      

        <section className="details">

        <div className="detailsleft">
            <h1>details</h1>
            <h4>Lorem ipsum dolor sit amet consectetur a aut eius repellendus porro quasi pr earum debitise quas, architecto voluptates delectus natus reiciendis!</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi error animi similique impedit inventore? Qui fugit cumque sapiente similique molestias corporis dolorum suscipit voluptate veniam consectetur perferendis beatae, molestiae quas fugiat saepe impedit nulla.</p>
             </div> 
        <div className="detailsright">
            <img src={abhayImg} alt=""   />
            
       </div>


        </section>


      
      </>
    );
  }
  
   
  