import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdNavigateBefore, MdChevronRight } from 'react-icons/md';

import Movie from './Movie';


const Row = ({ title, url, rowId }) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(url).then((response) => setMovies(response.data.results))
    }, [url])

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowId);
        slider.scrollLeft = slider.scrollLeft - 500;
      };
      const slideRight = () => {
        var slider = document.getElementById('slider' + rowId);
        slider.scrollLeft = slider.scrollLeft + 500;
      };
    

    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative flex items-center group'>
                <MdNavigateBefore
                          onClick={slideLeft}

                    className='bg-red-500 left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={40}
                />
                <div id={'slider'+ rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies.map((movie, id) => (
                        <Movie movie={movie} key={id} />
                    ))}
                </div>
                <MdChevronRight
                          onClick={slideRight}

                    className='bg-red-500 right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={40}
                />
            </div>
        </>
    )
}

export default Row
