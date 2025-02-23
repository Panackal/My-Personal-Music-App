import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets'

const DisplayAlbum = () => {
const {id}= useParams()
const albumData =albumsData[id];


  return (
    <>
        <Navbar/>
        <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
            <img className='w-48 rounded' src={albumData.image} alt="" />
        <div className='flex flex-col'>
            <p className='text-white'>PlayList</p>
            <h2 className='text-5xl font-bold mb-4 md:text-7xl text-white'>{albumData.name}</h2>
                <h4 className='text-white'>{albumData.desc}</h4>
                <p className='mt-1 '>
                    <img className='inline-block w-5' src={assets.spotify_logo} alt="" />
                    <b className='text-white'>Spotify Powered By Joshu </b>
                    
                </p>
        </div>
        </div>
        <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#ffffff] ' >
          <p><b className='mr-4'>#</b>Title</p>
        <p>Album</p>
        <p className='hidden sm:block'>Date added</p>
        <img src={assets.clock_icon} className='m-auto w-4 backdrop-brightness-0' alt=""  />
        </div>
        <hr className='text-white'/> <br />
        {
          songsData.map((item,index)=>(
            <div key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 items-center text-[#000000] hover:bg-orange-500 cursor-pointer '>
                    <p className='text-white'>
                      <b className='mr-4 text-white'>{index+1}</b>
                      <img src={item.image} alt="" className='inline w-10 mr-5' />
                      {item.name}
                    </p>

                    <p className='text-[15px] text-white '>{albumData.name}</p>
                    <p className='hidden sm:block text-[15px] text-white '>5 Days ago</p>
                    <p className='text-[15px] text-center text-white '>{item.duration}</p>
            </div>
          ))
        }
    </>
  )
}

export default DisplayAlbum