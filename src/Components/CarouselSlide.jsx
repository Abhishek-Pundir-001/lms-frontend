function CarouselSlide({ image, title, description, id, total }) {
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className="text-center flex flex-col items-center  w-full ">
                <img src={image} className="h-36 w-40 rounded-full" alt="img"/>
                <div className="space-y-2">
                    <h3 className="text-yellow-50">{title}</h3>
                    <p className="text-yellow-600">{description}</p>
                </div> 
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 m-auto w-80">
                    <a href={`#slide${(id === 1 ? total : (id - 1))}`} className="btn btn-circle">❮</a>
                    <a href={`#slide${((id === total) ? 1 : (id + 1))}`} className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    )
}
export default CarouselSlide;