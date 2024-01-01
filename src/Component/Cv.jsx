import React, { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import './style.css';
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "./Images/br.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Particle() {
    return (
      <Particles
        id="tsparticles"
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: true,
                value_area: 1500,
              },
            },
            line_linked: {
              enable: false,
              opacity: 0.03,
            },
            move: {
              direction: "right",
              speed: 0.05,
            },
            size: {
              value: 1,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05,
              },
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              push: {
                particles_nb: 1,
              },
            },
          },
          retina_detect: true,
        }}
      />
    );
  }


function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
