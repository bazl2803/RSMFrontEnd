import { Box, Stack, Title } from '@mantine/core'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Reports = () => {
	const [name, setName] = useState<string | null>(null)

	useEffect(() => {
		return setName(localStorage.getItem('name'))
	}, [])

	return (
		<Box>
			<Stack>
				<Title>Welcome {name}!👋</Title>

				<Link to='/salessummary'>Sales Summary</Link>

				<Link to='/regionalsalessummary'>Regional Sales Summary</Link>
			</Stack>
		</Box>
	)
}
