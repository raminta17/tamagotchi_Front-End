import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateMessage, updatePetInfo } from '../features/pet'

const StartGame = () => {
	const [animals, setAnimals] = useState([])
	const apiUrl = process.env.REACT_APP_BASE_URL
	const apiUrlLocal = process.env.REACT_APP_BASE_URL_LOCAL

	useEffect(() => {
		fetch(`${apiUrl}sendAnimalSelection` || `${apiUrlLocal}sendAnimalSelection`)
			.then(res => res.json())
			.then(data => {
				setAnimals(data)
			})
	}, [])

	const nav = useNavigate()
	const dispatch = useDispatch()

	function startGame(animal) {
		fetch(`${apiUrl}select/` + animal || `${apiUrlLocal}select/` + animal)
			.then(res => res.json())
			.then(data => {
				dispatch(updatePetInfo(data.petInfo))
				dispatch(updateMessage(data.message))
			})
		nav('/game')
	}

	return (
		<div className='container'>
			<h1>CHOOSE YOUR PET</h1>
			<div className='chooseAnimal'>
				{animals.map((animal, index) => (
					<img
						onClick={() => startGame(animal.petName)}
						key={index}
						src={animal.petImages[0]}
						alt=''
					/>
				))}
			</div>
		</div>
	)
}

export default StartGame
