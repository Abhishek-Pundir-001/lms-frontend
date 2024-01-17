import HomeLayout from "../Layouts/HomeLayout";

function HomePage() {
    return (
        <HomeLayout>
            <div className="pt-10 min-h-[90vh] flex justify-center items-center gap-10  bg-slate-950">
                <div className="w-1/2 space-y-6">
                    <h1 className="text-5xl font-semibold text-yellow-50">Find Out Best
                        <span className="text-yellow-500 font-bold">Online Courses</span>
                    </h1>
                    <p className="text-gray-200 text-xl">we have a large library taught by highly qualified and skilled faulties at a very affordable cost.</p>
                    <div className="space-x-3">
                        <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg focus:outline-white">Explore Courses</button>
                        <button className="px-5 py-2 border-yellow-600 border-2 hover:bg-green-900 transition-all ease-in-out  text-white rounded-lg focus:outline-white ">Contact us</button>
                    </div>
                </div>

            </div>
        </HomeLayout>
    )
}
export default HomePage