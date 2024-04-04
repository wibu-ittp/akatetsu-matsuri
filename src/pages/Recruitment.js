import { Link } from "react-router-dom";
import Header from "../components/Header";
import positions from "../utils/positions";

export default function Recruitment() {
  return (
    <>
      <Header />
      <section id="recruitment" className="container py-32 px-8 md:px-0 md:mx-auto">
        <h2 className="text-4xl font-bold text-[#EC1337]">Recruitment</h2>
        <p className="text-xl"><s>Kami mencari pahlawan untuk mengalahkan raja iblis!</s></p>
        <p className="text-xl">Kami membuka kepada siapapun yang ingin mendukung<br /><strong>terwujudnya Festival Jepang perdana di IT Telkom Purwokerto!</strong></p>
        <div className="flex flex-row flex-wrap justify-between gap-12 mt-16">
          {positions.map((position, index) => (
            <Link key={index} to={`/position/${position.slug}`} className="flex flex-col justify-between max-w-[24rem] border-2 rounded-2xl border-transparent hover:border-gray-200 hover:shadow-lg p-2">
              <div>
                <img className="rounded-2xl w-full h-[9rem] object-cover mb-4" src={position.image} alt={position.title} />
                <h3 className="text-2xl font-bold text-[#EC1337]">{position.title}</h3>
                <p className="text-lg">{position.shortDescription}</p>
              </div>
              <p className="text-end mt-4"><Link to={`/position/${position.slug}`} className="text-[#EC1337] text-lg font-bold hover:underline">Lihat detail</Link></p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}


// import Header from "../components/Header";

// export default function Recruitment() {
//   return (
//     <>
//       <Header />
//       <section id="recruitment" className="container mx-auto pt-32">
//         <h2 className="text-4xl font-bold text-[#EC1337]">Recruitment</h2>
//         <p className="text-xl">Kami mencari pahlawan untuk mengalahkan raja iblis!</p>
//         <div className="flex flex-row flex-wrap justify-between gap-12 mt-16">
//           <a className="block w-[24rem] border-2 rounded-2xl border-transparent hover:border-gray-200 hover:shadow-lg p-2" href="./secretary">
//             <img className="rounded-2xl w-full h-[9rem] object-cover mb-4" src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sekretaris" />
//             <h3 className="text-2xl font-bold text-[#EC1337]">Sekretaris</h3>
//             <p className="text-lg">Kami mencari sekretaris panitia.</p>
//           </a>
//           <a className="block w-[24rem] border-2 rounded-2xl border-transparent hover:border-gray-200 hover:shadow-lg p-2" href="./secretary">
//             <img className="rounded-2xl w-full h-[9rem] object-cover mb-4" src="https://images.unsplash.com/photo-1711606815631-38d32cdaec3e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bendahara" />
//             <h3 className="text-2xl font-bold text-[#EC1337]">Bendahara</h3>
//             <p className="text-lg">Kami mencari bendahara panitia.</p>
//           </a>
//           <a className="block w-[24rem] border-2 rounded-2xl border-transparent hover:border-gray-200 hover:shadow-lg p-2" href="./secretary">
//             <img className="rounded-2xl w-full h-[9rem] object-cover mb-4" src="https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Acara" />
//             <h3 className="text-2xl font-bold text-[#EC1337]">Acara</h3>
//             <p className="text-lg">Kami mencari panitia divisi acara.</p>
//           </a>
//           <a className="block w-[24rem] border-2 rounded-2xl border-transparent hover:border-gray-200 hover:shadow-lg p-2" href="./secretary">
//             <img className="rounded-2xl w-full h-[9rem] object-cover mb-4" src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Usaha Dana dan Konsumsi" />
//             <h3 className="text-2xl font-bold text-[#EC1337]">Usaha Dana dan Konsumsi</h3>
//             <p className="text-lg">Kami mencari panitia divisi usaha dana dan konsumsi.</p>
//           </a>
//           <a className="block w-[24rem] border-2 rounded-2xl border-transparent hover:border-gray-200 hover:shadow-lg p-2" href="./secretary">
//             <img className="rounded-2xl w-full h-[9rem] object-cover mb-4" src="https://images.unsplash.com/photo-1622107906469-632c870f19e9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Media dan Dokumentasi" />
//             <h3 className="text-2xl font-bold text-[#EC1337]">Media dan Dokumentasi</h3>
//             <p className="text-lg">Kami mencari panitia divisi media dan dokumentasi.</p>
//           </a>
//           <a className="block w-[24rem] border-2 rounded-2xl border-transparent hover:border-gray-200 hover:shadow-lg p-2" href="./secretary">
//             <img className="rounded-2xl w-full h-[9rem] object-cover mb-4" src="https://images.unsplash.com/photo-1511885640723-aa8dbd392d72?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Dekorasi" />
//             <h3 className="text-2xl font-bold text-[#EC1337]">Dekorasi</h3>
//             <p className="text-lg">Kami mencari panitia divisi dekorasi.</p>
//           </a>
//           <a className="block w-[24rem] border-2 rounded-2xl border-transparent hover:border-gray-200 hover:shadow-lg p-2" href="./secretary">
//             <img className="rounded-2xl w-full h-[9rem] object-cover mb-4" src="https://images.unsplash.com/photo-1581568736305-49a04e012c13?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Keamanan" />
//             <h3 className="text-2xl font-bold text-[#EC1337]">Keamanan</h3>
//             <p className="text-lg">Kami mencari panitia divisi keamanan.</p>
//           </a>
//           <a className="block w-[24rem] border-2 rounded-2xl border-transparent hover:border-gray-200 hover:shadow-lg p-2" href="./secretary">
//             <img className="rounded-2xl w-full h-[9rem] object-cover mb-4" src="https://images.unsplash.com/photo-1541888967080-c956a48eaad2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Lapangan" />
//             <h3 className="text-2xl font-bold text-[#EC1337]">Lapangan</h3>
//             <p className="text-lg">Kami mencari panitia divisi lapangan.</p>
//           </a>
//           <a className="block w-[24rem] border-2 rounded-2xl border-transparent hover:border-gray-200 hover:shadow-lg p-2" href="./secretary">
//             <img className="rounded-2xl w-full h-[9rem] object-cover mb-4" src="https://images.unsplash.com/photo-1592228533283-d78f7c1cf453?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Logistik" />
//             <h3 className="text-2xl font-bold text-[#EC1337]">Logistik</h3>
//             <p className="text-lg">Kami mencari panitia divisi logistik.</p>
//           </a>
//           <a className="block w-[24rem] border-2 rounded-2xl border-transparent hover:border-gray-200 hover:shadow-lg p-2" href="./secretary">
//             <img className="rounded-2xl w-full h-[9rem] object-cover mb-4" src="https://images.unsplash.com/photo-1516055619834-586f8c75d1de?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hubungan Masyarakat" />
//             <h3 className="text-2xl font-bold text-[#EC1337]">Hubungan Masyarakat</h3>
//             <p className="text-lg">Kami mencari panitia divisi hubungan masyarakat.</p>
//           </a>
//           <a className="block w-[24rem] border-2 rounded-2xl border-transparent hover:border-gray-200 hover:shadow-lg p-2" href="./secretary">
//             <img className="rounded-2xl w-full h-[9rem] object-cover mb-4" src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Medis" />
//             <h3 className="text-2xl font-bold text-[#EC1337]">Medis</h3>
//             <p className="text-lg">Kami mencari panitia divisi medis.</p>
//           </a>
//           <a className="block w-[24rem] border-2 rounded-2xl border-transparent hover:border-gray-200 hover:shadow-lg p-2" href="./secretary">
//             <img className="rounded-2xl w-full h-[9rem] object-cover mb-4" src="https://images.unsplash.com/photo-1578575436955-ef29da568c6c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Pertiketan" />
//             <h3 className="text-2xl font-bold text-[#EC1337]">Pertiketan</h3>
//             <p className="text-lg">Kami mencari panitia divisi pertiketan.</p>
//           </a>
//         </div>
//       </section>
//     </>
//   );
// }