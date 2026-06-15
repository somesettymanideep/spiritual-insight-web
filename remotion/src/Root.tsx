import { Composition } from "remotion";
import { SolarSystem } from "./SolarSystem";

export const RemotionRoot = () => (
  <Composition
    id="solar-system"
    component={SolarSystem}
    durationInFrames={240}
    fps={30}
    width={1280}
    height={360}
  />
);