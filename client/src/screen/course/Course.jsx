import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom'

// //import all the images here 
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
import chapters  from '../../utils/Chapters.js' ;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: 320
}));



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

  console.log({chapters})

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