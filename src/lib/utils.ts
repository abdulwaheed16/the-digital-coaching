import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import bcrypt from "bcryptjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getAvatarText = (name: string | undefined) => {
  let initials = name
    ?.split(" ")
    .map((word) => word[0].toUpperCase())
    .join("");

  if (initials.length > 2) {
    // Handle case where username has more than 2 initials
    console.warn("Username has more than 2 initials. Using first two only.");
    initials = initials.substring(0, 2);
  }

  const avatarText = initials;
  return avatarText;
};

// salt and hash password
export const hashPassword = (password: string) => {
  const saltRound = 10;
  const salt = bcrypt.genSaltSync(saltRound);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

// compare passwords

export const comparePassword = (
  storedPassword: string,
  newPassword: string,
) => {
  return bcrypt.compareSync(storedPassword, newPassword);
};
