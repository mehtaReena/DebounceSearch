import styled from 'styled-components';



export const Container = styled.div`
	/* border: 1px solid black; */
	border-radius: 7px;
	width:500px;
   background: #743F8A;
	color: white;
	gap:.5rem;
	display: flex;
	flex-direction: column;

`;

export const Input = styled.input`
	width: 400;
	height: 35px;
	padding: 10px;
	background: #3C3C3C;
	color: white;
	box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	border: none;
`;

export const Ul = styled.ul`
	display: contents;
`;

export const Li = styled.ul`
	width: 500px;
	font-weight: bold;
	background: #3B3B3B;
	color: white;
	height: 45px;
	padding: 10px;

	display: block;
	/* border-bottom: 1px solid white; */
	&:hover {
		cursor: pointer;
		background-color: #743F8A;
		color: white;
	}
`;

export const SuggestContainer = styled.div`
	height: 340px;
	width: 500px;

	background: #3B3B3B;
	color: white;

	overflow: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
`;
