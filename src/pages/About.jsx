export default function About() {
    return (
      <div className="w-full px-6 py-12 max-w-3xl mx-auto text-left">
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
  
        <section className="mb-10">
          <p>
            I'm currently studying Digital Media at UCF with a concentration in web development and user-centered design.
            I enjoy building interactive, accessible, and visually appealing interfaces.
          </p>
        </section>
  
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc list-inside">
            <li>HTML, CSS, JavaScript</li>
            <li>React, React Native, Vite</li>
            <li>Figma, Adobe Illustrator, Adobe XD</li>
          </ul>
        </section>
  
        <section>
          <h2 className="text-2xl font-semibold mb-2">Interests</h2>
          <p>
            I love working on designs, exploring animation and games, learning about accessibility in tech, and creating experiences that leave an impact.
          </p>
        </section>
      </div>
    );
  }
  