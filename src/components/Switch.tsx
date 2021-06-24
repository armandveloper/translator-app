import { ChangeEvent, useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';

interface SwitchProps {
	on: boolean;
}

const StyledSwitch = styled.label<SwitchProps>`
	background-color: ${({ on }) => (on ? 'var(--color-primary)' : '#4d4d4d')};
	border-radius: 2.5rem;
	width: 6rem;
	height: 2.5rem;
	padding: 0.2rem;
	transition: 0.3s ease;
	.switch-thumb {
		background-color: #fff;
		border-radius: 50%;
		display: block;
		height: 2rem;
		width: 2rem;
		transition: transform 0.3s ease-in;
	}
	input[type='checkbox'] {
		display: none;
	}
	input[type='checkbox']:checked ~ .switch-thumb {
		transform: translate3d(3.6rem, 0, 0);
	}
`;

function Switch({ on }: SwitchProps) {
	const { setTheme } = useContext(ThemeContext);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTheme(e.currentTarget.checked ? 'dark' : 'light');
	};

	return (
		<StyledSwitch on={on}>
			<input onChange={handleChange} type="checkbox" checked={on} />
			<span className="switch-thumb" />
		</StyledSwitch>
	);
}

export default Switch;
