import React from 'react';
import { Button, Col, Form, Icon, Input, Row } from 'antd';
import styles from './index.less';
const FormItem = Form.Item;

@Form.create()
export default class Login extends React.Component {

    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form onSubmit={this.login} className={'loginForm'} hideRequiredMark>
                    <FormItem>
                        {getFieldDecorator('username', {
                            rules: [{ required: true }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" autoComplete="off"/>
                        )}
                    </FormItem>
                    <Row gutter={8}>
                        <Col span={12}>
                            <FormItem className='varifyCodeWrap'>
                                {getFieldDecorator('identifyingCode', {
                                    rules: [{ required: true, }],
                                })(
                                    <Input autoComplete="off"/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <div className={'varifyCodeImgWrap'}>
                                <span className={styles.varifyCode}>{ 'identityCode' || '获取失败'}</span>
                                <a onClick={this.reGetVarifyCode}><Icon type="reload" style={{padding:'0 10px'}}/></a>
                            </div>
                        </Col>
                    </Row>
                    <Button type="primary" htmlType="submit" className={styles.loginBtn} >
                        {'登录'}
                    </Button>
                </Form>
            </div>
        )
    }
}
