import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  return (
    <section id="home" className="relative text-[#EC1337]">
      <video className="absolute w-screen h-svh object-cover" src="./videos/anime-expo.webm" autoPlay loop muted />
      <div className="absolute w-screen h-svh flex flex-col justify-between bg-white/75 p-8 md:px-16">
        <div className="flex gap-6 self-center">
          <img className="h-8 md:h-12" src="./images/ittp.png" alt="IT Telkom Purwokerto" />
          <img className="h-8 md:h-12" src="./images/tel-u-pwt.png" alt="Menuju Tel-U Purwokerto" />
          <img className="h-8 md:h-12" src="./images/wibu-ittp.png" alt="Wibu ITTP" />
        </div>
        <div className="flex flex-col items-center">
          <img className="w-3/4 max-w-[640px] mb-8 md:mb-16" src="./images/logo.png" alt="Akatetsu Matsuri Logo" />
          <p className="text-xl md:text-2xl font-bold tracking-[.5rem] md:tracking-[1rem]">coming soo<span className="tracking-normal">n</span></p>
        </div>
        <div className="flex justify-end gap-4">
          <a className="text-xl md:text-2xl font-bold moving-animation" href="./recruitment">wanna join? <FontAwesomeIcon icon={faAngleRight} /></a>
        </div>
      </div>
    </section>
  );
}