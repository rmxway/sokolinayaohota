import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	text-align: center;
	align-items: center;
	height: auto;
	padding: 80px 0;
	background-image: url('assets/img/questions.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;

	&:before {
		content: '';
		position: absolute;
		background-color: #ffffffbf;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}
`;

export default Wrapper;
