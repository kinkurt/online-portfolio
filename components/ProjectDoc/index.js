import { Wrapper, Section, Box } from "./ProjectDoc.styles";
import { Element } from 'react-scroll';
import { projects } from '../../data/projects.data';
import { courses } from '../../data/courses.data';
import Image from 'next/image';

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
                            </div>
                            </div>
                            
                            
                        </a>
                    )}
                </Box>
                </Section>

                <Section>
                <div>
                <h1>
                    Projects that I have followed
                </h1>
                <p>
                    These are the courses and projects that have helped me.
                </p>
                </div>

                <Box>
                    {courses.map((course)=> 
                        <a
                        href={course.link}
                        key={course.title}
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                            <div className="container">

                                <div className="image">
                                    <Image
                                    className="image"
                                    alt="gallery"
                                    src={course.image}
                                    width={500} 
                                    height={281}
                                    />
                                    </div>

                                <div className="projectInfo">
                                    <h1>
                                        {course.title}
                                    </h1>
                                    <p>
                                    {course.description}
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