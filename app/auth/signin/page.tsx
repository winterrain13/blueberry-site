
"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-6">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">로그인</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
          <button type="submit" className="w-full py-2 bg-green-600 text-white rounded">
            로그인
          </button>
        </form>
      </div>
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md text-center">
        <p className="mb-4 text-gray-600">소셜 계정으로 로그인</p>
        <div className="space-y-2">
          <button onClick={() => signIn("google")} className="w-full py-2 bg-red-500 text-white rounded">Google로 로그인</button>
          <button onClick={() => signIn("naver")} className="w-full py-2 bg-green-500 text-white rounded">Naver로 로그인</button>
          <button onClick={() => signIn("kakao")} className="w-full py-2 bg-yellow-400 text-black rounded">Kakao로 로그인</button>
        </div>
      </div>
    </div>
  );
}
