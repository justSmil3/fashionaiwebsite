import logo from '../logo.svg';
import '../App.css';
import React, {useState} from 'react';
import ImagePrompt from '../imagePrompt.js';
import ImageInputPrompt from '../imageInputPrompt.js';
import ImageHoverPrompt from '../imageIhoverPrompt.js'
import Header from '../Header.js';
import Prompt from '../prompt.js';
import Settings from '../settings';
import CustomNodeFlow from '../CusomNodeFlow';
import Gallery from '../gallery';
import {useNavigate} from 'react-router-dom';

const imageList = [
  { src: '/images/image.png', alt: 'Image description 1' },
  { src: '/images/image2.png', alt: 'Image description 2' },
  { src: '/images/image1.png', alt: 'Image description 1' },
  { src: '/images/image3.png', alt: 'Image description 2' },
  { src: '/images/image4.png', alt: 'Image description 1' },
  { src: '/images/image5.png', alt: 'Image description 2' },
  // ...add more images
];

function CreatePage() {
  const [inputText, setInputText] = useState('');

	const inputTextChange = (e) => {
		setInputText(e.target.value);
	};
  const navigate = useNavigate();
  return (
    <div className="App">
      <body className="flex flex-col h-100%">
        
      <Header/>
  <div class="flex h-[calc(100vh-46px)] items-center hidden sm:block">
	  <div className='flex items-center h-full justify-center w-full'>
          <div className='flex flex-col h-full basis-3/4'>
			  <div className='flex pt-[35vh]'>
            <div className='flex grow h-44 pr-4'>
				<Prompt inputText={inputText} inputTextChange={inputTextChange}/>
            </div>
                <div className='flex w-min h-44 aspect-square pr-2'>
                    <ImageHoverPrompt inputText={'reference sketch'}/>
                </div>
                <div className='flex w-min h-44 aspect-square pl-2'>
                  <ImageInputPrompt inputText={'patterns'}/>
                </div>
              </div>
			<div className='flex basis-3/4 grow justify-between pb-[35vh]'>
				<div className='py-3'>
					<button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'>Settings</button>
					</div>
				<div>
				</div>
				<div className='py-3'>
					<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full py-2 px-16' onClick={() => navigate("/edid", {
						state: {
							prompt: inputText
						}
					})}>Generate</button>
				</div>
			</div>
				<Gallery images={imageList}/>
			</div>
        </div>
        </div>

        <div className='sm:hidden'>
          <div className='flex grid grid-cols-1 items-center gap-8 p-8'>
            <div>
              <Prompt/>
            </div>
            <div className='flex justify-center'>
                <div className='flex p-[2%] w-1/3 h-min aspect-square'>
                    <ImageInputPrompt inputText={'pattern'}/>
                </div>
                <div className='flex p-[2%] w-1/3 h-min aspect-square'>
                  <ImageInputPrompt inputText={'style motives'}/>
                </div>
              </div>
              <div className='h-32'>
                <Settings />
              </div>
              <div className='h-96'>
                <ImagePrompt/>
              </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default CreatePage;
