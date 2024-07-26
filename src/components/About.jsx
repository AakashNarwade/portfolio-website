const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-6 mb-4">
          Hello! I&apos;m{" "}
          <span className="text-cyan-500 text-xl font-bold">
            Aakash Narwade
          </span>
          , a passionate frontend developer with a knack for creating stunning
          and user-friendly web experiences.
        </p>

        <p className="text-xl mb-4">
          With a strong foundation in{" "}
          <span className="text-cyan-500 text-xl font-bold">
            HTML, CSS, Javascript, React.js, Redux, Next.js, MongoDB, Express JS
          </span>
          , I thrive on transforming complex ideas into seamless, engaging
          interfaces. My expertise includes:
        </p>

        <ul className="list-disc list-inside mb-4 text-lg pl-4">
          <li>Crafting responsive designs</li>
          <li>Optimizing performance</li>
          <li>Delivering high-quality solutions</li>
        </ul>

        <p className="text-xl mb-4">
          My love for{" "}
          <span className="text-cyan-500 text-xl  font-bold">
            frontend development
          </span>{" "}
          drives me to stay ahead of the curve with the latest technologies and
          best practices. I am committed to ensuring that my work is always at
          the cutting edge of innovation.
        </p>

        <p className="text-xl mb-4">
          Whether I&apos;m diving into a new framework, solving a challenging
          problem, or collaborating with a team, I bring enthusiasm and a
          meticulous eye for detail to every project. I&apos;m always eager to
          learn and grow, constantly seeking opportunities to refine my skills
          and contribute to exciting projects.
        </p>
      </div>
    </div>
  );
};

export default About;
