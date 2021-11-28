import { Wrapper, Section, Box } from "./ProjectDoc.styles";
import { Element } from 'react-scroll';
import { projects } from '../../data/projects.data';
import { courses } from '../../data/courses.data';
import Image from 'next/image';
import { AiFillGithub,AiOutlineLink } from "react-icons/ai";

const Proj = () => (
    <Element name="projects" className="element" >
            
            <Wrapper>
                <Section>

                <div>
                <h1>
                    Projects that I have been working on
                </h1>
                <p>
                    Here are a list of projects.
                </p>
                </div>
                <Box>
                    {projects.map((project)=> 
                        <a
                        href={project.link}
                        key={project.title}
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                            <div className="container">
                            
                            <div className="image">
                                <Image
                                className="image"
                                alt="gallery"
                                src={project.image}
                                width={500} 
                                height={281}
                                />
                            </div>

                            <div className="projectInfo">
                                <h1>
                                    {project.title}
                                </h1>
                                <p>
                                {project.description}
                                </p>
                                <p>
                                <a
                                className="links"
                                href={project.github}
                                key={project.github}
                                target="_blank"
                                rel="noopener noreferrer">
                                    <AiFillGithub className="hover"/>
                                </a>
                                <a
                                className="links"
                                href={project.link}
                                key={project.link}
                                target="_blank" 
                                rel="noopener noreferrer">
                                    <AiOutlineLink className="hover"/>
                                </a>
                                    </p>
                                
                            </div>
                            </div>
                        
                        </a>
                    )}
                </Box>
                </Section>
            </Wrapper>
    </Element>
                

);


export default Proj;