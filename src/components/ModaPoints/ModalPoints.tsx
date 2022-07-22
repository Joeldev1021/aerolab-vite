import {
  Button,
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
        <Button fontWeight="bold" fontSize="18" >
          {loading ? <Spinner size="sm" color="secondary" /> : points}
          <img src="./assets/coin.svg" alt="coin" />
        </Button>
      </PopoverTrigger>
      <PopoverContent right="5">
        <PopoverCloseButton />
        <ModalHeader />
        <PopoverBody>
          <ModalBodyPoints loading={loading} handlePoints={handlePoints}/>
        </PopoverBody>
         <PopoverFooter
          border='0'
          display='flex'
          alignItems='center'
          justifyContent='center'
          pb="4"
        >
          <PopoverCloseButton position="relative">
            <Button minWidth="150px" fontSize="18px" color="gray.500" py="3">Cancel</Button>
          </PopoverCloseButton>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default ModalPoints;
