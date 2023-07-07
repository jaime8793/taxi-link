import React from "react";

function Footer() {
    return (
        <footer class="bg-footer_background text-white py-4 text-center">
  <p class="mb-2">&copy; 2023 Your Company. All rights reserved.</p>
  <p>
    Follow us on social media:
    <span class="inline-flex space-x-2 mt-2">
      <a href="#" class="text-white hover:text-gray-300"><img src="facebook-icon.png" alt="Facebook" class="w-6 h-6"/></a>
      <a href="#" class="text-white hover:text-gray-300"><img src="twitter-icon.png" alt="Twitter" class="w-6 h-6"/></a>
      <a href="#" class="text-white hover:text-gray-300"><img src="instagram-icon.png" alt="Instagram" class="w-6 h-6"/></a>
    </span>
  </p>
</footer>

    );
    }

export default Footer;