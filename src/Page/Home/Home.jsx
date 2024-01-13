import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import "./Style.css"
import { Link } from "react-router-dom";

const Home = () => {
    const [shows , setShows] = useState([])

    useEffect(()=>{
        fetch("https://api.tvmaze.com/search/shows?q=all ")
        .then(res => res.json())
        .then(data =>{
            setShows(data)
            console.log(data);
        })
    } ,[])

  


    return (
        <div className="lg:m-16 m-6 ">
            <h1 className=" lg:text-5xl text-3xl text-gray-600 lg:font-bold font-semibold text-center mb-6 lg:mb-12">Discover Your Next Favorite Show!</h1>
            <div  className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-3" >
            {
                shows.map(show =>
                    <div key={show.show.id} >
<div  className="card lg:card-side bg-base-100 shadow-xl mb-6 me-8">
                <figure><img src={show.show.image?.medium} alt="Album" className=""/></figure>
                <div className="card-body">
                  <h2 className="card-title lg:text-4xl text-2xl text-gray-600 font-normal">Show info</h2>
                  <p className="font-medium text-gray-600"> <span className="text-xl font-semibold text-black">Show Name: </span> {show.show.name}</p>

                  <p className="font-medium text-gray-600"> <span className="text-xl font-semibold text-black"> Type: </span> {show.show.type}</p>

                  <p className="font-medium text-gray-600"> <span className="text-xl font-semibold text-black">Language: </span> {show.show.language}</p>

                  <p className="font-medium text-gray-600"> <span className="text-xl font-semibold text-black"> Status: </span> {show.show.status}</p>

                  <p className="font-medium text-gray-600"> <span className="text-xl font-semibold text-black">Genres: </span> {show.show.genres[0]} | {show.show.genres[1]} </p>

                  <p className="font-medium text-gray-600"> <span className="text-xl font-semibold text-black">Network: </span> {show.show.network?.name}</p>

                  <p className="font-medium text-gray-600"> <span className="text-xl font-semibold text-black">Schedule: </span> {show.show.schedule?.days[0]} at {show.show.schedule?.time} </p>

                  <p className="font-medium text-gray-600"> <span className="text-xl font-semibold text-black"> Rating: </span> {show.show.rating?.average}</p>

                  <div className="card-actions justify-end">
                    <Link to={`/show/${show.show.id}`} className="button-89 font-bold text-xl items-center flex  gap-1" >
                    show summary <FaArrowRight />
                    </Link>
                    
                  </div>
                </div>
              </div>
                    </div>
                 )
            }
            </div>
          
      
        </div>
    );
};

export default Home;