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
       <div id="background" class="absolute w-full h-[350px] top-0 -z-10 bg-[#9FDDFF]"></div>
      <section className="min-h-screen flex items-center justify-center">
          <Row className="bg-white flex rounded-2xl  max-w-3xl p-5 items-center">
              <Col md={12} className="px-5">
                  <Title className="font-bold text-2xl">Login</Title>
                  <Paragraph className="text-xs font-[Inter]">Jika anda sudah menjadi member, ayo login dengan mudah</Paragraph>

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
                        <Input className="p-2 font-[Inter] rounded-xl border w-full" type="email" placeholder="Email"/>
                    </Form.Item>
                    <Form.Item
                      name="password"    
                      rules={[
                          {required: true, message: "Password Wajib Diisi"}
                      ]}
                    >
                      <div className="relative">
                          <Input className="p-2 font-[Inter] rounded-xl border w-full" type="password" placeholder="Password"/>
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
                      className="bg-[#606DE5] rounded-xl text-white py-2 hover:scale-105 duration-300"
                    >
                        Login
                    </button>
                  </Form>
                  <div className="mt-5 text-xs border-b border-[#606DE5] py-4 text-[#606DE5]">
                      <a href="#" className="text-sm font-[Inter]">Lupa password?</a>
                  </div>

                  <div className="mt-3 text-xs flex justify-between items-center text-[#606DE5]">
                      <Paragraph className="font-[Inter] mt-3">Belum punya akun?</Paragraph>
                      <Button onClick={()=>navigate('/auth/register')} className="py-2 px-5 bg-white border rounded-lg hover:bg-[#606DE5] duration-300 font-[Inter]">Register</Button>
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