import React from 'react'
import CodeView from '../../../code-view'
import Highlight from 'react-highlight'
import Title from '../../title.js'
import readme from './readme.md'
import { Row, Col } from 'fit-layout'
import './index.scss'

import Basic from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/basic.js'
import basicCode from 'text!./demo/basic.js'
import basicMarkdown from './demo/basic.md'

import Header from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/header.js'
import headerCode from 'text!./demo/header.js'
import headerMarkdown from './demo/header.md'

import Footer from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/footer.js'
import footerCode from 'text!./demo/footer.js'
import footerMarkdown from './demo/footer.md'

import All from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/all.js'
import allCode from 'text!./demo/all.js'
import allMarkdown from './demo/all.md'

const colStyle = {
    padding: 10
}

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        document.title = '全屏布局'
    }

    render() {
        return (
            <div className="_namespace">
                <Title>{readme}</Title>

                <Row style={colStyle}>
                    <Col style={colStyle}
                         span="12">
                        <CodeView md={basicMarkdown}
                                  code={basicCode}>
                            <Basic/>
                        </CodeView>

                        <CodeView md={footerMarkdown}
                                  code={footerCode}
                                  style={{marginTop:10}}>
                            <Footer/>
                        </CodeView>
                    </Col>

                    <Col style={colStyle}
                         span="12">
                        <CodeView md={headerMarkdown}
                                  code={headerCode}>
                            <Header/>
                        </CodeView>
                        <CodeView md={allMarkdown}
                                  code={allCode}
                                  style={{marginTop:10}}>
                            <All/>
                        </CodeView>
                    </Col>
                </Row>

            </div>
        )
    }
}