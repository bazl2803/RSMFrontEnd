import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import { SalesReport } from '../features/SalesSummary/SalesReport'
import { RegionalSalesReport } from '../features/RegionalSalesSummary/RegionalSalesReport'
import { Forms } from '../components/Forms'
import { Reports } from '../components/Reports'

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Forms />}
				/>

				<Route
					path='/reports'
					element={<Reports />}
				/>

				<Route
					path='/SalesSummary'
					element={<SalesReport />}
				/>

				<Route
					path='/RegionalSalesSummary'
					element={<RegionalSalesReport />}
				/>
			</Routes>
		</BrowserRouter>
	)
}
