import {
	Box,
	Button,
	Flex,
	Group,
	Input,
	InputLabel,
	NumberInput,
	Select,
	Stack,
	Table,
	Title,
	useMantineTheme,
} from '@mantine/core'

export const RegionalSalesReport = () => {
	const theme = useMantineTheme()

	return (
		<Stack>
			<Box
				style={{
					top: 0,
					position: 'sticky',
					backgroundColor: theme.colors.gray[0],
					zIndex: 10,
				}}>
				<Flex
					m={'sm'}
					justify={'space-between'}
					direction={'row'}>
					<Title>Sales Report</Title>

					<Group>
						<Button variant='light'>Export to CSV</Button>
						<Button>Download PDF</Button>
					</Group>
				</Flex>

				<Flex
					m={'sm'}
					gap={70}
					align='end'
					wrap='nowrap'
					style={{ width: '100vw' }}>
					<Group>
						<Stack gap={0}>
							<InputLabel>Start Date</InputLabel>
							<Input type='date' />
						</Stack>

						<Stack gap={0}>
							<InputLabel>End Date</InputLabel>
							<Input type='date' />
						</Stack>
					</Group>

					<Select label='Category' />

					<Select label='Sales Person' />

					<NumberInput
						label='Total Greater Than'
						placeholder='Dollars'
						prefix='$'
					/>

					<Button>Filter</Button>
				</Flex>
			</Box>

			<Table>
				<Table.Thead>
					<Table.Tr>
						<Table.Th>Order Date</Table.Th>
						<Table.Th>Product</Table.Th>
						<Table.Th>Category</Table.Th>
						<Table.Th>Sales Person</Table.Th>
						<Table.Th>Total</Table.Th>
						<Table.Th>Bill To Direction</Table.Th>
						<Table.Th>Ship To Direction</Table.Th>
					</Table.Tr>
				</Table.Thead>
			</Table>
		</Stack>
	)
}
