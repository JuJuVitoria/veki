import { Header } from './shared/header.js';
import { setupEmergencyAlerts } from './shared/alertsEmergencias.js';
import { alertVoluntariadoConfirmado } from '../pages/emergency/js/alert.js';

document.addEventListener('DOMContentLoaded', () => {
  new Header();
  
  setupEmergencyAlerts();
});