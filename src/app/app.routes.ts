import { Routes, RouterModule } from '@angular/router';
import { NgModule} from '@angular/core';
import { StaffComponent } from './staff/staff.component';
import { UploadimageComponent } from './uploadimage/uploadimage.component';
import { HousingComponent } from './housing/housing.component';

export const routes: Routes = [
    {path:'staff',component : StaffComponent},
    {path:'upload',component : UploadimageComponent},
    {path:'housing',component : HousingComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutes { }