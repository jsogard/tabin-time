import { useRouter } from "next/router";
import Closeout from "./views/closeout";
import Leftovers from "./views/leftovers";

export default function View() {
    const router = useRouter();
    const { view } = router.query;

    const viewDict = {
        closeout: <Closeout />,
        leftovers: <Leftovers />
    }

    return (

        <div>
            Current view: { view }

            {viewDict[view] ?? <div>No view found</div>}
        </div>
    )
}