'use client'

import { SessionProvider, useSession, signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Search, ShoppingCart, Heart, Bell } from "lucide-react"

export default function HomePage() {
  return (
    <SessionProvider>
      <Home />
    </SessionProvider>
  )
}

function Home() {
  const { data: session } = useSession()
  const nickname = session?.user?.name || "회원"
  const email = session?.user?.email || ""
  const isAdmin = email === "admin@blueberry.com"

  const categories = ["전체", "로맨스", "로맨스판타지", "BL", "GL", "라이트노벨"]

  const webtoonItems = [
    {
      id: 1,
      title: "악역 영애의 집사가 되었습니다",
      author: "타나카 유우키",
      image: "/placeholder.svg?height=200&width=150",
      isFree: true,
      isNew: true,
    },
    {
      id: 2,
      title: "전생했더니 슬라임이었던 건에 대하여",
      author: "후세 미츠",
      image: "/placeholder.svg?height=200&width=150",
      isFree: true,
      isPopular: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src="/blueberry-logo.png" alt="Blueberry Logo" width={36} height={36} />
            <div className="text-xl font-bold text-blue-600">Blueberry</div>
          </div>
          {session ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-700">환영합니다, {nickname}님</span>
              <Button variant="outline" onClick={() => signOut()}>로그아웃</Button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link href="/auth/signup">
                <Button variant="outline">무료 회원가입</Button>
              </Link>
              <Link href="/auth/signin">
                <Button variant="default">로그인</Button>
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Category Tabs */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4 py-2 flex gap-4 overflow-x-auto text-sm font-medium">
          {categories.map((category, idx) => (
            <Button key={idx} variant="ghost">{category}</Button>
          ))}
          {isAdmin && (
            <Link href="/admin/upload">
              <Button variant="outline">작품 업로드</Button>
            </Link>
          )}
        </div>
      </nav>

      {/* Webtoon Grid */}
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {webtoonItems.map(item => (
            <Card key={item.id}>
              <CardContent className="flex flex-col items-center p-4">
                <Image src={item.image} alt={item.title} width={150} height={200} />
                <div className="mt-2 font-semibold">{item.title}</div>
                <div className="text-sm text-gray-500">{item.author}</div>
                <div className="mt-1 flex gap-2">
                  {item.isFree && <Badge>무료</Badge>}
                  {item.isNew && <Badge variant="secondary">신작</Badge>}
                  {item.isPopular && <Badge variant="outline">인기</Badge>}
                  {item.isHot && <Badge variant="destructive">HOT</Badge>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
