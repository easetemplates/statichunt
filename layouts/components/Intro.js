import { markdownify } from "@lib/utils/textConverter";
import Typewriter from "typewriter-effect";

const Intro = ({ data, toggleClass }) => {
  return (
    <div className={`mt-4 mb-10 md:mb-16 ${toggleClass}`}>
      <h1 className="mb-3">
        {data.title_start}{" "}
        <Typewriter
          options={{
            strings: data.title_loop,
            autoStart: true,
            loop: true,
            cursor: "",
            wrapperClassName: "text-gradient",
          }}
        />{" "}
        {data.title_end}
      </h1>
      {markdownify(data.description, "p")}
    </div>
  );
};

export default Intro;
