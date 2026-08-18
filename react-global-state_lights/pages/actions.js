import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({
  handleAllLightsOn,
  handleAllLightsOff,
  lights,
  allLightsOn,
  allLightsOff,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        lights={lights}
        handleAllLightsOff={handleAllLightsOff}
        handleAllLightsOn={handleAllLightsOn}
        allLightsOff={allLightsOff}
        allLightsOn={allLightsOn}
      />
    </>
  );
}
