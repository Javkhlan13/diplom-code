
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

interface Product {
    id: number;
    name: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
    color: string;
}

const products: Product[] = [
    {
        id: 1,
        name: 'Kashiwazaki-Kariwa Nuclear Power Station, Niigata Pref.',
        href: '#',
        imageSrc: '/assets/mentor/boy1.svg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Japan shifting back to nuclear to ditch coal and power AI',
    },
    {
        id: 2,
        name: 'Photoshop Instructor',
        href: '#',
        imageSrc: '/assets/mentor/boy2.svg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Cristian Doru Barin',
    },
    {
        id: 3,
        name: 'SEO Expert',
        href: '#',
        imageSrc: '/assets/mentor/boy3.svg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Tanzeel Ur Rehman',
    },
    {
        id: 4,
        name: 'UI/UX Designer',
        href: '#',
        imageSrc: '/assets/mentor/boy4.svg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Andrew Williams',
    },
    {
        id: 5,
        name: 'Web Development / Web Design',
        href: '#',
        imageSrc: '/assets/mentor/boy5.svg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Brad Schiff',
    },
    {
        id: 6,
        name: 'Adobe Certified Instructor',
        href: '#',
        imageSrc: '/assets/mentor/girl1.svg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Daniel Walter Scott',
    },
]

const News = () => {
    return (

          
            <>

<main>
    
</main>

      <div id="news-section" className="flex flex-col text-inherit items-center bg-[#FBF6F1] justify-center text-black py-20  text-center ">
      <h1 className="  flex text-6xl font-semibold py-24 font-['Open_Sans']">Сүүлд нийтлэгдсэн мэдээллүүд</h1>
                    
      <div className="grid grid-cols-3 gap-8 mx-28">

   

        


        <div className=" flex flex-col items-center">
          <Image className="w-[350px] h-[200px]" src={"/jlpt.jpeg"} width={350} height={200} alt="logo" />
          <Link href={"/"} className="font-semibold text-2xl my-4 leading-relaxed ">JLPT 2024 ЯПОН ХЭЛНИЙ МЭДЛЭГИЙН ТҮВШИН ТОГТООХ ШАЛГАЛТЫН МЭДЭЭЛЭЛ</Link>
          <div className=" flex border-b border-solid border-zinc-800 w-20 h-5 "></div>
          <p className="py-8 font-serif"> Энэхүү шалгалтын гол зорилго нь Япон хэлний мэдлэгийн түвшинг тогтоож, баталгаажуулахад оршино. Зохион байгуулагч: JAPAN FOUNDATION Хэрэгжүүлэгч байгууллага: Монголын Япон Хэлний Багш нарын Холбоо </p>
        </div>




        <div className="flex flex-col items-center">
          <Image className="w-[350px] h-[200px]" src={"/kanji.jpeg"} width={250} height={200} alt="logo" />
          <Link href={"/"} className="font-semibold text-2xl my-4 leading-relaxed">JLPT болон J.TEST ийн шалгалтын мэдээлэл</Link>
          <div className=" flex border-b border-solid border-zinc-800 w-20 h-5 "></div>
          <p className="py-8 font-serif"> Энэхүү шалгалтын гол зорилго нь Япон хэлний мэдлэгийн түвшинг тогтоож, баталгаажуулахад оршино. Зохион байгуулагч: JAPAN FOUNDATION Хэрэгжүүлэгч байгууллага: Монголын Япон Хэлний Багш нарын Холбоо </p>
        </div>




        <div className="flex flex-col items-center">
          <Image className="w-[350px] h-[200px]" src={"/JLPT-Exam .jpeg"} width={350} height={200} alt="logo" />
          <Link href={"/"} className="font-semibold text-2xl my-4 leading-relaxed">2023 оны 12 сарын JLPT шалгалтын батламж сунгаж олгох тухай</Link>
          <div className=" flex border-b border-solid border-zinc-800 w-20 h-5 "></div>
          <p className="py-8 font-serif"> JLPT БАТЛАМЖ СУНГАЖ ОЛГОХ ТУХАЙ </p>
        </div>

      </div>
    </div>
    


    
    <div className="flex flex-col items-center justify-center bg-blue-500 text-black py-20 text-center min-h-screen">
      <div className="grid grid-cols-3 gap-8 mx-28">


        <div className=" flex flex-col items-center">
          <h1 className="">Япон хэлний N5,N4 төвшинд элсэлт авч байна.</h1>
          <div className=" flex border-b border-solid border-zinc-800 w-20 h-5"></div>
          <p className="py-8 font-serif"> 11 сарын 8 ны өдөр эхлэнэ. </p>
          <p> Даваа, Лхагва, Баасан гаригуудад 14:00-16:00 цагийн хооронд хичээллэнэ.</p>
          <button className="bg-[#417cbf] rounded py-2 px-8 text-neutral-50 flex items-center mt-10">
  <span>Дэлгэрэнгүй</span>
  <FontAwesomeIcon icon={faCircleArrowRight} style={{ width: '16px', height: '16px', marginLeft: '8px' }} />
</button>


        </div>
 

        <div className="flex flex-col items-center">
          <Image className="w-[350px] h-[450px]" src={"/elselt.png"} width={250} height={200} alt="logo" />
        </div>

      </div>
    </div>
    </>
    )
}

export default News;
