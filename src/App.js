import logo from './logo.svg';
import './App.css';
import ImagePrompt from './imagePrompt.js';
import ImageInputPrompt from './imageInputPrompt.js';
import Header from './Header.js';
import Prompt from './prompt.js';
import Settings from './settings';
import CustomNodeFlow from './CusomNodeFlow';

function App() {
  return (
    <div className="App">
      <Header/>
      <body className="min-h-screen bg-slate-900">
        
  <div class="p-8 px-[10%] hidden sm:block">
      <div className='flex flex-row justify-center w-full'>
          <div className='flex grid grid-cols-1 justify-center basis-2/3'>
            <div className='flex grow pr-4'>
              <Prompt/>
            </div>
            <div className='flex grow'>
              <div className='flex w-1/2 pr-2'>
                <div className='flex p-[2%] w-1/2 h-min aspect-square'>
                    <ImageInputPrompt inputText={'pattern'}/>
                </div>
                <div className='flex p-[2%] w-1/2 h-min aspect-square'>
                  <ImageInputPrompt inputText={'style motives'}/>
                </div>
              </div>
              <div className='flex grow pr-4'>
                <Settings />
              </div>
            </div>
          </div>
          <div className='basis-1/3 h-96'>
            <ImagePrompt/>
          </div>
        </div></div>

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
        <div className='flex'>
          <CustomNodeFlow/>
        </div>
      </body>
    </div>
  );
}

export default App;
