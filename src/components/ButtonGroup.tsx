import { ButtonGroup } from "@chakra-ui/react";
import Arrow from "./Arrow";

interface Props {
  nextPage: number;
  setNextPage: (value: number)=>void;
}

const ButtonGroupPage = ({ nextPage, setNextPage }: Props) => {
  return (
    <ButtonGroup className="btn-group">
      {nextPage === 0
        ? (
        <button onClick={() => setNextPage(1)}>
          <Arrow dir="right" />
        </button>
          )
        : (
        <>
          <button onClick={() => setNextPage(0)}>
            <Arrow dir="left" />
          </button>
          <button onClick={() => setNextPage(1)}>
            <Arrow dir="right" />
          </button>
        </>
          )}
    </ButtonGroup>
  );
};

export default ButtonGroupPage;
