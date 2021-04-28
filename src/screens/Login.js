import React from "react"
import {
  Button,
  Card,
  CardBody,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap"
import { Mail, Lock, Check, Facebook, Twitter, GitHub } from "react-feather"
import { history } from "../utils/history"
import loginImg from "../img/login.png"

export default class Login extends React.Component {
  state = {
    activeTab: "1",
    email : "",
    password: ""
  }

  connect=async()=>{
  // if (this.props.user.status === 200) {
    history.push("/")
  // }else this.setState({errorMessage:"error passwor required"})
  }
  render() {
    return (
      <div className='app'>
        <Col
          sm="8"
          xl="7"
          lg="10"
          md="8"
          className="d-flex justify-content-center"
        >
          <Card className="bg-authentication login-card rounded-0 mb-0 w-100">
            <Row className="m-0">
              <Col
                lg="6"
                className="d-lg-block d-none text-center align-self-center px-1 py-0"
              >
                <img src={loginImg} alt="loginImg" />
              </Col>
              <Col lg="6" md="12" className="p-0">
                <Card className="rounded-0 mb-0 px-2">
                      <CardBody>
                        <h4>Login</h4>
                        <p>Welcome back, please login to your account.</p>
                        <Form onSubmit={e => e.preventDefault()}>
                          <FormGroup className="form-label-group position-relative has-icon-left">
                            <Input
                              type="email"
                              placeholder="Email"
                              value={this.state.email}
                              onChange={e => this.setState({ email: e.target.value })}
                            />
                            <span className="text-danger">{this.state.errorMessage}</span>
                            <div className="form-control-position">
                              <Mail size={15} />
                            </div>
                            <Label>Email</Label>
                          </FormGroup>
                          <FormGroup className="form-label-group position-relative has-icon-left">
                            <Input
                              type="password"
                              placeholder="Password"
                              value={this.state.password}
                              onChange={e => this.setState({ password: e.target.value })}
                            />
                            <span className="text-danger">{this.state.errorMessage}</span>
                            <div className="form-control-position">
                              <Lock size={15} />
                            </div>
                            <Label>Password</Label>
                          </FormGroup>
                          <FormGroup className="d-flex justify-content-between align-items-center">
                            <div className="float-right">
                              Forgot Password?
                            </div>
                          </FormGroup>
                          <div className="d-flex justify-content-between">
                            <Button.Ripple color="primary" type="submit" onClick={this.connect}>
                                Login 
                            </Button.Ripple>
                          </div>
                        </Form>
                      </CardBody>
                      <div className="auth-footer">
                        <div className="divider">
                          <div className="divider-text">OR</div>
                        </div>
                        <div >
                          <Button.Ripple className="btn-facebook" color="red">
                            <Facebook size={14} />
                          </Button.Ripple>
                          <Button.Ripple className="btn-twitter" color="">
                            <Twitter size={14} stroke="white" />
                          </Button.Ripple>
                          <Button.Ripple className="btn-github" color="">
                            <GitHub size={14} stroke="white" />
                          </Button.Ripple>
                        </div>
                      </div>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </div>
    )
  }
}


