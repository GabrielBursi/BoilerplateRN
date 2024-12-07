import Reactotron, { networking, openInEditor } from 'reactotron-react-native'

Reactotron.onCustomCommand({
	command: 'cc',
	handler: () => Reactotron.log('Custom command'),
	title: 'Custom command',
	description: 'A custom command for example',
})

const reactotron = Reactotron
	.configure({ name: 'BolierplateRN' })
	.useReactNative()
	.use(networking())
	.use(openInEditor())
	.connect()

console.tron = reactotron;

export default reactotron
