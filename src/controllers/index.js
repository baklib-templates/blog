import { Application } from "@hotwired/stimulus"
import CopyPageController from "./copy_page_controller"
import PageToolsController from "./page_tools_controller"

const application = Application.start()
window.Stimulus = application

application.register("copy-page", CopyPageController)
application.register("page-tools", PageToolsController)
