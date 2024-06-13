import { LockOutlined, MobileOutlined } from "@ant-design/icons";
import {
  LoginForm,
  ProConfigProvider,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from "@ant-design/pro-components";
import { message, theme } from "antd";
import styles from "./index.module.scss";

const Login = () => {
  const { token } = theme.useToken();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>123</h1>
      </div>
      <ProConfigProvider hashed={false}>
        <div style={{ backgroundColor: token.colorBgContainer }}>
          <LoginForm
            logo="http://localhost:3000/aws/file/icon.jpg"
            title="Ryan's online edu platform"
          >
            <>
              <ProFormText
                fieldProps={{
                  size: "large",
                  prefix: <MobileOutlined className={"prefixIcon"} />,
                }}
                name="mobile"
                placeholder={"手机号"}
                rules={[
                  {
                    required: true,
                    message: "请输入手机号！",
                  },
                  {
                    pattern: /^1\d{10}$/,
                    message: "手机号格式错误！",
                  },
                ]}
              />
              <ProFormCaptcha
                fieldProps={{
                  size: "large",
                  prefix: <LockOutlined className={"prefixIcon"} />,
                }}
                captchaProps={{
                  size: "large",
                }}
                placeholder={"请输入验证码"}
                captchaTextRender={(timing, count) => {
                  if (timing) {
                    return `${count} ${"获取验证码"}`;
                  }
                  return "获取验证码";
                }}
                name="captcha"
                rules={[
                  {
                    required: true,
                    message: "请输入验证码！",
                  },
                ]}
                onGetCaptcha={async () => {
                  message.success("获取验证码成功！验证码为：1234");
                }}
              />
            </>

            <div
              style={{
                marginBlockEnd: 24,
              }}
            >
              <ProFormCheckbox noStyle name="autoLogin">
                自动登录
              </ProFormCheckbox>
              <a
                style={{
                  float: "right",
                }}
              >
                忘记密码
              </a>
            </div>
          </LoginForm>
        </div>
      </ProConfigProvider>
    </div>
  );
};

export default Login;
