import React, {useState} from 'react';
import Toolbar from './ClaireImageToolbar'

class ClaireImageEditor extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			split: false
		};
	}
	
	render(){
		return( 
			<div className='bg-black text-white'>
				<Toolbar />
				{this.state.split && (
					<div>Hello</div>
				)
				}
				{!this.state.split && (
					<div>Hi</div>
				)
				}
			</div>
		);
	}
}

export default ClaireImageEditor;
