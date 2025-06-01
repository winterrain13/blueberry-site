'use client'

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function UploadPage() {
  const sessionData = useSession()
  const router = useRouter()
  const email = sessionData?.data?.user?.email || ""
  const isAdmin = email === "admin@blueberry.com"

  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")

  useEffect(() => {
    if (!isAdmin) {
      router.push("/")
    }
  }, [isAdmin, router])

  const handleUpload = () => {
    alert("작품이 업로드되었습니다! (데모용)")
    setTitle("")
    setAuthor("")
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">작품 업로드</h1>
      <Input placeholder="작품 제목" value={title} onChange={(e) => setTitle(e.target.value)} className="mb-2" />
      <Input placeholder="작가명" value={author} onChange={(e) => setAuthor(e.target.value)} className="mb-2" />
      <Textarea placeholder="작품 설명 (선택)" className="mb-4" />
      <Button onClick={handleUpload}>업로드</Button>
    </div>
  )
}
