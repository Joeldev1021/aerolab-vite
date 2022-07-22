import { Box, Text } from '@chakra-ui/react';

interface Props {
	message: any;
	points: number;
}

export const AlertAddPoint = ({ message, points }: Props) => {
	return (
		<Box
			boxShadow='lg'
			border='2px'
			borderColor={message.error ? 'red' : 'secondary'}
			p='6'
			rounded='md'
			bg='white'
			display='flex'
			justifyContent='space-around'
			alignItems='center'
		>
			<Box>
				<Text fontWeight='bold'>{message.error ? '¡Error!' : '¡Success!'}</Text>
				<Text>
					{message.error ? message.error : `You remeded ${points} poins`}
				</Text>
			</Box>
		</Box>
	);
};

// `Update Points ${message['New Points']}`
