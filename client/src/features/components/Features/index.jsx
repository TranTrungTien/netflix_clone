import Feature from "./Feature";
import { features } from "../../../constant";
const Features = () => {
  return (
    <div>
      {features.map((image, index) => (
        <Feature key={image.title} {...image} index={index} />
      ))}
    </div>
  );
};

export default Features;
