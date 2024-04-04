import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Headers from "../components/Header";
import positions from "../utils/positions";

export default function Position() {
  const { slug } = useParams();
  const position = positions.find(position => position.slug === slug);

  return (
    <>
      <Headers />
      <section id="position" className="container md:max-w-4xl mx-auto py-8 px-8">
        <Link to="/recruitment" className="text-[#EC1337] text-xl font-bold hover:underline">← Back to Recruitment</Link>
        <img className="rounded-2xl w-full h-[24rem] object-cover my-8" src={position.image} alt={position.title} />
        <h2 className="text-4xl font-bold text-[#EC1337] mb-4">{position.title}</h2>
        <p className="text-xl">{position.description}</p>
        <div className="my-8">
          <h3 className="text-2xl font-bold text-[#EC1337]">Apa yang akan kamu lakukan:</h3>
          <ul className="list-disc pl-8 mt-4">
            {position.tasks.map((task, index) => (
              <li key={index} className="text-lg">{task}</li>
            ))}
          </ul>
        </div>
        <p className="text-center my-16"><Link to="https://docs.google.com/forms/d/e/1FAIpQLScgLmmq7P1_CJXPsPd0m1ZYdjHI6SdJpzIuSXibOb9F-L8tyg/viewform?usp=sf_link" className="bg-[#EC1337] text-white text-center text-xl font-black rounded-lg py-4 px-8" ><FontAwesomeIcon icon={faPenToSquare} /> DAFTAR</Link></p>
      </section>
    </>
  );
}
