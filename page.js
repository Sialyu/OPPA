import { Layout, Menu, Breadcrumb, Row, Col,Input ,Radio ,Button  } from 'antd';
import React from 'react';
const { Header, Content, Footer } = Layout;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export default class Page extends React.Component{
	constructor(){
		super();
		this.state = {
			showResult:false,//控制页面是否显示结果
			age:'',
		};
		this.inputValue = '';
		this.gender = 'male';
	}
	//输入处理函数
	onChangeInput = (e)=>{
		const {value} = e.target;
		this.inputValue = value;
	}
	//处理性别选择
	onChangeGender = (e)=>{
		const {value} = e.target;
		this.gender = value;
	}
	//输入年龄处理函数
	onChangeAge = (e)=>{
		const {value} = e.target;
		const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
    if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
    	console.log(parseInt(value))
    	this.setState({age:value});
    }
	}
	//提交
	handleCommit = ()=>{
		var param = {
			input:this.inputValue.split(','),
			age:isNaN(parseInt(this.state.age))?0:parseInt(this.state.age),
			gender:this.gender
		};
		console.log('commit:',param);
		this.setState({showResult:true});
	}
	renderContent = ()=>{
			return( 
				<div>
				  <Row className="rowSpace" type="flex" justify="center">
				 		<Col span={4}><div style={{paddingRight:12,fontSize:16,height:32,lineHeight:'32px',textAlign:'right'}}>input:</div></Col>
			      <Col span={4}><Input placeholder="type something" onChange={this.onChangeInput}/></Col>
			      <Col span={6}><div style={{paddingLeft:12,fontSize:16,height:32,lineHeight:'32px'}}>Please use commas to separate</div></Col>
			    </Row>
			    <Row className="rowSpace" type="flex" justify="center">
			    	<Col span={4}><div style={{paddingRight:12,fontSize:16,height:32,lineHeight:'32px',textAlign:'right'}}>gender:</div></Col>
			      <Col span={4}>
			      	<RadioGroup onChange={this.onChangeGender} defaultValue="male">
				        <RadioButton value="male">male</RadioButton>
				        <RadioButton value="female">female</RadioButton>
				      </RadioGroup></Col>
			      <Col span={6}><div style={{paddingLeft:12,fontSize:16,height:32,lineHeight:'32px'}}>Please choose gender</div></Col>
			    </Row>
			    <Row className="rowSpace" type="flex" justify="center">
				 		<Col span={4}><div style={{paddingRight:12,fontSize:16,height:32,lineHeight:'32px',textAlign:'right'}}>age:</div></Col>
			      <Col span={2}>
			      	<Input 
			      		value={this.state.age.toString()}
			      		placeholder="age" 
			      		onChange={this.onChangeAge} 
          			maxLength="3"/>
          	</Col>
			      <Col span={2} />
			      <Col span={6}><div style={{paddingLeft:12,fontSize:16,height:32,lineHeight:'32px'}}>Please input age</div></Col>
			    </Row>
			    <Row className="rowSpace" type="flex" justify="center">
				 		<Col span={6} ><Button className="centerChild" type="primary" onClick={this.handleCommit}>Commit</Button></Col>
			    </Row>
			    {this.renderResult()}
				</div>
				)
	}
	renderResult = ()=>{
		if(this.state.showResult){
			return(
					<Row className="rowSpace" type="flex" justify="center">
				 		<Col span={6}><div style={{paddingRight:12,fontSize:16,height:32,lineHeight:'32px',textAlign:'left'}}>This is the result</div></Col>
			    </Row>)
		}
	}

	render(){
		return(
	<Layout className="layout">
    <Header>
      <div className="logo" >LOGO</div>
    </Header>
    <Content style={{ padding: '0 50px' }}>
    	<div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
      	{this.renderContent()}
    	</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Happy Birthday!
    </Footer>
  </Layout>)
	}

}