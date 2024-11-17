"use client";
import Slider from "react-slick";
import React, { Component } from "react";

// CAROUSEL DATA

interface DataType {
  profession: string;
  name: string;
  imgSrc: string;
  starimg: string;
  detail: string;
}

const postData: DataType[] = [
  {
    profession: "Анхан шатны суралцагч",
    name: "Цогтбаатар Эрдэнэбилэг",
    imgSrc: "/assets/students/user-1.jpg",
    starimg: "/assets/students/stars.png",
    detail:
      "Миний бодлоор дулаан уур амьсгалтай, хичээлээ сайн заадаг, үргэлж дэмждэг, хөөрхөн багштай, сэргэлэн цовоо сайхан хамт олон шүү. That's why this course is so great!",
  },
  {
    profession: "Багш",
    name: "Отгонтөгс Жамбал",
    imgSrc: "/assets/students/user-2.jpg",
    starimg: "/assets/students/stars.png",
    detail: "JM DREAM Япон Монголын гүүр билээ. みんなさん　頑張ってね",
  },
  {
    profession: "Ахисан шатны суралцагч",
    name: "Жавхлан Арслан",
    imgSrc: "/assets/students/user-3.jpg",
    starimg: "/assets/students/stars.png",
    detail:
      "アルファベットも分からない状態でこのコースに入学しましたが、今ではN2レベルを取得しています。先生ありがとうございます。",
  },
  {
    profession: "Гоомарал Наранханд",
    name: "Дунд шатны суралцагч",
    imgSrc: "/assets/students/user-1.jpg",
    starimg: "/assets/students/stars.png",
    detail:
      "Сургалтын төвийн багш нар Япон улсад сургууль төгссөн, чадварлаг, туршлагатай байсан ба мэргэжлийн найрсаг хамт олон байсан. Баярлалаа!  ",
  },
];

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };

    return (
      <div id="student-comments-section" className="bg-bgpink">
        <div className="mx-auto max-w-2xl px-4 pt-16 pb-64 sm:pt-32 lg:max-w-7xl lg:px-8">
          <div className="sm:flex justify-between items-center pb-6">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">
              Бидний сэтгэгдэлүүд
            </h2>
          </div>

          {/* <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className='bg-white m-4 pt-8 px-12 pb-10 text-center rounded-lg'>
                                    <div className='relative'>
                                        <img src={items.imgSrc} alt="gaby" className="inline-block h-16 w-16 m-auto rounded-full ring-2 ring-white" />
                                        <img src={'/assets/students/greenpic.svg'} alt="greenbg" className=" absolute inline-block h-6 w-6 position-green" />
                                    </div>
                                    <h3 className='text-sm pt-4 pb-2'>{items.profession}</h3>
                                    <h4 className='text-2xl font-semibold pb-3'>{items.name}</h4>
                                    <img src={items.starimg} alt="stars-img" className='m-auto pb-6' />
                                    <p className='text-lg font-medium leading-9'>{items.detail}</p>
                                </div>
                            </div>
                        ))}
                    </Slider> */}
        </div>
      </div>
    );
  }
}
