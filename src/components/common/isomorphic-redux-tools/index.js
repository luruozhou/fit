
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/common/isomorphic-redux-tools/readme.md'
                import '../../../../lib/common/isomorphic-redux-tools/demo'

                const store = createStore()

                
                        import connectSource from '../../../../lib/common/isomorphic-redux-tools/src/connect/index.tsx'
                        import connectSourceCode from 'text!../../../../lib/common/isomorphic-redux-tools/src/connect/index.tsx'
                        
                        import promiseMiddlewareSource from '../../../../lib/common/isomorphic-redux-tools/src/promise-middleware/index.tsx'
                        import promiseMiddlewareSourceCode from 'text!../../../../lib/common/isomorphic-redux-tools/src/promise-middleware/index.tsx'
                        
                        import ralSource from '../../../../lib/common/isomorphic-redux-tools/src/ral/index.tsx'
                        import ralSourceCode from 'text!../../../../lib/common/isomorphic-redux-tools/src/ral/index.tsx'
                        
                        import serverRenderSource from '../../../../lib/common/isomorphic-redux-tools/src/server-render/index.tsx'
                        import serverRenderSourceCode from 'text!../../../../lib/common/isomorphic-redux-tools/src/server-render/index.tsx'
                        

                
                        import BasicComponent from 'react-hot-loader!ts-loader!../../../../lib/common/isomorphic-redux-tools/demo/lists/basic.tsx'
                        import BasicCode from 'text!../../../../lib/common/isomorphic-redux-tools/demo/lists/basic.tsx'
                        import BasicMarkdown from '../../../../lib/common/isomorphic-redux-tools/demo/lists/basic.md'
                        

                const colStyle = {
                    padding: 10
                }

                const docStyle = {
                    margin: 10,
                    background: 'white'
                }

                export default class DemoBox extends React.Component {
                    constructor(props) {
                        super(props)
                        this.state = {
                            page: 'demo'
                        }
                        document.title = '同构'
                    }

                    handlePageChange(value) {
                        this.setState({
                            page: value
                        })
                    }

                    render() {
                        let Content = null

                        switch (this.state.page) {
                        case 'demo':
                            Content = (
                                <Row>
                                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={BasicMarkdown}
                                      code={BasicCode}
                                      npmName="fit-isomorphic-redux-tools">

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                        <div style={docStyle}>
                            <CodeDoc code={connectSourceCode} instance={connectSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={promiseMiddlewareSourceCode} instance={promiseMiddlewareSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={ralSourceCode} instance={ralSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={serverRenderSourceCode} instance={serverRenderSource} />
                        </div>
                        
                                </div>
                            )
                            break
                        }

                        return (
                            <div className="_namespace">
                                <Layout>
                                    <Section>
                                        <Title>{readme}</Title>
                                        <ScrollListenBox store={store}>
                                            {Content}
                                        </ScrollListenBox>
                                    </Section>
                                    <Sidebar direction="right"
                                             width={120}>
                                        <SidebarComponent gitlabUrl="http://gitlab.baidu.com/tb-component/isomorphic-redux-tools/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                