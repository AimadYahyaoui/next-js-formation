"use client";
import InputText from "@/components/ui/inputText/InputText";
import loginSchema from "@/schemas/login.schema";
import { Button } from "primereact/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useHookFormAction } from "@next-safe-action/adapter-react-hook-form/hooks";
import { login } from "@/actions/login";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const {
    form: {
      register,
      formState: { errors },
    },
    handleSubmitWithAction,
    resetFormAndAction,
  } = useHookFormAction(login, zodResolver(loginSchema), {
    actionProps: {
      onSuccess: () => {
        window.alert("Logged in successfully!");
        resetFormAndAction();
        router.push("/dashboard");
      },
    },
  });

  return (
    <div className="flex align-items-center justify-content-center">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
          <img
            src="/demo/images/blocks/logos/hyper.svg"
            alt="hyper"
            height={50}
            className="mb-3"
          />
          <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
          <span className="text-600 font-medium line-height-3">
            Don&apos;t have an account?
          </span>
          <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">
            Create today!
          </a>
        </div>

        <form onSubmit={handleSubmitWithAction}>
          <label htmlFor="email" className="block text-900 font-medium mb-2">
            Email
          </label>
          <InputText
            type="text"
            placeholder="Email address"
            className="w-full mb-3"
            {...register("email")}
          />

          <label htmlFor="password" className="block text-900 font-medium mb-2">
            Password
          </label>
          <InputText
            type="password"
            placeholder="Password"
            className="w-full mb-3"
            {...register("password")}
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}

          <div className="flex align-items-center justify-content-between mb-6">
            <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">
              Forgot your password?
            </a>
          </div>

          <Button label="Sign In" icon="pi pi-user" className="w-full" />
        </form>
      </div>
    </div>
  );
};

export default Page;
