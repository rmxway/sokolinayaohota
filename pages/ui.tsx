import { Container, Flexbox } from '@/components/Layout';
import { ButtonUI, InputUI } from '@/components/ui';

export default function UIPage() {
	return (
		<Container $mt>
			<h4>Кнопки Desktop</h4>
			<Flexbox $align="flex-start">
				<ButtonUI $primary $margins>
					Primary
				</ButtonUI>
				<ButtonUI $brown $margins>
					Brown
				</ButtonUI>
				<ButtonUI $success $margins>
					Success
				</ButtonUI>
				<ButtonUI $danger $margins>
					Danger
				</ButtonUI>
			</Flexbox>

			<Flexbox $align="flex-start">
				<ButtonUI $primary $margins $icon="phone">
					Primary
				</ButtonUI>
				<ButtonUI $brown $margins $icon="secure">
					Brown
				</ButtonUI>
				<ButtonUI $success $margins $icon="success">
					Success
				</ButtonUI>
				<ButtonUI $danger $margins $icon="error">
					Danger
				</ButtonUI>
			</Flexbox>

			<Flexbox $align="flex-start">
				<ButtonUI disabled $primary $margins>
					Primary
				</ButtonUI>
				<ButtonUI disabled $brown $margins>
					Brown
				</ButtonUI>
				<ButtonUI disabled $success $margins>
					Success
				</ButtonUI>
				<ButtonUI disabled $danger $margins>
					Danger
				</ButtonUI>
			</Flexbox>

			<h4>Кнопки Mobile</h4>

			<Flexbox $align="flex-start">
				<ButtonUI $mobile $primary $margins>
					Primary
				</ButtonUI>
				<ButtonUI $mobile $brown $margins>
					Brown
				</ButtonUI>
				<ButtonUI $mobile $success $margins>
					Success
				</ButtonUI>
				<ButtonUI $mobile $danger $margins>
					Danger
				</ButtonUI>
			</Flexbox>

			<Flexbox $align="flex-start">
				<ButtonUI $mobile $primary $margins $icon="phone">
					Primary
				</ButtonUI>
				<ButtonUI $mobile $brown $margins $icon="secure">
					Brown
				</ButtonUI>
				<ButtonUI $mobile $success $margins $icon="success">
					Success
				</ButtonUI>
				<ButtonUI $mobile $danger $margins $icon="error">
					Danger
				</ButtonUI>
			</Flexbox>

			<br />

			<h4>Формы</h4>
			<h5>Поле ввода</h5>
			<Flexbox $direction="column">
				<InputUI
					name="testDisabled"
					placeholder="Placeholder"
					disabled
				/>
				<InputUI
					name="testText"
					placeholder="Placeholder"
					defaultValue="Text"
					icon="phone"
				/>
				<InputUI
					name="testSuccess"
					placeholder="Placeholder"
					success
					defaultValue="Success"
					icon="success"
				/>
				<InputUI
					name="testDanger"
					placeholder="Placeholder"
					danger
					defaultValue="Danger"
					icon="error"
				/>
			</Flexbox>

			<h1>Заголовок H1</h1>
			<h2>Заголовок H2</h2>
			<h3>Заголовок H3</h3>
			<h4>Заголовок H4</h4>
			<h5>Заголовок H5</h5>
			<br />
		</Container>
	);
}
