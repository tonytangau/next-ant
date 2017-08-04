import React from 'react'
import moment from 'moment'
import Head from 'next/head'
import { LocaleProvider, Radio, Calendar, Slider } from 'antd'

import enUS from 'antd/lib/locale-provider/en_US'
import frFR from 'antd/lib/locale-provider/fr_FR'

export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      locale: enUS,
      calendarOpacity: 1
    }
  }

  updateLocale = (e) => {
    this.setState({ locale: e.target.value })
  }

  onSliderChange = (val) => {
    this.setState({ calendarOpacity: 1 - val / 100 })
  }

  render () {
    return (
      <div style={{ paddingTop: 80, textAlign: "center" }}>
        <Head>
          <title>Next.js with Ant Design</title>
          <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/antd/2.9.3/antd.min.css' />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Radio.Group defaultValue={enUS} onChange={this.updateLocale}>
          <Radio.Button key="en" value={enUS}>English</Radio.Button>
          <Radio.Button key="fr" value={frFR}>French</Radio.Button>
          <Radio.Button key="cn" >中文</Radio.Button>
        </Radio.Group>

        <LocaleProvider locale={this.state.locale}>
            <div>
              <div style={{ width: 320, border: '1px solid #d9d9d9', borderRadius: 4, margin: '100px auto 0', opacity: this.state.calendarOpacity }}>
                <Calendar fullscreen={false} value={moment()} />
              </div>
              <h3 style={{ marginTop: 80 }}>Calendar Opacity</h3>
              <Slider onChange={this.onSliderChange} style={{ width: 320, margin: '0 auto' }} />
            </div>
        </LocaleProvider>
      </div>
    )
  }
}
