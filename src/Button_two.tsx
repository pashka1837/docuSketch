import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as AllIcons from "@fortawesome/free-regular-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";

//if in a period of 3 seconds user clicked multiple times,
//the first icon will pop up after 3 seconds,
//and reaction for all other clicks will go right after
export function Button_two() {
  const [myRandom, setRandom] = useState(0);

  const myIcons = Object.values(AllIcons);
  const totalAmount = myIcons.length - 2;

  function getRandom(): number {
    return Math.floor(Math.random() * totalAmount);
  }

  function handleClick(): void {
    setTimeout(() => {
      setRandom(getRandom());
    }, 3000);
  }

  return (
    <>
      <div className="button_container">
        <h3>Example 2</h3>
        <FontAwesomeIcon size="5x" icon={myIcons[myRandom] as IconProp} />
        <button onClick={handleClick}>Click Me!</button>
      </div>
    </>
  );
}
