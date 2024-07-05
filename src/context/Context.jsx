import { createContext } from "react";
import singer1 from '../assets/sing1.jpg'
import singer2 from '../assets/sing2.webp'
import singer3 from '../assets/sing3.jpg'
import singer4 from '../assets/sing4.jpg'
import singer5 from '../assets/sing5.webp'

import album1 from '../assets/album1.jpg'
import album2 from '../assets/album2.jpg'
import album3 from '../assets/album3.jpg'
import album4 from '../assets/album4.jpg'
import album5 from '../assets/album5.jpg'

import lilDurkCover from '../assets/lilDurkCover.webp'
import lilDurk from '../assets/lilDurk.jpg'

import otilacover from '../assets/otilacover.jpg'
import otila from '../assets/otila.jpg'

import selenaGomezcover from '../assets/selenaGomezcover.jpg'
import selenaGomez from '../assets/selenaGomez.jpg'

import song1 from "../audio/song1.mp3";
import song2 from "../audio/song2.mp3";
import song3 from "../audio/song3.mp3";
import song4 from "../audio/song4.mp3";
import song5 from "../audio/song5.mp3";

 


export const ContextProvider = createContext(null)

export const AppProvider = ({children }) => {
    let artists = [
        {
            name : 'Otira',
            singer : otila,
            title : 'Artists',
            followers : '30,500,47 monthly listeners',
            cover :otilacover,
            audios : [
                {
                    img : '',
                    name : 'Otira Durk ',
                    view : '231,435,23',
                    time : '3:54',
                    songs : song1
                },
                {
                    img : '',
                    name : 'Otira Durk',
                    view : '231,435,23',
                    time : '3:04',
                    songs : song2
                },
                {
                    img : '',
                    name : 'Otira Durk',
                    view : '231,435,23',
                    time : '3:40',
                    songs : song3
                },
                {
                    img : '',
                    name : 'Otira Durk',
                    view : '231,435,23',
                    time : '3:54',
                    songs : song4
                },
                {
                    img : '',
                    name : 'Otira Durk',
                    view : '231,435,23',
                    time : '4:50',
                    songs : song5
                }
            ]
        },
        {
            name : 'Lil Durk',
            singer : lilDurk,
            title : 'Artists',
            followers : '316,200,45 monthly listeners',
            cover : lilDurkCover,
            audios : [
                {
                    img : '',
                    name : 'oooooo',
                    view : '231,435,23',
                    time : '3:54',
                    songs : song1
                },
                {
                    img : '',
                    name : 'oooooo',
                    view : '231,435,23',
                    time : '3:54',
                    songs : song2
                }
            ]
        },
        {
            name : 'Selena Gomez',
            singer : selenaGomez,
            title : 'Artists',
            followers : '44,400,07 monthly listeners',
            cover :selenaGomezcover,
            audios : [
                {
                    img : '',
                    name : 'oooooo',
                    view : '231,435,23',
                    time : '3:54'
                }
            ]
        },
        {
            name : 'Hpras Hope',
            singer : singer4,
            title : 'Artists',
            followers : '16,900,4 monthly listeners',
            audios : [
                {
                    img : '',
                    name : 'oooooo',
                    view : '231,435,23',
                    time : '3:54'
                }
            ]
        },
        {
            name : 'Adrdw Aya',
            singer : singer5,
            title : 'Artists',
            followers : '16,600,417 monthly listeners',
            audios : [
                {
                    img : '',
                    name : 'oooooo',
                    view : '231,435,23',
                    time : '3:54'
                }
            ]
        },
    ]

    let albums = [
        {
            title : 'ROCKSTART',
            album : album1,
            name : 'Umair'
        },
        {
            title : 'Ghost',
            album : album2,
            name : 'Diljit Dasanjh'
        },
        {
            title : 'Making Memories',
            album : album3,
            name : 'Karan Aujla'
        },
        {
            title : 'HIT ME HARD AND SOFT',
            album : album4,
            name : 'Billie Eilish'
        },
        {
            title : 'Still Rolling',
            album : album5,
            name : 'Shubh'
        },
        
    ]
    return <ContextProvider.Provider  value={{artists,albums}}>
        {children }
    </ContextProvider.Provider >
}