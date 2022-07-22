import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

const SkeletonCard = () => {
	return (
		<>
			{[0, 1, 2, 3, 4, 5, 6, 7].map((item: number) => {
				return (
					<Box key={item} padding='6' boxShadow='lg' bg='white'>
						<SkeletonCircle size='10' />
						<SkeletonText mt='4' noOfLines={4} spacing='4' />
					</Box>
				);
			})}
		</>
	);
};

export default SkeletonCard;
