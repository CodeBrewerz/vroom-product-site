import * as React from "react";
import { InView } from "react-intersection-observer";
import YouTube from "react-youtube";
import { mergeDeepRight } from "ramda";

const defaultProps = {
  host: "https://www.youtube-nocookie.com",
  height: "290",
  width: "440",
  playerVars: {
    autoplay: 0,
    start: 44,
    end: 70,
    controls: 0,
  },
};
const EmbededVideo = ({
  opts = {
    height: "290",
    width: "440",
    playerVars: {
      autoplay: 0,
      start: 44,
      end: 70,
      controls: 0,
    },
  },
  videoId = "9vWGnsNhOI0",
}) => {
  const [inView, setInView] = React.useState(false);
  const [target, setTarget] = React.useState(null);

  React.useEffect(() => {
    if (!inView) {
      target?.pauseVideo();
    }
  }, [inView]);

  const _onReady = (event) => {
    setTarget(event.target);
  };

  return (
    <div>
      <InView onChange={setInView}>
        {({ ref }) => (
          <div onClick={(e) => console.log(e, "r")} ref={ref}>
            <YouTube
              className="m-auto rounded-xl w-80 h-64 md:h-80 md:w-4/5 lg:w-96"
              videoId={videoId}
              opts={mergeDeepRight(defaultProps, opts)}
              onReady={_onReady}
            />
          </div>
        )}
      </InView>
    </div>
  );
};

export default EmbededVideo;
