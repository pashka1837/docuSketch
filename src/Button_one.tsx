import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as AllIcons from "@fortawesome/free-regular-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";

//despite how many times user clicked on the button
// during 3 seconds period,
// every icon will be poped up after 3 seconds
export function Button_one() {
  const [myRandom, setRandom] = useState([0]);

  const myIcons = Object.values(AllIcons);
  const totalAmount = myIcons.length - 2;

  function getRandom(): number {
    return Math.floor(Math.random() * totalAmount);
  }

  function handleClick(): void {
    setRandom([...myRandom, getRandom()]);
  }

  if (myRandom.length > 1) {
    setTimeout(() => {
      const newRandom = myRandom.slice(1);
      setRandom(newRandom);
    }, 3000);
  }

  return (
    <>
      <div className="button_container">
        <h3>Example 1</h3>
        <FontAwesomeIcon size="5x" icon={myIcons[myRandom[0]] as IconProp} />
        <button onClick={handleClick}>Click Me!</button>
      </div>
    </>
  );
}
