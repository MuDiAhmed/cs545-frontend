import {initUserManager} from "oidc-react";

export const oidcConfig = {
    authority: process.env.KEYCLOAK_URL
        ? process.env.KEYCLOAK_URL
        : 'http://192.168.56.4:8088/realms/cs545',
    clientId: 'property-resource-server',
    redirectUri: window.location.origin+"/login-callback",
    postLogoutRedirectUri:window.location.origin+"/logout-callback",
    responseType: 'code',
    scope:"openid email profile"
};

export const UserManger = initUserManager(oidcConfig);