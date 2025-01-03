//Style
import "./styles.scss";
//Projects
import { ProjectOne } from "./ProjectOne/ProjectOne";
import { ProjectTwo } from "./ProjectTwo/ProjectTwo";
import { ProjectThree } from "./ProjectThree/ProjectThree";
import { ProjectFour } from "./ProjectFour/ProjectFour";
import { ProjectFive } from "./ProjectFive/ProjectFive";
import { ProjectSix } from "./ProjectSix/ProjectSix";
import { ProjectSeven } from "./ProjectSeven/ProjectSeven";
import { ProjectEight } from "./ProjectEight/ProjectEight";
import { ProjectNine } from "./ProjectNine/ProjectNine";
import { ProjectTen } from "./ProjectTen/ProjectTen";
import { ProjectEleven } from "./ProjectEleven/ProjectEleven";
import { ProjectTwelve } from "./ProjectTwelve/ProjectTwelve";
import { ProjectThirteen } from "./ProjectThirteen/ProjectThirteen";
import { ProjectFourteen } from "./ProjectFourteen/ProjectFourteen";
import { ProjectFifteen } from "./ProjectFifteen/ProjectFifteen";
import { ThemeContextProvider } from "./ProjectFifteen/ThemeContext";
import { ProjectSixteen } from "./ProjectSixteen/ProjectSixteen";
import { ProjectSeventeen } from "./ProjectSeventeen/ProjectSeventeen";
import { ProjectEighteen } from "./ProjectEighteen/ProjectEighteen";
import { Provider } from "react-redux";
import { store } from "./store";
import { ProjectNineteen } from "./ProjectNineteen/ProjectNineteen";

function App() {
  return (
    <>
      {/* <ProjectOne /> */}
      {/* <ProjectTwo /> */}
      {/* <ProjectThree /> */}
      {/* <ProjectFour /> */}
      {/* <ProjectFive /> */}
      {/* <ProjectSix /> */}
      {/* <ProjectSeven /> */}
      {/* <ProjectEight /> */}
      {/* <ProjectNine /> */}
      {/* <ProjectTen /> */}
      {/* <ProjectEleven /> */}
      {/* <ProjectTwelve /> */}
      {/* <ProjectThirteen /> */}
      {/* <ProjectFourteen /> */}
      {/*--------------------------------- */}
      {/* <ThemeContextProvider>
        <ProjectFifteen />
      </ThemeContextProvider> */}
      {/*--------------------------------------- */}
      {/* <ProjectSixteen /> */}
      {/* <ProjectSeventeen /> */}
      {/* <Provider store={store}>
        <ProjectEighteen />
      </Provider> */}
      <Provider store={store}>
        <ProjectNineteen />
      </Provider>
    </>
  );
}

export default App;
