import React from 'react'
import "./about.css"

const abouts= () => {
  return (
   <>
   
  
<section classNameName="about section">
  <h2 className="section__title">
   About Us <br/>
  
  </h2>

  <div className="about__container about__page container grid">
    <div className="about__perfil perfil">
      <div className="perfil__content">
        <img src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725580800&semt=ais_hybrid" alt="image" className="perfil__img"/>
      </div>
    </div>

    <div className="about__content grid">
      <div className="about__data grid">
        <div className="about__info grid">
          <h1 className="about__name">Fakhar </h1>
          <h2 className="about__profession">Mern Stack Developer</h2>
          <p className="about__description">
            Passionate about creating <b>Web App in mern stack</b> with
            <b>UI User Interface with react js and node js as backend</b>, I have 1 years of
            experience in mern stack and many clients are happy with
            the projects carried out.
          </p>
        </div>

        <a to="/" className="about__button button">Contact Me</a>
      </div>

      <div className="about__skills">
        <h3 className="about__skills-title">My Skills Are</h3>

        <div className="about__skills-content grid">

          <div className="about__skills-img">
         
            <img src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="image HTML" className="about__skills-img"/>
            <p className="about__skills-hover-text">HTML</p>
          </div>

          <div className="about__skills-img">
        
            <img src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt="image CSS" className="about__skills-img"/>
            <p className="about__skills-hover-text">CSS</p>
          </div>

          <div className="about__skills-img">
           
            <img src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" alt="image JavaScript" className="about__skills-img"/>
            <p className="about__skills-hover-text">JavaScript</p>
          </div>

          <div className="about__skills-img">
           
            <img src="https://cdn.worldvectorlogo.com/logos/sass-1.svg" alt="image SASS" className="about__skills-img"/>
            <p className="about__skills-hover-text">SASS</p>
          </div>

          <div className="about__skills-img">
          
            <img src="https://cdn.worldvectorlogo.com/logos/nodejs-1.svg" alt="image Node.js" className="about__skills-img"/>
            <p className="about__skills-hover-text">Node.js</p>
          </div>

          <div className="about__skills-img">
            
            <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="image React" className="about__skills-img"/>
            <p className="about__skills-hover-text">React</p>
          </div>

          <div className="about__skills-img">
           
            <img src="https://cdn.worldvectorlogo.com/logos/redux.svg" alt="image Redux" className="about__skills-img"/>
            <p className="about__skills-hover-text">Redux</p>
          </div>

          <div className="about__skills-img">
           
            <img src="https://cdn.worldvectorlogo.com/logos/git-icon.svg" alt="image Git" className="about__skills-img"/>
            <p className="about__skills-hover-text">Git</p>
          </div>

          <div className="about__skills-img">
          
            <img src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" alt="image GitHub" className="about__skills-img"/>
            <p className="about__skills-hover-text">GitHub</p>
          </div>

          <div className="about__skills-img">
            
            <img src="https://cdn.worldvectorlogo.com/logos/codepen-icon.svg" alt="image CodePen" className="about__skills-img"/>
            <p className="about__skills-hover-text">CodePen</p>
          </div>

          <div className="about__skills-img">
        
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png" alt="image Figma" className="about__skills-img"/>
            <p className="about__skills-hover-text">Figma</p>
          </div>

          <div className="about__skills-img">
           
            <img src="https://cdn.worldvectorlogo.com/logos/microsoft-windows-11.svg" alt="image Windows" className="about__skills-img"/>
            <p className="about__skills-hover-text">Windows</p>
          </div>

          <div className="about__skills-img">
            
            <img src="https://cdn.worldvectorlogo.com/logos/apple-14.svg" alt="image macOs" className="about__skills-img"/>
            <p className="about__skills-hover-text">macOs</p>
          </div>

          <div className="about__skills-img">
           
            <img src="https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" alt="image VS Code" className="about__skills-img"/>
            <p className="about__skills-hover-text">VSCode</p>
          </div>

          <div className="about__skills-img">
           
            <img src="https://cdn.worldvectorlogo.com/logos/notion-2.svg" alt="image Notion" className="about__skills-img"/>
            <p className="about__skills-hover-text">Notion</p>
          </div>

          <div className="about__skills-img">
          
            <img src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" alt="image Slack" className="about__skills-img"/>
            <p className="about__skills-hover-text">Slack</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
   
   
   </>
  )
}

export default abouts
