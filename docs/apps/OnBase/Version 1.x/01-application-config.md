# App Configuration

To use OnBase with Wripple you will need to provide the following:

1. **Hyland IdP Server** *(The endpoint of the Hyland IdP server. This value is case sensitive. For example, if the domain is `my.domain` and the Hyland IdP application name is `identityprovider`, then the endpoint value will be: `https://my.domain/identityprovider/`)*
2. **Client ID**
3. **Client Secret**
4. **Tenant** *(The name of the tenant on the Hyland IdP server that the client connection was configured for. This value is case sensitive and must match exactly)*
5. **Username**
6. **Password**

You will also need to configure a client connection on the Hyland IdP Server. More details for this process can be found in these OnBase support documents:

- [Identity and Access Management Services](https://community.hyland.com/en/gallery/items/71457-identity-and-access-management-services-onbase-foundation-ep2-mod)
- [Configuring the OnBase Environment for IdP Authentication](https://support.hyland.com/r/OnBase/Identity-and-Access-Management-Services/Foundation-24.1/Integrating-With-Hyland-IAM-Services/Configuring-the-OnBase-Environment-for-IdP-Authentication/Configuring-the-REST-API-to-Use-IdP-Authentication)
