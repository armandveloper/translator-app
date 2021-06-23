import styled from 'styled-components';

const StyledSwitch = styled.label`
	background-color: #525252;
	border-radius: 1rem;
	width: 6rem;
	height: 2rem;
	padding: 0.2rem;
	.switch-thumb {
		background-color: #fff;
		border-radius: 50%;
		display: block;
		height: 1.6rem;
		width: 1.6rem;
		transition: transform 0.3s ease-in;
	}
	input[type='checkbox'] {
		display: none;
	}
	input[type='checkbox']:checked ~ .switch-thumb {
		transform: translate3d(4rem, 0, 0);
	}
`;

function Switch() {
	return (
		<StyledSwitch>
			<input type="checkbox" />
			<span className="switch-thumb" />
		</StyledSwitch>
	);
}

export default Switch;
