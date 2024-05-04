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
import axios from 'axios'
import { useEffect, useState } from 'react'

export const SalesReport = () => {
	const theme = useMantineTheme()

	const [SalesSummaries, setSalesSumaries] = useState<SalesSummary[] | null>(null)
	const [Categories, setCategories] = useState<Category[] | null>(null)
	const [SalesPerson, setSalesPersons] = useState<SalesPerson[] | null>(null)

	useEffect(() => {
		axios.get<SalesPerson[]>('http://localhost:5117/api/SalesPerson/GetSalesPersons', {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		})
			.then((response) => {
				setSalesPersons(response.data)
				console.log(response.data)
			})
			.catch((error) => {
				console.error(error)
			})

		axios.get<Category[]>('http://localhost:5117/api/ProductCategory/GetProductCategories', {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		})
			.then((response) => {
				setCategories(response.data)
				console.log(response.data)
			})
			.catch((error) => {
				console.error(error)
			})

		axios.get<SalesSummary[]>(
			'http://localhost:5117/api/SalesSummary/GetSalesSummary?pageSize=25',
			{
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			},
		)
			.then((response) => {
				setSalesSumaries(response.data)
				console.log(response.data)
			})
			.catch((error) => {
				console.error(error)
			})
	}, [])

	return (
		<>
			{SalesSummaries && (
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
								<Button variant='default'>
									Export to CSV
								</Button>
								<Button>Download PDF</Button>
							</Group>
						</Flex>

						<Group
							m={'sm'}
							gap={70}
							justify='space-around'
							align='end'>
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

							<Select
								label='Category'
								placeholder='Select Category'
								data={Categories?.map((c) => c.name)}
							/>

							<Select
								label='Sales Person'
								placeholder='Select Sales Person'
								data={SalesPerson?.map((s) => s.firstName)}
							/>

							<NumberInput
								label='Total Greater Than'
								placeholder='Dollars'
								prefix='$'
							/>

							<Button>Filter</Button>
						</Group>
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
						<Table.Tbody>
							{SalesSummaries?.map((summary) => (
								<Table.Tr key={summary.Id}>
									<Table.Td>
										{new Date(
											summary.orderDate,
										).toLocaleString()}
									</Table.Td>
									<Table.Td>
										{summary.productName}
									</Table.Td>
									<Table.Td>
										{summary.productCategoryName}
									</Table.Td>
									<Table.Td>
										{summary.salesPersonName}
									</Table.Td>
									<Table.Td>{summary.total}</Table.Td>
									<Table.Td>
										{summary.billToAddress}
									</Table.Td>
									<Table.Td>
										{summary.shipToAddress}
									</Table.Td>
								</Table.Tr>
							))}
						</Table.Tbody>
					</Table>
				</Stack>
			)}
		</>
	)
}
