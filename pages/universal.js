import Head from 'next/head'
import Link from 'next/link'
import { Icon } from 'antd'

export default class extends React.Component {
  static getInitialProps({ req }) {
    return {
      serverRendered: !!req? 'Server': 'Client'
    }
  }

  render() {
    return (
      <div style={{ paddingTop: 150, textAlign: "center" }}>
        <Head>
          <title>Universal JS</title>
          <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/antd/2.9.3/antd.min.css' />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <h1>Welcome to Universal - {this.props.serverRendered}</h1>
        <Link href="/">
          <Icon type="left-square-o" style={{ fontSize: 20, cursor: 'pointer', marginTop: 30 }}>Home</Icon>
        </Link>
      </div>
    )
  }
}
