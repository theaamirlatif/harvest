import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import {
  EyeOff,
  FilledCheckbox,
  HarvestLogo,
  Message,
} from "@components/Global/Icon";
import { LogIn } from "lucide-react";

type UserData = {
  username: string;
  email: string;
  password: string;
};

const Signin: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserData>();

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const selectedShipping = watch("shippingTerm");
  const termOptions = [{ id: "shipping", label: "Remember me" }];

  const onSubmit = (data: UserData) => {
    console.log(data);
    navigate("/dashboard");
  };

  return (
    <div className="bg-[var(--color-bg-light-gray)] min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-6xl my-4 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-5 bg-white lg:bg-transparent shadow-lg">
        {/* Left Panel */}
        <div className="bg-[#1A25AB] text-white flex flex-col justify-between p-8 sm:p-10 md:p-12 lg:p-14 h-full">
          <div className="mb-8">
            <Link to="/" className="flex justify-center items-center mb-20">
              <ReactSVG src={HarvestLogo} />
            </Link>
            <p className="text-xl text-center md:text-2xl hidden lg:block font-semibold mb-2">
              HVAC System Management Dashboard
            </p>
            <p className="text-sm text-center md:text-base hidden lg:block">
              Sign in to manage system operations, user roles, and configurations.
            </p>
          </div>
          <p className="text-xs md:text-sm text-center mt-auto">
            Authorized personnel only. All activities are monitored.
          </p>
        </div>

        {/* Right Panel */}
        <div className="p-6 sm:p-10 md:p-12 flex flex-col justify-center">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <h2 className="text-center text-xl font-bold mb-2">Sign In</h2>

            {/* Email */}
            <div className="relative text-sm">
              <label className="font-medium mb-1 block">Email</label>
              <img src={Message} alt="" className="absolute left-3 bottom-3" />
              <input
                placeholder="Jaygerber@harvestintegreated.com"
                className="w-full border p-2.5 rounded-md border-[var(--color-border-gray)] pl-10"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="relative text-sm">
              <label className="font-medium block">Password</label>
              <img
                src={EyeOff}
                alt="toggle password"
                className="absolute left-3 bottom-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="•••••••••••••••••••••"
                className="w-full border p-2.5 rounded-md border-[var(--color-border-gray)] pl-10"
                {...register("password", {
                  required: "Password is required",
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Checkbox */}
            <div className="text-sm">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={termOptions[0].id}
                  {...register("shippingTerm", { required: true })}
                  className="hidden"
                />
                <span className="w-5 h-5 flex items-center justify-center">
                  {selectedShipping === termOptions[0].id ? (
                    <img src={FilledCheckbox} className="w-5 h-5" />
                  ) : (
                    <img src={FilledCheckbox} className="w-5 h-5 opacity-50" />
                  )}
                </span>
                <span>{termOptions[0].label}</span>
              </div>
              {errors.shippingTerm && (
                <p className="text-red-500 text-xs mt-1">
                  Please select a shipping option
                </p>
              )}
              <p className="text-xs mt-1">Save my login details for next time.</p>
            </div>

            {/* Submit Button */}
            <Link
              to="/dashboard"
              className="w-full text-white py-3 rounded-md font-semibold flex gap-2 justify-center bg-[var(--color-bg-blue)] hover:opacity-90 transition"
            >
              <LogIn size={18} color="white" />
              Login
            </Link>

            <p className="text-center text-xs sm:text-sm mt-4">
              Terms of Use · Privacy Policy
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
