import logo from './logo.svg';
import './App.css';
import ImagePrompt from './imagePrompt.js';
import ImageInputPrompt from './imageInputPrompt.js';
import ImageHoverPrompt from './imageIhoverPrompt.js'
import Header from './Header.js';
import Prompt from './prompt.js';
import Settings from './settings';
import CustomNodeFlow from './CusomNodeFlow';

function App() {
  return (
    <div className="App">
      <body className="flex flex-col min-h-screen bg-slate-900">
        
      <Header/>
  <div class="flex h-[calc(100vh-46px)] items-center hidden sm:block">
      <div className='flex items-center h-full justify-center w-full'>
          <div className='flex basis-3/4'>
            <div className='flex grow h-44 pr-4'>
              <Prompt/>
            </div>
                <div className='flex w-min h-44 aspect-square pr-2'>
                    <ImageHoverPrompt inputText={'reference sketch'}/>
                </div>
                <div className='flex w-min h-44 aspect-square pl-2'>
                  <ImageInputPrompt inputText={'patterns'}/>
                </div>
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

export default App;
