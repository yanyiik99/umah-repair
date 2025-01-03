import { EyeFilled} from "@ant-design/icons";
import { Col, Form, Input, Row, Typography } from "antd"
import BannerUser from '../../assets/banner-auth-user.jpg';
import { useNavigate } from "react-router-dom";
const { Title, Paragraph} = Typography;
import { AuthContext } from "../../providers/AuthProvider";
import { sendData } from "../../utils/api";
import { useNotification } from "../../components/NotificationContext";
import { useContext, useState } from "react";


const LoginAdmin = () => {
  const navigate = useNavigate();
  const showAlert = useNotification();
  const [form] = Form.useForm();
  // Provider login hooked
  const {login, isLoggedIn} = useContext(AuthContext);
  const [isUnauthorized, setIsUnauthorized] = useState(false);

  const handleSubmitLogin = async () => {
    let email = form.getFieldValue("email");
    let password = form.getFieldValue("password");

    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    sendData('/api/v1/auth/admin/login', formData)
      .then((resp) => {
        if(resp?.access_token){
          login(resp?.access_token);
        }else{
          setIsUnauthorized(true);
          failedLogin();
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
                  <Title className="font-bold text-2xl text-[#002D74]">Login Admin</Title>

                  <Form  
                      requiredMark={true} 
                      form={form}  
                      className="flex flex-col gap-4"
                  >
                      <Form.Item 
                          name="email"    
                          rules={[
                              {required: true, message: "Nama Penerima Wajib Diisi"}
                          ]}>
                          <Input className="p-2 mt-8 rounded-xl border" type="email" placeholder="Email"/>
                      </Form.Item>
                      <Form.Item
                        name="password"    
                        rules={[
                            {required: true, message: "Nama Penerima Wajib Diisi"}
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
                        className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
                          Login
                      </button>
                  </Form>

              </Col>

              
              <Col md={12} className="md:block hidden">
                  <img className="rounded-2xl" src={BannerUser} />
              </Col>
          </Row>
      </section>
    </div>
  )
}

export default LoginAdmin