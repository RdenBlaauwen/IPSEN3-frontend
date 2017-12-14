import { Page } from './page';

export const BASE_PAGES: Page[] = [
    { id: 1, name: '', displayName: 'Uitloggen'},
    { id: 2, name: 'dashboard', displayName: 'Dashboard'},
    { id: 3, name: 'account-self', displayName: 'Account gegevens'},
    { id: 4, name: 'manual', displayName: 'Handleiding'}
]

export const ADMIN_PAGES: Page[] = [
    { id: 5, name: 'hour-management', displayName: 'Uren beheren'},
    { id: 6, name: 'project-management', displayName: 'Projecten beheren'},
    { id: 7, name: 'sprint-management', displayName: 'Sprints beheren'},
    { id: 8, name: 'userstory-management', displayName: 'Userstories beheren'},
    { id: 9, name: 'account-management', displayName: 'Accounts beheren'},
    { id: 10, name: 'customer-management', displayName: 'Klanten beheren'},
    { id: 11, name: 'data-management', displayName: 'Data beheren'}
]

export const MANAGEMENT_PAGES: Page[] = [
    { id: 5, name: 'hour-management', displayName: 'Uren beheren/goedkeuren'},
    { id: 6, name: 'project-management', displayName: 'Projectoverzicht'},
    { id: 7, name: 'sprint-management', displayName: 'Sprintoverzicht'},
    { id: 8, name: 'userstory-management', displayName: 'Userstoryoverzicht'},
    { id: 9, name: 'account-management', displayName: 'Accountoverzicht'},
    { id: 10, name: 'customer-management', displayName: 'Klantoverzicht'},
    { id: 11, name: 'data-management', displayName: 'Data beheren'}
]

export const USER_PAGES: Page[] = [
    { id: 5, name: 'hour-management', displayName: 'Uren invullen/beheren'},
    { id: 6, name: 'project-management', displayName: 'Projectoverzicht'},
    { id: 7, name: 'sprint-management', displayName: 'Sprintoverzicht'},
    { id: 8, name: 'userstory-management', displayName: 'Userstoryoverzicht'}
]