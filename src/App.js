import logo from './logo.svg';
import './App.css';
import ImagePrompt from './imagePrompt.js';
import ImageInputPrompt from './imageInputPrompt.js';
import Header from './Header.js';
import Prompt from './prompt.js';
import Settings from './settings';

function App() {
  return (
    <div className="App">
      <Header/>
      <body className="min-h-screen bg-slate-900">
        
  <div class="p-8 px-[10%]">
      <div className='flex flex-row justify-center w-full'>
          <div className='flex grid grid-cols-1 justify-center basis-2/3'>
            <div className='flex grow'>
              <Prompt/>
            </div>
            <div className='flex grow'>
              <div className='flex w-1/2 p-4'>
                <div className='flex w-1/2 p-2'>
                  <ImageInputPrompt inputText={'pattern'}/>
                </div>
                <div className='flex w-1/2 p-2'>
                  <ImageInputPrompt inputText={'style motives'}/>
                </div>
              </div>
              <div className='flex grow p-4'>
                <Settings />
              </div>
            </div>
          </div>
          <div className='basis-1/3 h-96'>
            <ImagePrompt/>
          </div>
        </div></div>
      </body>
    </div>
  );
}

export default App;
