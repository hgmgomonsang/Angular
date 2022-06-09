import { Environment } from '@abp/ng.core';

const baseUrl = 'https://gomonsang-bookstore.netlify.app';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'BookStore',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'http://harlyngomonsang-001-site1.btempurl.com',
    redirectUri: baseUrl,
    clientId: 'BookStore_App',
    responseType: 'code',
    scope: 'offline_access BookStore',
    requireHttps: false
  },
  apis: {
    default: {
      url: 'http://harlyngomonsang-001-site1.btempurl.com',
      rootNamespace: 'Acme.BookStore',
    },
  },
} as Environment;
