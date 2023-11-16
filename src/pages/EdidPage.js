import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import 'tui-image-editor/dist/tui-image-editor.css';
import ImageEditor from '@toast-ui/react-image-editor';
import ClaireImageEditor from '../components/ClaireImageEditor'

function EditPage(){
	const [imageSrc, setImageSrc] = useState("");
	const imageEditor = React.createRef();

	const location = useLocation();
	var text = location.state.prompt;
	return(
		<div>
			<div>
				<ClaireImageEditor />
			</div>
		<div className='text-white font-3xl'>{text}</div>
			<div><ImageEditor
    includeUI={{
      loadImage: {
        path: './images/image1.png',
        name: 'SampleImage',
      },
      menu: ['shape', 'filter', 'draw'],
      initMenu: 'filter',
		uiSize: {
        width: '1000px',
        height: '700px',
      },
      menuBarPosition: 'bottom',
    }}
    cssMaxHeight={500}
    cssMaxWidth={700}
    selectionStyle={{
      cornerSize: 20,
      rotatingPointOffset: 70,
    }}
    usageStatistics={true}
			/></div>
		</div>
	);
}

export default EditPage;
