import markdown from 'markdown-in-js'
import withDoc, { components } from '../../../lib/with-doc'
import { Code, InlineCode } from '../../../components/text/code'
import {
  InputTable,
  Row,
  Cell,
  TypeCell,
  BoldCell,
  BooleanCell
} from '../../../components/api/table'

//import { TerminalInput } from '../../../components/text/terminal'

// prettier-ignore
export default withDoc({
  title: 'QR Codes',
  date: '30 May 2018',
  authors: [{ real: 'Rajiv Shah' }],
  editUrl: 'pages/docs/trinity/information/qr.js',
})(markdown(components)`

Trinity supports a JSON format for transaction information. This information can be encoded into a QR code for scanning and auto-filling of transaction information.
While Trinity currently does not support amounts and tags in QR codes, you can add it to your codes anyway. They will not affect the amounts and tags set by Trinity or the user.

The general structure of your JSON object can look like this:

${<Code>{`const object = {
    'address': "HBBYKAKTILIPVUKFOTSLHGENPTXYBNKXZFQFR9VQFWNBMTQNRVOUKPVPRNBSZVVILMAFBKOTBLGLWLOHQHUSQBCKVW",
    'amount': 5000000,
    'tag': "PIZZAPIZZA",
    'message': "For the pizza!"
}`}</Code>}

${<InputTable>
  <Row>
    <BoldCell>address</BoldCell>
    <TypeCell>String</TypeCell>
    <BooleanCell status={true} />
    <Cell>The address you want the user to send to. You must include the 9-character address checksum.</Cell>
  </Row>
  <Row>
    <BoldCell>amount</BoldCell>
    <TypeCell>integer</TypeCell>
    <BooleanCell status={false} />
    <Cell>The amount you want the user to send. It should be in iota (example: 5Mi should be entered as <InlineCode>5000000</InlineCode>)</Cell>
  </Row>
  <Row>
    <BoldCell>tag</BoldCell>
    <TypeCell>String</TypeCell>
    <BooleanCell status={false} />
    <Cell>A tag that can be used to search for the transaction in the Tangle. The limit is 27 trytes.</Cell>
  </Row>
  <Row>
    <BoldCell>message</BoldCell>
    <TypeCell>String</TypeCell>
    <BooleanCell status={false} />
    <Cell>A message that can be shown to the user or used to track the transaction with an internal ID. The message should be shown as a string of ASCII characters and should be encoded to trytes by the wallet.</Cell>
  </Row>
</InputTable>}

To encode the QR code, Trinity uses [react-native-qrcode-svg](https://github.com/awesomejerry/react-native-qrcode-svg). Here's an example of how to generate your QR code in a React-based project with ${<InlineCode>react-native-qrcode-svg</InlineCode>} using the example object above:

${<Code>{`
  <QRCode
    value={JSON.stringify(object)}
    size={width / 2.8}
    color="black"
    backgroundColor="transparent"
  />
`}</Code>}

`)
