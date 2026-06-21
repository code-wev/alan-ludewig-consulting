export const ROLES = {
  CLIENT: "client",
  ADMIN: "admin",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];
