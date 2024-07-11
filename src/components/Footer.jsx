import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa6";
export default function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:p-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/" target="_blank">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                <FaLinkedin size={24} />
              </a>
              <a href="https://desktop.telegram.org/" target="_blank">
                <FaTelegram size={24} />
              </a>
            </div>
            <div className="border-gray-700 mt-8 pt-8 border-t flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Your Company. All rights reserved.
              </p>
              <p className="text-sm">
                Supportive Partner &#x2764;&#xFE0F; Smriti
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
