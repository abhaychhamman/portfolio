 
import abhayImg from './../abhayImg.jpg';
import abhayresume from './../abhay resume.pdf';


export function Basic() {

    


    
    return (
      <>

      <nav>
        <div className="navleft item"><a href="/">Abhay Kuamr Singh</a></div> 

         

      </nav>
      

        <section className="details">

        <div className="detailsleft">
            <h1 className='smallfont'>I am a Full Stack </h1>
            <h1 className='largefont'>Web Developer </h1>
            <p>my experties in main areas CSS,HTML ,JAVASCRIPT,PYTHON ,DJANGO  ,AJAX,JQUERY</p>
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
  
   
  