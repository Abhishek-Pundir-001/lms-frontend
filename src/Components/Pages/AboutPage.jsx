import CarouselSlide from "../CarouselSlide";
import HomeLayout from "../Layouts/HomeLayout";
import { celebrities } from "../Constants/Celeberitiesdetails";
function AboutPage() {

    return (
        <HomeLayout>
            <div className="min-h-[100vh] bg-black">
                <div className="flex justify-center h-[60vh] items-center gap-5 bg-black">
                    <div className="w-1/2 ">
                        <h1 className="text-5xl font-bold text-yellow-500">Lorem, ipsum dolor.</h1>
                        <p className="text-yellow-50 font-semibold text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium eius sequi porro, doloremque voluptas quos repellendus totam ad dolorum culpa architecto nobis, exercitationem accusamus ipsam quisquam libero, a asperiores sunt.</p>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1704986528748-bf7ac93bd0d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D" alt="" srcset=""
                            className="h-[50vh] rounded-lg"
                        />
                    </div>
                </div>

                <div className="carousel w-full h-[40vh] flex items-center">
                    {/* <div id="slide1" className="carousel-item relative w-full">
                        <div className="text-center flex flex-col items-center  w-full ">
                            <img src="https://images.unsplash.com/photo-1601921004897-b7d582836990?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFoYXRhbWElMjBnYW5kaGl8ZW58MHx8MHx8fDA%3D" className="h-36 w-40 rounded-full" />
                            <div className="space-y-2">
                                <h3 className="text-yellow-50">Mahatma Gandhi</h3>
                                <p className="text-yellow-600">"An eye for an eye makes the whole world blind"</p>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 m-auto w-80">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                    </div>

                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="text-center flex flex-col items-center justify-center w-full">
                            <img src="https://media.istockphoto.com/id/1054049520/photo/nelson-mandela-portrait.webp?b=1&s=170667a&w=0&k=20&c=AqITUHARfAXQYMg6_n5i1QHI7QzAq4J8sWUYcFYNRjo=" className="h-36 w-40 rounded-full" />
                            <div className="space-y-2">
                                <h3 className="text-yellow-50">Nelson Mandela</h3>
                                <p className="text-yellow-600">"Eduation is the most powerfull tool to change the world"</p>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 m-auto w-80">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="text-center flex flex-col items-center justify-center w-full">
                            <img src="https://media.gettyimages.com/id/1251799893/vector/colorized-antique-photograph-portrait-of-abraham-lincoln.jpg?s=612x612&w=0&k=20&c=te0UZqbiQ1fkorz7ft6XVEHNeYFKk5WZAeguzW-UU9c=" className="h-36 w-40 rounded-full" />
                            <div className="space-y-2">
                                <h3 className="text-yellow-50">Abraham Lincon</h3>
                                <p className="text-yellow-600">"Be sure you put your feet in the right place, then stand firm. ..."</p>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 m-auto w-80">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className="text-center flex flex-col items-center justify-center w-full">
                            <img src="https://media.gettyimages.com/id/517721926/photo/portrait-of-author-of-theory-of-relativity-an-excellent-portrait-of-albert-einstein-author-of.jpg?s=612x612&w=0&k=20&c=4MKgtT0ruFntXN4-x_kj1zDSlS4lnfWWMjLPMfa9iwc=" className="h-36 w-40 rounded-full" />
                            <div>
                                <h3 className="text-yellow-50">Albert Einstein</h3>
                                <p className="text-yellow-600">Imagination is everything. ...</p>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 m-auto w-80">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                    </div> */}
                    {celebrities.map(celeb =>(<CarouselSlide {...celeb} key={celeb.id}
                        image={celeb.image}
                        description={celeb.description}
                        title={celeb.title}
                        id={celeb.id}
                        total = {celebrities.length}/>))}
                </div>
            </div>

        </HomeLayout>
    )
}
export default AboutPage;