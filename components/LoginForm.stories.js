import LoginForm from "./LoginForm";

export default {
  title: "Login Form",
  decorators: [() => '<div class="w-48 m-4"><story /></div>']
};

export const Login = () => ({
  components: { LoginForm },
  template: "<LoginForm />"
});
