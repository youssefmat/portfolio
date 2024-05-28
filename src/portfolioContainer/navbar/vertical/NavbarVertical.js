import './NavbarVertical.css';
import { useState } from 'react';
import { FaUserGraduate, FaHistory  } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";
import { IoColorPalette } from "react-icons/io5";
import { FaLink } from "react-icons/fa";
import projet1 from "../../../assets/projects/projet1.png";
import projet2 from "../../../assets/projects/projet2.png";
import projet3 from "../../../assets/projects/projet3.png";
import projet4 from "../../../assets/projects/projet4.png";
import pr1 from "../../../assets/projects/pr1.jpeg";

const NavbarVertical = () => {
    const [activeTab, setActiveTab] = useState('education');
    
    return (
        <div className="container">
            <div className="tabs">
                <div className={`tab ${activeTab === 'education' ? 'active' : ''}`} onClick={() => setActiveTab('education')}>
                    <FaUserGraduate className="icon" />Education
                </div>
                <div className={`tab ${activeTab === 'history' ? 'active' : ''}`} onClick={() => setActiveTab('history')}>
                    <FaHistory className="icon" /> Experiences
                </div>
                <div className={`tab ${activeTab === 'skills' ? 'active' : ''}`} onClick={() => setActiveTab('skills')}>
                    <MdComputer className="icon" />Programming Skills
                </div>
                <div className={`tab ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => setActiveTab('projects')}>
                    <AiFillProject className="icon" />Projects
                </div>
                <div className={`tab ${activeTab === 'intersts' ? 'active' : ''}`} onClick={() => setActiveTab('intersts')}>
                    <IoColorPalette className="icon" />Intersts
                </div>
            </div>
            <div className="content">
                <div className={`tabContent ${activeTab === 'education' ? 'active' : ''}`}>
                <div className='edGroup'>
                    <div className="formGroup">
                        <h5>Master's in Cloud Software Engineering</h5>
                        <p className="date">2023/2024</p>
                    </div>
                    <p>University Ibn Tofail, Kenitra</p>
                </div>
                <div className='edGroup'>
                    <div className="formGroup">
                        <h5>Bachelor's degree in Mathematical Sciences and Computer Science</h5>
                        <p className="date">2020/2022</p>
                    </div>
                    <p>Université Ibn Tofail, Kenitra</p>
                </div>
                <div className='edGroup'>
                    <div className="formGroup">
                        <h5>Higher Technician (BTS) in Computer Systems Development</h5>
                        <p className="date">2019/2020</p>
                    </div>
                    <p>Technical High School Ibn Sina, Kenitra</p>
                </div>
                <div className='edGroup'>
                    <div className="formGroup">
                        <h5>Bachelor's Degree in Physical Sciences</h5>
                        <p className="date">2016/2017</p>
                    </div>
                    <p>High School Abd Rahman Nacer, Kenitra</p>
                </div>
                </div>
                <div className={`tabContent ${activeTab === 'history' ? 'active' : ''}`}>
                    <div className='edGroup'>
                        <div className="formGroup">
                            <h5>Internship as a Full-stack Java/Spring Boot React JS Engineer </h5>
                            <p className="date">03/2023 - 10/2023 Remote</p>
                        </div>
                        <h5>LsConsulting – Paris, France</h5>
                        <p>- Design and develop a secure RESTful API using Spring Boot,MongoDB to manage queue operations.</p>
                        <p>- Ensure event-driven development with RabbitMQ.</p>
                        <p>- Frontend development using React.js and Angular.</p>
                        <p>- Integration of security features with Keycloak.</p>
                        <p>- Test and document the API using Swagger.</p>
                        <p>- Ensure and monitor deployment using Docker.</p>
                    </div>
                    <div className='edGroup'>
                        <div className="formGroup">
                            <h5>PFE Intern Development Research </h5>
                            <p className="date">04/2019 - 06/2019 Present</p>
                        </div>
                        <h5>AC Company & Consulting - Meknés, Morocco</h5>
                        <p>- Design and development of a library management application using microservices.</p>
                        <p>- Technology : Spring boot, Spring Data JPA, Spring Security, Hibernate,Mysql,Maven,RestFul Api,JavaScript,Boostrap.</p>
                    </div>
                    <div className='edGroup'>
                        <div className="formGroup">
                            <h5>PFE Intern Development Research </h5>
                            <p className="date">07/2018 - 08/2018 Present</p>
                        </div>
                        <h5>MAXWAREtechnology - Kenitra, Morocco</h5>
                        <p>- Design and development of a monolithic application for managing email messaging.</p>
                        <p>- Technology : JAVA/JEE, Mysql, serveur Postfix,jsp,css,Boostrap.</p>
                        <p>- Write unit tests with Junit.</p>
                    </div>
                </div>
                <div className={`tabContent ${activeTab === 'skills' ? 'active' : ''}`}>
                    <div className="skills-container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="skill-group">
                                    <div className="skill">
                                        <div className="skill-name">JAVA</div>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '95%', backgroundColor: 'orangered' }} role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="skill">
                                        <div className="skill-name">JavaScript</div>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '85%', backgroundColor: 'orangered' }} role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="skill-group">
                                    <div className="skill">
                                        <div className="skill-name">Spring boot</div>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '90%', backgroundColor: 'orangered' }} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="skill">
                                        <div className="skill-name">React JS & Redux</div>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '90%', backgroundColor: 'orangered' }} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="skill-group">
                                    <div className="skill">
                                        <div className="skill-name">MongoDB & MySQl</div>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '95%', backgroundColor: 'orangered' }} role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="skill">
                                        <div className="skill-name">HTML & CSS & Boostrap</div>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '85%', backgroundColor: 'orangered' }} role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="skill-group">
                                    <div className="skill">
                                        <div className="skill-name">Github & Gitea & Git</div>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '90%', backgroundColor: 'orangered' }} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="skill">
                                        <div className="skill-name">SQL & NoSQL</div>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '90%', backgroundColor: 'orangered' }} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="skill-group">
                                    <div className="skill">
                                        <div className="skill-name">Web Service: Rest API & RabbitMQ</div>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '80%', backgroundColor: 'orangered' }} role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="skill">
                                        <div className="skill-name">Spring Security & Keycloak & OAuth2</div>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '60%', backgroundColor: 'orangered' }} role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="skill-group">
                                    <div className="skill">
                                        <div className="skill-name">Docker & Jenkins & JUnit</div>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '50%', backgroundColor: 'orangered' }} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="skill">
                                        <div className="skill-name">Linux: Ubuntu</div>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '50%', backgroundColor: 'orangered' }} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`tabContent ${activeTab === 'projects' ? 'active' : ''}`}>
                <section class="projets" id="chefs">
                    <div class="projets-container ">
                        <div class="projet-box">
                            <img src={projet4} alt=""/>
                            <div class="text">
                                <h2>Application Web</h2>
                                <p>I have developed an innovative web application for intelligent queue management.
                                   For the backend, I utilized a secure REST API with Spring Boot and MongoDB,
                                   integrating RabbitMQ for event-driven development. On the frontend,
                                   I crafted dynamic interfaces with React js, strengthened security with Keycloak,
                                   documented tests with Swagger, and ensured reliable deployment using Docker.</p>
                                <a href="#projet1" ><FaLink className='icon-link'/></a>
                            </div>
                        </div>
                        <div class="projet-box">
                            <img src={projet3} alt=""/>
                            <div class="text">
                                <h2>Application Web</h2>
                                <p> I developed an innovative web application for managing and tracking metal machining.
                                    For the backend, I implemented a secure REST API using Spring Boot and MySQL. On the frontend, 
                                    I crafted dynamic interfaces with React js and enhanced security with Spring Security and JWT.</p>
                                <a href="#projet2" ><FaLink className='icon-link'/></a>
                            </div>
                        </div>
                        <div class="projet-box">
                            <img src={projet2} alt=""/>
                            <div class="text">
                                <h2>Application Web</h2>
                                <p>I developed a monolithic web application for email management.
                                    For the backend, I used Java/JEE and MySQL for data management and storage.
                                    The Postfix mail server was integrated for email handling. For the frontend,
                                    I used JSP, CSS, and Bootstrap to create user-friendly and responsive interfaces.
                                    Additionally, I wrote unit tests with JUnit to ensure the quality and reliability of the code.</p>
                                <a href="https://github.com/youssefmat/App-Messagerie-electronique-JEE-Postfix" target="_blank" rel="noopener noreferrer" ><FaLink className='icon-link'/></a>
                            </div>
                        </div>
                        <div class="projet-box">
                            <img src={projet1} alt=""/>
                            <div class="text">
                                <h2>Development of RESTful APIs</h2>
                                <p>I have developed a RESTful APIs for an e-commerce platform using Spring Boot and Spring Cloud.
                                   I implemented three microservices and additional technical services for registration and organization.
                                   I integrated security features with Spring Security and utilized Spring Cloud and Eureka Discovery for service orchestration.</p>
                                <a href="https://github.com/youssefmat/Microservices-produits-spring/tree/master" target="_blank" rel="noopener noreferrer"><FaLink className='icon-link'/></a>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
                <div className={`tabContent ${activeTab === 'intersts' ? 'active' : ''}`}>
                <div className='edGroup'>
                    <div className="formGroup">
                        <h5>Littérature</h5>
                    </div>
                    <p>Plonger dans des livres offre une évasion captivante vers des mondes imaginaires et une exploration des profondeurs de l'âme humaine.</p>
                </div>
                <div className='edGroup'>
                    <div className="formGroup">
                        <h5>E-learning</h5>
                    </div>
                    <p>L'e-learning me permet d'acquérir de nouvelles compétences et de rester à jour dans un monde en constante évolution, tout en nourrissant ma curiosité et en élargissant mes horizons.</p>
                </div>
                <div className='edGroup'>
                    <div className="formGroup">
                        <h5>Sport</h5>
                    </div>
                    <p>Pour moi, le sport est bien plus qu'une activité physique ; c'est un mode de vie qui favorise la santé, la discipline et le bien-être mental, que ce soit en solo pour la tranquillité d'esprit ou en équipe pour renforcer les liens sociaux.</p>
                </div>
                </div>
            </div>
        </div>
    );
}

export default NavbarVertical;