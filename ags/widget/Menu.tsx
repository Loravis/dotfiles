import { App, Astal, Gtk, Gdk } from "astal/gtk3"
import { Variable } from "astal"

const time = Variable("").poll(1000, "date +\"%H:%M\"") // Retrieve time

export default function Menu(gdkmonitor: Gdk.Monitor) {
	const { CENTER, RIGHT } = Astal.WindowAnchor

	return <window
		name="Menu"
		className="Menu"
		gdkmonitor={gdkmonitor}
		exclusivity={Astal.Exclusivity.IGNORE}
		anchor={CENTER | RIGHT}
		application={App}>
		<centerbox>
			<label label={time()} />
		</centerbox>
	</window>
}
