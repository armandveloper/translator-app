import { ReactElement, ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdErrorOutline, MdCheckCircle } from 'react-icons/md';
import { hideAlertAnimation, showAlertAnimation } from '../styles/animations';

interface BaseAlertProps {
	severity: 'success' | 'error';
	show?: boolean;
}

interface AlertProps extends BaseAlertProps {
	children?: ReactNode;
	icon?: ReactElement;
}

const colors = {
	success: ['var(--color-success)', 'var(--color-bg-success)'],
	error: ['var(--color-error)', 'var(--color-bg-error)'],
};

const StyledAlert = styled.div<BaseAlertProps>`
	z-index: 100;
	color: ${({ severity }) => colors[severity][0]};
	background-color: ${({ severity }) => colors[severity][1]};
	font-weight: 400;
	letter-spacing: 0.01071em;
	width: 100%;
	padding: 1.4rem 1rem;
	position: absolute;
	left: 0;
	display: flex;
	align-items: flex-start;
	> :first-child {
		flex-shrink: 0;
		margin-right: 1rem;
	}
	animation: ${({ show }) => (show ? showAlertAnimation : hideAlertAnimation)}
		0.3s ease;
`;

const AlertMessage = styled.span`
	font-size: 1.4rem;
`;

const icons = {
	success: <MdCheckCircle size="22" color="currentColor" />,
	error: <MdErrorOutline size="22" color="currentColor" />,
};

function Alert({
	children,
	icon,
	severity = 'success',
	show = true,
}: AlertProps) {
	const [shouldRender, setRender] = useState(show);

	useEffect(() => {
		if (show) setRender(true);
	}, [show]);

	const handleAnimationEnd = () => {
		if (!show) setRender(false);
	};

	if (!shouldRender) return null;

	return (
		<StyledAlert
			onAnimationEnd={handleAnimationEnd}
			role="alert"
			severity={severity}
			show={show}
		>
			{icon ? icon : icons[severity]}
			<AlertMessage>{children}</AlertMessage>
		</StyledAlert>
	);
}

export default Alert;
