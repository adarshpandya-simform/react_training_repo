import { AspectRatio, Image, Heading } from "@chakra-ui/react";
import picture1 from "../../assets/p1.jpg";
import picture2 from "../../assets/p2.jpg";

/**
 * AspectRatio: for demonstrating
 * different ratios for given
 * children inside <AspectRatio></AspectRatio>
 */
const AspectRatioComponent = () => {
  return (
    <div>
      <Heading color={"teal.600"}>Aspect Ratio 4/3</Heading>
      <AspectRatio maxW={400} ratio={4 / 3}>
        <Image src={picture1} alt="nature" objectFit={"cover"} />
      </AspectRatio>
      <br />
      <Heading color={"teal.600"}>Aspect Ratio 16/9</Heading>
      <AspectRatio maxW={600} ratio={16 / 9}>
        <Image src={picture2} alt="nature" objectFit={"cover"} />
      </AspectRatio>
    </div>
  );
};

export default AspectRatioComponent;
