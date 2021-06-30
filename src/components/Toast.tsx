import {
	Dispatch,
	ReactNode,
	SetStateAction,
	useEffect,
	useState,
} from 'react';
import styled from 'styled-components';
import { hideToastAnimation, showToastAnimation } from '../styles/animations';

interface BaseToastProps {
	open: boolean;
}

interface ToastProps extends BaseToastProps {
	children?: ReactNode;
	onClose?: Dispatch<SetStateAction<boolean>>;
}

const StyledToast = styled.div<BaseToastProps>`
	background-color: #323232;
	border-radius: 0.4rem;
	color: #fff;
	font-size: 1.4rem;
	font-weight: 500;
	letter-spacing: 0.02857em;
	line-height: 1.75;
	min-width: 8rem;
	padding: 0.6rem 1.6rem;
	z-index: 10000;
	position: fixed;
	left: 2.5rem;
	bottom: 2.5rem;
	animation: ${({ open }) => (open ? showToastAnimation : hideToastAnimation)}
		0.25s ease;
`;

function Toast({ children, open, onClose }: ToastProps) {
	const [shouldRender, setRender] = useState(open);

	useEffect(() => {
		if (open) setRender(true);
	}, [open]);

	useEffect(() => {
		if (open) {
			const timeout: number = window.setTimeout(
				() => onClose && onClose(false),
				3000
			);

			return () => window.clearTimeout(timeout);
		}
	}, [open, onClose]);

	const handleAnimationEnd = () => {
		if (!open) setRender(false);
	};

	if (!shouldRender) return null;

	return (
		<StyledToast onAnimationEnd={handleAnimationEnd} open={open}>
			{children}
		</StyledToast>
	);
}

export default Toast;
