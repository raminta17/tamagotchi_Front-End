import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import HungerBar from '../components/HungerBar'
import SingleEgg from '../components/SingleEgg'
import { updateMessage, updatePetInfo } from '../features/pet'

const GamePage = () => {
	const dispatch = useDispatch()
	const pet = useSelector(state => state.pet.petInfo)
	const nav = useNavigate()
	const apiUrl = process.env.REACT_APP_BASE_URL
	const apiUrlLocal = process.env.REACT_APP_BASE_URL_LOCAL

	useEffect(() => {
		const interval = setInterval(() => {
			fetch(`${apiUrl}getPetData` || `${apiUrlLocal}getPetData`)
				.then(res => res.json())
				.then(data => {
					dispatch(updatePetInfo(data.petInfo))
					dispatch(updateMessage(data.message))
					if (data.gameover) {
						nav('/gameover')
					}
				})
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	function feedPet() {
		fetch(`${apiUrl}feed` || `${apiUrlLocal}feed`)
			.then(res => res.json())
			.then(data => {
				dispatch(updatePetInfo(data.petInfo))
				dispatch(updateMessage(data.message))
			})
	}

	return (
		<>
			{pet && (
				<div className='container game'>
					<div className='leftSide'>
						<div className='petLevelCont'>
							<h3>Level: {pet.level}</h3>
							<h3>XP: {pet.xp}</h3>
						</div>
						<div className=' imgDiv'>
							<img src={pet.petSelected.petImage} alt='' />
						</div>

						<HungerBar pet={pet} />
					</div>
					<div className='rightSide'>
						<div className='eggsContainer f5'>
							{pet.eggs.map((egg, index) => (
								<SingleEgg key={index} index={index} egg={egg} />
							))}
						</div>
						<h2>YOUR MONEY: {pet.money}</h2>
						<button onClick={feedPet}>
							<h3>Feed your pet (${pet.foodPrice})</h3>
						</button>
					</div>
				</div>
			)}
		</>
	)
}

export default GamePage
