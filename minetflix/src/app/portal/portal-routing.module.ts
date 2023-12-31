import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PortalComponent } from './portal.component';
import { SearchComponent } from './views/search/search.component';
import { WatchComponent } from './views/watch/watch.component';

const routes: Routes = [
    {
        path: '',
        component: PortalComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'search', component: SearchComponent },
            { path: 'watch/:id', component: WatchComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PortalRoutingModule { }
