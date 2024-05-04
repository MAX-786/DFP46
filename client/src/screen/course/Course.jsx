import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom'

//import all the images here 
import Bocce from '../../assets/Bocce.png'
import Fan from '../../assets/Fan.png'
import FullBattery from '../../assets/FullBattery.png'
import Magnet from '../../assets/Magnet.png'
import Magnetic from '../../assets/Magnetic.png'
import Mu from '../../assets/Mu.png'
import QuickMode from '../../assets/QuickMode.png'
import RadioWave from '../../assets/RadioWaves.png'
import Radio from '../../assets/Radio.png'
import ReactImage from '../../assets/React.png'
import Searchlight from '../../assets/Searchlight.png'
import Swap from '../../assets/Swap.png'
import Tesla from '../../assets/Tesla.png'
import Transistor from '../../assets/Transistor.png'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: 320
}));


const chapters = [
  {
    id: 9,
    title: "Ray Optics and Optical Instruments",
    src: Searchlight,
    slug: "ray-optics",
    name: "Ray Optics and Optical Instruments",
    sections: ["Section 9.1", "Section 9.2", "Section 9.3"],
  },
  {
    id: 10,
    title: "Wave Optics",
    src: RadioWave,
    slug: "wave-optics",
    name: "Wave Optics",
    sections: ["Section 10.1", "Section 10.2"],
  },
  {
    id: 11,
    title: "Dual Nature of Radiation and Matter",
    src: Swap,
    slug: "dual-nature-of-radiation-and-matter",
    name: "Dual Nature of Radiation and Matter",
    sections: ["Section 11.1", "Section 11.2", "Section 11.3", "Section 11.4"],
  },
  {
    id: 12,
    title: "Atoms",
    src: Bocce,
    slug: "atoms",
    name: "Atoms",
    sections: ["Section 12.1", "Section 12.2", "Section 12.3", "Section 12.4"],
  },
  {
    id: 13,
    title: "Nuclie",
    src: ReactImage,
    slug: "nuclie",
    name: "Nuclie",
    sections: ["Section 13.1", "Section 13.2", "Section 13.3", "Section 13.4"],
  },
  {
    id: 14,
    title: "Semiconductors Electronics",
    src: Transistor,
    slug: "semiconductors",
    name: "Semiconductors Electronics",
    sections: ["Section 14.1", "Section 14.2", "Section 14.3", "Section 14.4"],
  },
];


const CourseChapterItem = ({ chapter }) => {
  return <Item>
    {/* <a href={`http://localhost:5173/chapters/${chapter.slug}`}> */}

    <div className='border-10 border-black w-40 h-40 mx-auto'>
      <img
        src={chapter.src}
        alt={chapter.name}
      />
    </div>
    <div className='text-md'>{chapter.name}</div>
    {/* </a> */}

  </Item>
}

export default function Course() {
  const navigate = useNavigate();

  const handleChapterNavigate = (chapter) => {
    console.log(chapter);
    navigate(`/courses/chapter/${chapter.slug}`);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className="w-full  py-6">

        <div className='text-2xl text-blue-600 text-center '>Explore the modules & learn</div>

        <div className='text-md text-black my-2 text-center px-2'>Chapters and modules play a crucial role in education by providing a systematic and organized approach to presenting information. Whether in traditional textbooks or modern online courses, these units contribute to effective learning by breaking down complex subjects into manageable, coherent sections.</div>

        <div className='w-32 h-10 mx-auto px-4 py-2 my-2 rounded-full text-center text-white bg-[#7D7E83]'>
          Chapters
        </div>
      </div>

      <Grid container spacing={4}>
        {
          chapters.map((chapter) => {
            return <Grid item md={4}
              key={chapter.id}
              sx={{ display: 'flex', justifyContent: 'space-around', cursor: 'pointer' }}
                onClick={() => handleChapterNavigate(chapter)}
              >
              <CourseChapterItem chapter={chapter} />
            </Grid>
          })
        }
      </Grid>
    </Box>
  );
}