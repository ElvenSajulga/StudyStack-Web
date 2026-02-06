import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login';
import { Dashboard } from './home/dashboard/dashboard';
import { Announcements } from './pages/announcements/announcements';
import { assertNotInReactiveContext } from '@angular/core';
import { Assignments } from './pages/assignments/assignments';
import { Attendance } from './pages/attendance/attendance';
import { Grades } from './pages/grades/grades';
import { Settings } from './pages/settings/settings';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: 'dashboard', component: Dashboard },
  { path: 'announcements', component: Announcements },
  { path: 'assignment', component: Assignments},
  { path: 'attendance', component: Attendance},
  { path: 'grades', component: Grades},
  { path: 'settings', component: Settings},
];
