import { App, Astal, Gtk, Gdk } from "astal/gtk3"
import { Variable } from "astal"

const time = Variable("").poll(1000, "date +\"%H:%M\"") // Retrieve time

export default function Menu(gdkmonitor: Gdk.Monitor) {
	const { CENTER, LEFT } = Astal.WindowAnchor

	return <window
		name="Menu"
		className="Menu"
		gdkmonitor={gdkmonitor}
		exclusivity={Astal.Exclusivity.IGNORE}
		anchor={CENTER | LEFT}
		application={App}>
		<box vertical={true}>
			<centerbox>
				<label label={time()} />
			</centerbox>
			<centerbox>
				<button hexpand={false} className="leftbtn" onClicked="echo hello">
					<label label="Hi" />
				</button>
				<button hexpand={false} className="rightbtn" onClicked="echo hello">
					<label label="Hi" />
				</button>
			</centerbox>
		</box>
	</window>
}
