import { Header } from './shared/header.js';
import { setupEmergencyAlerts } from './shared/alerts.js';

document.addEventListener('DOMContentLoaded', () => {
  new Header();
  
  setupEmergencyAlerts();
});