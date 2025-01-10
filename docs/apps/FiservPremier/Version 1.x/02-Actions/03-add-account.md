---
sidebar_label: 'Add Account'
hide_title: true
---

# Add Account

You can use this action to add an account on Fiserv Premier.

## Input Fields

- **Account Title**
- **Nickname**
- **Account Type** *(Required)* (supported types are `CDA`, `SDA`, `DDA`)
- **Open Date** *(Required)*
- **Product ID** *(Required)*
- **NAICS**
- **OED Code**
- **Primary Address ID** *(Required)*
- **Initial Amount** *(Required)*
- **Originating Branch** *(Required)*
- **Responsible Branch**
- **Party ID** *(Required)*
- **Party Account Relationship Type** *(Required)*
- **Owner Indicator** *(Required)*
- **Tax Reporting Owner Indicator** *(Required)*

<br/>

**Additional Fields for `CDA` Accounts**

- **Tax Incentive Type** *(Required)*
- **Term** *(Required)*
- **Term Unit** *(Required)*
- **Maturity Date**
- **Rate** *(Required)*

<br/>

**Additional Fields for `SDA` Accounts**

- **Tax Incentive Type** *(Required)*
- **Term** *(Required)*
- **Term Unit** *(Required)*
- **Maturity Date**
- **Rate** *(Required)*
- **Rate Change Control** *(Required)*

## Output Fields

- **Id**
- **Status**
