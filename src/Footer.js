import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const facebook = <FontAwesomeIcon icon={faFacebook} />;
const twitter = <FontAwesomeIcon icon={faTwitter} />;
const instagram = <FontAwesomeIcon icon={faInstagram} />;
const youtube = <FontAwesomeIcon icon={faYoutube} />;


function Footer() {
  return (
    <footer class="bg-footer_background text-white py-4 text-center">
      <div class="float-left
      ">
      
          <span class="text">Get the fastest news from Taxi-link</span>
          <div class="flex justify-center mt-4">
              <input type="text" placeholder="Enter your email address" class="px-4 py-2 w-1/2 rounded-l-md focus:outline-none"/>
              <button class="px-4 py-2 bg-primary-button rounded-r-md">Subscribe</button>
              <div class="flex items-center">
                <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">By checking this box, you agree that you are atleast 18 years of age.</label>
              </div>
              {/* social media icons */}
              <div class="flex items-center justify-center ml-4 space-x-4">
                <a href="/" class="text-white hover:text-gray-400">
                  <span class="sr-only">Facebook</span>
                  {facebook}
                </a>
                <a href="/" class="text-white hover:text-gray-400">
                  <span class="sr-only">Twitter</span>
                  {twitter}
                </a>
                <a href="/" class="text-white hover:text-gray-400">
                  <span class="sr-only">Instagram</span>
                  {instagram}
                </a>
                <a href="/" class="text-white hover:text-gray-400">
                  <span class="sr-only">YouTube</span>
                  {youtube}
                </a>
      </div>
      </div>
      </div>
      <div class="mb-0">
      <p class="mb-0">Made with ❤️ by <a href="/" class="text-white">James  Owiti</a></p>
      <p class="mb-0">&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
