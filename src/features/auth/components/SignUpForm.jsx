import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { signUpSchema } from "../schemas/auth.schema";

export const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    console.log("Login data:", data);
  };

  return (
    <div className="w-full max-w-md rounded-2xl border border-black bg-white p-8">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-black">
          Sign Up
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Sign Up to continue to your AI Document Assistant.
        </p>
      </div>
      <div className="space-y-5">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-black"
          >
            Name
          </label>

          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            {...register("name")}
            className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-black outline-none transition placeholder:text-gray-400
          ${
            errors.name
              ? "border-red-500"
              : "border-gray-300 focus:border-black"
          }`}
          />

          {errors.name && (
            <p className="mt-1.5 text-xs text-red-500 ">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-black"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-black outline-none transition placeholder:text-gray-400
          ${
            errors.email
              ? "border-red-500"
              : "border-gray-300 focus:border-black"
          }`}
          />

          {errors.email && (
            <p className="mt-1.5 text-xs text-red-500 ">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-black"
          >
            Password
          </label>

          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password")}
              className={`w-full rounded-lg border bg-white px-4 py-3 pr-12 text-sm text-black outline-none transition placeholder:text-gray-400
            ${
              errors.password
                ? "border-red-500"
                : "border-gray-300 focus:border-black"
            }`}
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-black cursor-pointer"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
            </button>
          </div>

          {errors.password && (
            <p className="mt-1.5 text-xs text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-black"
          >
            Confirm Password
          </label>

          <div className="relative">
            <input
              id="confirmPassword"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password to confirm"
              {...register("confirmPassword")}
              className={`w-full rounded-lg border bg-white px-4 py-3 pr-12 text-sm text-black outline-none transition placeholder:text-gray-400
            ${
              errors.confirmPassword
                ? "border-red-500"
                : "border-gray-300 focus:border-black"
            }`}
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-black cursor-pointer"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
            </button>
          </div>

          {errors.confirmPassword && (
            <p className="mt-1.5 text-xs text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* SignUp Button */}
        <button
          type="button"
          onClick={handleSubmit(onSubmit)}
          disabled={isSubmitting}
          className="w-full rounded-lg bg-black px-4 py-3 text-sm font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
        >
          {isSubmitting ? "Signing in..." : "Sign up"}
        </button>
      </div>
    </div>
  );
};

