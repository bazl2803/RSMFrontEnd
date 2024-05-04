import { Button, Stack, TextInput } from '@mantine/core'
import axios from 'axios'
import { useState } from 'react'

export const SignUp = () => {
	const [formData, setFormData] = useState({
		username: '',
		password: '',
		repeatPasword: '',
	})

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (formData.password !== formData.repeatPasword) {
			return
		}
		axios.post('http://localhost:5117/api/Authentication/register', formData)
			.then((res) => console.log(res))
			.catch((err) => console.log(err))
	}

	return (
		<form
			name='SignUpForm'
			onSubmit={handleSubmit}>
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

				<TextInput
					name='repeatPasword'
					label='Repeat Password'
					type='password'
					onChange={handleInputChange}
					withAsterisk
				/>

				<Button type='submit'>Sign Up</Button>
			</Stack>
		</form>
	)
}
