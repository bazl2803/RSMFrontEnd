import { Card, Center, SegmentedControl, Stack, Image } from '@mantine/core'
import { Login } from '../features/Authentication/Login'
import { SignUp } from '../features/Authentication/SignUp'
import logo from '../assets/logo.png'
import { useState } from 'react'

export const Forms = () => {
	const [value, setValue] = useState('Sign Up')

	return (
		<Center>
			<Stack
				align='center'
				gap={'xl'}>
				<Image
					src={logo}
					alt='logo'
					maw={150}
					mah={150}
				/>

				<Card
					shadow='sm'
					withBorder
					w={300}>
					<Stack>
						<SegmentedControl
							value={value}
							onChange={(value) => setValue(value)}
							data={['Sign Up', 'Login']}
						/>
						{value == 'Sign Up' ? <SignUp /> : <Login />}
					</Stack>
				</Card>
			</Stack>
		</Center>
	)
}
