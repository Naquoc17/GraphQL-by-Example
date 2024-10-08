import { jwtDecode } from "jwt-decode";

const API_URL = "http://localhost:9000";

const ACCESS_TOKEN_KEY = "access_token";

export function getAccessToken() {
   return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function logout() {
   localStorage.removeItem(ACCESS_TOKEN_KEY);
}

export function getUserFromToken(token) {
   const claims = jwtDecode(token);
   return { id: claims.sub, email: claims.email };
}

export function getUser() {
   const token = getAccessToken();
   return token ? getUserFromToken(token) : null;
}

export async function login(email, password) {
   const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
   });
   if (!response.ok) {
      return null;
   }
   const { token } = await response.json();
   localStorage.setItem(ACCESS_TOKEN_KEY, token);
   return getUserFromToken(token);
}
