import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { EyeOff, FilledCheckbox, HarvestLogo, Message } from "@components/Global/Icon";
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

  const onSubmit = (data: UserData) => {
    console.log(data);
    navigate("/dashboard");
  };
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const selectedShipping = watch("shippingTerm");
  const termOptions = [{ id: "shipping", label: "Remember me" }];

  const adminOnClick = () => {
    navigate("/dashboard");
  };

  return (
    <div className="bg-[var(--color-bg-light-gray)]">
      <div className="container roumded-24 lg:pt-14 lg:pb-20 py-10 px-2.5 grid grid-cols-2 gap-5  h-screen">
        <div className="bg-[#1A25AB]  rounded-20 p-12 text-center flex flex-col justify-between items-center text-white h-full">
          <div>
            <Link to="/">
              <ReactSVG src={HarvestLogo} />
            </Link>
          </div>
          <div>
            <h3 className="!text-white">HVAC System Management Dashboard</h3>
            <p>
              Sign in to manage system operations, user roles, and
              configurations.
            </p>
          </div>
          <div>
            <p>Authorized personnel only. All activities are monitored.</p>
          </div>
        </div>
        <div className=" rounded-20 bg-white px-17 h-full flex flex-col justify-center">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
            <h2 className="text-center">Sign In</h2>

            <div className="w-full relative text-[14px]">
              <label className="font-semibold mb-2 block">Email</label>
              <img src={Message} alt="" className="absolute left-3 bottom-3" />
              <input
                placeholder="Jaygerber@harvestintegreated.com"
                className="w-full border p-2 rounded-6 border-[var(--color-border-gray)] pl-10"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="w-full relative">
              <label className="font-semibold">Password</label>
              <img
                src={EyeOff}
                alt="toggle password"
                className="absolute left-3 bottom-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="•••••••••••••••••••••"
                className="w-full border p-2 rounded-6 border-[var(--color-border-gray)] pl-10"
                {...register("password", {
                  required: "Password is required",
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="pb-3">
              <div className="flex flex-col gap-6">
                {termOptions.map((option) => (
                  <label
                    key={option.id}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value={option.id}
                      {...register("shippingTerm", { required: true })}
                      className="hidden"
                    />
                    <span className="w-5 h-5 flex items-center justify-center">
                      {selectedShipping === option.id ? (
                        <img src={FilledCheckbox} className="w-5 h-5" />
                      ) : (
                        <img
                          src={FilledCheckbox}
                          alt="not selected"
                          className="w-5 h-5"
                        />
                      )}
                    </span>
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
              {errors.shippingTerm && (
                <p className="text-red-500 text-sm">
                  Please select a shipping option
                </p>
              )}
              <p>Save my login details for next time.</p>
            </div>


            <Link
              to="/dashboard"
              className="!w-full text-white py-3 items-center rounded-6 font-semibold flex gap-2 justify-center bg-[var(--color-bg-blue)] text-center "
            >
              <LogIn size={18} color="white" />
              Login
            </Link>
            <p className="text-center text-[20px]">Terms of Use Privacy Policy</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;