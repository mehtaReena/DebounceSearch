import React, { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';

import { Input, Ul, Li, SuggestContainer ,Container} from './style';

export default function SearchInput({
	loading,
	options,
	requests,
	placeholder,
}) {
	const [inputValue, setInputValue] = useState('');
// eslint-disable-next-line
	const debouncedSave = useCallback(
		debounce((newValue) => requests(newValue), 1000),
		[]
	);

	const updateValue = (newValue) => {
		setInputValue(newValue);
		debouncedSave(newValue);
	};

	console.log(" options" , options)

	return (
		<Container>
			<Input
				value={inputValue}
				onChange={(input) => updateValue(input.target.value)}
				placeholder={placeholder}
			/>
			<SuggestContainer>
				<Ul>
					{loading && <Li>Loading...</Li>}

						{options.map((item, index) => (
							<Li
								key={index}
							>
								{item.sku_name}
							</Li>
						))}
				</Ul>
			</SuggestContainer>
		</Container>
	);
}
