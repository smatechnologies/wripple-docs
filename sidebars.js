module.exports = {
  mySidebar: [
    'index',
    {
      type: 'category',
      label: 'Help Center',
      collapsed: true,
      items: [
        'help/release-notes',
        {
          type: 'category',
          label: 'Dashboard',
          collapsed: true,
          items: [
            'help/dashboard',
          ],
        },
        {
          type: 'category',
          label: 'Account',
          collapsed: true,
          items: [
            'help/account/create-an-account',
            'help/account/my-an-account',
          ],
        },
        {
          type: 'category',
          label: 'App Configurations',
          collapsed: true,
          items: [
            'help/app-configurations/intro',
            'help/app-configurations/configuring',
            'help/app-configurations/relay',
          ],
        },
        {
          type: 'category',
          label: 'Workflows',
          collapsed: true,
          items: [
            'help/workflows/workflow-configuration',
            'help/workflows/workflows',
          ],
        },
        {
          type: 'category',
          label: 'Workflow History',
          collapsed: true,
          items: [
            'help/workflow-history/execution',
            'help/workflow-history/triggers',
            'help/workflow-history/change-logs',
          ],
        },
        {
          type: 'category',
          label: 'Applications',
          collapsed: true,
          items: [
            'help/applications/applications',
          ],
        },
        {
          type: 'category',
          label: 'Setup',
          collapsed: true,
          items: [
            'help/setup/sso-configuration',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Apps',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'CIF2020',
          collapsed: true,
          items: [
          {
          type: 'category',
          label: 'Version 1.x',
          collapsed: true,
          items: [  
          'apps/CIF2020/release-notes',  
          'apps/CIF2020/Version 1.x/application-config',
                {
                  type: 'category',
                  label: 'Actions',
                  collapsed: true,
                  items: [
                    'apps/CIF2020/Version 1.x/Actions/customer-search',
                    'apps/CIF2020/Version 1.x/Actions/address-search',
                    'apps/CIF2020/Version 1.x/Actions/add-address',
                    'apps/CIF2020/Version 1.x/Actions/modify-address',
                          ],
                  },
                ],
              },
          ],
        },
        {
          type: 'category',
          label: 'CoreDirector',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Version 1.x',
              collapsed: true,
              items: [
                'apps/CoreDirector/release-notes',  
                'apps/CoreDirector/Version 1.x/application-config',
                {
                  type: 'category',
                  label: 'Actions',
                  collapsed: true,
                  items: [
                    'apps/CoreDirector/Version 1.x/Actions/customer-search',
                    'apps/CoreDirector/Version 1.x/Actions/address-search',
                    'apps/CoreDirector/Version 1.x/Actions/add-address',
                    'apps/CoreDirector/Version 1.x/Actions/modify-address',
                  ],
                },
              ],
            },
          ],
        },

        {
          type: 'category',
          label: 'DocuSign',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Version 1.x',
              collapsed: true,
              items: [
                'apps/DocuSign/release-notes',  
                'apps/DocuSign/Version 1.x/application-config',
                {
                  type: 'category',
                  label: 'Actions',
                  collapsed: true,
                  items: [
                    'apps/DocuSign/Version 1.x/Actions/create-and-send-envelope',
                    'apps/DocuSign/Version 1.x/Actions/extract-envelope-form-data',
                  ],
                },
                {
                  type: 'category',
                  label: 'Triggers',
                  collapsed: true,
                  items: [
                    'apps/DocuSign/Version 1.x/Triggers/envelope-completed',
                    'apps/DocuSign/Version 1.x/Triggers/envelope-sent',
                  ],
                },
              ],
            },
          ],
        },

        {
          type: 'category',
          label: 'Email',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Version 1.x',
              collapsed: true,
              items: [
                'apps/Email/release-notes',  
                'apps/Email/Version 1.x/application-config',
                {
                  type: 'category',
                  label: 'Actions',
                  collapsed: true,
                  items: [
                    'apps/Email/Version 1.x/Actions/send-email',
                  ],
                },
                {
                  type: 'category',
                  label: 'Triggers',
                  collapsed: true,
                  items: [
                    'apps/Email/Version 1.x/Triggers/email-received',
                  ],
                },
              ],
            },
          ],
        },

        {
          type: 'category',
          label: 'FICS',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Version 1.x',
              collapsed: true,
              items: [
                'apps/FICS/release-notes',  
                'apps/FICS/Version 1.x/application-config',
                {
                  type: 'category',
                  label: 'Actions',
                  collapsed: true,
                  items: [
                    'apps/FICS/Version 1.x/Actions/search-accounts',
                    'apps/FICS/Version 1.x/Actions/get-account-history',
                  ],
                },
              ],
            },
          ],
        },

        {
          type: 'category',
          label: 'FiservPremier',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Version 1.x',
              collapsed: true,
              items: [
                'apps/FiservPremier/release-notes',  
                'apps/FiservPremier/Version 1.x/application-config',
                {
                  type: 'category',
                  label: 'Actions',
                  collapsed: true,
                  items: [
                    'apps/FiservPremier/Version 1.x/Actions/get-account-details',
                    'apps/FiservPremier/Version 1.x/Actions/add-address',
                    'apps/FiservPremier/Version 1.x/Actions/add-account',
                  ],
                },
              ],
            },
          ],
        },

        {
          type: 'category',
          label: 'FusionFabric',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Version 1.x',
              collapsed: true,
              items: [
                'apps/FusionFabric/release-notes',  
                'apps/FusionFabric/Version 1.x/application-config',
                {
                  type: 'category',
                  label: 'Actions',
                  collapsed: true,
                  items: [
                    'apps/FusionFabric/Version 1.x/Actions/get-an-existing-application',
                    'apps/FusionFabric/Version 1.x/Actions/get-consumer-lending-products',
                    'apps/FusionFabric/Version 1.x/Actions/search-personal-customers',
                    'apps/FusionFabric/Version 1.x/Actions/update-personal-customers',
                  ],
                },
              ],
            },
          ],
        },

        {
          type: 'category',
          label: 'Gmail',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Version 1.x',
              collapsed: true,
              items: [ 
                'apps/Gmail/app-configuration',
                {
                  type: 'category',
                  label: 'Actions',
                  collapsed: true,
                  items: [
                    'apps/Gmail/Actions/send-email',
                  ],
                },
                {
                  type: 'category',
                  label: 'Triggers',
                  collapsed: true,
                  items: [
                    'apps/Gmail/Triggers/email-received',
                  ],
                },
              ],
            },
          ],
        },


        {
          type: 'category',
          label: 'HubSpot',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Version 1.x',
              collapsed: true,
              items: [
                'apps/HubSpot/release-notes',  
                'apps/HubSpot/Version 1.x/application-config',
                {
                  type: 'category',
                  label: 'Actions',
                  collapsed: true,
                  items: [
                    'apps/HubSpot/Version 1.x/Actions/create-company',
                    'apps/HubSpot/Version 1.x/Actions/create-contact',
                    'apps/HubSpot/Version 1.x/Actions/search-companies',
                    'apps/HubSpot/Version 1.x/Actions/update-company',
                    'apps/HubSpot/Version 1.x/Actions/update-contact',
                  ],
                },
                {
                  type: 'category',
                  label: 'Triggers',
                  collapsed: true,
                  items: [
                    'apps/HubSpot/Version 1.x/Triggers/company-created',
                    'apps/HubSpot/Version 1.x/Triggers/company-updated',
                    'apps/HubSpot/Version 1.x/Triggers/contact-created',
                    'apps/HubSpot/Version 1.x/Triggers/contact-updated',
                  ],
                },
              ],
            },
          ],
        },

        {
          type: 'category',
          label: 'Jira',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Version 1.x',
              collapsed: true,
              items: [
                'apps/Jira/release-notes',  
                'apps/Jira/Version 1.x/application-config',
                {
                  type: 'category',
                  label: 'Actions',
                  collapsed: true,
                  items: [
                    'apps/Jira/Version 1.x/Actions/get-issue-details',
                  ],
                },
              ],
            },
          ],
        },

        {
          type: 'category',
          label: 'KeyStone',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Version 1.x',
              collapsed: true,
              items: [
                'apps/KeyStone/release-notes',  
                'apps/KeyStone/Version 1.x/application-config',
                {
                  type: 'category',
                  label: 'Actions',
                  collapsed: true,
                  items: [
                    'apps/KeyStone/Version 1.x/Actions/find-single-account',
                    'apps/KeyStone/Version 1.x/Actions/get-account-details',
                    'apps/KeyStone/Version 1.x/Actions/add-new-address',
                    'apps/KeyStone/Version 1.x/Actions/update-address',
                    'apps/KeyStone/Version 1.x/Actions/get-address-details',
                    'apps/KeyStone/Version 1.x/Actions/search-accounts',
                    'apps/KeyStone/Version 1.x/Actions/add-new-interaction',
                    'apps/KeyStone/Version 1.x/Actions/update-interaction',
                    'apps/KeyStone/Version 1.x/Actions/update-opportunity',
                    'apps/KeyStone/Version 1.x/Actions/get-note-details',
                    'apps/KeyStone/Version 1.x/Actions/add-new-note',
                    'apps/KeyStone/Version 1.x/Actions/update-note',
                  ],
                },
                {
                  type: 'category',
                  label: 'Triggers',
                  collapsed: true,
                  items: [
                    'apps/KeyStone/Version 1.x/Triggers/address-changed',
                    'apps/KeyStone/Version 1.x/Triggers/address-link-changed',
                    'apps/KeyStone/Version 1.x/Triggers/override-requested',
                    'apps/KeyStone/Version 1.x/Triggers/note-changed',
                  ],
                },
              ],
            },
          ],
        },

        {
          type: 'category',
          label: 'Microsoft 365 Excel',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Version 1.x',
              collapsed: true,
              items: [
                'apps/Microsoft365Excel/release-notes',  
                'apps/Microsoft365Excel/Version 1.x/application-config',
                {
                  type: 'category',
                  label: 'Actions',
                  collapsed: true,
                  items: [
                    'apps/Microsoft365Excel/Version 1.x/Actions/read-from-worksheet',
                    'apps/Microsoft365Excel/Version 1.x/Actions/update-range-in-worksheet',
                  ],
                },
              ],
            },
          ],
        },

        {
          type: 'category',
          label: 'Microsoft365Outlook',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Version 1.x',
              collapsed: true,
              items: [
                'apps/Microsoft365Outlook/release-notes',  
                'apps/Microsoft365Outlook/Version 1.x/application-config',
                {
                  type: 'category',
                  label: 'Actions',
                  collapsed: true,
                  items: [
                    'apps/Microsoft365Outlook/Version 1.x/Actions/Send-Email',
                  ],
                },
                {
                  type: 'category',
                  label: 'Triggers',
                  collapsed: true,
                  items: [
                    'apps/Microsoft365Outlook/Version 1.x/Triggers/Email-Received',
                  ],
                },
              ],
            },
          ],
        },

        {
          type: 'category',
          label: 'Microsoft Teams',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Version 1.x',
              collapsed: true,
              items: [
                'apps/MicrosoftTeams/release-notes',  
                'apps/MicrosoftTeams/Version 1.x/application-config',
                {
                  type: 'category',
                  label: 'Actions',
                  collapsed: true,
                  items: [
                    'apps/MicrosoftTeams/Version 1.x/Actions/send-message',
                  ],
                },
              ],
            },
          ],
        },        

        {
          type: 'category',
          label: 'NCRVoyix',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Version 1.x',
              collapsed: true,
              items: [
                'apps/NCRVoyix/release-notes',  
                'apps/NCRVoyix/Version 1.x/application-config',
                {
                  type: 'category',
                  label: 'Actions',
                  collapsed: true,
                  items: [
                    'apps/NCRVoyix/Version 1.x/Actions/find-consumers',
                    'apps/NCRVoyix/Version 1.x/Actions/create-consumer',
                    'apps/NCRVoyix/Version 1.x/Actions/update-consumer',
                  ],
                },
              ],
            },
          ],
        }, 

        {
          type: 'category',
          label: 'OnBase',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Version 1.x',
              collapsed: true,
              items: [
                'apps/OnBase/release-notes',  
                'apps/OnBase/Version 1.x/application-config',
                {
                  type: 'category',
                  label: 'Actions',
                  collapsed: true,
                  items: [
                    'apps/OnBase/Version 1.x/Actions/create-document-query',
                    'apps/OnBase/Version 1.x/Actions/get-document-query-results',
                    'apps/OnBase/Version 1.x/Actions/get-document-content',
                  ],
                },
              ],
            },
          ],
        }, 

        {
          type: 'category',
          label: 'OpCon',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Version 1.x',
              collapsed: true,
              items: [
                'apps/OpCon/release-notes',  
                'apps/OpCon/Version 1.x/application-config',
                {
                  type: 'category',
                  label: 'Actions',
                  collapsed: true,
                  items: [
                    'apps/OpCon/Version 1.x/Actions/add-job-to-daily-schedule',
                    'apps/OpCon/Version 1.x/Actions/build-schedule',
                    'apps/OpCon/Version 1.x/Actions/change-job-status',
                    'apps/OpCon/Version 1.x/Actions/update-global-property',
                    'apps/OpCon/Version 1.x/Actions/execute-self-service',
                  ],
                },
                {
                  type: 'category',
                  label: 'Triggers',
                  collapsed: true,
                  items: [
                    'apps/OpCon/Version 1.x/Triggers/job-status-changed',
                  ],
                },
              ],
            },
          ],
        }, 

        {
          type: 'category',
          label: 'OpenAI',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Version 1.x',
              collapsed: true,
              items: [
                'apps/OpenAI/app-configuration',
                {
                  type: 'category',
                  label: 'Actions',
                  collapsed: true,
                  items: [
                    'apps/OpenAI/actions',
                  ],
                },
              ],
            },
          ],
        }, 

        {
          type: 'category',
          label: 'Q2',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Version 1.x',
              collapsed: true,
              items: [
                'apps/Q2/release-notes',  
                'apps/OnBase/Version 1.x/application-config',
                {
                  type: 'category',
                  label: 'Actions',
                  collapsed: true,
                  items: [
                    'apps/Q2/Version 1.x/Actions/update-customer-address',
                    'apps/Q2/Version 1.x/Actions/update-customer-phone-number',
                    'apps/Q2/Version 1.x/Actions/find-single-customer',
                  ],
                },
              ],
            },
          ],
        },  

        {
          type: 'category',
          label: 'Salesforce',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Version 1.x',
              collapsed: true,
              items: [
                'apps/Salesforce/release-notes', 
                'apps/Salesforce/Version 1.x/intro', 
                'apps/Salesforce/Version 1.x/application-config',
                {
                  type: 'category',
                  label: 'Actions',
                  collapsed: true,
                  items: [
                    'apps/Salesforce/Version 1.x/Actions/UpdateContact',
                    'apps/Salesforce/Version 1.x/Actions/create-account',
                    'apps/Salesforce/Version 1.x/Actions/create-contact',
                    'apps/Salesforce/Version 1.x/Actions/update-account',
                  ],
                },
                {
                  type: 'category',
                  label: 'Triggers',
                  collapsed: true,
                  items: [
                    'apps/Salesforce/Version 1.x/Triggers/account-created',
                    'apps/Salesforce/Version 1.x/Triggers/account-updated',
                    'apps/Salesforce/Version 1.x/Triggers/contact-created',
                    'apps/Salesforce/Version 1.x/Triggers/contact-updated',
                  ],
                },
              ],
            },
          ],
        }, 

        {
          type: 'category',
          label: 'SilverLake',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Version 1.x',
              collapsed: true,
              items: [
                'apps/SilverLake/release-notes', 
                'apps/SilverLake/Version 1.x/application-config',
                {
                  type: 'category',
                  label: 'Actions',
                  collapsed: true,
                  items: [
                    'apps/SilverLake/Version 1.x/Actions/customer-search',
                    'apps/SilverLake/Version 1.x/Actions/address-search',
                    'apps/SilverLake/Version 1.x/Actions/add-address',
                    'apps/SilverLake/Version 1.x/Actions/modify-address',
                  ],
                },
              ],
            },
          ],
        }, 

        {
          type: 'category',
          label: 'Slack',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Version 1.x',
              collapsed: true,
              items: [
                'apps/Slack/app-configuration',
                {
                  type: 'category',
                  label: 'Actions',
                  collapsed: true,
                  items: [
                    'apps/Slack/Actions/send-message-to-channel',
                    'apps/Slack/Actions/send-message-to-user',
                    'apps/Slack/Actions/trigger-a-workflow',
                  ],
                },
              ],
            },
          ],
        }, 

        {
          type: 'category',
          label: 'Smartsheet',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Version 1.x',
              collapsed: true,
              items: [
                'apps/Smartsheet/release-notes', 
                'apps/Smartsheet/Version 1.x/app-configuration',
                {
                  type: 'category',
                  label: 'Actions',
                  collapsed: true,
                  items: [
                    'apps/Smartsheet/Version 1.x/Actions/add-rows',
                    'apps/Smartsheet/Version 1.x/Actions/create-sheet',
                  ],
                },
              ],
            },
          ],
        }, 

        {
          type: 'category',
          label: 'Symitar',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Version 1.x',
              collapsed: true,
              items: [
                'apps/Symitar/release-notes', 
                'apps/Symitar/Version 1.x/app-configuration',
                {
                  type: 'category',
                  label: 'Actions',
                  collapsed: true,
                  items: [
                    'apps/Symitar/Version 1.x/Actions/create-account',
                    'apps/Symitar/Version 1.x/Actions/update-account',
                    'apps/Symitar/Version 1.x/Actions/update-name',
                    'apps/Symitar/Version 1.x/Actions/update-phone-number',
                    'apps/Symitar/Version 1.x/Actions/update-address',
                    'apps/Symitar/Version 1.x/Actions/find-name-locator',
                  ],
                },
              ],
            },
          ],
        }, 

        {
          type: 'category',
          label: 'Synapsys',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Version 1.x',
              collapsed: true,
              items: [
                'apps/Synapsys/release-notes', 
                'apps/Synapsys/Version 1.x/application-config',
                {
                  type: 'category',
                  label: 'Actions',
                  collapsed: true,
                  items: [
                    'apps/Synapsys/Version 1.x/Actions/search-prospects',
                    'apps/Synapsys/Version 1.x/Actions/add-prospect',
                    'apps/Synapsys/Version 1.x/Actions/update-prospect',
                    'apps/Synapsys/Version 1.x/Actions/get-prospect-details',
                    'apps/Synapsys/Version 1.x/Actions/search-referrals',
                    'apps/Synapsys/Version 1.x/Actions/add-activity',
                    'apps/Synapsys/Version 1.x/Actions/update-activity',
                    'apps/Synapsys/Version 1.x/Actions/get-activity-details',
                  ],
                },
              ],
            },
          ],
        }, 

        {
          type: 'category',
          label: 'Twilio',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Version 1.x',
              collapsed: true,
              items: [
                'apps/Twilio/release-notes', 
                'apps/Twilio/Version 1.x/application-config',
                {
                  type: 'category',
                  label: 'Actions',
                  collapsed: true,
                  items: [
                    'apps/Twilio/Version 1.x/Actions/send-message',

                  ],
                },
              ],
            },
          ],
        }, 

        {
          type: 'category',
          label: 'Webcrawler',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Version 1.x',
              collapsed: true,
              items: [
                'apps/WebCrawler/app-info',
              ],
            },
          ],
        }, 


        {
          type: 'category',
          label: 'Webex',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Version 1.x',
              collapsed: true,
              items: [
                'apps/Webex/app-configuration',
                {
                  type: 'category',
                  label: 'Actions',
                  collapsed: true,
                  items: [
                    'apps/Webex/Actions/send-message-to-space',

                  ],
                },
              ],
            },
          ],
        }, 

        {
          type: 'category',
          label: 'WrippleUtils',
          collapsed: true,
          items: [
                'apps/WrippleUtils/get-variables-from-text',
                'apps/WrippleUtils/wait',
                'apps/WrippleUtils/read-csv-file',
          ],
        }, 


      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      collapsed: true,
      items: [
        'tutorials/2023-12-01-welcome/index',
        'tutorials/2023-12-14-connect-salesforce/index',
      ],
    },
  ],
};

