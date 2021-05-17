import "zone.js/dist/zone";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"; // just-in-time (JIT) compilation
import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule);
