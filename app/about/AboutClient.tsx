"use client";

import { useState } from "react";
import Heading from "../components/Heading";
import Container from "../components/Container";

const AboutClient = () => {
  const [isEnglish, setIsEnglish] = useState(true);

  return (
    <Container>
      <div className="flex flex-col gap-5 mt-4">
        <div className="flex flex-row  tabs">
          <p
            onClick={() => setIsEnglish(true)}
            className={`p-5 ${isEnglish ? "activeTab" : "notActiveTab"}`}
          >
            {isEnglish ? "English" : "Inglés"}
          </p>
          <p
            onClick={() => setIsEnglish(false)}
            className={`p-5 ${!isEnglish ? "activeTab" : "notActiveTab"}`}
          >
            {isEnglish ? "Spanish" : "Español"}
          </p>
        </div>
        <Heading
          title={`${
            isEnglish
              ? "About me, Nicolás Ludueño"
              : "Sobre mi, Nicolás Ludueño"
          }`}
          subTitle={`${
            isEnglish
              ? "Some things about my experience building this site"
              : "Algunas cosas sobre mi experiencia desarollando esta página"
          }`}
        />
        <p>
          {isEnglish
            ? "This website is a clone of Airbnb that I created to expand my knowledge in web development. It was made by following a tutorial and reading a lot of documentation on the various technologies used. This process helped me to consolidate my understanding of certain topics and learn about new ones. The site utilizes NextJS 13, Typescript, MongoDB, Prisma, Tailwind and various JavaScript libraries. Additionally, it features authentication with Google and Github."
            : "Esta página es un clon de Airbnb que realicé con el fin de seguir expandiendo mi conocimiento en el desarrollo web. Fue hecha mediante un tutorial y la lectura de mucha documentación de las distintas tecnologías utilizadas. Este proceso me ayudó a afianzar temas y conocer otros nuevos. Este sitio utiliza NextJS 13, Typescript, MongoDB, Prisma, tailwind y varias librerias de javascript. Además cuenta con autentificación con Google y Github."}
        </p>
      </div>
    </Container>
  );
};

export default AboutClient;
