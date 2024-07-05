import React, { useContext, useRef, useState } from 'react'
import Aside from '../components/header/Aside'
import Navbar from '../components/Navbar'
import {   ContextProvider } from '../context/Context'

import song from '../audio/song1.mp3'
 
import ReactHowler from 'react-howler';

import { FaPlay } from "react-icons/fa";
import { IoPlaySkipBackCircleSharp,IoPlaySkipForwardCircleSharp} from "react-icons/io5";
import { FaRegCircleStop } from "react-icons/fa6";



const Artist = () => {
    // let [playMusic,setPlay] = useState(false)
    let [playMusic,setPlayMusic] = useState(false)
    let [index,setIndex] = useState(1)
    let soundRef = useRef(null);
    const currentRef = useRef(index);
    const data = useContext(ContextProvider)

    let location = window.location.href.split('/')[4]
    let name = location.split('-').join(' ')

    let getArtist = data.artists.filter((items,index) => {
        return items.name == name
    })


    
    function startAudio(element,item){
        if (!soundRef.current) {
            soundRef.current = new Howl({
              src: [element],
              onend: function() {
                console.log('Finished playing!');
              }
            });
            soundRef.current.play();
            setPlayMusic(true)
          }

    }

    function stopAudio(element){
        soundRef.current.pause();
        if(soundRef.current){
            soundRef.current = new Howl({
                src: [element],
                onend: function() {
                  console.log('Finished playing!');
                }
              });
              setPlayMusic(true)
              soundRef.current.play();
         }
    }

    const playAudio = (element,index) => {
        if (!soundRef.current) {
           startAudio(element)
        }else{
            // console.log(soundRef.current._duration)
            stopAudio(element)
        }
      };

      const play = () => {
        soundRef.current.play();
        setPlayMusic(true)
      }
      const stop = () => {
        soundRef.current.pause();
        setPlayMusic(false)
      }

      const next = (e) => {
        if (!soundRef.current) {
            soundRef.current = new Howl({
                src: [getArtist[0].audios[index].songs],
                onend: function() {
                  console.log('Finished playing!');
                }
              });
              soundRef.current.play();
              setPlayMusic(true)
               if(index <= getArtist[0].audios){
                   setIndex(index + 1)

               }
       
              
          }else{
        soundRef.current.pause();
        if(index >= getArtist[0].audios.length -1){
            setIndex(index = 0)
        }
        console.log(index)
            soundRef.current = new Howl({
                src: [getArtist[0].audios[index].songs],
                onend: function() {
                  console.log('Finished playing!');
                }
              });
              soundRef.current.play();
              setPlayMusic(true)
          }
      }
      
      
      
      
      const prev = (e) => {
        if (!soundRef.current) {
            soundRef.current = new Howl({
                src: [getArtist[0].audios[index].songs],
                onend: function() {
                  console.log('Finished playing!');
                }
              });
              soundRef.current.play();
              setPlayMusic(true)
              if(index >= getArtist[0].audios.length -1){
                  setIndex(index -1)
                  console.log(index)
              }
              
          }else{
        soundRef.current.pause();
       
        if(index >= getArtist[0].audios.length -1){
            setIndex(index = 0)
        }
        console.log(index)
            soundRef.current = new Howl({
                src: [getArtist[0].audios[index].songs],
                onend: function() {
                  console.log('Finished playing!');
                }
              });
              soundRef.current.play();
              setPlayMusic(true)
          }
      }
      
       
    
 
 
  return (

    <main className="bg-black relative h-screen">
    <div className='flex justify-between'>
        <div className="w-[24.5%] h-screen bg-black ">
          <Aside />
        </div>
        
        <div className="relative w-[75%] h-screen bg-zinc-900">
           
            <div className='w-full h-screen'>
            <div className={`w-full h-[45%] bg flex items-center px-12 bg-pink-900`} style={{ backgroundImage: `url(${getArtist[0].cover})`}}  >
                 <div className='w-full h-1/2 flex flex-col justify-end'>
                 <p className='text-white font-normal text-sm'>Verified Artist</p>
                 <h2 className='text-white text-5xl font-extrabold mt-3'>{getArtist[0].name}</h2>
                 <h2 className='text-white text-sm font-medium mt-5'>{getArtist[0].followers}</h2>
                 </div>
            </div>

            <div className="w-full h-[55%] px-10 ">
                <input className='w-full h-1 bg-purple-700' type="range" name="" id="" />
                <div className='flex w-full justify-center items-center py-8 gap-7'>
                    <IoPlaySkipBackCircleSharp onClick={prev} color='white' size={36} className='cursor-pointer'/>
                    <div > 
                    {playMusic ? <FaRegCircleStop onClick={() => stop()}    size={40} color='white' className='cursor-pointer' />  :  <FaPlay onClick={() => play()}  size={40} color='white' className='cursor-pointer' /> }
                    </div>
                    
                    <IoPlaySkipForwardCircleSharp onClick={next} color='white' size={36} className='cursor-pointer' />
                </div>

                <h2>Popular</h2>
                <div className=''>
                {
                   getArtist[0].audios.map((element,item) => {
                    return <div key={item} onClick={() => playAudio(element.songs,item)}  className='text-white flex items-center gap-4 my-6 cursor-pointer hover:bg-black/40 py-2 w-1/2 px-4 rounded-xl transition-all ease-in duration-200'>
                        <span>{item + 1}</span>
                        <div className='w-12 h-10 bg-white rounded-lg'></div>
                        <h4 className='w-96 text-md'>{element.name}</h4>
                        <h4 className='w-40 font-light text-gray-300'>{element.view}</h4>
                        <h4 className='text-gray-300'>{element.time}</h4>
                        {/* <ReactHowler src={element.songs} playing={playMusic} onClick={() => start(item)}  /> */}
                    </div>
                   })

                }
                </div>
            </div> 
            </div>

           <div className='absolute top-0 w-full'>
           <Navbar />
           </div>
        </div>
    </div>
    </main>
  )
}

export default Artist