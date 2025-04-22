import QuizAppImg from "../assets/QuizApp.png";
import ExerciseAppImg from "../assets/ExerciseApp.png";
import TodoAppImg from "../assets/TodoApp.png";

export default function Projects() {
  const projects = [
    {
      title: "Quiz App",
      description:
        "A mobile quiz app built with React Native supporting multiple question types and a score summary.",
      image: QuizAppImg,
      link: "https://github.com/jennyvooo/QuizApp",
      imageStyle: "object-top",
    },
    {
      title: "React Exercise App",
      description:
        "An exercise app that helps track repetition and duration.",
      image: ExerciseAppImg,
      link: "https://github.com/jennyvooo/updated-exercise-tracker",
      imageStyle: "object-center",
    },
    {
      title: "Todo List",
      description:
        "An app designed to act as a todo list. Features include adding/removing tasks.",
      image: TodoAppImg,
      link: "https://github.com/jennyvooo/todoApp",
      imageStyle: "object-center",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-700">My Projects</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-white rounded shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-56 object-cover ${project.imageStyle} rounded-t`}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-blue-600">
                {project.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-sm text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
