import { Button, Grid, GridItem } from "@chakra-ui/react";

const POINTS_VALUE: number[] = [1000, 5000, 7500];
interface Props {
  handlePoints: (point: number) => void;
  loading: boolean;
}

const ModalBodyPoints = ({ handlePoints, loading }: Props) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)">
      {POINTS_VALUE.map((value: number) => {
        return (
          <GridItem key={value} border="1px" borderColor="gray.100">
            <Button
              isDisabled={loading}
              onClick={() => handlePoints(value)}
              fontWeight="light"
              borderRadius="none"
              bg="none"
              display="flex"
              alignItems="center"
            >
              {`+${value}`} <img src="./assets/coin.svg" alt="coins" />
            </Button>
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default ModalBodyPoints;
