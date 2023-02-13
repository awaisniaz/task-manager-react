import { Link } from 'react-router-dom';
import './styles.css'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    password: string
    cpassword: string
};

const ForgetPassword = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => { alert("I am Awais Niaz"); }

    return (
        <>
            <div className='login-screen'>
                <img src={'data:image/png;base64,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'} alt='login-icon'></img>
                <div className='login-container'>
                    <h3 className='login-title'>Forgot Password?</h3>
                    <p className='login-subtitle'>Enter your email to get a password reset link</p>
                    <div className='flex flex-col mt-4 w-w-4/4'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex flex-col gap-y-2 mt-4 '>
                                <div className='flex justify-between items-center'><p>Password</p> </div>
                                <input type="password" autoComplete='current-password' {...register("password")} className='h-12 rounded-md border-2 outline-none p-2' required={true} />
                                {errors.password && <span>This field is required</span>}
                            </div>
                            <div className='flex flex-col gap-y-2 mt-4 '>
                                <div className='flex justify-between items-center'><p>Confirm Password</p> </div>
                                <input type="password" autoComplete='current-password' {...register("cpassword")} className='h-12 rounded-md border-2 outline-none p-2' required={true} />
                                {errors.cpassword && <span>This field is required</span>}
                            </div>
                            <input type="submit" name='Reset Password' className='mt-5 rounded-sm border-0 login-btn cursor-pointer' ></input>
                        </form>
                        <div className='flex justify-center'>
                            <p>Remember your password? <Link to='/login' className="text-blue-500 font-bold">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ForgetPassword
