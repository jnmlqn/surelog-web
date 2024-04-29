import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'employees',
    loadChildren: () => import('./employees/employees.module').then( m => m.EmployeesPageModule)
  },
  {
    path: 'employees/:id/edit',
    loadChildren: () => import('./employee-form/employee-form.module').then( m => m.EmployeeFormPageModule)
  },
  {
    path: 'employees/create',
    loadChildren: () => import('./employee-form/employee-form.module').then( m => m.EmployeeFormPageModule)
  },
  {
    path: 'roles',
    loadChildren: () => import('./roles/roles.module').then( m => m.RolesPageModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects.module').then( m => m.ProjectsPageModule)
  },
  {
    path: 'projects/:id/edit',
    loadChildren: () => import('./project-form/project-form.module').then( m => m.ProjectFormPageModule)
  },
  {
    path: 'projects/:id/locate',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'projects/create',
    loadChildren: () => import('./project-form/project-form.module').then( m => m.ProjectFormPageModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then( m => m.PostsPageModule)
  },
  {
    path: 'posts/:id/edit',
    loadChildren: () => import('./post-form/post-form.module').then( m => m.PostFormPageModule)
  },
  {
    path: 'posts/create',
    loadChildren: () => import('./post-form/post-form.module').then( m => m.PostFormPageModule)
  },
  {
    path: 'approval',
    loadChildren: () => import('./approval/approval.module').then( m => m.ApprovalPageModule)
  },
  {
    path: 'accounting',
    loadChildren: () => import('./accounting/accounting.module').then( m => m.AccountingPageModule)
  },
  {
    path: 'attendance/:id/:dateFrom/:dateTo/:computationType',
    loadChildren: () => import('./attendance/attendance.module').then( m => m.AttendancePageModule)
  },
  {
    path: 'hr-data',
    loadChildren: () => import('./hr-data/hr-data.module').then( m => m.HrDataPageModule)
  },
  {
    path: 'roles/:id/edit',
    loadChildren: () => import('./role-form/role-form.module').then( m => m.RoleFormPageModule)
  },
  {
    path: 'roles/create',
    loadChildren: () => import('./role-form/role-form.module').then( m => m.RoleFormPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
