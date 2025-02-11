import { App } from "astal/gtk3"
import style from "./style.scss"
import Menu from "./widget/Menu"

App.start({
    css: style,
    main() {
        App.get_monitors().map(Menu)
    },
})
