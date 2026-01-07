import React from 'react';
import Header from '../utils/Header';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import BlogLayout from '../components/BlogLayout';

const BlogSection = () => {
  const blogInfo = [
    {
      id: 1,
      blogImage: "/images/blog/computer.jpg",
      blogTitle: "Revolutionizing Gaming: The Latest Gaming Consoles and Accessories",
      blogerName: "by justin",
      blogPublishTime: "2 january ,2024",
    },
    {
      id: 2,
      blogImage: "/images/blog/drone.jpg",
      blogTitle: "Enhancing Your Audio Experience: The Best Headphones and Speakers",
      blogerName: "by justin",
      blogPublishTime: "2 january ,2024",
    },
    {
      id: 3,
      blogImage: "/images/blog/gaming-accessories.jpg",
      blogTitle: "The Evolution of Television: Exploring the Latest TV Technologies",
      blogerName: "by justin",
      blogPublishTime: "2 january ,2024",
    },
    {
      id: 4,
      blogImage: "/images/blog/iphone.jpg",
      blogTitle: "The Evolution of Television: Exploring the Latest TV Technologies",
      blogerName: "by justin",
      blogPublishTime: "2 january ,2024",
    },
    {
      id: 5,
      blogImage: "/images/blog/photography.jpg",
      blogTitle: "The Evolution of Television: Exploring the Latest TV Technologies",
      blogerName: "by justin",
      blogPublishTime: "2 january ,2024",
    }
  ]
  return (
    <section className="py-5 lg:py-10">
      <div className="container mx-auto">
        <div className="mobile-padding">
          {/* header start... */}
          <Header
            headingText={"latest news & updates"}
          />
          {/* header end... */}
          {/* content start..... */}
          <div className="relative group mt-5">
            {/* 1. navigation.. */}
            <span className="blog-prev-btn swiper-left"> <IoIosArrowBack /> </span>
            <span className="blog-next-btn swiper-right"><IoIosArrowForward />  </span>
            {/* 2. swiper */}
            <Swiper
              modules={[Navigation]}
              slidesPerView={4}
              spaceBetween={20}
              navigation={{
                prevEl: ".blog-prev-btn",
                nextEl: ".blog-next-btn"
              }}
              loop={true}
              speed={1000}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 5 },
                340: { slidesPerView: 1, spaceBetween: 5 },
                480: { slidesPerView: 2, spaceBetween: 10 },
                780:{ slidesPerView: 2, spaceBetween: 10},
                1024: { slidesPerView: 4, spaceBetween: 24 },
              }}
            >
              {blogInfo.map((blog) => (
                <SwiperSlide>
                  <BlogLayout blog={blog} />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* end---- */}
          </div>
          {/* content end..... */}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;