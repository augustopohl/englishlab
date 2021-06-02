import Lottie from "react-lottie";
import animationData from "../../lotties/guy-studying.json";

export default function Lootie() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return(
        <Lottie options={defaultOptions} height={400} width={400} />
    )
}