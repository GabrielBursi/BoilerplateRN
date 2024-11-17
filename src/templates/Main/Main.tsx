import React, { PropsWithChildren } from 'react'
import { Text } from 'react-native'

import * as S from './Main.styles'
import { MainTemplateProps } from './Main.types'

export const MainTemplate = ({
	children,
}: PropsWithChildren<Readonly<MainTemplateProps>>) => {
	return (
		<S.Main>
			<Text accessibilityRole="text">Main</Text>
			{children}
		</S.Main>
	)
}
