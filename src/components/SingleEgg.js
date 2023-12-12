import React from 'react'
import { useDispatch } from 'react-redux'
import { updatePetInfo } from '../features/pet'

const SingleEgg = ({ egg, index }) => {
	const dispatch = useDispatch()
	const apiUrl = process.env.REACT_APP_BASE_URL
	const apiUrlLocal = process.env.REACT_APP_BASE_URL_LOCAL

	function sellEgg() {
		fetch(`${apiUrl}sellEgg/` + index || `${apiUrlLocal}sellEgg/` + index)
			.then(res => res.json())
			.then(data => {
				dispatch(updatePetInfo(data.petInfo))
			})
	}
	return (
		<div className='egg'>
			<h5>Price: {egg.eggPrice} $</h5>
			<img
				src='https://clipart-library.com/image_gallery2/Egg-PNG-Picture.png'
				alt=''
			/>
			<button onClick={sellEgg}>SELL</button>
		</div>
	)
}

export default SingleEgg
