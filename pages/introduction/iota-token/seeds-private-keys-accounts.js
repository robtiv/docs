import markdown from 'markdown-in-js'
import withDoc, { components } from '../../../lib/with-doc'

import { lewi } from '../../../lib/data/team'
import { Table, Row, Cell, BoldCell } from '../../../components/api/table'

// prettier-ignore
export default withDoc({
  title: 'Seeds, Private Keys and Accounts',
  date: '11 Feburary 2018',
  authors: [lewi],
  editUrl: 'pages/introduction/iota-token/seeds-private-keys-accounts.js',
})(markdown(components)`

## Seeds and Accounts

The starting point for everything is a **seed**.

To create an account with private keys and addresses you need 
to have a secure seed. A seed consists of 81-trytes (or less, 
which is not advised), and is your unique access key to your 
account and thus your funds. The seed has to be securely stored. 
A recommendation for securely generating a seed can be found here.

In IOTA, we provide you with 3 security levels to choose from. A security level determines the number of rounds for hashing, which means that a single seed can have 3 different accounts.

${<Table>
    <Row>
      <BoldCell>Security Level</BoldCell>
      <Cell>Security</Cell>
    </Row>
    <Row>
      <BoldCell>1</BoldCell>
      <Cell>81-trits (low)</Cell>
    </Row>
    <Row>
      <BoldCell>2</BoldCell>
      <Cell>162-trits (medium)</Cell>
    </Row>
    <Row>
      <BoldCell>3</BoldCell>
      <Cell>243-trits (high)</Cell>
    </Row>
  </Table>}

Level 3 (243-trits security) is advised to be used by all 
exchanges. The client libraries make it possible to easily 
switch and choose from a security level.

## Private Keys and Addresses

Private keys are derived from a seeds key index. From that 
private key you then generate an address. The key index starting 
at 0, can be incremented to get a new private key, and thus address.

It is important to keep in mind that all security-sensitive functions 
are implemented client side. What this means is that you can generate 
private keys and addresses securely in the browser, or on an offline 
computer. All libraries provide this functionality.

IOTA uses winternitz one-time signatures, as such you should ensure 
that you know which private key (and which address) has already been 
used in order to not reuse it. 

Subsequently, **reusing private keys can lead to the loss of funds**.  
An attacker will be able to forge the signature after continuous key reuse. 
As such, never reuse private keys and addresses! If you are waiting 
for a transaction/bundle to confirm, always reattach it and never respend!

> NEVER REUSE ADDRESSES ${<br/>} Because IOTA uses Winternitz one-time signatures, 
you should **never** reuse an address after you have spent from it. 
Continuously reusing private keys gives a sophisticated attacker the ability 
to forge the signatures, thus being able to steal funds from the respective address.

`)
