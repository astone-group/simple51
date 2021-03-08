import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';
import Tilt from 'react-tilt';


const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="ABOUT US" />
        <Row className="about-wrapper">
          <Col md={3} sm={6}>
            <Fade bottom duration={1000} delay={600} distance="30px">
             
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="40px">
            <div className="contact-wrapper__info">
                <p className="contact-wrapper__info-text" align="center"><strong>
                  {paragraphOne ||
                    ''}</strong> is a specialist Organisational Development and Business Psychology consultancy based in Melbourne, Australia.
                </p>
                <p className="about-wrapper__info-text"><strong>
                  {paragraphTwo ||
                    ''}</strong> with our clients to develop tailored, expert solutions across Assessment, Leadership Coaching & Development, Team Performance, Wellbeing and Career Alignment, that are plugged into and aligned to your strategy.
                </p>
                <p className="about-wrapper__info-text"><strong>
                  {paragraphThree || ''}</strong> that awesome teams and organisational cultures are best built by attending effectively, thoughtfully, and persistently to these elements.
                </p>
               
              </div>
              <div className="about-wrapper__image"> 
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                           <AboutImg alt="profile picture" filename={img} align="center"/>
                          </div>
                        </Tilt>
                      
                      </div>
              </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;