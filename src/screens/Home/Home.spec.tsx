import { screen } from '@testing-library/react-native'
import { customRender } from '../../tests'
import HomeScreen from '.'

describe('<HomeScreen/>', () => {
	it('should render', () => {
		customRender(<HomeScreen />)

		expect(screen.getByRole('heading', { name: /Home/i })).toBeOnTheScreen()
	})
})
