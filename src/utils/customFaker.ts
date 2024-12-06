import { pt_BR, en, base, Faker } from '@faker-js/faker'

export const customFaker = new Faker({
	locale: [pt_BR, en, base],
})
