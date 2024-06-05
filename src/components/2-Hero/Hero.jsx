
import "./hero.css"
function Hero() {
  return (
    <section className='hero  flex'>
      <div className='left-section  '>
        <div className='parent-avatar flex'>
          <img src="./mypic.jpg" className='avatar' alt="jihene lahbibi" />
          <div className=' icon-verified'></div>
        </div>
        
        <h1 className='title'>Juinor Full stack web developer</h1>                  
        <p className='sub-title'>Passionate agri-food engineer now immersed in web development. Alongside my personal web projects, I share my expertise as an instructor, guiding others in crafting innovative web solutions.</p>
       
        <div className="all-icons flex">
        <div className="icon icon-linkedin-square"></div>
        <div className="icon icon-github"></div>
        <div className="icon icon-at"></div>
        </div>
      </div>







      <div className='right-section border'>aaaa</div>
    </section>
  )
}

export default Hero