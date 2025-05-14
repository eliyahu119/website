/**
 * main.js - Main JavaScript functionality for Portfolio Website
 * 
 * This file handles the interactive elements of the portfolio website,
 * including navigation menu functionality for both desktop and mobile views.
 * 
 * @author Your Name
 * @version 1.0.0
 * @created May 14, 2025
 */

/**
 * Initialize all interactive functionality when the DOM is fully loaded
 * This ensures all HTML elements are available before JavaScript tries to interact with them
 */
document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality for mobile navigation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    /**
     * Toggle the mobile navigation menu when the hamburger icon is clicked
     * Adds/removes 'active' class to both the hamburger icon and navigation menu
     */
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');  // Animate hamburger icon to X
            navMenu.classList.toggle('active');    // Show/hide the navigation menu
        });
    }

    /**
     * Close the mobile navigation menu when a navigation link is clicked
     * Improves user experience by automatically closing the menu after selection
     */
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');  // Reset hamburger icon
            navMenu.classList.remove('active');    // Hide navigation menu
        });
    });
});