import type { NextPage } from 'next'
import { useEffect } from 'react'
import MBtn from '@/components/custom/MBtn'
import MInput from '@/components/custom/MInput'
import { useForm, Controller } from 'react-hook-form'

const Login: NextPage = () => {
  // should Import at client side only
  useEffect(() => {
    import('@lottiefiles/lottie-player')
  })

  // React hook form
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: 'abc123@ggmail.com',
      password: 'abc123'
    }
  })

  const onSubmit = data =>
    console.log('萬歲拿到資料啦，甚至連useState都不用寫，我去', data)

  return (
    /** Page Root */
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      {/** Container  */}
      <div className="container mx-auto flex min-h-screen items-center justify-center  p-5">
        {/** LoginCard  */}
        <div className="grid w-full grid-cols-2 rounded-lg bg-white">
          {/** 50% left  */}
          <div className="flex grid-rows-1 items-center justify-center">
            {/** player   */}
            <lottie-player
              autoplay
              loop
              mode="normal"
              src="https://assets7.lottiefiles.com/packages/lf20_yupefrh2.json"
              style={{ width: '100%', height: '600px' }}
            ></lottie-player>
          </div>

          {/** 50% right */}
          <div className="flex grid-rows-1 items-center justify-center">
            {/* Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex w-80 flex-col gap-5"
            >
              {/** Title */}
              <h1 className="mb-10 text-center text-lg font-bold">登入</h1>
              {/** Input email */}
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <MInput {...field} type="email" placeholder="電子郵件" />
                )}
              />

              {/** Input password */}
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <MInput {...field} type="password" placeholder="密碼" />
                )}
              />

              {/** submit  */}
              <MBtn type="submit" className="mt-8">
                送出
              </MBtn>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
