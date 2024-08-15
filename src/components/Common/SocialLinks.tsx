import { Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";

const SocialLinks = () => {
  return (
    <div className="flex items-center">
      <Link
        href="/"
        aria-label="social-link"
        target="_blank"
        rel="noopener noreferrer"
        className="group mr-4 rounded-full bg-white p-2 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 22 22"
          className="fill-current duration-300 group-hover:scale-110"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z"
            fill="currentColor"
          />
        </svg>
      </Link>
      <Link
        href="/"
        aria-label="social-link"
        target="_blank"
        rel="noopener noreferrer"
        className="group mr-4 rounded-full bg-white p-2 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
      >
        <Instagram size={18} className="duration-300 group-hover:scale-110" />
      </Link>
      <Link
        href="/"
        aria-label="social-link"
        target="_blank"
        rel="noopener noreferrer"
        className="group mr-4 rounded-full bg-white p-2 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
      >
        <svg
          width="18"
          height="14"
          viewBox="0 0 18 14"
          className="fill-current duration-300 group-hover:scale-110"
        >
          <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
        </svg>
      </Link>
    </div>
  );
};

export default SocialLinks;
