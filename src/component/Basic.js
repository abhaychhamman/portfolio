 
import abhayImg from './../abhayImg.jpg';
import abhayresume from './../abhay resume.pdf';
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
            <h1 className='smallfont'>I am a Full Stack </h1>
            <h1 className='largefont'>Web Developer </h1>
            <p>my experties in main areas CSS,HTML ,JAVASCRIPT,PYTHON ,DJANGO ,REACT ,AJAX,JQUERY</p>
             </div> 
        <div className="detailsright">
            <img src={abhayImg} alt=""   />
            
       </div>


        </section>

<div className='abhayresume'>

        <h2 >My resume and click download button for download</h2>
        <embed src={abhayresume} width="800px"  type='application/pdf' />
</div>

       
      </>
    );
  }
  
   
  