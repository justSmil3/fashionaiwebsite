import { useLocation } from 'react-router-dom';
import 'tui-image-editor/dist/tui-image-editor.css';
import ImageEditor from '@toast-ui/react-image-editor';

function EditPage(){
	const [imageSrc, setImageSrc] = useState("");
	const imageEditor = React.createRef();

	const location = useLocation();
	var text = location.state.prompt;
	return(
		<div>
		<div className='text-white font-3xl'>{text}</div>
			<div><ImageEditor useDiagnostigs={false}/></div>
		</div>
	);
}

export default EditPage;
