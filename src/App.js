import React, { Fragment } from 'react';
import html2pdf from 'html2pdf.js';
import {
  Title, Subtitle, Content, Section, Date, Description, Label,
} from './components/Typography';
import {
  Page, Header, Right, Left, Item, Icons, Body, Labels,
} from './components/Layout';

const download = () => {
  const options = {
    filename: 'IvanWolfCV.pdf',
    jsPDF: {
      unit: 'in',
      format: [8.5, 11],
      orientation: 'portrait',
    },
  };
  const element = document.getElementById('resume');
  html2pdf().from(element).set(options)
    .toPdf()
    .get('pdf')
    .then((pdf) => {
      window.open(pdf.output('bloburl'), '_blank');
    });
};

const App = () => (
  <Fragment>
    <div>
      <button onClick={download}>Descargar</button>
    </div>
    <Page id="resume">
      <Header>
        <Left>
          <Title>Iván Wolf Olivares</Title>
          <Subtitle>Licenciado en ciencias de la Ingeniería PUC</Subtitle>
          <Content>Experiencia en desarrollo aplicaciones web modernas. Entusiasta del diseño de interfaces y experiencia de usuario. Capaz de dirigir un proyecto y trabajar en equipo. Motivado en aprender y desarrollar nuevas tecnologías.</Content>
        </Left>
        <Right>
          <Item>ivanwolf15@gmail.com</Item>
          <Item>+569 48454110</Item>
          <Item>Santiago, Chile</Item>
          <Item>github.com/ivanwolf15</Item>
        </Right>
        <Icons>
          <i className="far fa-envelope"></i>
          <i className="fas fa-mobile-alt"></i>
          <i className="fas fa-globe-americas"></i>
          <i className="fab fa-github"></i>
        </Icons>
      </Header>
      <Body>
        <Left>
          <Section>Experiencia laboral</Section>
          <Title>Jefe de proyecto</Title>
          <Subtitle>Cliente: Papinotas</Subtitle>
          <Date>Abril 2018 - Junio 2018</Date>
          <Description>Proyecto de especialidad IIC2153. Administrador del equipo conformado por 11 personas para el desarrollo de una aplicación web progresiva y una aplicación móvil. Levantamiento de requisitos y estimación del esfuerzo. Jefe del subequipo encargado de la apliación web. Desarrollo de funcionalidades offline y sincronización de datos. Desarrollo y diseño de test unitarios.</Description>
          <br />
          <Title>Desarrollador Fullstack</Title>
          <Subtitle>Gladius SPA</Subtitle>
          <Date>Enero 2018 - Marzo 2018</Date>
          <Description>Desarrollo de aplicación web en Ruby on Rails en base a test unitarios. Revisión de código entre pares. Diseño y ejecución de pruebas de usuario. Integración continua.</Description>
          <br />
          <Title>Desarrollador Frontend</Title>
          <Subtitle>Educalabs</Subtitle>
          <Date>Abril 2017 - Diciembre 2017</Date>
          <Description>Desrrollo de la aplicación web <em>Pondera</em> dirigida a estudiantes que rindieron la PSU. Diseño y desarrollo <em>mobile first</em>. Confección de la plataforma de administrador de <em>Pondera</em>.</Description>
          <Description>Desarrollo del <em>front-end</em> de <em>Tuniversidad</em>, un portal con información acerca de carreras y universidades que está dirigido a estudiantes secundarios. Trabajo directo con el diseñador del equipo con énfasis en la experiencia de usuario.</Description>
          <br />
          <Title>Desarrollador Frontend</Title>
          <Subtitle>Nursoft</Subtitle>
          <Date>Enero 2017 - Febrero 2017</Date>
          <Description>Práctica profesional. Refactorización e implementeación de Redux en una apliación React. Solución de <em>bugs</em> en código legado. Metodología ágil <em>Scrum</em>.</Description>
          <br />
          <Section>Manejo de Idiomas</Section>
          <Description>Nivel avanzdo en inglés escrito y oral. ALTE 3.</Description>
        </Left>
        <Right>
          <Section>Educación</Section>
          <Title>Ingeniería Civil en Computación</Title>
          <Subtitle>Pontificia Universidad Católica de Chile</Subtitle>
          <Date>2017 - 2018</Date>
          <Description>Último semestre de la carrera.</Description>
          <br />
          <Title>Licenciatura en ciencias de la Ingeniería</Title>
          <Subtitle>Pontificia Universidad Católica de Chile</Subtitle>
          <Date>2013 - 2016</Date>
          <Description>Major en Ingeniería matemática track en ciencia de la computación. Minor en programación.</Description>
          <br />
          <Section>Otras Actividades</Section>
          <Date>Diciembre 2017</Date>
          <Description>Durante el verano desarrolle algúnos paquetes y los publiqué en en registro de npm. Hice contribuciones menores a una librería de componentes. Trato de mantener mi perfil de Github activo.</Description>
          <Date>Abril 2016</Date>
          <Description>Participante en el primer Hackathon organizado por Facebook en Chile</Description>
          <br />
          <Section>Habilidades Técnicas</Section>
          <Date>Herramientas</Date>
          <Description>Herramientas de software con las que interactuo frecuentemente: NodeJS, npm, Git, Webpack, Babel, VSCode, Bash, ChromeDevTools.</Description>
          <Date>Lenguajes</Date>
          <Description>Experiencia en Javascript, HTML y CSS, conocimientos intermedios en Ruby y Python, manejo de Java y C.</Description>
          <Date>Librerías y frameworks</Date>
          <Description>Experiencia en React y Redux. He trabjado con librerías de estilos como MaterialUI o Bulma. Conocimiento intermedio Ruby on Rails, Koa, Express y ReactNative.</Description>
          <Date>Devops</Date>
          <Description>Docker, docker-compose. Deploy a Heroku, Amazon S3.</Description>
          <br />
          <Section>Intereses</Section>
          <Labels>
            <Label>Machine Learning</Label>
            <Label>Blockchain</Label>
            <Label>Básquetbol</Label>
            <Label>Natación</Label>
            <Label>Sociología</Label>
            <Label>Educación</Label>
          </Labels>

        </Right>
      </Body>
    </Page>
  </Fragment>
)

export default App;
