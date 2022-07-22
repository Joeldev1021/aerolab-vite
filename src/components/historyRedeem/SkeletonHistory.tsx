import { Box, Skeleton, Stack } from '@chakra-ui/react';

const SkeletonHistory = () => {
	return (
		<>
			{[0, 1, 2, 3, 4].map((item: number) => {
				return (
					<Box
						key={item}
						width='80%'
						p='3'
						m='auto'
						mb='20px'
						border='1px'
						borderColor='gray.200'
						borderRadius='md'
					>
						<Stack>
							<Skeleton height='20px' />
							<Skeleton height='20px' />
						</Stack>
					</Box>
				);
			})}
		</>
	);
};

export default SkeletonHistory;
