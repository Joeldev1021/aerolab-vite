import {
  Button,
  ButtonGroup,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverTrigger,
  Spinner
} from "@chakra-ui/react";
import ModalBodyPoints from "./ModalBodyPoints";
import ModalHeader from "./ModalHeader";

interface Props {
  points: number;
  loading: boolean;
  handlePoints:(points:number) => void;
}

const ModalPoints = ({ points, loading, handlePoints }: Props) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button fontWeight="light" fontSize="18" >
          {loading ? <Spinner size="sm" color="secondary" /> : points}
          <img src="./assets/coin.svg" alt="coin" />
        </Button>
      </PopoverTrigger>
      <PopoverContent right="5">
        <PopoverCloseButton />
        <ModalHeader />
        <PopoverBody>
          <ModalBodyPoints handlePoints={handlePoints}/>
        </PopoverBody>
         <PopoverFooter
          border='0'
          display='flex'
          alignItems='center'
          justifyContent='center'
          pb="4"
        >
          <ButtonGroup size='sm'>
            <Button minWidth="150px" fontSize="18px" color="gray.500" py="3">Cancel</Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default ModalPoints;
