import angular from './image/angular.png'
import react from './image/react.png'
import mysql from './image/mysql.png'
import figma from './image/figma.png'

const Skills = () => {
    return (
        <div id="skills" className="container">
            <div className="skills__title">
            <h1 className="skills__h1">Skills</h1>
          </div>
          <p className="skills__p">I work in such tools as</p>
          <div className="skills__icons">
          <img src={angular} alt="angular" className="skills__img"/>
          <img src={react} alt="angular" className="skills__img"/>
          <img src={mysql} alt="angular" className="skills__img"/> 
          <img src={figma} alt="angular" className="skills__img"/>
          </div>
        </div>
    );
}

export default Skills;
