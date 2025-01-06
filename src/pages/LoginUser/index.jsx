import { ArrowLeftOutlined, EyeFilled, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Col, Form, Image, Input, Row, Typography } from "antd"
import BannerUser from '../../assets/banner-auth-user.jpg';
import { useNavigate } from "react-router-dom";
const { Title, Paragraph} = Typography;
import { AuthContextMember } from "../../providers/MemberProvider";
import { sendData } from "../../utils/api";
import { useNotification } from "../../components/NotificationContext";
import { useContext, useState } from "react";

const LoginUser = () => {
  const navigate = useNavigate();
  const showAlert = useNotification();
  const [form] = Form.useForm();
  // Provider login hooked
  const {loginMember, isLoggedInMember} = useContext(AuthContextMember);
  const [isUnauthorized, setIsUnauthorized] = useState(false);

  const handleSubmitLogin = async () => {
    let email = form.getFieldValue("email");
    let password = form.getFieldValue("password");

    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    sendData('/api/v1/auth/login', formData)
      .then((resp) => {
        if(resp?.access_token){
          loginMember(resp?.access_token);
        }else{
          setIsUnauthorized(true);
          showAlert('error', 'Failed to Login', 'Username or Password not Valid!')
        }
      })
      .catch((err) => {
        console.log(err);
        showAlert('error', 'Failed to Login', 'Username or Password not Valid!')
        setIsUnauthorized(true);
      })
  }

  return(
      <div
          style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          }}
    >
      <section className="min-h-screen flex items-center justify-center">
          <Row className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
              <Col md={12} className="px-8 md:px-16">
                  <Title className="font-bold text-2xl text-[#002D74]">Login</Title>
                  <Paragraph className="text-xs mt-4 text-[#002D74]">Jika anda sudah menjadi member, ayo login dengan mudah</Paragraph>

                  <Form         
                    requiredMark={true} 
                    form={form}   
                    className="flex flex-col gap-4"
                  >
                    <Form.Item 
                        name="email"    
                        rules={[
                            {required: true, message: "Email Wajib Diisi"}
                        ]}>
                        <Input className="p-2 mt-8 rounded-xl border" type="email" placeholder="Email"/>
                    </Form.Item>
                    <Form.Item
                      name="password"    
                      rules={[
                          {required: true, message: "Password Wajib Diisi"}
                      ]}
                    >
                      <div className="relative">
                          <Input className="p-2 rounded-xl border w-full" type="password" placeholder="Password"/>
                          <EyeFilled className="text-lg text-blue-700 absolute top-1/2 right-3 -translate-y-1/2" />
                      </div>
                    </Form.Item>
                    <button 
                      onClick={()=>{
                        form
                        .validateFields()
                        .then(handleSubmitLogin)
                        .catch((err) => {
                            console.log(err);
                        })
                      }}
                      className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
                    >
                        Login
                    </button>
                  </Form>

                  <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                      <hr className="border-gray-400"/>
                      <p className="text-center text-sm">OR</p>
                      <hr className="border-gray-400"/>
                  </div>

                  <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
                      <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                      </svg>
                      Login dengan Google
                  </button>

                  <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
                      <a href="#">Lupa password?</a>
                  </div>

                  <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                      <Paragraph>Belum punya akun?</Paragraph>
                      <Button onClick={()=>navigate('/auth/register')} className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Register</Button>
                  </div>
              </Col>

              
              <Col md={12} className="md:block hidden">
                  <img className="rounded-2xl" src={BannerUser} />
              </Col>
          </Row>
      </section>
    </div>
  )
}

export default LoginUser