'use client'

import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  async function handleKakaoLogin() {
    const supabase = createClient()
    await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    })
  }

  return (
    <div className="flex min-h-full flex-col items-center justify-center bg-zinc-50 dark:bg-black">
      <div className="flex w-full max-w-sm flex-col items-center gap-8 px-6">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            LiftLog
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            운동 기록을 시작해보세요
          </p>
        </div>

        <button
          onClick={handleKakaoLogin}
          className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#FEE500] px-5 py-3.5 text-sm font-semibold text-[#191919] transition-opacity hover:opacity-90 active:opacity-80"
        >
          <KakaoIcon />
          카카오로 시작하기
        </button>
      </div>
    </div>
  )
}

function KakaoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0.5C4.029 0.5 0 3.638 0 7.5c0 2.494 1.648 4.683 4.138 5.944L3.1 17.1a.3.3 0 0 0 .461.316L8.34 14.07c.217.016.436.024.66.024 4.971 0 9-3.138 9-7s-4.029-7-9-7z"
        fill="#191919"
      />
    </svg>
  )
}
