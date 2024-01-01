
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectsCard';
import './style.css'
import medusys from './Images/Medusys.png'
import amcad from './Images/amcad.png'
import ddc from './Images/ddc.png'
import plumage from './Images/plumage.png'
import slv from './Images/slv.png'
import acc from './Images/acc.png'
import erigo from './Images/persnol projects/1.png'
import en from './Images/persnol projects/2.png'
import ec from './Images/persnol projects/3.png'
import mv from './Images/persnol projects/4.png'
import jo from './Images/persnol projects/5.png'
import ti from './Images/persnol projects/6.png'
import di from './Images/persnol projects/7.png'
import rp from './Images/persnol projects/8.png'
import json from './Images/persnol projects/9.png'
import att from './Images/persnol projects/att.png'


const projects = [
  {
    title: 'MEDUSYS',
    description: 'Medusys is a m-health technology and data science company registered in Australia and India with multi-national operations team based in Australia, India and UK. We are a team of physicians, data scientists and IT professionals with a fervent passion for delivering universal e-healthcare.     .MEDUSYS is a Australian Huge project which is based on Medical Online Learning Platform which Provides Knowledges to Doctor',
    imageUrl: medusys,
    demoLink: 'https://example.com/demo1',
    codeLink: 'https://github.com/example/project1',
  },
  {
    title: 'AMCAD',
    description: 'Amcad is Online learning for all fields , example IT,Photography,Spoken English so on',
    imageUrl: amcad,
    demoLink: 'https://example.com/demo1',
    codeLink: 'https://github.com/example/project1',
  },
  {
    title: 'DENTAL DIAGNOSTIC CENTRE',
    description: 'DDC is Hospital Managment website where the all the Information of Hospital is Present In website its Makes more Digital',
    imageUrl: ddc,
    demoLink: 'https://example.com/demo1',
    codeLink: 'https://github.com/example/project1',
  },
  {
    title: 'PLUMAGE',
    description: 'Plumage is a ERP Application which maintains the Products of Industry and tracks the products stage',
    imageUrl: plumage,
    demoLink: 'https://example.com/demo1',
    codeLink: 'https://github.com/example/project1',
  },
  {
    title: 'SLV scientific',
    description: 'SLV SCIENTIFIC SUPPLIES is a leading promotion and distribution company that specializes in providing laboratory chemicals, biochemicals, glassware, plasticware, lab consumables, ultra-high-purity solvents for instrument analysis, headspace-grade solvents, ULC/MS buffers, liquid handling products, organic and inorganic standards',
    imageUrl: slv,
    demoLink: 'https://example.com/demo1',
    codeLink: 'https://github.com/example/project1',
  },
  {
    title: 'Account Bazaar',
    description: 'Account Bazaar is a multinational professional services aggregator. It provides services such as Accounting and Book Keeping, GST Registration, Filing GST Returns, Filing Income Tax Returns, Filing TDS Returns, Companies Act (ROC) Compliances, Income Tax Representation before Assessing Officers, CIT(Appeals) and ITAT, GST Representation before various authorities, FEMA and RBI Compliances, Risk Management Services, Transfer Pricing Compliances, Valuation, Merger and Acquisitions, Consulting and Advisory Services and other related services. Account Bazaar is called pioneer in the field of accounting having introduced the concept of aggregator.',
    imageUrl: acc,
    demoLink: 'https://example.com/demo1',
    codeLink: 'https://github.com/example/project1',
  },
  
];


const personal_projects=[
  {
    title: 'Attendence Managment with Database',
    description: '',
    imageUrl: att,
    demoLink: 'https://example.com/demo1',
    codeLink: 'https://github.com/example/project1',
  },
  {
    title: 'Erigo website',
    description: '',
    imageUrl: erigo,
    demoLink: 'https://example.com/demo1',
    codeLink: 'https://github.com/example/project1',
  },
  {
    title: 'Enterprises Website',
    description: '',
    imageUrl: en,
    demoLink: 'https://example.com/demo1',
    codeLink: 'https://github.com/example/project1',
  },
  {
    title: 'CRUD operation using React and PHP',
    description: '',
    imageUrl: rp,
    demoLink: 'https://example.com/demo1',
    codeLink: 'https://github.com/example/project1',
  },
  {
    title: 'Movie Details Finder using API',
    description: '',
    imageUrl: mv,
    demoLink: 'https://example.com/demo1',
    codeLink: 'https://github.com/example/project1',
  },
  {
    title: 'CRUD operation with json server',
    description: '',
    imageUrl: json,
    demoLink: 'https://example.com/demo1',
    codeLink: 'https://github.com/example/project1',
  },
  {
    title: 'Erigo website',
    description: '',
    imageUrl: erigo,
    demoLink: 'https://example.com/demo1',
    codeLink: 'https://github.com/example/project1',
  },
  {
    title: 'E-commerce',
    description: '',
    imageUrl: ec,
    demoLink: 'https://example.com/demo1',
    codeLink: 'https://github.com/example/project1',
  },
  {
    title: 'Digital Clock',
    description: '',
    imageUrl: di,
    demoLink: 'https://example.com/demo1',
    codeLink: 'https://github.com/example/project1',
  },
  {
    title: 'Random jokes Generator',
    description: '',
    imageUrl: jo,
    demoLink: 'https://example.com/demo1',
    codeLink: 'https://github.com/example/project1',
  },
  {
    title: 'Zoo Picturs',
    description: '',
    imageUrl: ti,
    demoLink: 'https://example.com/demo1',
    codeLink: 'https://github.com/example/project1',
  },
]
const Projects = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12}>
            <h1 style={{ textAlign: 'center', color: 'silver' }}>Projects I Have Worked On</h1>
          </Col>
        </Row>
        <Row className='showcase'>
          {projects.map((project, index) => (
            <Col key={index} sm={3}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <Row>
          <Col sm={12}>
            <h1 className='mt-3' style={{ textAlign: 'center', color: 'silver' }}>Persnol Projects</h1>
          </Col>
        </Row>
        <Row className='showcase'>
          {personal_projects.map((persnol, index) => (
            <Col key={index} sm={3}>
              <ProjectCard {...persnol} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
