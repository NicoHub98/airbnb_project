"use client";

import { useState } from "react";
import Heading from "../components/Heading";
import Container from "../components/Container";

const AboutClient = () => {
  const [isEnglish, setIsEnglish] = useState(true);

  return (
    <Container>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
        crossOrigin="anonymous"
      />
      <div className="flex flex-col gap-5 mt-4">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <div
              onClick={() => setIsEnglish(true)}
              className={`nav-link cursor-pointer ${isEnglish && "active"}`}
            >
              {isEnglish ? "English" : "Inglés"}
            </div>
          </li>
          <li className="nav-item">
            <div
              onClick={() => setIsEnglish(false)}
              className={`nav-link cursor-pointer ${!isEnglish && "active"}`}
            >
              {isEnglish ? "Spanish" : "Español"}
            </div>
          </li>
        </ul>
        <Heading
          title={`${isEnglish ? "About" : "Acerca de"}`}
          subTitle={`${
            isEnglish
              ? "Some things about my experience building this site"
              : "Algunas cosas sobre mi experiencia desarollando esta página"
          }`}
        />
        <p>
          {isEnglish
            ? "This website is a clone of Airbnb that I created to expand my knowledge in web development. It was made by following a tutorial and reading a lot of documentation on the various technologies used. This process helped me to consolidate my understanding of certain topics and learn about new ones. The site utilizes NextJS 13, Typescript, MongoDB, Prisma, Tailwind, some Bootstrap, and various JavaScript libraries. Additionally, it features authentication with Google and Github."
            : "Esta página es un clon de Airbnb que realicé con el fin de seguir expandiendo mi conocimiento en el desarrollo web. Fue hecha mediante un tutorial y la lectura de mucha documentación de las distintas tecnologías utilizadas. Este proceso me ayudó a afianzar temas y conocer otros nuevos. Este sitio utiliza NextJS 13, Typescript, MongoDB, Prisma, tailwind, algo de bootsrtap y varias librerias de javascript. Además cuenta con autentificación con Google y Github."}
        </p>
      </div>
    </Container>
  );
};

export default AboutClient;
