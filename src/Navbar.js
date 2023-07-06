import React from 'react';

function Navbar() {
  // Define your navigation bar here
  return (
    <div>
        <nav class="bg-navbar_background">
          <ul class=" flex justify-between items-center h-16 bg-transparent text-black relative shadow-sm font-mono">
            <div>
            <li><a href="/" class="text">Taxi-link</a></li>
            </div>
            <div class="flex justify-end space-x-4">
            <li><a href="/Homepage" class="text-accent">Home</a></li>
            <li><a href="/" class="text-accent">About</a></li>
            <li><a href="/" class="text-accent">Services</a></li>
            <li><a href="/" class="text-accent">Contact</a></li>
            </div>
          </ul>
        </nav>
    </div>
  );
}

export default Navbar;