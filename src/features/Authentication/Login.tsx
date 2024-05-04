import { TextInput, Button, Stack } from '@mantine/core'
import { useState } from 'react'
import { axiosInstance } from '../../lib/axios'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
	const navigate = useNavigate()

	const [formData, setFormData] = useState({
		username: '',
		password: '',
	})

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		axiosInstance
			.post('/Authentication/login', formData)
			.then((res) => {
				const token = res.data
				localStorage.setItem('token', token)
				localStorage.setItem('name', formData.username)
				navigate('/reports')
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<form onSubmit={handleSubmit}>
			<Stack>
				<TextInput
					name='username'
					label='Username'
					onChange={handleInputChange}
					withAsterisk
				/>

				<TextInput
					name='password'
					label='Password'
					type='password'
					onChange={handleInputChange}
					withAsterisk
				/>

				<Button type='submit'>Login</Button>
			</Stack>
		</form>
	)
}
