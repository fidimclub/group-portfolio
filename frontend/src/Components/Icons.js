import React from 'react'
import './Icons.css'
import reactIcon from "../images/reactIcon.svg"
import reactLogo from "../images/reactLogo.png"
import logo from "../images/logo.png"
import html5 from "../images/html5.svg"
import css3 from "../images/css3.svg"
import mongodb from "../images/mongodb.svg"
import python from "../images/python.svg"
import django from "../images/django.svg"
import flask from "../images/flask.svg"
import postgresql from "../images/postgresql.svg"
import javascript from "../images/javascript.svg"

const Icons = () => {
  return (
    <div style={{height: "auto", backgroundColor: '#0da86a',}}>
      <div className="skills">
               <div className="title">
                <h1>Our Box of Tools:</h1>
                <hr/>
             </div>
                
            <div className="skillsGrid" >
               
                <img src={reactIcon} style={{ width: '50%', height: 'auto' }} alt="The logo icon for react" title="React"/>
                <img src={html5} style={{ width: '50%', height: 'auto' }} alt="The logo icon for HTML 5" title="HTML 5"/>
                <img src={css3} style={{ width: '50%', height: 'auto' }} alt="The logo icon for CSS3" title="CSS 3"/>
                <img src={mongodb} style={{ width: '50%', height: 'auto' }} alt="The logo icon for MongoDb" title="Mongo Db"/>
                <img src={python} style={{ width: '50%', height: 'auto' }} alt="The logo icon for Python" title="Python"/>
                <img src={django} style={{ width: '50%', height: 'auto' }} alt="The logo icon for django" title="django"/>
                <img src={flask} style={{ width: '50%', height: 'auto' }} alt="The logo icon for flask" title="flask"/>
                <img src={postgresql} style={{ width: '50%', height: 'auto' }} alt="The logo icon for postgresql" title="postgresql"/>
                <img src={javascript} style={{ width: '50%', height: 'auto' }} alt="The logo icon for javascript" title="javascript"/>
                
            </div>            
        </div>
    </div>
  )
}

export default Icons