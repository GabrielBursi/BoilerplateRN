import type { Meta, StoryObj } from '@storybook/react'
import { Button, Text } from 'react-native'
import { TestProvider } from '@/providers'

import { Container } from './Container'

const meta: Meta<typeof Container> = {
	title: 'Container',
	component: Container,
	decorators: [
		(Story) => (
			<TestProvider>
				<Story />
			</TestProvider>
		),
	],
	args: {},
	argTypes: {},
	render: () => (
		<Container>
			<Text>Container</Text>
			<Button title="Container" onPress={() => console.log('Hi Storybook!')} />
		</Container>
	),
}
export default meta

type Story = StoryObj<typeof Container>

export const Basic: Story = {
	args: {},
}
