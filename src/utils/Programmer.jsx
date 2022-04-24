import {useLottie} from "lottie-react";

import pro  from "./programmer.json";

const Programmer = () => {
    const options = {
        animationData: pro,
        loop: true,
        autoplay: true,
      };
      const { View } = useLottie(options);

    return View;
}

export default Programmer