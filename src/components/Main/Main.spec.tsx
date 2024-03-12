import { screen } from '@testing-library/react-native'
import { customRender } from '../../tests'
import { Main } from '.'

describe('<Main/>', () => {
	it('should render', () => {
		customRender(<Main />)

		expect(screen.getByRole('heading', { name: /Main/i })).toBeOnTheScreen()
	})
})
