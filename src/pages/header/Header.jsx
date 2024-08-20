import React from 'react'
import './Header.css'
import img from '../../img/header2.webp'
import img2 from '../../img/header.webp'
import Slider from 'react-slick'
import { data } from './data'


export default function Header() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 800,
        slidesToShow: 7,
        slidesToScroll: 1
    };
    return (
        <div className='header'>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                </ol>
                <div class="carousel-inner">
                    <div className="carousel-item active">
                        <img className='header-img' style={{ width: "100%", height: "500px" }} src={img} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img className='header-img' style={{ width: "100%", height: "500px" }} src={img2} alt="..." />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <Slider className='app' {...settings}>
                {
                    data.map((item, index) =>
                        <a href={item.href} key={index}>
                            <h3>{item.name}</h3>
                        </a>
                    )
                }

            </Slider>
        </div>
    )
}
