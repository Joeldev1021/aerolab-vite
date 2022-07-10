import { ButtonGroup } from "@chakra-ui/react";
import { useEffect } from "react";
import Arrow from "./Arrow";

interface Props {
  nextPage: number;
  setNextPage: (value: number)=>void;
  length: number;
}

const ButtonGroupPage = ({ nextPage, setNextPage, length }: Props) => {
  /// restart the page
  useEffect(() => {
    if (length <= 16) setNextPage(0);
  }, [length]);

  const handleNextPage = (dir:string) => {
    if (length <= 16) {
      setNextPage(0);
    } else {
      dir === "right" ? setNextPage(1) : setNextPage(0);
    }
  };
  return (
    <ButtonGroup className="btn-group">
          <button onClick={() => handleNextPage("left")}>
            <Arrow dir="left" />
          </button>
          <button onClick={() => handleNextPage("right")}>
            <Arrow dir="right" />
          </button>
    </ButtonGroup>
  );
};

export default ButtonGroupPage;
